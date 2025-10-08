import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';

interface ImageData {
  url: string;
  name?: string;
  caption?: string;
}

export interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: ImageData[];
  initialIndex: number;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  images,
  initialIndex
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setZoom(1);
      setRotation(0);
      setPosition({ x: 0, y: 0 });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialIndex]);

  const resetTransform = useCallback(() => {
    setZoom(1);
    setRotation(0);
    setPosition({ x: 0, y: 0 });
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
    resetTransform();
  }, [images.length, resetTransform]);

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    resetTransform();
  }, [images.length, resetTransform]);

  const handleZoomIn = useCallback(() => {
    setZoom(prev => Math.min(prev + 0.5, 3));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoom(prev => Math.max(prev - 0.5, 0.5));
  }, []);

  const handleRotate = useCallback(() => {
    setRotation(prev => (prev + 90) % 360);
  }, []);

  const handleClose = useCallback(() => {
    resetTransform();
    onClose();
  }, [onClose, resetTransform]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case '+':
        case '=':
          handleZoomIn();
          break;
        case '-':
          handleZoomOut();
          break;
        case 'r':
        case 'R':
          handleRotate();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, goToPrevious, goToNext, handleZoomIn, handleZoomOut, handleRotate]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
      ><div className="absolute top-4 left-4 right-4 flex justify-between items-center z-50">
          <div className="flex items-center space-x-2">
            <span className="text-white text-sm bg-black/50 px-3 py-1 rounded-full">
              {currentIndex + 1} de {images.length}
            </span>
          </div>
          
          <div className="flex items-center space-x-2"><button
              className="text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handleZoomOut();
              }}
              title="Reducir zoom"
            >
              <ZoomOut className="h-5 w-5" />
            </button>
            
            <span className="text-white text-sm bg-black/50 px-2 py-1 rounded">
              {Math.round(zoom * 100)}%
            </span>
            
            <button
              className="text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handleZoomIn();
              }}
              title="Aumentar zoom"
            >
              <ZoomIn className="h-5 w-5" />
            </button><button
              className="text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handleRotate();
              }}
              title="Rotar imagen"
            >
              <RotateCw className="h-5 w-5" />
            </button><button
              className="text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
              onClick={handleClose}
              title="Cerrar"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>{images.length > 1 && (
          <>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 transition-colors z-40"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              title="Imagen anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 transition-colors z-40"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              title="Imagen siguiente"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}<motion.div
          className="relative max-w-[90vw] max-h-[80vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            key={currentIndex}
            src={currentImage.url}
            alt={currentImage.name || `Imagen ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain cursor-move select-none"
            style={{
              transform: `scale(${zoom}) rotate(${rotation}deg) translate(${position.x}px, ${position.y}px)`,
              transition: 'transform 0.2s ease-out'
            }}
            draggable={false}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>{(currentImage.name || currentImage.caption) && (
          <motion.div
            className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm text-white p-4 rounded-lg max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {currentImage.name && (
              <h3 className="text-lg font-semibold mb-2">{currentImage.name}</h3>
            )}
            {currentImage.caption && (
              <p className="text-sm opacity-90">{currentImage.caption}</p>
            )}
          </motion.div>
        )}<div className="absolute bottom-4 right-4 text-white/60 text-xs bg-black/50 px-3 py-2 rounded">
          <div>← → Navegar | + - Zoom | R Rotar | ESC Cerrar</div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageModal;
