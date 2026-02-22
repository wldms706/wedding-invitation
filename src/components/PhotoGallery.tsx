import React, { useEffect, useRef, useState } from 'react';
import { Camera } from 'lucide-react';

const portraitPhotos = [
  '/images/gallery/01.jpg',
  '/images/gallery/02.jpg',
  '/images/gallery/03.jpg',
  '/images/gallery/16.jpg',
  '/images/gallery/05.jpg',
  '/images/gallery/15.jpg',
  '/images/gallery/06.jpg',
  '/images/gallery/14.jpg',
  '/images/gallery/08.jpg',
  '/images/gallery/09.jpg',
  '/images/gallery/10.jpg',
  '/images/gallery/12.jpg',
  '/images/gallery/17.jpg',
  '/images/gallery/18.jpg',
];

const landscapePhotos = [
  '/images/gallery/07.jpg',
  '/images/gallery/04.jpg',
  '/images/gallery/11.jpg',
];

const PhotoItem: React.FC<{ src: string; index: number }> = ({ src, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${(index % 2) * 100}ms`,
      }}
    >
      <img
        src={src}
        alt={`웨딩 사진 ${index + 1}`}
        className="w-full rounded-lg shadow-sm"
        loading="lazy"
      />
    </div>
  );
};

export const PhotoGallery: React.FC = () => {
  return (
    <div className="text-center animate-fade-in-up">
      <p className="text-[13px] tracking-[0.5em] text-[#7a9cbc] uppercase mb-8 font-light">
        Gallery
      </p>

      <div className="flex justify-center mb-6">
        <Camera size={20} className="text-[#8faabe]" strokeWidth={1} />
      </div>

      <p className="text-xl tracking-[0.2em] text-[#1a1a1a] font-light mb-8">
        우리의 순간들
      </p>

      {/* 세로 사진 - 2열 그리드 */}
      <div className="grid grid-cols-2 gap-2 mb-2">
        {portraitPhotos.map((src, i) => (
          <PhotoItem key={src} src={src} index={i} />
        ))}
      </div>

      {/* 가로 사진 - 풀 너비 */}
      <div className="grid grid-cols-1 gap-2">
        {landscapePhotos.map((src, i) => (
          <PhotoItem key={src} src={src} index={i} />
        ))}
      </div>
    </div>
  );
};
