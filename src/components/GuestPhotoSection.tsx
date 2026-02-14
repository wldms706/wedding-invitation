import React, { useState, useRef } from 'react';
import { CameraIcon, Upload, CheckCircle, Loader2, User } from 'lucide-react';

// Google Apps Script 배포 URL (배포 후 여기에 URL 붙여넣기)
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby4g7RU7amTq6gdH_2h-kRvX5L3h8-4ZYNKYcl4FmYQJm98jqi29CPNg5Q3HTUgWoz3zQ/exec';

export const GuestPhotoSection: React.FC = () => {
  const [uploading, setUploading] = useState(false);
  const [uploadCount, setUploadCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [done, setDone] = useState(false);
  const [uploaderName, setUploaderName] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const toBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        resolve(result.split(',')[1]);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    setUploadCount(0);
    setTotalCount(files.length);
    setDone(false);

    for (let i = 0; i < files.length; i++) {
      try {
        const file = files[i];
        const base64 = await toBase64(file);

        await fetch(APPS_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            file: base64,
            fileName: uploaderName ? `${uploaderName}_${file.name}` : file.name,
            mimeType: file.type,
          }),
        });

        setUploadCount(i + 1);
      } catch {
        // 개별 파일 실패 시 다음 파일 계속 진행
      }
    }

    setUploading(false);
    setDone(true);

    if (fileRef.current) fileRef.current.value = '';
  };

  return (
    <div className="text-center animate-fade-in-up">
      <p className="text-[10px] tracking-[0.5em] text-[#6a9bc0] uppercase mb-8 font-light">
        Guest Photo
      </p>

      {/* 강조 카드 */}
      <div className="bg-gradient-to-b from-[#e8f4fd] to-[#f0f8ff] rounded-2xl p-8 border border-[#5da2d5]/20 shadow-lg shadow-[#5da2d5]/10">
        <div className="w-16 h-16 rounded-full bg-[#5da2d5]/10 flex items-center justify-center mx-auto mb-5">
          <CameraIcon size={28} className="text-[#5da2d5]" strokeWidth={1.5} />
        </div>

        <p className="text-xl tracking-[0.15em] text-[#2c3e50] font-medium mb-2">
          우리의 스냅 작가가
        </p>
        <p className="text-xl tracking-[0.15em] text-[#5da2d5] font-medium mb-5">
          되어주세요!
        </p>

        <p className="text-sm text-[#3d5568] leading-relaxed mb-4">
          결혼식 당일 찍어주신 사진을<br />
          공유해 주시면 소중히 간직하겠습니다
        </p>

        {/* 스타벅스 이벤트 안내 */}
        <div className="bg-white/80 rounded-xl px-5 py-4 mb-8 border border-[#5da2d5]/15">
          <p className="text-sm text-[#2c3e50] font-medium mb-1">
            제일 정성스럽게 예쁘게 찍어주신 분께
          </p>
          <p className="text-base text-[#5da2d5] font-bold tracking-wide">
            스타벅스 기프티콘 3만원을 쏩니다!
          </p>
        </div>

        {/* 이름 입력 */}
        <div className="relative mb-6">
          <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a5c8e4]" />
          <input
            type="text"
            value={uploaderName}
            onChange={(e) => setUploaderName(e.target.value)}
            placeholder="성함을 입력해주세요"
            className="w-full pl-10 pr-4 py-3 bg-white border border-[#a5c8e4]/20 rounded-lg text-sm text-[#3d5568] placeholder-[#8fb8d4] focus:outline-none focus:border-[#5da2d5]/40 transition-colors font-[inherit]"
          />
        </div>

        {/* Hidden file input */}
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleUpload}
          className="hidden"
        />

        {uploading ? (
          <div className="flex flex-col items-center gap-3">
            <Loader2 size={24} className="text-[#5da2d5] animate-spin" />
            <p className="text-sm text-[#3d5568]">
              업로드 중... ({uploadCount}/{totalCount})
            </p>
          </div>
        ) : done ? (
          <div className="flex flex-col items-center gap-3">
            <CheckCircle size={24} className="text-green-500" />
            <p className="text-sm text-[#3d5568] mb-4">
              {totalCount}장 업로드 완료! 감사합니다
            </p>
            <button
              onClick={() => { setDone(false); fileRef.current?.click(); }}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#5da2d5] text-white text-sm tracking-wider hover:bg-[#4a8fc2] transition-colors shadow-md"
            >
              <Upload size={14} />
              추가 업로드
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              if (!uploaderName.trim()) {
                alert('성함을 입력해주세요!');
                return;
              }
              fileRef.current?.click();
            }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#5da2d5] text-white text-sm tracking-wider hover:bg-[#4a8fc2] transition-colors shadow-md"
          >
            <CameraIcon size={14} />
            사진 업로드하기
          </button>
        )}
      </div>
    </div>
  );
};
