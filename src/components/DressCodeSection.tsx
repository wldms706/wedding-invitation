import React from 'react';
import { Shirt } from 'lucide-react';

export const DressCodeSection: React.FC = () => {
  const colors = [
    { name: '네이비', color: '#1B2A4A', border: false },
    { name: '차콜', color: '#36454F', border: false },
    { name: '버건디', color: '#722F37', border: false },
    { name: '베이지', color: '#C8B89A', border: true },
    { name: '블랙', color: '#1a1a1a', border: false },
  ];

  return (
    <div className="text-center animate-fade-in-up">
      <p className="text-[13px] tracking-[0.5em] text-[#7a9cbc] uppercase mb-8 font-light">
        Dress Code
      </p>

      <div className="flex justify-center mb-6">
        <Shirt size={20} className="text-[#8faabe]" strokeWidth={1} />
      </div>

      <p className="text-xl tracking-[0.2em] text-[#1a1a1a] font-light mb-4">
        드레스코드
      </p>

      <p className="text-base text-[#1a1a1a] font-light leading-relaxed mb-8">
        드레스코드는 권장사항입니다.<br />
        안 입으셔도 밥은 드립니다 🍚
      </p>

      {/* Color palette */}
      <div className="flex justify-center gap-4">
        {colors.map((c) => (
          <div key={c.name} className="flex flex-col items-center gap-2">
            <div
              className={`w-10 h-10 rounded-full ${c.border ? 'border border-[#d4d4d4]' : ''}`}
              style={{ backgroundColor: c.color }}
            />
            <span className="text-[13px] text-[#7a9cbc] tracking-wider">{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
