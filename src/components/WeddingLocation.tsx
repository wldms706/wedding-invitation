import React, { useEffect, useRef } from 'react';
import { CoupleInfo } from '../types';
import { MapPin, Navigation } from 'lucide-react';

interface WeddingLocationProps {
  couple: CoupleInfo;
}

export const WeddingLocation: React.FC<WeddingLocationProps> = ({ couple }) => {
  const address = '경기도 평택시 평택5로 34번길 6-5';
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  // 평택 티웨딩 정확한 좌표
  const lat = 36.9892710;
  const lng = 127.1131000;

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;
    const L = (window as any).L;
    if (!L) return;

    const map = L.map(mapRef.current, {
      center: [lat, lng],
      zoom: 16,
      zoomControl: false,
      attributionControl: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

    // 커스텀 마커 (SVG 아이콘)
    const customIcon = L.divIcon({
      html: `<div style="
        width:36px;height:36px;
        background:#5da2d5;
        border:3px solid white;
        border-radius:50% 50% 50% 0;
        transform:rotate(-45deg);
        box-shadow:0 2px 8px rgba(0,0,0,0.3);
        display:flex;align-items:center;justify-content:center;
      "><div style="transform:rotate(45deg);color:white;font-size:16px;">♥</div></div>`,
      iconSize: [36, 36],
      iconAnchor: [18, 36],
      popupAnchor: [0, -36],
      className: '',
    });

    const marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);
    marker.bindPopup(
      `<div style="text-align:center;font-size:13px;font-weight:500;padding:4px 8px;">
        평택 티웨딩<br/>
        <span style="font-size:11px;color:#666;font-weight:400;">투게더홀</span>
      </div>`
    ).openPopup();

    mapInstanceRef.current = map;

    // 지도 리사이즈 처리
    setTimeout(() => map.invalidateSize(), 100);
  }, []);

  return (
    <div className="text-center animate-fade-in-up">
      <p className="text-[13px] tracking-[0.5em] text-[#6a9bc0] uppercase mb-8 font-light">
        Location
      </p>

      <div className="flex justify-center mb-6">
        <MapPin size={20} className="text-[#a5c8e4]" strokeWidth={1} />
      </div>

      <p className="text-xl tracking-[0.2em] text-[#2c3e50] font-light mb-2">
        오시는 길
      </p>

      <p className="text-base text-[#3d5f78] font-light mb-1">
        {couple.weddingLocation}
      </p>
      <p className="text-sm text-[#6a9bc0] font-light mb-6">
        {address}
      </p>

      {/* Map */}
      <div className="w-full rounded-lg overflow-hidden mb-6 border border-[#a5c8e4]/20">
        <div
          ref={mapRef}
          style={{ width: '100%', height: '280px' }}
        />
      </div>

      {/* Map links */}
      <div className="flex justify-center gap-3 mb-8">
        <a
          href={`https://map.kakao.com/link/search/${encodeURIComponent(couple.weddingLocation)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-[#a5c8e4]/30 text-sm text-[#3d5f78] tracking-wider hover:bg-[#f0f8ff] transition-colors"
        >
          <Navigation size={12} />
          카카오맵
        </a>
        <a
          href="https://naver.me/xGIyKf7w"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-[#a5c8e4]/30 text-sm text-[#3d5f78] tracking-wider hover:bg-[#f0f8ff] transition-colors"
        >
          <Navigation size={12} />
          네이버지도
        </a>
      </div>

      {/* Transportation info */}
      <div className="text-left space-y-6 bg-white/60 rounded-lg p-6 border border-[#a5c8e4]/10">
        {/* 평택역에서 */}
        <div>
          <p className="text-base text-[#5da2d5] tracking-wider mb-2.5 font-medium flex items-center gap-2">
            <span>🚉</span> 평택역에서
          </p>
          <p className="text-sm text-[#3d5f78] font-light leading-relaxed">
            평택역/AK플라자 정류장에서 시내버스 탑승<br />
            → 평택시청앞 또는 평택고 하차 → 도보 약 3분
          </p>
          <p className="text-sm text-[#6a9bc0] font-light mt-2 leading-relaxed">
            🚌 1000, 1199, 1311, 1361/1371, 1452,<br />
            15, 20, 80, 810, 98, 777,<br />
            마을버스 10, 5, 55
          </p>
          <p className="text-sm text-[#6a9bc0] font-light mt-1.5">
            택시 이용 시 약 5분
          </p>
        </div>

        {/* 버스터미널에서 */}
        <div>
          <p className="text-base text-[#5da2d5] tracking-wider mb-2.5 font-medium flex items-center gap-2">
            <span>🚌</span> 버스터미널에서
          </p>
          <p className="text-sm text-[#3d5f78] font-light leading-relaxed">
            평택시외버스터미널/고속버스터미널에서<br />
            평택역으로 이동 후 시내버스 탑승<br />
            → 평택시청앞 또는 평택고 하차 → 도보 약 3분
          </p>
          <p className="text-sm text-[#6a9bc0] font-light mt-1.5">
            택시 이용 시 약 5분
          </p>
        </div>

        {/* 자가용 */}
        <div>
          <p className="text-base text-[#5da2d5] tracking-wider mb-2.5 font-medium flex items-center gap-2">
            <span>🚗</span> 자가용
          </p>
          <p className="text-sm text-[#3d5f78] font-light leading-relaxed">
            네비게이션 "평택 티웨딩" 검색
          </p>
          <p className="text-sm text-[#6a9bc0] font-light mt-1.5">
            건물 내 주차장 이용 가능
          </p>
        </div>
      </div>

    </div>
  );
};
