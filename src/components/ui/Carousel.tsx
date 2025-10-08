
import React, { useState, useEffect, useCallback } from 'react';
import LazyImage from './LazyImage';
import { createBlurDataURL } from '../../lib/imageUtils';

interface CarouselProps {
  images: { url: string; name?: string }[];
  currentIndex?: number;
  setCurrentIndex?: (idx: number) => void;
}

const Carousel: React.FC<CarouselProps> = ({ images, currentIndex, setCurrentIndex }) => {
  const [internalCurrent, setInternalCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState<Set<number>>(new Set());
  
  const current = currentIndex !== undefined ? currentIndex : internalCurrent;
  const setCurrent = setCurrentIndex || setInternalCurrent;

  
  const preloadImage = useCallback((index: number) => {
    if (index < 0 || index >= images.length || preloadedImages.has(index)) return;
    
    const img = new Image();
    img.onload = () => {
      setPreloadedImages(prev => {
        const newSet = new Set(prev);
        newSet.add(index);
        return newSet;
      });
    };
    img.onerror = () => {
      
      setPreloadedImages(prev => {
        const newSet = new Set(prev);
        newSet.add(index);
        return newSet;
      });
    };
    img.src = images[index].url;
  }, [images, preloadedImages]);

  
  useEffect(() => {
    if (images.length === 0) return;

    
    preloadImage(current);
    
    
    const nextIndex = (current + 1) % images.length;
    const prevIndex = current === 0 ? images.length - 1 : current - 1;
    
    preloadImage(nextIndex);
    preloadImage(prevIndex);
    
    
    if (images.length > 3) {
      const nextNextIndex = (current + 2) % images.length;
      setTimeout(() => preloadImage(nextNextIndex), 100);
    }
  }, [current, images.length, preloadImage]);

  
  useEffect(() => {
    if (images.length <= 3) return;

    const preloadProgressively = () => {
      images.forEach((_, index) => {
        setTimeout(() => preloadImage(index), index * 200);
      });
    };

    
    const timer = setTimeout(preloadProgressively, 1000);
    return () => clearTimeout(timer);
  }, [images, preloadImage]);

  const prev = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((typeof current === 'number' ? (current === 0 ? images.length - 1 : current - 1) : 0));
      setAnimating(false);
    }, 350);
  };
  
  const next = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((typeof current === 'number' ? (current === images.length - 1 ? 0 : current + 1) : 0));
      setAnimating(false);
    }, 350);
  };

  const goToImage = (index: number) => {
    if (animating || index === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 350);
  };

  if (images.length === 0) return null;

  return (
    <div className="relative w-full max-w-2xl mx-auto mb-8 select-none">
      <div className="relative h-72 sm:h-80 rounded-lg overflow-hidden">
        <div 
          className={`transition-all duration-500 ${animating ? 'scale-95 opacity-80' : 'scale-100 opacity-100'}`}
          style={{ width: '100%', height: '100%' }}
        >
          <LazyImage
            src={images[current].url}
            alt={images[current].name || `Imagen ${current + 1}`}
            width="100%"
            height="100%"
            className="rounded-lg"
            placeholder={createBlurDataURL(20, 15)}
            priority={current === 0} 
            objectFit="cover"
          />
        </div>{!preloadedImages.has(current) && (
          <div className="absolute inset-0 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
          </div>
        )}{images.length > 1 && (
          <>
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 text-gray-600 rounded-full p-2 hover:bg-white hover:text-gray-800 transition-all duration-200 z-20 border border-gray-200 shadow-md backdrop-blur-sm"
              onClick={prev}
              disabled={animating}
              aria-label="Imagen anterior"
              style={{ fontSize: 18 }}
            >
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 text-gray-600 rounded-full p-2 hover:bg-white hover:text-gray-800 transition-all duration-200 z-20 border border-gray-200 shadow-md backdrop-blur-sm"
              onClick={next}
              disabled={animating}
              aria-label="Imagen siguiente"
              style={{ fontSize: 18 }}
            >
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </>
        )}{images.length > 1 && (
          <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs backdrop-blur-sm">
            <span className="flex items-center gap-1">
              <div className={`w-2 h-2 rounded-full ${preloadedImages.size >= 3 ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
              {preloadedImages.size}/{images.length}
            </span>
          </div>
        )}
      </div><div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg text-sm font-medium text-gray-800 bg-white/95 max-w-[90%] text-center pointer-events-none select-text shadow-lg border border-gray-100 backdrop-blur-sm">
        <div className="truncate font-semibold">
          {images[current].name || `Imagen ${current + 1}`}
        </div>
        {images.length > 1 && (
          <div className="text-xs text-gray-500 mt-1">
            {current + 1} de {images.length}
          </div>
        )}
      </div>{images.length > 1 && (
        <div className="flex justify-center space-x-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              className={`relative h-3 rounded-full transition-all duration-300 ${
                index === current 
                  ? 'bg-green-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400 w-3'
              }`}
              onClick={() => goToImage(index)}
              disabled={animating}
              aria-label={`Ir a imagen ${index + 1}`}
            >{preloadedImages.has(index) && (
                <div className={`absolute top-0 right-0 w-1 h-1 bg-green-400 rounded-full ${
                  index === current ? 'opacity-0' : 'opacity-100'
                }`}></div>
              )}
            </button>
          ))}
        </div>
      )}<div className="hidden">
        {images.map((image, index) => {
          const isAdjacent = Math.abs(index - current) <= 1 || 
                           (current === 0 && index === images.length - 1) || 
                           (current === images.length - 1 && index === 0);
          
          return isAdjacent && index !== current ? (
            <img 
              key={`preload-${index}`}
              src={image.url} 
              alt=""
              loading="eager"
              onLoad={() => setPreloadedImages(prev => {
                const newSet = new Set(prev);
                newSet.add(index);
                return newSet;
              })}
              onError={() => setPreloadedImages(prev => {
                const newSet = new Set(prev);
                newSet.add(index);
                return newSet;
              })}
            />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Carousel;

