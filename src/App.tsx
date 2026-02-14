import React, { useState, useRef } from 'react';
import { IntroSplash } from './components/IntroSplash';
import { Hero } from './components/Hero';
import { InvitationContent } from './components/InvitationContent';
import { PhotoGallery } from './components/PhotoGallery';
import { WeddingLocation } from './components/WeddingLocation';
import { AccountSection } from './components/AccountSection';
import { RSVPSection } from './components/RSVPSection';
import { RSVPPopup } from './components/RSVPPopup';

import { DesignLineup } from './components/DesignLineup';
import { CalendarSection } from './components/CalendarSection';
import { TimingSection } from './components/TimingSection';
import { DressCodeSection } from './components/DressCodeSection';
import { LuckyDrawNotice } from './components/LuckyDrawNotice';
import { GuestPhotoSection } from './components/GuestPhotoSection';
import { OurStory } from './components/OurStory';
import { CoupleProfile } from './components/CoupleProfile';
import { ContactSection } from './components/ContactSection';
import { InterviewSection } from './components/InterviewSection';
import { CoupleInfo } from './types';


const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);

  const rsvpRef = useRef<HTMLDivElement>(null);
  const [couple, setCouple] = useState<CoupleInfo>({
    groomName: '김선재',
    brideName: '정지은',
    groomFather: '김승환',
    groomMother: '지수진',
    brideFather: '정상근',
    brideMother: '정은희',
    groomPhone: '010-4159-3665',
    bridePhone: '010-3757-3918',
    groomFatherPhone: '010-2269-5695',
    groomMotherPhone: '010-7570-7115',
    brideFatherPhone: '010-9121-7323',
    brideMotherPhone: '010-3994-3918',
    groomAccount: 'NH농협은행 3022071830971',
    groomFatherAccount: '하나은행 300-18-01140-5',
    groomMotherAccount: '카카오뱅크 3333-11-9535804',
    brideAccount: '카카오뱅크 3333058769984',
    brideFatherAccount: '',
    brideMotherAccount: '수협 202055147606',
    weddingDate: '2026. 04. 19 (일)',
    weddingLocation: '평택 티웨딩 투게더홀',
    weddingTime: '오후 2:20'
  });
  const [greeting, setGreeting] = useState("서로의 다름을 사랑으로 채워가며, \n평생의 동반자가 되기로 약속했습니다. \n귀한 발걸음으로 저희의 시작을 축복해 주세요.");

  return (
    <div className="relative max-w-md mx-auto min-h-screen shadow-2xl bg-[#f0f8ff] text-[#2c3e50] overflow-x-hidden pb-10">
      {/* Intro Splash */}
      {showIntro && <IntroSplash onComplete={() => setShowIntro(false)} />}

      {/* Main Sections */}
      {!showIntro && <Hero couple={couple} />}

      {/* Content wrapper with more space from Hero */}
      {!showIntro && <div className="px-6 space-y-10 py-20 bg-white/40">
        <div className="section-card">
          <InvitationContent greeting={greeting} couple={couple} />
        </div>

        <div className="section-card">
          <CoupleProfile />
        </div>

        <div className="section-card">
          <InterviewSection />
        </div>

        <div className="section-card">
          <OurStory />
        </div>

        <div className="section-card">
          <CalendarSection />
        </div>
        <div className="section-card">
          <TimingSection />
        </div>
        <div className="section-card">
          <DressCodeSection />
        </div>
        <div className="section-card">
          <LuckyDrawNotice />
        </div>

        <div className="section-card">
          <PhotoGallery />
        </div>
        <div className="section-card">
          <GuestPhotoSection />
        </div>
        <div className="section-card">
          <WeddingLocation couple={couple} />
        </div>
        <div className="section-card">
          <ContactSection couple={couple} />
        </div>
        <div className="section-card">
          <AccountSection couple={couple} />
        </div>
        <div ref={rsvpRef} className="section-card">
          <RSVPSection />
        </div>
        <DesignLineup />
      </div>}

      {!showIntro && <footer className="text-center py-20 text-[#6a9bc0] text-[13px] font-light tracking-[0.3em] uppercase">
        <p>&copy; 2026 {couple.groomName} & {couple.brideName} WEDDING<br/>DESIGNED BY JIEUN</p>
      </footer>}

      {/* RSVP Popup */}
      {!showIntro && (
        <RSVPPopup
          couple={couple}
          onRSVPClick={() => {
            rsvpRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }}
        />
      )}

    </div>
  );
};

export default App;
