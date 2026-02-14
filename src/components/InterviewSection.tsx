import React, { useState } from 'react';
import { MessageCircle, Heart, X } from 'lucide-react';

interface QnA {
  question: string;
  groomAnswer: string;
  brideAnswer: string;
}

interface SeriousQnA {
  question: string;
  groomAnswer?: string;
  brideAnswer?: string;
}

const funnyInterviews: QnA[] = [
  {
    question: '결혼을 결심한 결정적 이유는?',
    groomAnswer: '평생 같이 싸워도 되겠다는 확신이 들었습니다.',
    brideAnswer: '싸워도 결국 내가 이길 것 같아서요.',
  },
  {
    question: '서로의 첫인상은?',
    groomAnswer: '생각보다 무서웠습니다.',
    brideAnswer: '생각보다 순했습니다. (지금도 순함)',
  },
  {
    question: '결혼 후 각오 한마디',
    groomAnswer: '아내를 빛나게 해주는 남편이 되겠습니다.',
    brideAnswer: '남편이 길을 잃지 않게 잘 관리하겠습니다.',
  },
  {
    question: '가정의 의사결정권자는?',
    groomAnswer: '협의입니다.',
    brideAnswer: '최종 협의는 저입니다.',
  },
  {
    question: '싸우면 누가 먼저 사과하나요?',
    groomAnswer: '제가 합니다.',
    brideAnswer: '네, 맞습니다.',
  },
];

const seriousInterviews: SeriousQnA[] = [
  {
    question: '처음 만났을 때 어떠셨나요?',
    groomAnswer: '처음 만났던 날이 아직도 선명하게 기억납니다.\n\n한국에서 쉽게 보기 어려운 당당한 분위기와\n자신의 삶을 주체적으로 살아가는 모습이 인상 깊었습니다.\n짧은 시간 안에도 얼마나 단단하게 살아온 사람인지 느껴졌습니다.\n\n5시간 정도 함께 있었는데\n시간이 어떻게 지나갔는지도 모를 만큼 대화가 즐거웠고,\n그 안에서 저는 많은 자극과 배움을 받았습니다.\n\n그날 문득 이런 생각이 들었습니다.\n\'이 여자와 함께라면 앞으로 어떤 일이 와도\n무서울 게 없겠다.\'\n\n그리고 동시에,\n\'이 사람에게서 내가 배울 점이 참 많겠구나.\'\n\n집으로 돌아가는 길에\n자연스럽게 제 미래를 떠올렸고,\n그 안에는 이미 이 사람이 함께 있었습니다.\n\n그래서 저는 처음 만난 날부터\n이 사람과 결혼하고 싶다는 생각을 했습니다.',
    brideAnswer: '사실 저는 결혼이 제 인생에 있을 거라고\n생각해본 적이 없었어요.\n\n혼자 지키며 사는 데 익숙했고,\n책임도 많았고,\n누군가에게 기대기보다는 버텨내는 쪽이었거든요.\n\n그런데 선재는 제 안의 모습을\n알아봐 준 사람이었어요.\n마치 보석을 먼저 발견한 사람처럼요.\n\n부산으로 가던 어느 날,\n앞으로의 진로를 두고 고민을 털어놓았는데\n이 사람이 이렇게 말해줬어요.\n\n"자기는 주체적인 사람이니까\n뭐든 잘 해낼 수 있을 것 같아.\n나는 자기를 믿어."\n\n그 말을 듣는 순간,\n처음으로 누군가에게 든든하게\n지지받는 느낌을 받았어요.\n\n그날, 이 사람과 함께라면\n더 단단하게 살아갈 수 있겠다고 생각했어요.\n\n그게 제가 결혼을 결심한 이유입니다.',
  },
];

export const InterviewSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="text-center animate-fade-in-up">
        <p className="text-[10px] tracking-[0.5em] text-[#6a9bc0] uppercase mb-8 font-light">
          Interview
        </p>

        <div className="flex justify-center mb-6">
          <MessageCircle size={20} className="text-[#a5c8e4]" strokeWidth={1} />
        </div>

        <p className="text-lg tracking-[0.2em] text-[#2c3e50] font-light mb-4">
          웨딩 인터뷰
        </p>

        <p className="text-sm text-[#3d5f78] font-light leading-relaxed mb-6">
          두 분의 인터뷰를 준비했습니다.<br />
          인터뷰를 확인해보세요.
        </p>

        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#5da2d5] text-white text-sm tracking-wider hover:bg-[#4a8fc2] transition-colors shadow-md"
        >
          <MessageCircle size={14} />
          인터뷰 읽어보기
        </button>
      </div>

      {/* 모달 */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowModal(false)} />
          <div className="relative bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* 모달 헤더 */}
            <div className="sticky top-0 bg-white flex items-center justify-between px-6 py-4 border-b border-gray-100 rounded-t-2xl z-10">
              <p className="text-base text-[#2c3e50] tracking-wider font-medium">웨딩 인터뷰</p>
              <button onClick={() => setShowModal(false)} className="text-[#6a9bc0] hover:text-[#3d5f78] transition-colors">
                <X size={22} />
              </button>
            </div>

            {/* 모달 내용 */}
            <div className="p-6">
              {/* 재미있는 인터뷰 */}
              <div className="space-y-5">
                {funnyInterviews.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#f8fbff] rounded-lg p-4 border border-[#a5c8e4]/10 text-left"
                  >
                    <p className="text-sm text-[#5da2d5] font-medium mb-3 flex items-start gap-2">
                      <span className="text-[#6a9bc0] font-light">Q.</span>
                      {item.question}
                    </p>

                    <div className="mb-2 pl-2 border-l-2 border-[#5da2d5]/30">
                      <p className="text-[10px] text-[#5da2d5] tracking-wider mb-1 font-medium">
                        신랑
                      </p>
                      <p className="text-xs text-[#3d5568] font-light leading-relaxed">
                        {item.groomAnswer}
                      </p>
                    </div>

                    <div className="pl-2 border-l-2 border-[#e8a0b4]/30">
                      <p className="text-[10px] text-[#e8a0b4] tracking-wider mb-1 font-medium">
                        신부
                      </p>
                      <p className="text-xs text-[#3d5568] font-light leading-relaxed">
                        {item.brideAnswer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 진심 파트 전환 */}
              <div className="text-center py-8">
                <Heart size={14} className="text-[#e8a0b4] mx-auto mb-4" fill="#e8a0b4" />
                <p className="text-sm text-[#3d5f78] font-light leading-relaxed">
                  장난이었고…<br />
                  <span className="text-[#2c3e50] font-medium mt-1 inline-block">이제는 진짜 이야기입니다.</span>
                </p>
              </div>

              {/* 진심 인터뷰 */}
              <div className="space-y-5">
                {seriousInterviews.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#f8fbff] rounded-lg p-4 border border-[#a5c8e4]/10 text-left"
                  >
                    <p className="text-sm text-[#5da2d5] font-medium mb-3 flex items-start gap-2">
                      <span className="text-[#6a9bc0] font-light">Q.</span>
                      {item.question}
                    </p>

                    {item.groomAnswer && (
                      <div className={`pl-2 border-l-2 border-[#5da2d5]/30 ${item.brideAnswer ? 'mb-3' : ''}`}>
                        <p className="text-[10px] text-[#5da2d5] tracking-wider mb-1 font-medium">
                          신랑
                        </p>
                        <p className="text-xs text-[#3d5568] font-light leading-relaxed whitespace-pre-line">
                          {item.groomAnswer}
                        </p>
                      </div>
                    )}

                    {item.brideAnswer && (
                      <div className="pl-2 border-l-2 border-[#e8a0b4]/30">
                        <p className="text-[10px] text-[#e8a0b4] tracking-wider mb-1 font-medium">
                          신부
                        </p>
                        <p className="text-xs text-[#3d5568] font-light leading-relaxed whitespace-pre-line">
                          {item.brideAnswer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
