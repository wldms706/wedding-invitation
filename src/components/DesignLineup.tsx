import React from 'react';
import { Sparkles } from 'lucide-react';

export const DesignLineup: React.FC = () => {
  return (
    <div className="text-center animate-fade-in-up">
      <div className="flex justify-center mb-6">
        <Sparkles size={16} className="text-[#8faabe]" strokeWidth={1} />
      </div>

      <p className="text-sm text-[#7a9cbc] font-light tracking-[0.2em] leading-relaxed mb-4">
        소중한 날에 함께해주셔서<br />
        진심으로 감사드립니다
      </p>

      <div className="w-8 h-[1px] bg-[#8faabe]/30 mx-auto mb-4" />

      <p className="text-[13px] text-[#8faabe]/60 tracking-[0.3em] uppercase">
        With Love
      </p>
    </div>
  );
};
