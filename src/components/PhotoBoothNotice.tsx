import React from 'react';
import { Camera } from 'lucide-react';

export const PhotoBoothNotice: React.FC = () => {
  return (
    <div className="text-center animate-fade-in-up">
      <p className="text-[13px] tracking-[0.5em] text-[#7a9cbc] uppercase mb-8 font-light">
        Photo Booth
      </p>

      <div className="flex justify-center mb-6">
        <Camera size={20} className="text-[#8faabe]" strokeWidth={1} />
      </div>

      <p className="text-xl tracking-[0.2em] text-[#1a1a1a] font-light mb-4">
        인생네컷 포토부스
      </p>

      <p className="text-base text-[#1a1a1a] font-light leading-relaxed mb-6">
        결혼식장에 포토부스를 준비했어요!<br />
        오셔서 예쁜 추억 남겨주세요 📸
      </p>

      <div className="rounded-xl overflow-hidden shadow-md mx-auto max-w-[240px]">
        <img
          src="/images/photo-booth.png"
          alt="포토부스"
          className="w-full"
          loading="lazy"
        />
      </div>
    </div>
  );
};
