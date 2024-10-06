// import TextMore from '@/rdtbiz/components/kds/Button/TextMore'

import RdtTypography from "@/components/Rdt/atoms/RdtTypography";

const WriterComments = () => {
  return (
    <section className="flex flex-col gap-5 border-b border-[#DCDDEF] pb-[60px]">
      <RdtTypography type="H4" weight="Bold" color="#000000">
        작가의 말
      </RdtTypography>
      <div className="flex flex-col gap-3">
        <RdtTypography type="B1" weight="Bold" color="#000000">
          출발선이 달라도 금융생활은 평등하도록,
          <br />잘 살아가기 위해 꼭 알아야 할 100가지 금융상식
        </RdtTypography>
        <RdtTypography type="B2" weight="Regular" color="#595959">
          미국 퓨리서치센터의 조사 결과에 따르면 “삶에서 가장 가치 있다고
          생각하는 것은 무엇인가"라는 질문에 17개 선진국 중 ‘가족'과 ‘직업'을
          제치고 ‘물질적 행복'을 1순위로 꼽은 것은 한국이 유일했다. 그러는 한편
          국내의 여러 연구에 따르면 한국인의 금융 문맹률이 심각할 정도로 높고,
          특히 평생에 걸쳐 진행되어야 하는 돈 관리에 필요한 금융지식이 턱없이
          부족하다고 한다. 돈이 행복의 필수 조건이라고 여기면서도, 막상 돈을 잘
          모르는 사람들. 《더 머니북》은 이 사람들을 위해 만들어졌다.
          <br />
          <br />
          돈의 많고 적음은 개인이 당장 컨트롤하기 어렵다. 다만 '돈을 다루는
          능력'은 스스로 높일 수 있다. 금융지능, 혹은 금융 이해력이라고 부를 수
          있는 이 능력은 키웠을 때 돈과 닿아 있는 모든 일상에서 더 나은 쪽으로
          결정할 수 있는 힘이 생기고, 낮으면 생존에 위협적이다. 부자가 되는
          법과는 다르며, 개개인의 삶을 지탱해주는 근간이 된다.
          <br />
          <br />
          문제는 금융 이해력을 기르는 과정이 많은 부분 개인의 의지에 달렸다는
          점이다. 각자 처한 환경과 정보 비대칭 속에서 알음알음 이뤄지다 보니
          공통적으로 알고 있어야 하는 수준을 가늠하기 어렵다는 것 또한 우리
          모두의 숙제다. 이를 해결하고자 토스는 가장 편리한 금융 서비스인 동시에
          생존에 필수인 ‘돈’에 관해 꼭 필요한 정보를 얻는 곳이 되기 위해 애쓰고
          있다.
        </RdtTypography>
        <button className="flex items-center gap-[4px]">
          <RdtTypography type="B3" weight="Medium" color="#767676">
            펼치기
          </RdtTypography>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <g clip-path="url(#clip0_1932_71744)">
              <path
                d="M19.5 10.8545C19.5 16.1012 15.2467 20.3545 10 20.3545C4.75329 20.3545 0.5 16.1012 0.5 10.8545C0.5 5.60779 4.75329 1.35449 10 1.35449C15.2467 1.35449 19.5 5.60779 19.5 10.8545Z"
                fill="white"
                stroke="#CCCCCC"
              />
              <path
                d="M9.99919 13.3555C9.94444 13.3556 9.8902 13.3449 9.83959 13.324C9.78897 13.3031 9.74295 13.2725 9.70419 13.2338L6.37086 9.90046C6.29496 9.82188 6.25297 9.71663 6.25392 9.60738C6.25487 9.49813 6.29869 9.39362 6.37594 9.31637C6.45319 9.23912 6.55768 9.1953 6.66693 9.19435C6.77618 9.1934 6.88146 9.2354 6.96005 9.3113L9.99838 12.3496L13.0367 9.3113C13.1153 9.2354 13.2205 9.1934 13.3298 9.19435C13.439 9.1953 13.5435 9.23912 13.6208 9.31637C13.698 9.39362 13.7418 9.49813 13.7428 9.60738C13.7437 9.71663 13.7017 9.82188 13.6259 9.90046L10.2925 13.2338C10.2146 13.3115 10.1092 13.3552 9.99919 13.3555Z"
                fill="#767676"
              />
            </g>
            <defs>
              <clipPath id="clip0_1932_71744">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(0 0.854492)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default WriterComments;
