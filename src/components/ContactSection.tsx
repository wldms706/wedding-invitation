import React from 'react';
import { CoupleInfo } from '../types';
import { Phone, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  couple: CoupleInfo;
}

interface ContactItemProps {
  role: string;
  name: string;
  phone: string;
  color: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ role, name, phone, color }) => {
  if (!phone) return null;
  return (
    <div className="text-center py-3">
      <p className="text-sm text-[#1a1a1a] font-light mb-2.5">
        {role} <span className="text-[#1a1a1a] font-medium">{name}</span>
      </p>
      <div className="flex justify-center gap-4">
        <a
          href={`tel:${phone}`}
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors`}
          style={{ borderColor: color, color: color }}
        >
          <Phone size={16} />
        </a>
        <a
          href={`sms:${phone}`}
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors`}
          style={{ borderColor: color, color: color }}
        >
          <MessageSquare size={16} />
        </a>
      </div>
    </div>
  );
};

export const ContactSection: React.FC<ContactSectionProps> = ({ couple }) => {
  return (
    <div className="text-center animate-fade-in-up">
      <p className="text-[13px] tracking-[0.5em] text-[#7a9cbc] uppercase mb-8 font-light">
        Contact
      </p>

      <div className="flex justify-center mb-6">
        <Phone size={20} className="text-[#8faabe]" strokeWidth={1} />
      </div>

      <p className="text-xl tracking-[0.2em] text-[#1a1a1a] font-light mb-8">
        연락하기
      </p>

      <div className="grid grid-cols-2 gap-4">
        {/* 신랑측 */}
        <div>
          <p className="text-base text-[#2b5797] tracking-wider mb-4 font-medium pb-2 border-b border-[#2b5797]/20">
            신랑측
          </p>
          <div className="space-y-4">
            <ContactItem
              role="신랑"
              name={couple.groomName}
              phone={couple.groomPhone}
              color="#2b5797"
            />
            <ContactItem
              role="아버지"
              name={couple.groomFather}
              phone={couple.groomFatherPhone}
              color="#2b5797"
            />
            <ContactItem
              role="어머니"
              name={couple.groomMother}
              phone={couple.groomMotherPhone}
              color="#2b5797"
            />
          </div>
        </div>

        {/* 신부측 */}
        <div>
          <p className="text-base text-[#c97b8e] tracking-wider mb-4 font-medium pb-2 border-b border-[#c97b8e]/20">
            신부측
          </p>
          <div className="space-y-4">
            <ContactItem
              role="신부"
              name={couple.brideName}
              phone={couple.bridePhone}
              color="#c97b8e"
            />
            <ContactItem
              role="아버지"
              name={couple.brideFather}
              phone={couple.brideFatherPhone}
              color="#c97b8e"
            />
            <ContactItem
              role="어머니"
              name={couple.brideMother}
              phone={couple.brideMotherPhone}
              color="#c97b8e"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
