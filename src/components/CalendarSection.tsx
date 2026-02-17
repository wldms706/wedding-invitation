import React from 'react';

export const CalendarSection: React.FC = () => {
  // 2026년 4월 달력 데이터
  const year = 2026;
  const month = 4;
  const weddingDay = 19;

  const daysInMonth = new Date(year, month, 0).getDate();
  const firstDayOfWeek = new Date(year, month - 1, 1).getDay(); // 0=Sun

  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
  const days: (number | null)[] = [];

  // Fill empty slots before first day
  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    days.push(d);
  }

  return (
    <div className="text-center animate-fade-in-up">
      <p className="text-[13px] tracking-[0.5em] text-[#7a9cbc] uppercase mb-8 font-light">
        Calendar
      </p>

      <p className="text-xl tracking-[0.3em] text-[#1a1a1a] font-light mb-8">
        2026년 4월
      </p>

      {/* Day names */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map((name, i) => (
          <div
            key={name}
            className={`text-sm tracking-wider py-1 font-light ${
              i === 0 ? 'text-[#c48a8a]' : i === 6 ? 'text-[#2b5797]' : 'text-[#7a9cbc]'
            }`}
          >
            {name}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, i) => (
          <div
            key={i}
            className={`relative py-2 text-base font-light ${
              day === null
                ? ''
                : day === weddingDay
                ? 'text-white'
                : i % 7 === 0
                ? 'text-[#c48a8a]'
                : i % 7 === 6
                ? 'text-[#2b5797]'
                : 'text-[#1a1a1a]'
            }`}
          >
            {day !== null && day === weddingDay && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-9 h-9 rounded-full bg-[#2b5797]" />
              </div>
            )}
            <span className="relative z-10">{day}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 w-12 h-[1px] bg-[#8faabe]/40 mx-auto" />
      <p className="mt-4 text-sm tracking-[0.2em] text-[#7a9cbc] font-light">
        일요일 오후 2시 20분
      </p>
    </div>
  );
};
