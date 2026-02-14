import React, { useState, useRef, useCallback } from 'react';
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
  '/images/gallery/07.jpg',
  '/images/gallery/01.jpg',
  '/images/gallery/02.jpg',
  '/images/gallery/03.jpg',
  '/images/gallery/16.jpg',
  '/images/gallery/04.jpg',
  '/images/gallery/05.jpg',
  '/images/gallery/15.jpg',
  '/images/gallery/06.jpg',
  '/images/gallery/14.jpg',
  '/images/gallery/08.jpg',
  '/images/gallery/09.jpg',
  '/images/gallery/11.jpg',
  '/images/gallery/10.jpg',
  '/images/gallery/12.jpg',
];

export const PhotoGallery: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goTo = useCallback((index: number) => {
    if (index < 0) setCurrent(photos.length - 1);
    else if (index >= photos.length) setCurrent(0);
    else setCurrent(index);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goTo(current + 1);
      else goTo(current - 1);
    }
  };

  return (
    <div className="text-center animate-fade-in-up">
      <p className="text-[10px] tracking-[0.5em] text-[#6a9bc0] uppercase mb-8 font-light">
        Gallery
      </p>

      <div className="flex justify-center mb-6">
        <Camera size={20} className="text-[#a5c8e4]" strokeWidth={1} />
      </div>

      <p className="text-lg tracking-[0.2em] text-[#2c3e50] font-light mb-8">
        우리의 순간들
      </p>

      {/* Slideshow */}
      <div className="relative">
        <div
          className="relative overflow-hidden rounded-lg"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {photos.map((src, i) => (
              <div key={i} className="w-full flex-shrink-0">
                <img
                  src={src}
                  alt={`웨딩 사진 ${i + 1}`}
                  className="w-full aspect-[3/4] object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={() => goTo(current - 1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center text-[#3d5568] hover:bg-white/80 transition-colors"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => goTo(current + 1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center text-[#3d5568] hover:bg-white/80 transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Counter */}
      <p className="mt-4 text-xs text-[#6a9bc0] tracking-wider font-light">
        {current + 1} / {photos.length}
      </p>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1.5 mt-3">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === current ? 'bg-[#5da2d5] w-4' : 'bg-[#a5c8e4]/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
