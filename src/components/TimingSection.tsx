import React from 'react';
import { Clock } from 'lucide-react';

export const TimingSection: React.FC = () => {
  return (
    <div className="text-center animate-fade-in-up">
      <p className="text-[13px] tracking-[0.5em] text-[#7a9cbc] uppercase mb-8 font-light">
        Ceremony
      </p>

      <div className="flex justify-center mb-6">
        <Clock size={20} className="text-[#8faabe]" strokeWidth={1} />
      </div>

      <p className="text-xl tracking-[0.2em] text-[#1a1a1a] font-light mb-4">
        예식 안내
      </p>

      <div className="space-y-2 text-base text-[#1a1a1a] font-light leading-relaxed">
        <p>2026년 4월 19일 일요일</p>
        <p>오후 2시 20분</p>
        <p className="pt-2 text-sm text-[#7a9cbc]">
          식전 30분부터 입장 가능합니다
        </p>
      </div>

      <div className="mt-8 mx-auto max-w-[200px] border border-[#8faabe]/20 rounded-lg p-4">
        <div className="text-sm text-[#7a9cbc] tracking-wider mb-2">식순</div>
        <div className="space-y-2 text-[15px] text-[#1a1a1a] font-light">
          <p>개식사</p>
          <p>신랑 · 신부 입장</p>
          <p>혼인 서약</p>
          <p>성혼 선언</p>
          <p>축가</p>
          <p>럭키드로우</p>
          <p>폐식사</p>
        </div>
      </div>
    </div>
  );
};
