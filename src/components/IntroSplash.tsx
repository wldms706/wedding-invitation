import React, { useState, useEffect } from 'react';

interface IntroSplashProps {
  onComplete: () => void;
}

type Stage = 'names' | 'namesOut' | 'married' | 'dogRun' | 'ready' | 'reveal' | 'done';

export const IntroSplash: React.FC<IntroSplashProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<Stage>('names');

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage('namesOut'), 2200),
      setTimeout(() => setStage('married'), 3000),
      setTimeout(() => setStage('dogRun'), 4000),
      setTimeout(() => setStage('ready'), 5800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleClick = () => {
    if (stage !== 'ready') return;
    setStage('reveal');
    setTimeout(() => {
      setStage('done');
      onComplete();
    }, 800);
  };

  if (stage === 'done') return null;

  const showNames = stage === 'names';
  const showMarried = stage === 'married' || stage === 'dogRun' || stage === 'ready';
  const dogRunning = stage === 'dogRun' || stage === 'ready';
  const isReady = stage === 'ready';

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f0f8ff] transition-all duration-700 ${
        stage === 'reveal' ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
      }`}
      onClick={handleClick}
      style={{ cursor: isReady ? 'pointer' : 'default' }}
    >
      {/* Sparkles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#5da2d5]/20"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Names - Kim Sun Jae & Jung Ji Eun */}
      <div
        className={`absolute transition-all duration-700 ease-in-out text-center ${
          showNames ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
        }`}
      >
        <p
          className="text-[28px] text-[#5da2d5] tracking-wide leading-relaxed"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
        >
          Kim Sun Jae
        </p>
        <p
          className="text-[20px] text-[#a5c8e4] my-2"
          style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}
        >
          &
        </p>
        <p
          className="text-[28px] text-[#5da2d5] tracking-wide leading-relaxed"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
        >
          Jung Ji Eun
        </p>
      </div>

      {/* We are getting married */}
      <div
        className={`transition-all duration-700 ease-in-out text-center ${
          showMarried ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <p
          className="text-[26px] text-[#5da2d5] tracking-wider mb-2"
          style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 400 }}
        >
          We are getting married
        </p>
        <div className="w-12 h-[1px] bg-[#a5c8e4]/40 mx-auto mt-4 mb-6" />
        <p className="text-base text-[#2c3e50] tracking-[0.2em] font-light">
          김선재 & 정지은
        </p>
      </div>

      {/* 까꿍이 running */}
      <div
        className={`mt-10 transition-opacity duration-500 ${dogRunning ? 'opacity-100' : 'opacity-0'}`}
      >
        <div
          className={dogRunning ? 'dog-run' : ''}
          style={{ display: 'inline-block' }}
        >
          <div className="flex flex-col items-center">
            <img src="/images/dog.png" alt="까꿍이" className="w-24 h-24 object-contain drop-shadow-md" />
            <p className="text-lg text-[#5da2d5] font-medium mt-1 tracking-wider">까꿍!</p>
          </div>
        </div>
      </div>

      {/* 터치 안내 */}
      <div
        className={`absolute bottom-24 transition-all duration-500 ${
          isReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="animate-pulse">
          <p className="text-base text-[#a5c8e4] tracking-wider">
            터치하여 청첩장을 열어보세요
          </p>
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        @keyframes dogTrot {
          0% { transform: translateX(-120px) translateY(0) rotate(-5deg); }
          10% { transform: translateX(-96px) translateY(-8px) rotate(3deg); }
          20% { transform: translateX(-72px) translateY(0) rotate(-3deg); }
          30% { transform: translateX(-48px) translateY(-8px) rotate(3deg); }
          40% { transform: translateX(-24px) translateY(0) rotate(-3deg); }
          50% { transform: translateX(0) translateY(-8px) rotate(3deg); }
          60% { transform: translateX(0) translateY(0) rotate(0deg); }
          70% { transform: translateX(0) translateY(-4px) rotate(0deg); }
          80% { transform: translateX(0) translateY(0) rotate(0deg); }
          100% { transform: translateX(0) translateY(0) rotate(0deg); }
        }
        .dog-run {
          animation: dogTrot 1.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
