import React, { useState, useEffect } from 'react';

interface IntroSplashProps {
  onComplete: () => void;
}

export const IntroSplash: React.FC<IntroSplashProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'hiding' | 'peek' | 'pop' | 'reveal' | 'done'>('hiding');

  useEffect(() => {
    // 까꿍이가 숨어있다가 등장
    const t1 = setTimeout(() => setStage('peek'), 600);
    const t2 = setTimeout(() => setStage('pop'), 1400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const handleClick = () => {
    setStage('reveal');
    setTimeout(() => {
      setStage('done');
      onComplete();
    }, 800);
  };

  if (stage === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f0f8ff] transition-all duration-700 ${
        stage === 'reveal' ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
      }`}
      onClick={stage === 'pop' ? handleClick : undefined}
      style={{ cursor: stage === 'pop' ? 'pointer' : 'default' }}
    >
      {/* Sparkles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#5da2d5]/30"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animation: `twinkle ${1.5 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Character container */}
      <div className="relative mb-8">
        {/* 까꿍이 character */}
        <div
          className={`transition-all duration-500 ease-out ${
            stage === 'hiding'
              ? 'translate-y-[100px] opacity-0 scale-50'
              : stage === 'peek'
              ? 'translate-y-[30px] opacity-80 scale-75'
              : 'translate-y-0 opacity-100 scale-100'
          }`}
        >
          {/* Character face */}
          <div className="relative">
            {/* Body/envelope */}
            <div className="w-32 h-28 bg-white rounded-2xl shadow-lg border-2 border-[#e8d4e6] mx-auto relative overflow-hidden">
              {/* Envelope flap */}
              <div className="absolute top-0 left-0 w-full h-0 border-l-[64px] border-r-[64px] border-t-[40px] border-l-transparent border-r-transparent border-t-[#f5e6f0]" />
              {/* Heart seal */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 text-2xl">
                💌
              </div>
              {/* Inner text */}
              <div className="absolute bottom-3 left-0 w-full text-center">
                <span className="text-[10px] text-[#c49ab8] tracking-wider">LOVE LETTER</span>
              </div>
            </div>

            {/* Dog peeking from behind envelope */}
            <div
              className={`absolute -top-12 left-1/2 -translate-x-1/2 transition-all duration-300 ${
                stage === 'hiding' ? 'translate-y-8 opacity-0' :
                stage === 'peek' ? 'translate-y-4 opacity-100' : 'translate-y-0 opacity-100'
              }`}
            >
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                <img src="/images/dog.png" alt="까꿍이" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* 뿅! effect */}
        {stage === 'pop' && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 animate-bounce">
            <span className="text-[#5da2d5] text-lg font-bold tracking-wider"
              style={{textShadow: '0 0 10px rgba(93,162,213,0.3)'}}>
              뿅 !
            </span>
          </div>
        )}
      </div>

      {/* Text */}
      <div
        className={`text-center transition-all duration-500 ${
          stage === 'hiding' ? 'opacity-0 translate-y-4' :
          stage === 'peek' ? 'opacity-50' : 'opacity-100'
        }`}
      >
        <p className="text-lg text-[#2c3e50] tracking-[0.2em] font-light mb-2">
          김선재 & 정지은
        </p>
        <p className="text-xs text-[#6a9bc0] tracking-[0.15em] font-light mb-8">
          결혼합니다
        </p>

        {stage === 'pop' && (
          <div className="animate-pulse">
            <p className="text-[11px] text-[#a5c8e4] tracking-wider">
              터치하여 청첩장을 열어보세요
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.5); }
        }
      `}</style>
    </div>
  );
};
