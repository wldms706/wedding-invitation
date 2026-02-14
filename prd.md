
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { InvitationContent } from './components/InvitationContent';
import { PhotoGallery } from './components/PhotoGallery';
import { WeddingLocation } from './components/WeddingLocation';
import { AccountSection } from './components/AccountSection';
import { RSVPSection } from './components/RSVPSection';
import { ConfigModal } from './components/ConfigModal';
import { DesignLineup } from './components/DesignLineup';
import { CalendarSection } from './components/CalendarSection';
import { TimingSection } from './components/TimingSection';
import { DressCodeSection } from './components/DressCodeSection';
import { CoupleInfo } from './types';
import { Heart } from 'lucide-react';

const App: React.FC = () => {
  const [showConfig, setShowConfig] = useState(false);
  const [couple, setCouple] = useState<CoupleInfo>({
    groomName: '강호진',
    brideName: '이지연',
    groomPhone: '010-1234-5678',
    bridePhone: '010-9876-5432',
    groomAccount: '신한은행 110-123-456789',
    brideAccount: '국민은행 123456-78-901234',
    weddingDate: '2025. 10. 25 (토)',
    weddingLocation: '아펠가모 선릉 로비홀',
    weddingTime: '오후 12:30'
  });
  const [greeting, setGreeting] = useState("서로의 다름을 사랑으로 채워가며, \n평생의 동반자가 되기로 약속했습니다. \n귀한 발걸음으로 저희의 시작을 축복해 주세요.");

  return (
    <div className="relative max-w-md mx-auto min-h-screen shadow-2xl bg-[#f0f8ff] text-[#2c3e50] overflow-x-hidden pb-10">
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
        
        <CalendarSection />
        <TimingSection />
        <DressCodeSection />
        
        <PhotoGallery />
        <WeddingLocation couple={couple} />
        <AccountSection couple={couple} />
        <RSVPSection />
        <DesignLineup />
      </div>

      <footer className="text-center py-20 text-[#89b4d8] text-[10px] font-light tracking-[0.3em] uppercase">
        <p>&copy; 2025 {couple.groomName} & {couple.brideName} WEDDING<br/>DESIGNED BY THE URBAN</p>
      </footer>

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
