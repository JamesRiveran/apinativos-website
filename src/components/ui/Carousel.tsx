
import React, { useState } from 'react';

interface CarouselProps {
  images: { url: string; name?: string }[];
  currentIndex?: number;
  setCurrentIndex?: (idx: number) => void;
}

const Carousel: React.FC<CarouselProps> = ({ images, currentIndex, setCurrentIndex }) => {
  const [internalCurrent, setInternalCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const current = currentIndex !== undefined ? currentIndex : internalCurrent;
  const setCurrent = setCurrentIndex || setInternalCurrent;


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

  if (images.length === 0) return null;

  return (
    <div className="relative w-full max-w-2xl mx-auto mb-8 select-none">
      <div className="flex items-center justify-center relative h-72 sm:h-80">
        <img
          src={images[current].url}
          alt={images[current].name || `Imagen ${current + 1}`}
          className={`w-full h-72 sm:h-80 object-cover rounded-lg transition-all duration-500 ${animating ? 'scale-95 opacity-80' : 'scale-100 opacity-100'}`}
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
        {/* Left arrow */}
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 text-gray-500 rounded-full p-1 hover:bg-gray-100 transition-all duration-200 z-20 border border-gray-200"
          onClick={prev}
          aria-label="Anterior"
          style={{ fontSize: 16 }}
        >
          <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        {/* Right arrow */}
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 text-gray-500 rounded-full p-1 hover:bg-gray-100 transition-all duration-200 z-20 border border-gray-200"
          onClick={next}
          aria-label="Siguiente"
          style={{ fontSize: 16 }}
        >
          <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>
  {/* No indicators, solo carrusel automático */}
      {/* Name minimal */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded text-base font-medium text-gray-800 bg-white/80 max-w-[90%] text-center pointer-events-none select-text shadow-sm border border-gray-100">
        {images[current].name}
      </div>
    </div>
  );
};

export default Carousel;
