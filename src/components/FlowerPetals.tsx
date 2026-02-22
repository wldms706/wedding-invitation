import React, { useMemo } from 'react';

const PETAL_COUNT = 12;

const FLOWER_COLORS = [
  { outer: '#f4c2d0', inner: '#f9d5df', center: '#e8a0b4' },
  { outer: '#e8c8d8', inner: '#f2dce6', center: '#d4a0b8' },
  { outer: '#fcd5ce', inner: '#fde8e2', center: '#f0b8a8' },
];

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
  swayAmount: number;
  colorIndex: number;
  spinSpeed: number;
}

export const FlowerPetals: React.FC = () => {
  const petals = useMemo<Petal[]>(() => {
    return Array.from({ length: PETAL_COUNT }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 7,
      size: 14 + Math.random() * 10,
      opacity: 0.35 + Math.random() * 0.25,
      swayAmount: 20 + Math.random() * 50,
      colorIndex: Math.floor(Math.random() * FLOWER_COLORS.length),
      spinSpeed: 8 + Math.random() * 6,
    }));
  }, []);

  return (
    <>
      <style>{`
        @keyframes flowerFall {
          0% {
            transform: translateY(-30px) translateX(0px);
            opacity: 0;
          }
          8% {
            opacity: var(--petal-opacity);
          }
          50% {
            transform: translateY(50vh) translateX(var(--sway));
          }
          92% {
            opacity: var(--petal-opacity);
          }
          100% {
            transform: translateY(100vh) translateX(calc(var(--sway) * -0.5));
            opacity: 0;
          }
        }
        @keyframes flowerSpin {
          0% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(90deg) scale(0.9); }
          50% { transform: rotate(180deg) scale(1); }
          75% { transform: rotate(270deg) scale(0.9); }
          100% { transform: rotate(360deg) scale(1); }
        }
      `}</style>
      <div className="fixed inset-0 z-[5] pointer-events-none overflow-hidden">
        {petals.map((petal) => {
          const colors = FLOWER_COLORS[petal.colorIndex];
          return (
            <div
              key={petal.id}
              style={{
                position: 'absolute',
                left: `${petal.left}%`,
                top: '-30px',
                width: `${petal.size}px`,
                height: `${petal.size}px`,
                ['--petal-opacity' as string]: petal.opacity,
                ['--sway' as string]: `${petal.swayAmount}px`,
                animation: `flowerFall ${petal.duration}s ${petal.delay}s ease-in-out infinite`,
                opacity: 0,
              }}
            >
              <svg
                viewBox="0 0 40 40"
                width={petal.size}
                height={petal.size}
                style={{
                  animation: `flowerSpin ${petal.spinSpeed}s linear infinite`,
                  filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.06))',
                }}
              >
                {/* 꽃잎 5장 */}
                {[0, 72, 144, 216, 288].map((angle) => (
                  <ellipse
                    key={angle}
                    cx="20"
                    cy="10"
                    rx="5.5"
                    ry="9"
                    fill={colors.outer}
                    transform={`rotate(${angle} 20 20)`}
                  />
                ))}
                {/* 안쪽 꽃잎 */}
                {[36, 108, 180, 252, 324].map((angle) => (
                  <ellipse
                    key={angle}
                    cx="20"
                    cy="12"
                    rx="3.5"
                    ry="6"
                    fill={colors.inner}
                    transform={`rotate(${angle} 20 20)`}
                  />
                ))}
                {/* 꽃 중심 */}
                <circle cx="20" cy="20" r="3.5" fill={colors.center} />
                <circle cx="20" cy="20" r="2" fill={colors.inner} />
              </svg>
            </div>
          );
        })}
      </div>
    </>
  );
};
