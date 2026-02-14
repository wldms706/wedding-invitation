import React, { useState } from 'react';
import { CoupleInfo } from '../types';
import { X, Save } from 'lucide-react';

interface ConfigModalProps {
  couple: CoupleInfo;
  setCouple: React.Dispatch<React.SetStateAction<CoupleInfo>>;
  setGreeting: React.Dispatch<React.SetStateAction<string>>;
  onClose: () => void;
}

export const ConfigModal: React.FC<ConfigModalProps> = ({
  couple,
  setCouple,
  setGreeting,
  onClose,
}) => {
  const [localCouple, setLocalCouple] = useState<CoupleInfo>({ ...couple });
  const [localGreeting, setLocalGreeting] = useState('');

  const handleSave = () => {
    setCouple(localCouple);
    if (localGreeting.trim()) {
      setGreeting(localGreeting);
    }
    onClose();
  };

  const updateField = (field: keyof CoupleInfo, value: string) => {
    setLocalCouple((prev) => ({ ...prev, [field]: value }));
  };

  const fields: { key: keyof CoupleInfo; label: string }[] = [
    { key: 'groomName', label: '신랑 이름' },
    { key: 'brideName', label: '신부 이름' },
    { key: 'groomFather', label: '신랑 아버지' },
    { key: 'groomMother', label: '신랑 어머니' },
    { key: 'brideFather', label: '신부 아버지' },
    { key: 'brideMother', label: '신부 어머니' },
    { key: 'groomPhone', label: '신랑 연락처' },
    { key: 'bridePhone', label: '신부 연락처' },
    { key: 'groomAccount', label: '신랑 계좌' },
    { key: 'groomFatherAccount', label: '신랑 아버지 계좌' },
    { key: 'groomMotherAccount', label: '신랑 어머니 계좌' },
    { key: 'brideAccount', label: '신부 계좌' },
    { key: 'brideFatherAccount', label: '신부 아버지 계좌' },
    { key: 'brideMotherAccount', label: '신부 어머니 계좌' },
    { key: 'weddingDate', label: '결혼 날짜' },
    { key: 'weddingTime', label: '결혼 시간' },
    { key: 'weddingLocation', label: '결혼식 장소' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-end justify-center">
      <div className="w-full max-w-md bg-white rounded-t-2xl max-h-[85vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[#a5c8e4]/20 px-6 py-4 flex items-center justify-between">
          <h2 className="text-sm tracking-[0.2em] text-[#2c3e50]">정보 수정</h2>
          <button
            onClick={onClose}
            className="text-[#6a9bc0] hover:text-[#5da2d5] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <div className="px-6 py-6 space-y-4">
          {fields.map(({ key, label }) => (
            <div key={key}>
              <label className="block text-[11px] text-[#6a9bc0] tracking-wider mb-1.5">
                {label}
              </label>
              <input
                type="text"
                value={localCouple[key]}
                onChange={(e) => updateField(key, e.target.value)}
                className="w-full px-4 py-2.5 bg-[#f8fbfe] border border-[#a5c8e4]/20 rounded-lg text-sm text-[#3d5568] focus:outline-none focus:border-[#5da2d5]/40 transition-colors font-[inherit]"
              />
            </div>
          ))}

          {/* Greeting */}
          <div>
            <label className="block text-[11px] text-[#6a9bc0] tracking-wider mb-1.5">
              인사말
            </label>
            <textarea
              value={localGreeting}
              onChange={(e) => setLocalGreeting(e.target.value)}
              placeholder="인사말을 수정하려면 입력하세요"
              rows={4}
              className="w-full px-4 py-2.5 bg-[#f8fbfe] border border-[#a5c8e4]/20 rounded-lg text-sm text-[#3d5568] placeholder-[#8fb8d4] focus:outline-none focus:border-[#5da2d5]/40 transition-colors resize-none font-[inherit]"
            />
          </div>
        </div>

        {/* Save button */}
        <div className="sticky bottom-0 bg-white border-t border-[#a5c8e4]/20 px-6 py-4">
          <button
            onClick={handleSave}
            className="w-full flex items-center justify-center gap-2 py-3 bg-[#5da2d5] text-white text-sm tracking-wider rounded-lg hover:bg-[#4a8dbd] transition-colors"
          >
            <Save size={16} />
            저장하기
          </button>
        </div>
      </div>
    </div>
  );
};
