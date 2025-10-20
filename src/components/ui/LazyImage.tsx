import React, { useState, useRef, useCallback } from 'react';
import { useInView } from '../../hooks/useInView';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  placeholder?: string;
  fallbackSrc?: string;
  onLoad?: () => void;
  onError?: () => void;
  priority?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

interface ImageState {
  isLoading: boolean;
  hasError: boolean;
  isLoaded: boolean;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  placeholder,
  fallbackSrc,
  onLoad,
  onError,
  priority = false,
  objectFit = 'cover'
}) => {
  const [imageState, setImageState] = useState<ImageState>({
    isLoading: true,
    hasError: false,
    isLoaded: false
  });
  
  const { ref, isInView } = useInView({
    threshold: 0.1,
    rootMargin: '50px'
  });
  
  const imgRef = useRef<HTMLImageElement>(null);
  const shouldLoad = priority || isInView;

  const handleLoad = useCallback(() => {
    setImageState({
      isLoading: false,
      hasError: false,
      isLoaded: true
    });
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setImageState({
      isLoading: false,
      hasError: true,
      isLoaded: false
    });
    onError?.();
    
    if (fallbackSrc && imgRef.current) {
      imgRef.current.src = fallbackSrc;
    }
  }, [onError, fallbackSrc]);

  const imageStyles: React.CSSProperties = {
    width: width || '100%',
    height: height || '100%',
    objectFit,
    transition: 'opacity 0.3s ease-in-out',
    opacity: imageState.isLoaded ? 1 : 0
  };

  const containerStyles: React.CSSProperties = {
    width: width || '100%',
    height: height || '100%',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#f3f4f6'
  };

  return (
    <div 
      ref={ref} 
      style={containerStyles}
      className={`lazy-image-container ${className}`}
    >
      {/* Skeleton/Loading state */}
      {imageState.isLoading && (
        <div 
          className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]"
          style={{
            animation: 'shimmer 1.5s infinite',
            backgroundImage: 'linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%)'
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center space-y-2 text-gray-400">
              <svg 
                className="w-8 h-8 animate-spin" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <circle 
                  cx="12" 
                  cy="12" 
                  r="10" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeDasharray="31.416" 
                  strokeDashoffset="31.416"
                  className="animate-[spin_2s_linear_infinite]"
                  style={{
                    strokeDasharray: '15.708 31.416',
                    strokeLinecap: 'round'
                  }}
                />
              </svg>
              <span className="text-xs font-medium">Cargando...</span>
            </div>
          </div>
        </div>
      )}

      {/* Error state */}
      {imageState.hasError && !fallbackSrc && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="flex flex-col items-center space-y-2 text-gray-400">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" 
              />
            </svg>
            <span className="text-xs font-medium">Error al cargar</span>
          </div>
        </div>
      )}

      {/* Placeholder image */}
      {placeholder && !shouldLoad && !imageState.hasError && (
        <img
          src={placeholder}
          alt={`${alt} - preview`}
          style={{
            ...imageStyles,
            filter: 'blur(5px)',
            opacity: 1
          }}
          className="absolute inset-0"
        />
      )}

      {shouldLoad && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          style={imageStyles}
          onLoad={handleLoad}
          onError={handleError}
          className="absolute inset-0"
          loading={priority ? 'eager' : 'lazy'}
        />
      )}
    </div>
  );
};

export default LazyImage;