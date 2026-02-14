import React, { useState, useEffect } from 'react';
import { X, Heart, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { CoupleInfo } from '../types';

interface RSVPPopupProps {
  couple: CoupleInfo;
  onRSVPClick: () => void;
}

export const RSVPPopup: React.FC<RSVPPopupProps> = ({ couple, onRSVPClick }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('rsvp_popup_dismissed');
    if (dismissed) {
      const dismissedDate = new Date(dismissed);
      const now = new Date();
      if (
        dismissedDate.getFullYear() === now.getFullYear() &&
        dismissedDate.getMonth() === now.getMonth() &&
        dismissedDate.getDate() === now.getDate()
      ) {
        return;
      }
    }
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
  };

  const handleDismissToday = () => {
    localStorage.setItem('rsvp_popup_dismissed', new Date().toISOString());
    setVisible(false);
  };

  const handleRSVP = () => {
    setVisible(false);
    onRSVPClick();
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm animate-fade-in-up overflow-hidden">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-[#8fb8d4] hover:text-[#3d5f78] transition-colors"
        >
          <X size={22} />
        </button>

        <div className="px-8 pt-10 pb-6 text-center">
          {/* Title */}
          <h2 className="text-2xl tracking-[0.15em] text-[#2c3e50] font-light mb-6">
            참석 여부 전달
          </h2>

          {/* Message */}
          <p className="text-base text-[#3d5f78] font-light leading-relaxed mb-8">
            소중한 시간을 내어 결혼식에<br />
            참석해주시는 모든 분들께 감사드립니다.<br />
            참석 여부를 회신해 주시면<br />
            더욱 감사하겠습니다.
          </p>

          {/* Divider */}
          <div className="border-t border-dashed border-[#a5c8e4]/30 mx-4 mb-6" />

          {/* Couple info */}
          <div className="space-y-2.5 mb-8 text-left px-2">
            <div className="flex items-center gap-2.5 text-base text-[#3d5568]">
              <Heart size={14} className="text-[#e8a0b4] flex-shrink-0" />
              <span>
                <span className="text-[#5da2d5] text-sm mr-1">신랑</span> {couple.groomName},
                <span className="text-[#e8a0b4] text-sm ml-2 mr-1">신부</span> {couple.brideName}
              </span>
            </div>
            <div className="flex items-center gap-2.5 text-base text-[#3d5568]">
              <Calendar size={14} className="text-[#6a9bc0] flex-shrink-0" />
              <span>2026년 4월 19일 일요일 오후 2시 20분</span>
            </div>
            <div className="flex items-center gap-2.5 text-base text-[#3d5568]">
              <MapPin size={14} className="text-[#6a9bc0] flex-shrink-0" />
              <span>{couple.weddingLocation}</span>
            </div>
          </div>

          {/* RSVP Button */}
          <button
            onClick={handleRSVP}
            className="w-full py-3.5 bg-[#5da2d5] text-white text-base tracking-[0.2em] rounded-xl hover:bg-[#4a8dbd] transition-colors mb-4"
          >
            참석 여부 전달
          </button>
        </div>

        {/* Dismiss today */}
        <button
          onClick={handleDismissToday}
          className="w-full py-4 border-t border-[#f0f4f8] text-sm text-[#8fb8d4] tracking-wider hover:text-[#6a9bc0] transition-colors flex items-center justify-center gap-1.5"
        >
          <CheckCircle size={12} />
          오늘하루 보지않기
        </button>
      </div>
    </div>
  );
};
