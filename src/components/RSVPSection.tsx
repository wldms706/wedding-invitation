import React, { useState } from 'react';
import { Send, Check, Loader2, X } from 'lucide-react';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz7EydlVZDV_DYkZRe4kmedR3Z1R_ZltlroEePAEix5TNL5IhRWXTDm_nS8eQio2bPQ_A/exec';

export const RSVPSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [side, setSide] = useState<'groom' | 'bride' | ''>('');
  const [attendance, setAttendance] = useState<'yes' | 'no' | ''>('');
  const [meal, setMeal] = useState<'yes' | 'no' | 'undecided' | ''>('');
  const [name, setName] = useState('');
  const [companion, setCompanion] = useState('');
  const [privacy, setPrivacy] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const isValid = side && attendance && meal && name && privacy;

  const sideLabel = side === 'groom' ? '신랑' : side === 'bride' ? '신부' : '';
  const attendanceLabel = attendance === 'yes' ? '참석' : attendance === 'no' ? '불참석' : '';
  const mealLabel = meal === 'yes' ? 'O' : meal === 'no' ? 'X' : meal === 'undecided' ? '미정' : '';

  const handleSubmit = async () => {
    if (!isValid) return;
    setLoading(true);
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          side: sideLabel,
          attendance: attendanceLabel,
          meal: mealLabel,
          name,
          companion,
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const optionBtn = (selected: boolean) =>
    `flex-1 py-3 rounded-lg text-base tracking-wider transition-all ${
      selected
        ? 'bg-[#2b5797] text-white'
        : 'bg-white/80 border border-[#8faabe]/20 text-[#1a1a1a]'
    }`;

  return (
    <>
      {/* 섹션 - 버튼만 표시 */}
      <div className="text-center animate-fade-in-up">
        <p className="text-[13px] tracking-[0.5em] text-[#7a9cbc] uppercase mb-8 font-light">
          RSVP
        </p>

        <div className="flex justify-center mb-6">
          <Send size={20} className="text-[#8faabe]" strokeWidth={1} />
        </div>

        <p className="text-xl tracking-[0.2em] text-[#1a1a1a] font-light mb-3">
          참석 여부 전달
        </p>

        <p className="text-sm text-[#7a9cbc] font-light mb-8 leading-relaxed">
          축하의 마음으로 참석해주신다면<br />
          아래 버튼을 눌러 알려주세요
        </p>

        {submitted ? (
          <div className="py-4">
            <div className="w-12 h-12 rounded-full bg-[#2b5797]/10 flex items-center justify-center mx-auto mb-4">
              <Check size={24} className="text-[#2b5797]" />
            </div>
            <p className="text-base text-[#1a1a1a] tracking-wider mb-2">감사합니다</p>
            <p className="text-sm text-[#7a9cbc] font-light">참석 여부가 전달되었습니다</p>
          </div>
        ) : (
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#2b5797] text-white text-base tracking-wider hover:bg-[#1e3f6e] transition-colors shadow-md"
          >
            <Send size={14} />
            참석 여부 전달하기
          </button>
        )}
      </div>

      {/* 모달 */}
      {showModal && !submitted && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowModal(false)} />
          <div className="relative bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* 모달 헤더 */}
            <div className="sticky top-0 bg-white flex items-center justify-between px-6 py-4 border-b border-gray-100 rounded-t-2xl">
              <p className="text-lg text-[#1a1a1a] tracking-wider font-medium">참석 여부 전달</p>
              <button onClick={() => setShowModal(false)} className="text-[#7a9cbc] hover:text-[#1a1a1a] transition-colors">
                <X size={22} />
              </button>
            </div>

            {/* 모달 내용 */}
            <div className="p-6 space-y-5">
              {/* 어느 측 하객 */}
              <div>
                <label className="block text-sm text-[#1a1a1a] tracking-wider mb-2 font-medium">
                  어느 측 하객이신가요? <span className="text-red-400">*</span>
                </label>
                <div className="flex gap-2">
                  <button onClick={() => setSide('groom')} className={optionBtn(side === 'groom')}>신랑</button>
                  <button onClick={() => setSide('bride')} className={optionBtn(side === 'bride')}>신부</button>
                </div>
              </div>

              {/* 참석여부 */}
              <div>
                <label className="block text-sm text-[#1a1a1a] tracking-wider mb-2 font-medium">
                  참석여부 <span className="text-red-400">*</span>
                </label>
                <div className="flex gap-2">
                  <button onClick={() => setAttendance('yes')} className={optionBtn(attendance === 'yes')}>참석</button>
                  <button onClick={() => setAttendance('no')} className={optionBtn(attendance === 'no')}>불참석</button>
                </div>
              </div>

              {/* 식사여부 */}
              <div>
                <label className="block text-sm text-[#1a1a1a] tracking-wider mb-2 font-medium">
                  식사여부 <span className="text-red-400">*</span>
                </label>
                <div className="flex gap-2">
                  <button onClick={() => setMeal('yes')} className={optionBtn(meal === 'yes')}>O</button>
                  <button onClick={() => setMeal('no')} className={optionBtn(meal === 'no')}>X</button>
                  <button onClick={() => setMeal('undecided')} className={optionBtn(meal === 'undecided')}>미정</button>
                </div>
              </div>

              {/* 성함 */}
              <div>
                <label className="block text-sm text-[#1a1a1a] tracking-wider mb-2 font-medium">
                  성함 <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="성함을 입력해주세요"
                  className="w-full px-4 py-3 bg-white border border-[#8faabe]/20 rounded-lg text-base text-[#1a1a1a] placeholder-[#9fb5c8] focus:outline-none focus:border-[#2b5797]/40 transition-colors font-[inherit]"
                />
              </div>

              {/* 동행인 성함 */}
              <div>
                <label className="block text-sm text-[#1a1a1a] tracking-wider mb-2 font-medium">
                  동행인 성함
                </label>
                <input
                  type="text"
                  value={companion}
                  onChange={(e) => setCompanion(e.target.value)}
                  placeholder="동행인이 있으시면 입력해주세요"
                  className="w-full px-4 py-3 bg-white border border-[#8faabe]/20 rounded-lg text-base text-[#1a1a1a] placeholder-[#9fb5c8] focus:outline-none focus:border-[#2b5797]/40 transition-colors font-[inherit]"
                />
              </div>

              {/* 개인정보 동의 */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="privacy-modal"
                  checked={privacy}
                  onChange={(e) => setPrivacy(e.target.checked)}
                  className="w-4 h-4 rounded border-[#8faabe]/30 text-[#2b5797] focus:ring-[#2b5797]/30"
                />
                <label htmlFor="privacy-modal" className="text-sm text-[#1a1a1a] font-light">
                  개인정보 수집 및 활용 동의
                </label>
              </div>

              {/* 전달 버튼 */}
              <button
                onClick={handleSubmit}
                disabled={!isValid || loading}
                className="w-full py-3.5 bg-[#2b5797] text-white text-base tracking-wider rounded-lg hover:bg-[#1e3f6e] transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    전달 중...
                  </>
                ) : '전달'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
