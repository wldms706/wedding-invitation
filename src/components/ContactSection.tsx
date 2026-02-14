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
      <p className="text-sm text-[#3d5f78] font-light mb-2.5">
        {role} <span className="text-[#2c3e50] font-medium">{name}</span>
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
      <p className="text-[13px] tracking-[0.5em] text-[#6a9bc0] uppercase mb-8 font-light">
        Contact
      </p>

      <div className="flex justify-center mb-6">
        <Phone size={20} className="text-[#a5c8e4]" strokeWidth={1} />
      </div>

      <p className="text-xl tracking-[0.2em] text-[#2c3e50] font-light mb-8">
        연락하기
      </p>

      <div className="grid grid-cols-2 gap-4">
        {/* 신랑측 */}
        <div>
          <p className="text-base text-[#5da2d5] tracking-wider mb-4 font-medium pb-2 border-b border-[#5da2d5]/20">
            신랑측
          </p>
          <div className="space-y-4">
            <ContactItem
              role="신랑"
              name={couple.groomName}
              phone={couple.groomPhone}
              color="#5da2d5"
            />
            <ContactItem
              role="아버지"
              name={couple.groomFather}
              phone={couple.groomFatherPhone}
              color="#5da2d5"
            />
            <ContactItem
              role="어머니"
              name={couple.groomMother}
              phone={couple.groomMotherPhone}
              color="#5da2d5"
            />
          </div>
        </div>

        {/* 신부측 */}
        <div>
          <p className="text-base text-[#e8a0b4] tracking-wider mb-4 font-medium pb-2 border-b border-[#e8a0b4]/20">
            신부측
          </p>
          <div className="space-y-4">
            <ContactItem
              role="신부"
              name={couple.brideName}
              phone={couple.bridePhone}
              color="#e8a0b4"
            />
            <ContactItem
              role="아버지"
              name={couple.brideFather}
              phone={couple.brideFatherPhone}
              color="#e8a0b4"
            />
            <ContactItem
              role="어머니"
              name={couple.brideMother}
              phone={couple.brideMotherPhone}
              color="#e8a0b4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
