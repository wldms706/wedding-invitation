import React, { useState, useRef } from 'react';
import { IntroSplash } from './components/IntroSplash';
import { Hero } from './components/Hero';
import { InvitationContent } from './components/InvitationContent';
import { PhotoGallery } from './components/PhotoGallery';
import { WeddingLocation } from './components/WeddingLocation';
import { AccountSection } from './components/AccountSection';
import { RSVPSection } from './components/RSVPSection';
import { RSVPPopup } from './components/RSVPPopup';
import { ConfigModal } from './components/ConfigModal';
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
import { Heart } from 'lucide-react';

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showConfig, setShowConfig] = useState(false);
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

      {/* Configuration Toggle */}
      <button
        onClick={() => setShowConfig(true)}
        className="fixed bottom-6 right-6 z-50 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg border border-[#a5c8e4] hover:scale-110 transition-all text-[#5da2d5]"
      >
        <Heart size={20} fill="#5da2d5" />
      </button>

      {/* Main Sections */}
      <Hero couple={couple} />

      {/* Content wrapper with more space from Hero */}
      <div className="px-8 space-y-32 py-32 bg-white/40 backdrop-blur-[2px]">
        <InvitationContent greeting={greeting} couple={couple} />

        <CoupleProfile />

        <InterviewSection />

        <OurStory />

        <CalendarSection />
        <TimingSection />
        <DressCodeSection />
        <LuckyDrawNotice />

        <PhotoGallery />
        <GuestPhotoSection />
        <WeddingLocation couple={couple} />
        <ContactSection couple={couple} />
        <AccountSection couple={couple} />
        <div ref={rsvpRef}>
          <RSVPSection />
        </div>
        <DesignLineup />
      </div>

      <footer className="text-center py-20 text-[#6a9bc0] text-[10px] font-light tracking-[0.3em] uppercase">
        <p>&copy; 2026 {couple.groomName} & {couple.brideName} WEDDING<br/>DESIGNED BY THE URBAN</p>
      </footer>

      {/* RSVP Popup */}
      {!showIntro && (
        <RSVPPopup
          couple={couple}
          onRSVPClick={() => {
            rsvpRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }}
        />
      )}

      {showConfig && (
        <ConfigModal
          couple={couple}
          setCouple={setCouple}
          setGreeting={setGreeting}
          onClose={() => setShowConfig(false)}
        />
      )}
    </div>
  );
};

export default App;
