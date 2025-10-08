import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import LazyImage from './LazyImage';
import { SkeletonImage } from './Skeleton';
import { createBlurDataURL } from '../../lib/imageUtils';

export interface GalleryImage {
  url: string;
  name?: string;
  caption?: string;
}

export interface ImageGalleryProps {
  images: GalleryImage[];
  columns?: number;
  gap?: number;
  className?: string;
  onImageClick?: (index: number) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  columns = 3,
  gap = 4,
  className = '',
  onImageClick
}) => {
  const [imageLoadStates, setImageLoadStates] = useState<boolean[]>(
    new Array(images.length).fill(false)
  );

  const handleImageLoad = useCallback((index: number) => {
    setImageLoadStates(prev => {
      const newStates = [...prev];
      newStates[index] = true;
      return newStates;
    });
  }, []);

  const handleImageClick = useCallback((index: number) => {
    onImageClick?.(index);
  }, [onImageClick]);

  if (!images || images.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No hay imágenes disponibles</p>
      </div>
    );
  }

  return (
    <div 
      className={`grid gap-${gap} ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-100 aspect-square"
          onClick={() => handleImageClick(index)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          {!imageLoadStates[index] && (
            <div className="absolute inset-0">
              <SkeletonImage />
            </div>
          )}
          
          <LazyImage
            src={image.url}
            alt={image.name || `Imagen ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            placeholder={createBlurDataURL(300, 300)}
            onLoad={() => handleImageLoad(index)}
          /><div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-3">
              {image.name && (
                <h4 className="text-white font-medium text-sm truncate">
                  {image.name}
                </h4>
              )}
              {image.caption && (
                <p className="text-white/80 text-xs mt-1 line-clamp-2">
                  {image.caption}
                </p>
              )}
            </div>
          </div><div className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGallery;
