import { useState, useEffect, useCallback } from 'react';

interface UseImageLoaderOptions {
  src: string;
  fallbackSrc?: string;
  preload?: boolean;
}

interface ImageLoaderState {
  isLoading: boolean;
  hasError: boolean;
  isLoaded: boolean;
  currentSrc: string;
}

export const useImageLoader = ({ 
  src, 
  fallbackSrc, 
  preload = false 
}: UseImageLoaderOptions) => {
  const [state, setState] = useState<ImageLoaderState>({
    isLoading: true,
    hasError: false,
    isLoaded: false,
    currentSrc: src
  });

  const loadImage = useCallback((imageSrc: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      
      img.onload = () => {
        setState(prev => ({
          ...prev,
          isLoading: false,
          hasError: false,
          isLoaded: true,
          currentSrc: imageSrc
        }));
        resolve();
      };
      
      img.onerror = () => {
        setState(prev => ({
          ...prev,
          isLoading: false,
          hasError: true,
          isLoaded: false
        }));
        reject(new Error(`Failed to load image: ${imageSrc}`));
      };
      
      img.src = imageSrc;
    });
  }, []);

  const retryLoad = useCallback(() => {
    setState(prev => ({
      ...prev,
      isLoading: true,
      hasError: false,
      isLoaded: false
    }));
    
    loadImage(src).catch(() => {
      if (fallbackSrc) {
        loadImage(fallbackSrc).catch(() => {
        });
      }
    });
  }, [src, fallbackSrc, loadImage]);

  useEffect(() => {
    if (preload || src) {
      setState(prev => ({
        ...prev,
        isLoading: true,
        hasError: false,
        isLoaded: false
      }));

      loadImage(src).catch(() => {
        if (fallbackSrc) {
          loadImage(fallbackSrc).catch(() => {
          });
        }
      });
    }
  }, [src, fallbackSrc, preload, loadImage]);

  return {
    ...state,
    retryLoad
  };
};

export const useImagePreloader = (imageSources: string[]) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const [isAllLoaded, setIsAllLoaded] = useState(false);

  useEffect(() => {
    const preloadPromises = imageSources.map(src => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        
        img.onload = () => {
          setLoadedImages(prev => new Set(Array.from(prev).concat(src)));
          resolve();
        };
        
        img.onerror = () => {
          setFailedImages(prev => new Set(Array.from(prev).concat(src)));
          resolve();
        };
        
        img.src = src;
      });
    });

    Promise.all(preloadPromises).then(() => {
      setIsAllLoaded(true);
    });
  }, [imageSources]);

  return {
    loadedImages,
    failedImages,
    isAllLoaded,
    loadedCount: loadedImages.size,
    failedCount: failedImages.size,
    totalCount: imageSources.length
  };
};