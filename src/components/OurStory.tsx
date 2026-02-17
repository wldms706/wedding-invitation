import React from 'react';
import { Heart, Camera, Film } from 'lucide-react';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  mediaType: 'photo' | 'video';
  mediaSrc?: string;
  align: 'left' | 'right';
  landscape?: boolean;
}

const timeline: TimelineItem[] = [
  {
    date: '2025.04.20',
    title: '첫만남',
    description: '저희는 범블이라는 어플에서 만났어요.\n"각자 외국인을 만나고싶었거든요? 그런데 자유로운 영혼같은 저희 둘이 만났지 뭐에요?"',
    mediaType: 'video',
    mediaSrc: '/images/story/first-meet.mp4',
    align: 'left',
  },
  {
    date: '2025.05.20',
    title: '30일째',
    description: '만난지 한달만에 결혼을 약속하게 되었어요.',
    mediaType: 'video',
    mediaSrc: '/images/story/30days.mp4',
    align: 'right',
    landscape: true,
  },
  {
    date: '2025.08',
    title: '4개월',
    description: '4개월때부터\n함께했어요.',
    mediaType: 'photo',
    mediaSrc: '/images/story/4months.jpg',
    align: 'left',
  },
  {
    date: '2026.04.19',
    title: 'Wedding Day!',
    description: '만난지 1년 되는 날,\n저희는 부부가 됩니다.',
    mediaType: 'photo',
    mediaSrc: '/images/story/wedding-day.jpg',
    align: 'right',
  },
];

export const OurStory: React.FC = () => {
  return (
    <div className="text-center animate-fade-in-up">
      <p className="text-[13px] tracking-[0.5em] text-[#7a9cbc] uppercase mb-8 font-light">
        Our Story
      </p>

      <div className="flex justify-center mb-6">
        <Heart size={20} className="text-[#8faabe]" strokeWidth={1} />
      </div>

      <p className="text-xl tracking-[0.2em] text-[#1a1a1a] font-light mb-12">
        우리의 이야기
      </p>

      {/* Timeline */}
      <div>
        <div className="space-y-14">
          {timeline.map((item, index) => (
            <div key={index}>
              {/* Landscape layout - full width */}
              {item.landscape ? (
                <div className="pt-2">
                  {/* Text centered above */}
                  <div className="text-center mb-4 px-4">
                    <p className="text-[13px] text-[#7a9cbc] tracking-wider mb-1.5 font-light">
                      {item.date}
                    </p>
                    <p className="text-base text-[#1a1a1a] tracking-wider mb-2 font-medium">
                      {item.title}
                    </p>
                    <p className="text-sm text-[#1a1a1a] font-light leading-relaxed whitespace-pre-line">
                      {item.description}
                    </p>
                  </div>
                  {/* Full width landscape video */}
                  {item.mediaSrc && item.mediaType === 'video' ? (
                    <video
                      src={item.mediaSrc}
                      className="w-full aspect-video object-cover rounded-lg shadow-md"
                      autoPlay
                      loop
                      playsInline
                      muted
                    />
                  ) : item.mediaSrc ? (
                    <img
                      src={item.mediaSrc}
                      alt={item.title}
                      className="w-full aspect-video object-cover rounded-lg shadow-md"
                    />
                  ) : null}
                </div>
              ) : (
                /* Normal left/right layout */
                <div className={`flex items-start gap-4 ${item.align === 'left' ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Media */}
                  <div className="w-[45%] flex-shrink-0">
                    <div className={`${item.align === 'left' ? 'mr-2' : 'ml-2'}`}>
                      {item.mediaSrc ? (
                        item.mediaType === 'video' ? (
                          <video
                            src={item.mediaSrc}
                            className="w-full aspect-[4/5] object-cover rounded-lg shadow-md"
                            autoPlay
                            loop
                            playsInline
                            muted
                          />
                        ) : (
                          <img
                            src={item.mediaSrc}
                            alt={item.title}
                            className="w-full aspect-[4/5] object-cover rounded-lg shadow-md"
                          />
                        )
                      ) : (
                        <div className="w-full aspect-[4/5] rounded-lg bg-gradient-to-br from-[#e8f4fd] to-[#d4e8f5] border border-[#a5c8e4]/20 flex flex-col items-center justify-center gap-2 shadow-sm">
                          {item.mediaType === 'video' ? (
                            <Film size={24} className="text-[#8faabe]" />
                          ) : (
                            <Camera size={24} className="text-[#8faabe]" />
                          )}
                          <span className="text-[13px] text-[#7a9cbc] tracking-wider">
                            {item.mediaType === 'video' ? 'VIDEO' : 'PHOTO'}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Text */}
                  <div className={`w-[45%] flex-shrink-0 pt-4 ${item.align === 'left' ? 'text-left' : 'text-right'}`}>
                    <p className="text-[13px] text-[#7a9cbc] tracking-wider mb-1.5 font-light">
                      {item.date}
                    </p>
                    <p className="text-base text-[#1a1a1a] tracking-wider mb-2 font-medium">
                      {item.title}
                    </p>
                    <p className="text-sm text-[#1a1a1a] font-light leading-relaxed whitespace-pre-line">
                      {item.description}
                    </p>
                  </div>
                </div>
              )}

              {/* Divider between items */}
              {index < timeline.length - 1 && (
                <div className="flex justify-center mt-8">
                  <div className="w-[1px] h-8 bg-[#8faabe]/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* End heart */}
        <div className="flex justify-center mt-8">
          <Heart size={12} className="text-[#2b5797]" fill="#2b5797" />
        </div>
      </div>
    </div>
  );
};
