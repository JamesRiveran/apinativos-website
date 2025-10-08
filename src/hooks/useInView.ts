import { useEffect, useRef, useState } from 'react';

interface useInViewOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useInView = (options: useInViewOptions = {}) => {
  const [isInView, setIsInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        
        try {
          setIsInView(entry.isIntersecting);
          if (entry.isIntersecting && !hasBeenInView) {
            setHasBeenInView(true);
          }
        } catch (error) {
          
          if (
            error instanceof Error && 
            !error.message.includes('ResizeObserver loop completed with undelivered notifications')
          ) {
            console.warn('Error in useInView observer:', error);
          }
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -100px 0px',
      }
    );

    const currentElement = ref.current;
    if (currentElement) {
      try {
        observer.observe(currentElement);
      } catch (error) {
        
        console.warn('Error observing element:', error);
      }
    }

    return () => {
      try {
        if (currentElement) {
          observer.unobserve(currentElement);
        }
        observer.disconnect();
      } catch (error) {
        
        console.warn('Error cleaning up observer:', error);
      }
    };
  }, [hasBeenInView, options.threshold, options.rootMargin]);

  return { ref, isInView, hasBeenInView };
};

