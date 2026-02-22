import React, { useMemo } from 'react';

const PETAL_COUNT = 15;

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
  swayAmount: number;
}

export const FlowerPetals: React.FC = () => {
  const petals = useMemo<Petal[]>(() => {
    return Array.from({ length: PETAL_COUNT }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 6,
      size: 10 + Math.random() * 8,
      opacity: 0.4 + Math.random() * 0.3,
      swayAmount: 30 + Math.random() * 40,
    }));
  }, []);

  return (
    <>
      <style>{`
        @keyframes petalFall {
          0% {
            transform: translateY(-20px) translateX(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: var(--petal-opacity);
          }
          90% {
            opacity: var(--petal-opacity);
          }
          100% {
            transform: translateY(100vh) translateX(var(--sway)) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
      <div className="fixed inset-0 z-[5] pointer-events-none overflow-hidden">
        {petals.map((petal) => (
          <div
            key={petal.id}
            style={{
              position: 'absolute',
              left: `${petal.left}%`,
              top: '-20px',
              width: `${petal.size}px`,
              height: `${petal.size}px`,
              ['--petal-opacity' as string]: petal.opacity,
              ['--sway' as string]: `${petal.swayAmount}px`,
              animation: `petalFall ${petal.duration}s ${petal.delay}s ease-in-out infinite`,
              opacity: 0,
            }}
          >
            <svg
              viewBox="0 0 32 32"
              width={petal.size}
              height={petal.size}
              style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.05))' }}
            >
              <ellipse cx="16" cy="14" rx="8" ry="12" fill="#f4c2d0" opacity="0.9" transform="rotate(-15 16 16)" />
              <ellipse cx="16" cy="14" rx="6" ry="10" fill="#f9d5df" opacity="0.7" transform="rotate(10 16 16)" />
            </svg>
          </div>
        ))}
      </div>
    </>
  );
};
