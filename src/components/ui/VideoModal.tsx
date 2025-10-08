import React, { useState, useRef } from 'react';
import { Video } from '../../types';
import placeholder from '../../assets/images/placeholder.jpg';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  video: Video | null;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, video }) => {
  const [videoError, setVideoError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  
  if (!isOpen || !video) return null;

  const handleVideoError = () => {
    setVideoError(true);
    setIsLoading(false);
  };

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  
  const handleClose = () => {
    
    if (videoRef.current) {
      videoRef.current.pause();
    }
    onClose();
  };

  const isPlaceholder = video.url === placeholder || video.url.includes('placeholder');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><button
        className="absolute top-4 right-6 text-white hover:text-primary text-3xl font-bold z-50"
        onClick={handleClose}
        aria-label="Cerrar"
      >
        &times;
      </button><div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-auto">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-primary-dark mb-2">{video.name}</h3>
          {video.description && (
            <p className="text-muted-foreground">{video.description}</p>
          )}
        </div><div className="relative w-full bg-gray-100 rounded-lg overflow-hidden aspect-video">
          {isPlaceholder ? (
            
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 text-gray-500">
              <svg className="w-16 h-16 mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              <h4 className="text-lg font-semibold mb-2">Video en desarrollo</h4>
              <p className="text-center text-sm px-4">
                Este video estará disponible próximamente.
              </p>
            </div>
          ) : videoError ? (
            
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-50 text-red-600">
              <svg className="w-16 h-16 mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <h4 className="text-lg font-semibold mb-2">Error al cargar video</h4>
              <p className="text-center text-sm px-4">
                No se pudo cargar el video. Por favor, inténtalo más tarde.
              </p>
            </div>
          ) : (
            
            <div className="absolute inset-0"><div 
                className={`absolute inset-0 flex items-center justify-center bg-gray-100 transition-opacity duration-300 ${
                  isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                  <p className="text-gray-600">Cargando video...</p>
                </div>
              </div><video
                ref={videoRef}
                className={`w-full h-full transition-opacity duration-300 ${
                  isLoading ? 'opacity-0' : 'opacity-100'
                }`}
                controls
                onError={handleVideoError}
                onLoadedData={handleVideoLoad}
                onCanPlay={handleVideoLoad}
                style={{ objectFit: 'contain' }}
                preload="metadata"
              >
                <source src={video.url} type="video/mp4" />
                Tu navegador no soporta la reproducción de videos.
              </video>
            </div>
          )}
        </div><div className="mt-4 text-center">
          <button
            onClick={handleClose}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;

