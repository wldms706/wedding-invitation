import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const BgmPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    const audio = new Audio('/bgm.mp3');
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;

    const tryPlay = () => {
      if (startedRef.current || !audioRef.current) return;
      audioRef.current.play().then(() => {
        startedRef.current = true;
        setIsPlaying(true);
        cleanup();
      }).catch(() => {});
    };

    const cleanup = () => {
      document.removeEventListener('click', tryPlay, true);
      document.removeEventListener('touchstart', tryPlay, true);
      document.removeEventListener('touchend', tryPlay, true);
      document.removeEventListener('scroll', tryPlay, true);
    };

    // 즉시 시도 (일부 브라우저에서 동작)
    tryPlay();

    // 유저 인터랙션 대기 (capture phase로 빠르게 감지)
    document.addEventListener('click', tryPlay, true);
    document.addEventListener('touchstart', tryPlay, true);
    document.addEventListener('touchend', tryPlay, true);
    document.addEventListener('scroll', tryPlay, true);

    return () => {
      cleanup();
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        startedRef.current = true;
        setIsPlaying(true);
      }).catch(() => {});
    }
  };

  return (
    <button
      onClick={togglePlay}
      className="fixed top-4 right-4 z-[90] w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center transition-all hover:bg-white"
      aria-label={isPlaying ? '음악 끄기' : '음악 켜기'}
    >
      {isPlaying ? (
        <Volume2 size={18} className="text-[#2b5797]" />
      ) : (
        <VolumeX size={18} className="text-[#999]" />
      )}
    </button>
  );
};
