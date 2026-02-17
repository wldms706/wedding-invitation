import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface QnA {
  question: string;
  brideAnswer?: string;
  groomAnswer?: string;
  brideLabel?: string;
  groomLabel?: string;
  sharedAnswer?: string;
}

const interviews: QnA[] = [
  {
    question: '서로의 첫인상은 어땠나요?',
    brideAnswer: '처음 만났을 때 눈이 정말 맑고 반짝이는 사람이란 느낌이었어요.\n생각보다 차분하고 어른스러운 말들을 해서 \'이 친구 뭐지?\' 싶었던 기억이 나요.',
    groomAnswer: '밝고 당당한데 동시에 따뜻한 사람이란 느낌이 들었습니다.\n처음부터 이야기를 나누는 게 편했고, 계속 더 알고 싶어졌어요.',
  },
  {
    question: '이 사람과 결혼해야겠다고 느낀 순간은 언제였나요?',
    brideAnswer: '부산 가는 길이었어요. 제가 앞으로의 진로 고민을 이야기했는데\n"당신은 주체적인 사람이니까 뭐든 잘할 수 있을 것 같다"라고 말해줬어요.\n그 말을 듣는데 이상하게 마음이 놓이면서 눈물이 났고,\n이 사람은 내 편이 되어줄 사람이구나 느꼈어요.',
    groomAnswer: '이 사람과 함께라면 무서울 게 없겠다는 생각이 들었습니다.\n제가 배울 점이 정말 많은 사람이고,\n함께라면 더 좋은 사람이 될 수 있을 것 같았습니다.',
  },
  {
    question: '서로의 가장 큰 매력은 무엇인가요?',
    brideAnswer: '늘 저를 믿어주고 지지해주는 점이에요.\n제가 흔들릴 때마다 중심을 잡아주는 사람이에요.',
    groomAnswer: '어떤 상황에서도 스스로 길을 만들어가는 강인함이요.\n그리고 그 안에 있는 따뜻함이 가장 큰 매력입니다.',
  },
  {
    question: '앞으로 어떤 부부로 살아가고 싶나요?',
    brideAnswer: '힘든 순간에도 같은 편이라는 걸 잊지 않는 부부가 되고 싶어요.\n웃는 날이 더 많은 삶을 함께 만들고 싶습니다.',
    groomAnswer: '서로 존중하고 응원하면서 함께 성장하는 부부가 되고 싶습니다.\n평범한 하루도 행복하게 만드는 가정을 꾸리고 싶습니다.',
  },
  {
    question: '서로에게 한마디 해주세요.',
    brideLabel: '신부 → 신랑',
    groomLabel: '신랑 → 신부',
    brideAnswer: '내 편이 되어줘서 고마워요. 앞으로 잘 살아봐요 🤍',
    groomAnswer: '나와 결혼해줘서 고마워요. 앞으로 잘 부탁해요.',
  },
  {
    question: '신혼여행은 어디로 떠나나요? 가장 기대되는 것은?',
    sharedAnswer: '저희는 독일과 스위스로 유럽 여행을 떠납니다 ✈️\n낯선 도시를 함께 걸으며, 아무 걱정 없이 둘만의 시간을 보내는 순간들이 가장 기대됩니다.',
  },
  {
    question: '싸우면 먼저 사과하는 사람은 누구인가요? 😄',
    sharedAnswer: '아마… 둘 다 빨리 풀고 싶은 성격이라\n먼저 말 거는 사람이 그때그때 바뀔 것 같아요 😊',
  },
];

export const InterviewSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="text-center animate-fade-in-up">
        <p className="text-[13px] tracking-[0.5em] text-[#7a9cbc] uppercase mb-8 font-light">
          Interview
        </p>

        <div className="flex justify-center mb-6">
          <MessageCircle size={20} className="text-[#8faabe]" strokeWidth={1} />
        </div>

        <p className="text-xl tracking-[0.2em] text-[#1a1a1a] font-light mb-4">
          신랑 · 신부 인터뷰
        </p>

        <p className="text-base text-[#1a1a1a] font-light leading-relaxed mb-6">
          두 사람의 솔직한 이야기를<br />
          확인해보세요.
        </p>

        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#2b5797] text-white text-base tracking-wider hover:bg-[#1e3f6e] transition-colors shadow-md"
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
              <p className="text-lg text-[#1a1a1a] tracking-wider font-medium">💌 신랑 · 신부 인터뷰</p>
              <button onClick={() => setShowModal(false)} className="text-[#7a9cbc] hover:text-[#1a1a1a] transition-colors">
                <X size={22} />
              </button>
            </div>

            {/* 모달 내용 */}
            <div className="p-6">
              <div className="space-y-5">
                {interviews.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#f8fbff] rounded-lg p-4 border border-[#8faabe]/10 text-left"
                  >
                    <p className="text-base text-[#2b5797] font-medium mb-3 flex items-start gap-2">
                      <span className="text-[#7a9cbc] font-light">Q{index + 1}.</span>
                      {item.question}
                    </p>

                    {item.sharedAnswer ? (
                      <div className="pl-2 border-l-2 border-[#8faabe]/30">
                        <p className="text-sm text-[#1a1a1a] font-light leading-relaxed whitespace-pre-line">
                          {item.sharedAnswer}
                        </p>
                      </div>
                    ) : (
                      <>
                        {item.brideAnswer && (
                          <div className={`pl-2 border-l-2 border-[#c97b8e]/30 ${item.groomAnswer ? 'mb-3' : ''}`}>
                            <p className="text-[13px] text-[#c97b8e] tracking-wider mb-1 font-medium">
                              {item.brideLabel || '신부'}
                            </p>
                            <p className="text-sm text-[#1a1a1a] font-light leading-relaxed whitespace-pre-line">
                              {item.brideAnswer}
                            </p>
                          </div>
                        )}

                        {item.groomAnswer && (
                          <div className="pl-2 border-l-2 border-[#2b5797]/30">
                            <p className="text-[13px] text-[#2b5797] tracking-wider mb-1 font-medium">
                              {item.groomLabel || '신랑'}
                            </p>
                            <p className="text-sm text-[#1a1a1a] font-light leading-relaxed whitespace-pre-line">
                              {item.groomAnswer}
                            </p>
                          </div>
                        )}
                      </>
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
