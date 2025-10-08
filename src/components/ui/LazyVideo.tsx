import React, { useState, useRef, useCallback } from 'react';
import { useInView } from '../../hooks/useInView';
import placeholder from '../../assets/images/placeholder.jpg';

interface LazyVideoProps {
  src: string;
  thumbnail?: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  onLoad?: () => void;
  onError?: () => void;
  priority?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  poster?: string;
}

interface VideoState {
  isLoading: boolean;
  hasError: boolean;
  isLoaded: boolean;
}

const LazyVideo: React.FC<LazyVideoProps> = ({
  src,
  thumbnail,
  alt,
  className = '',
  width,
  height,
  onLoad,
  onError,
  priority = false,
  autoPlay = false,
  muted = false,
  loop = false,
  controls = true,
  poster
}) => {
  const [videoState, setVideoState] = useState<VideoState>({
    isLoading: true,
    hasError: false,
    isLoaded: false
  });
  
  const { ref, isInView } = useInView({
    threshold: 0.1,
    rootMargin: '50px'
  });
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldLoad = priority || isInView;
  const isPlaceholder = src === placeholder || src.includes('placeholder');

  const handleLoad = useCallback(() => {
    setVideoState({
      isLoading: false,
      hasError: false,
      isLoaded: true
    });
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setVideoState({
      isLoading: false,
      hasError: true,
      isLoaded: false
    });
    onError?.();
  }, [onError]);

  const containerStyles: React.CSSProperties = {
    width: width || '100%',
    height: height || '100%',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#f3f4f6',
    borderRadius: '8px'
  };

  const videoStyles: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    transition: 'opacity 0.3s ease-in-out',
    opacity: videoState.isLoaded ? 1 : 0
  };

  return (
    <div 
      ref={ref} 
      style={containerStyles}
      className={`lazy-video-container ${className}`}
    >{videoState.isLoading && !isPlaceholder && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="flex flex-col items-center space-y-4 text-gray-400">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <span className="text-sm font-medium">Cargando video...</span>
          </div>
        </div>
      )}{videoState.hasError && !isPlaceholder && (
        <div className="absolute inset-0 flex items-center justify-center bg-red-50">
          <div className="flex flex-col items-center space-y-2 text-red-400">
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" 
              />
            </svg>
            <span className="text-sm font-medium">Error al cargar video</span>
          </div>
        </div>
      )}{isPlaceholder && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
          <div className="flex flex-col items-center space-y-4 text-gray-400">
            <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1} 
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" 
              />
            </svg>
            <div className="text-center">
              <p className="text-sm font-medium">Video próximamente</p>
              <p className="text-xs opacity-70">En desarrollo</p>
            </div>
          </div>
        </div>
      )}{thumbnail && !shouldLoad && !isPlaceholder && (
        <img
          src={thumbnail}
          alt={`${alt} - preview`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'blur(2px)' }}
        />
      )}{shouldLoad && !isPlaceholder && (
        <video
          ref={videoRef}
          style={videoStyles}
          onLoadedData={handleLoad}
          onError={handleError}
          poster={poster || thumbnail}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          controls={controls}
          preload={priority ? 'auto' : 'metadata'}
          className="absolute inset-0"
        >
          <source src={src} type="video/mp4" />
          Tu navegador no soporta la reproducción de videos.
        </video>
      )}{!videoState.isLoaded && !videoState.hasError && !isPlaceholder && !autoPlay && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/50 rounded-full p-4 hover:bg-black/70 transition-colors cursor-pointer">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyVideo;
