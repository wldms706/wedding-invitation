import React from 'react';
import { Gift } from 'lucide-react';

export const LuckyDrawNotice: React.FC = () => {
  return (
    <div className="text-center animate-fade-in-up">
      <p className="text-[13px] tracking-[0.5em] text-[#7a9cbc] uppercase mb-8 font-light">
        Lucky Draw
      </p>

      <div className="flex justify-center mb-6">
        <Gift size={20} className="text-[#8faabe]" strokeWidth={1} />
      </div>

      <p className="text-xl tracking-[0.2em] text-[#1a1a1a] font-light mb-4">
        럭키드로우
      </p>

      <div className="bg-white/60 rounded-lg p-6 border border-[#8faabe]/10">
        <p className="text-base text-[#1a1a1a] font-light leading-relaxed mb-4">
          축가가 끝난 후 럭키드로우 이벤트가 진행됩니다!
        </p>
        <div className="bg-[#f0f8ff] rounded-lg p-4 border border-[#8faabe]/20">
          <p className="text-base text-[#1a1a1a] font-medium tracking-wide">
            🎫 식권을 꼭 보관해 주세요
          </p>
          <p className="text-sm text-[#1a1a1a] font-light mt-2 leading-relaxed">
            식권 번호로 추첨이 진행되오니<br />
            식권을 버리지 마시고 끝까지 소지해 주세요!
          </p>
        </div>
      </div>
    </div>
  );
};
