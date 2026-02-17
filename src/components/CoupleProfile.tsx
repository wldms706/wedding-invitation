import React from 'react';

export const CoupleProfile: React.FC = () => {
  return (
    <div className="text-center animate-fade-in-up">
      <p className="text-[13px] tracking-[0.5em] text-[#7a9cbc] uppercase mb-8 font-light">
        About Us
      </p>

      <div className="grid grid-cols-2 gap-4">
        {/* 신랑 */}
        <div>
          <p className="text-[13px] text-[#2b5797] tracking-wider mb-3">
            신랑 <span className="text-[#1a1a1a] font-medium">김선재</span>
          </p>

          {/* Profile photo */}
          <div className="w-full aspect-[3/4] rounded-xl overflow-hidden mb-3 shadow-sm">
            <img
              src="/images/sunjae-profile.jpg"
              alt="신랑"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-sm text-[#1a1a1a] font-light mb-1.5">
            2000년생, 사랑에 몰입하며
          </p>
          <p className="text-sm text-[#1a1a1a] font-light mb-2">
            함께 성장하고 싶은 <span className="text-[#2b5797] font-medium">ENTJ</span>
          </p>

          <div className="flex flex-wrap justify-center gap-1 mb-3">
            <span className="text-[13px] text-[#7a9cbc]">#운동러버</span>
            <span className="text-[13px] text-[#7a9cbc]">#기술자</span>
          </div>

          <p className="text-sm text-[#1a1a1a] font-light leading-relaxed">
            아내를 빛나게 해주는<br />남편이 되겠습니다.
          </p>
        </div>

        {/* 신부 */}
        <div>
          <p className="text-[13px] text-[#c97b8e] tracking-wider mb-3">
            신부 <span className="text-[#1a1a1a] font-medium">정지은</span>
          </p>

          {/* Profile photo */}
          <div className="w-full aspect-[3/4] rounded-xl overflow-hidden mb-3 shadow-sm">
            <img
              src="/images/jieun-profile.jpg"
              alt="신부"
              className="w-full h-full object-cover scale-125"
            />
          </div>

          <p className="text-sm text-[#1a1a1a] font-light mb-1.5">
            1993년생, 말보다 행동과
          </p>
          <p className="text-sm text-[#1a1a1a] font-light mb-2">
            신뢰로 애정을 표현하는 <span className="text-[#c97b8e] font-medium">ESTJ</span>
          </p>

          <div className="flex flex-wrap justify-center gap-1 mb-3">
            <span className="text-[13px] text-[#7a9cbc]">#똑순이</span>
            <span className="text-[13px] text-[#7a9cbc]">#N잡러</span>
          </div>

          <p className="text-sm text-[#1a1a1a] font-light leading-relaxed">
            당신의 빛을 알아보고<br />지켜주는 아내가 되겠습니다.
          </p>
        </div>
      </div>
    </div>
  );
};
