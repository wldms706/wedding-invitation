import React from 'react';
import { CoupleInfo } from '../types';

interface HeroProps {
  couple: CoupleInfo;
}

export const Hero: React.FC<HeroProps> = ({ couple }) => {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#f0f8ff]">
      {/* Photo section */}
      <div className="relative mx-4 mt-6 rounded-2xl overflow-hidden shadow-lg">
        <img
          src="/images/hero.jpg"
          alt="웨딩 사진"
          className="w-full aspect-[3/4] object-cover"
        />
        {/* Soft overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

        {/* Names on photo - top corners */}
        <div className="absolute top-6 left-0 right-0 flex justify-between px-8">
          <span className="text-white text-base tracking-[0.2em] font-light" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}>
            {couple.groomName}
          </span>
          <span className="text-white text-base tracking-[0.2em] font-light" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}>
            {couple.brideName}
          </span>
        </div>

        {/* Hero text - lower center on photo */}
        <div className="absolute inset-0 flex items-end justify-center pb-20">
          <h1 className="text-6xl text-white font-normal leading-snug text-center"
            style={{ fontFamily: "'Great Vibes', cursive", textShadow: '0 2px 16px rgba(0,0,0,0.4)' }}>
            The Beginning<br />of Us
          </h1>
        </div>
      </div>

      {/* Date info below photo */}
      <div className="flex-1 flex flex-col items-center justify-center py-12 px-8 animate-fade-in">
        <div className="w-6 h-[1px] bg-[#8faabe] mx-auto mb-8" />

        <p className="text-sm tracking-[0.3em] text-[#1a1a1a] font-light mb-2">
          {couple.weddingDate}
        </p>
        <p className="text-sm tracking-[0.2em] text-[#1a1a1a] font-light mb-6">
          {couple.weddingTime}
        </p>
        <p className="text-sm tracking-[0.15em] text-[#7a9cbc] font-light">
          {couple.weddingLocation}
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-6 bg-gradient-to-b from-transparent to-[#8faabe]" />
      </div>
    </div>
  );
};
