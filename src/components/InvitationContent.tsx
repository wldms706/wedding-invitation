import React from 'react';
import { CoupleInfo } from '../types';

interface InvitationContentProps {
  greeting: string;
  couple: CoupleInfo;
}

export const InvitationContent: React.FC<InvitationContentProps> = ({ greeting, couple }) => {
  return (
    <div className="text-center animate-fade-in-up">
      {/* Section title */}
      <p className="text-[13px] tracking-[0.5em] text-[#7a9cbc] uppercase mb-8 font-light">
        Invitation
      </p>

      {/* Greeting message */}
      <div className="mb-12">
        {greeting.split('\n').map((line, i) => (
          <p key={i} className="text-[17px] leading-[2.2] text-[#1a1a1a] font-light">
            {line}
          </p>
        ))}
      </div>

      {/* Couple introduction with parents */}
      <div className="space-y-4 text-base text-[#1a1a1a]">
        <div className="flex items-center justify-center gap-2">
          <span className="text-[15px] tracking-[0.1em]">{couple.groomFather}</span>
          <span className="text-[13px] text-[#8faabe]">·</span>
          <span className="text-[15px] tracking-[0.1em]">{couple.groomMother}</span>
          <span className="text-sm tracking-[0.1em] text-[#7a9cbc] ml-1">의 아들</span>
          <span className="tracking-[0.15em] font-medium">{couple.groomName}</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="text-[15px] tracking-[0.1em]">{couple.brideFather}</span>
          <span className="text-[13px] text-[#8faabe]">·</span>
          <span className="text-[15px] tracking-[0.1em]">{couple.brideMother}</span>
          <span className="text-sm tracking-[0.1em] text-[#7a9cbc] ml-1">의 딸</span>
          <span className="tracking-[0.15em] font-medium">{couple.brideName}</span>
        </div>
      </div>
    </div>
  );
};
