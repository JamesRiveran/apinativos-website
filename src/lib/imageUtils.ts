

export interface ImageOptimizationOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png';
  fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside';
}


export const getOptimizedImageUrl = (
  src: string, 
  options: ImageOptimizationOptions = {}
): string => {
  
  if (src.startsWith('/') || src.includes('placeholder') || src.includes('logo')) {
    return src;
  }

  
  
  return src;
};


export const generateResponsiveSizes = (
  src: string,
  breakpoints: number[] = [320, 640, 768, 1024, 1280, 1536]
): { src: string; w: number }[] => {
  return breakpoints.map(width => ({
    src: getOptimizedImageUrl(src, { width }),
    w: width
  }));
};


export const createSrcSet = (
  src: string,
  breakpoints: number[] = [320, 640, 768, 1024, 1280, 1536]
): string => {
  const sizes = generateResponsiveSizes(src, breakpoints);
  return sizes.map(size => `${size.src} ${size.w}w`).join(', ');
};


export const createSizesAttribute = (
  defaultSize: string = '100vw',
  breakpointSizes: { [key: string]: string } = {}
): string => {
  const breakpoints = Object.entries(breakpointSizes)
    .map(([breakpoint, size]) => `(max-width: ${breakpoint}) ${size}`)
    .join(', ');
  
  return breakpoints ? `${breakpoints}, ${defaultSize}` : defaultSize;
};


export const supportsWebP = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};


export const getWebPIfSupported = async (src: string): Promise<string> => {
  const isWebPSupported = await supportsWebP();
  
  if (isWebPSupported && !src.includes('.webp') && !src.includes('placeholder')) {
    
    
    return src;
  }
  
  return src;
};


export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};


export const preloadImages = async (sources: string[]): Promise<void[]> => {
  const promises = sources.map(src => preloadImage(src));
  return Promise.all(promises);
};


export const calculateImageDimensions = (
  originalWidth: number,
  originalHeight: number,
  maxWidth?: number,
  maxHeight?: number
): { width: number; height: number } => {
  if (!maxWidth && !maxHeight) {
    return { width: originalWidth, height: originalHeight };
  }

  const aspectRatio = originalWidth / originalHeight;

  if (maxWidth && maxHeight) {
    const widthRatio = maxWidth / originalWidth;
    const heightRatio = maxHeight / originalHeight;
    const ratio = Math.min(widthRatio, heightRatio);
    
    return {
      width: Math.round(originalWidth * ratio),
      height: Math.round(originalHeight * ratio)
    };
  }

  if (maxWidth) {
    return {
      width: maxWidth,
      height: Math.round(maxWidth / aspectRatio)
    };
  }

  if (maxHeight) {
    return {
      width: Math.round(maxHeight * aspectRatio),
      height: maxHeight
    };
  }

  return { width: originalWidth, height: originalHeight };
};


export const getImageInfo = (src: string): Promise<{
  width: number;
  height: number;
  aspectRatio: number;
}> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    
    img.onload = () => {
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight,
        aspectRatio: img.naturalWidth / img.naturalHeight
      });
    };
    
    img.onerror = reject;
    img.src = src;
  });
};


export const createBlurDataURL = (width: number = 10, height: number = 10): string => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';
  
  
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#f3f4f6');
  gradient.addColorStop(1, '#e5e7eb');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  return canvas.toDataURL('image/jpeg', 0.1);
};


export const IMAGE_BREAKPOINTS = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const;

export const COMMON_ASPECT_RATIOS = {
  square: 1,
  landscape: 16 / 9,
  portrait: 9 / 16,
  classic: 4 / 3,
  wide: 21 / 9
} as const;
