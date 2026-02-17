import React, { useState, useEffect } from 'react';

interface IntroSplashProps {
  onComplete: () => void;
}

type Stage = 'writing1' | 'writing2' | 'dog' | 'reveal' | 'done';

export const IntroSplash: React.FC<IntroSplashProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<Stage>('writing1');

  useEffect(() => {
    // Preload hero image while intro is showing
    const img = new Image();
    img.src = '/images/hero.jpg';

    const timers = [
      setTimeout(() => setStage('writing2'), 2000),
      setTimeout(() => setStage('dog'), 3800),
      setTimeout(() => setStage('reveal'), 5500),
      setTimeout(() => {
        setStage('done');
        onComplete();
      }, 6300),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  if (stage === 'done') return null;

  const showLine1 = true;
  const showLine2 = stage === 'writing2' || stage === 'dog' || stage === 'reveal';
  const showDog = stage === 'dog' || stage === 'reveal';

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-all duration-700 ${
        stage === 'reveal' ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background photo with dark overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/intro-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Handwriting text */}
      <div className="relative z-10 text-center px-8 mt-[35vh]">
        {/* Line 1: We're getting */}
        <div className="overflow-hidden mb-1">
          <p
            className={`handwrite-line ${showLine1 ? 'animate-handwrite' : 'opacity-0'}`}
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: '64px',
              color: '#a5d4f7',
              lineHeight: 1.2,
            }}
          >
            We're getting
          </p>
        </div>

        {/* Line 2: Married! */}
        <div className="overflow-hidden">
          <p
            className={`handwrite-line ${showLine2 ? 'animate-handwrite' : 'opacity-0'}`}
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: '68px',
              color: '#a5d4f7',
              lineHeight: 1.2,
            }}
          >
            Married!
          </p>
        </div>

        {/* 김선재 & 정지은 */}
        <div
          className={`mt-6 transition-all duration-700 ${
            showLine2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="w-10 h-[1px] bg-white/30 mx-auto mb-4" />
          <p className="text-lg text-white/80 tracking-[0.3em] font-light">
            김선재 & 정지은
          </p>
        </div>
      </div>

      {/* 까꿍이 */}
      <div
        className={`relative z-10 mt-8 transition-all duration-700 ${
          showDog ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className={showDog ? 'dog-bounce' : ''} style={{ display: 'inline-block' }}>
          <div className="flex flex-col items-center">
            <img
              src="/images/dog.png"
              alt="까꿍이"
              className="w-20 h-20 object-contain drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]"
            />
          </div>
        </div>
      </div>


      <style>{`
        @keyframes handwrite {
          0% {
            clip-path: inset(0 100% 0 0);
            opacity: 1;
          }
          100% {
            clip-path: inset(0 0 0 0);
            opacity: 1;
          }
        }
        .handwrite-line {
          opacity: 0;
        }
        .animate-handwrite {
          animation: handwrite 1.6s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
        }
        @keyframes dogBounceIn {
          0% { transform: translateY(20px) scale(0.8); }
          50% { transform: translateY(-8px) scale(1.05); }
          70% { transform: translateY(4px) scale(0.98); }
          100% { transform: translateY(0) scale(1); }
        }
        .dog-bounce {
          animation: dogBounceIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
