// import TextMore from '@/rdtbiz/components/kds/Button/TextMore'
// import Category from '@/rdtbiz/components/kds/Category'

const IntroBook = () => {
  const categoryList = [
    { text: "상품군" },
    { text: "구분" },
    { text: "대카테고리" },
    { text: "중카테고리" },
    { text: "소카테고리" },
  ];
  const categoryList2 = [
    { text: "미디어 추천도서" },
    { text: "주요일간지소개도서" },
    { text: "동아일보" },
    { text: "2023년 12월 3주 선정" },
  ];
  return (
    <section className="flex w-full flex-col gap-5">
      <div className="w-full">
        <span className="text-[20px] font-bold leading-[30px]">책소개</span>
      </div>
      <div className="flex w-full flex-col gap-[30px]">
        <section className="flex w-full flex-col gap-3 border-b border-[#EAEAEA] pb-[30px]">
          <span className="text-base font-bold tracking-[-0.01em]">
            이 책이 속한 분야
          </span>
          {/* <Category categoryList={categoryList} /> */}
        </section>
        <section className="flex flex-col gap-3 border-b border-[#EAEAEA] pb-[30px]">
          <span className="text-base font-bold tracking-[-0.01em]">
            리딩지수
          </span>
          <div className="flex flex-row gap-6">
            <div className="flex flex-1 flex-col gap-2 rounded-[8px] bg-[#F7F7F7] p-7">
              <div className="flex flex-row gap-2 text-base tracking-[-0.01em]">
                <span className=" font-medium ">AP지수</span>
                <span className="font-bold text-[#767676]">
                  Children-Grade 4-6
                </span>
              </div>
              <span className="text-text-m font-normal tracking-[0.01em] text-[#595959]">
                도서에 사용된 문장의 평균 길이, 단어 길이, 어휘 수준, 단어수를
                종합하여 판단한 북 레벨지수로 ATOS 지수 라고 하며, 미국 6만개
                이상의 학교에서 활용되고 있습니다. 레벨 표현은 Interest Level +
                0.0 의 형식으로하며, 숫자는 미국 학년을 나타냅니다.
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-2 rounded-[8px] bg-[#F7F7F7] p-7">
              <div className="flex flex-row gap-2 text-base tracking-[-0.01em]">
                <span className=" font-medium ">Lexile지수</span>
                <span className="font-bold text-[#767676]">660</span>
              </div>
              <span className="text-text-m font-normal tracking-[0.01em] text-[#595959]">
                영어로 쓰여진 지문에 대한 해석 및 총체적인 이해 능력을 측정하는
                도구로 미국 21개 주에서 공식적인 영어 읽기 능력 평가로 인정받고
                있습니다. 레벨은 BR(Beginning Reader) 에서 2000L 까지 수치로
                제공합니다.
              </span>
            </div>
          </div>
        </section>
        <section className="flex w-full flex-col gap-3 border-b border-[#EAEAEA] pb-[30px]">
          <span className="text-base font-bold tracking-[-0.01em]">
            수상내역 / 미디어 추천
          </span>
          {/* {Array.from(Array(4).keys()).map((_, i) => (
            <Category categoryList={categoryList2} key={i} />
          ))} */}
          {/* <TextMore text={"펼치기"} /> */}
        </section>
        <section className="flex w-full flex-col gap-3 border-b border-[#EAEAEA] pb-[30px]">
          <span className="text-base font-bold tracking-[-0.01em]">
            출발선이 달라도 금융생활은 평등하도록,
            <br />잘 살아가기 위해 꼭 알아야 할 100가지 금융상식
          </span>
          <span className="text-text-l font-normal tracking-[0.01em] text-[#595959]">
            미국 퓨리서치센터의 조사 결과에 따르면 “삶에서 가장 가치 있다고
            생각하는 것은 무엇인가"라는 질문에 17개 선진국 중 ‘가족'과 ‘직업'을
            제치고 ‘물질적 행복'을 1순위로 꼽은 것은 한국이 유일했다. 그러는
            한편 국내의 여러 연구에 따르면 한국인의 금융 문맹률이 심각할 정도로
            높고, 특히 평생에 걸쳐 진행되어야 하는 돈 관리에 필요한 금융지식이
            턱없이 부족하다고 한다. 돈이 행복의 필수 조건이라고 여기면서도, 막상
            돈을 잘 모르는 사람들. 《더 머니북》은 이 사람들을 위해 만들어졌다.
            <br />
            돈의 많고 적음은 개인이 당장 컨트롤하기 어렵다. 다만 '돈을 다루는
            능력'은 스스로 높일 수 있다. 금융지능, 혹은 금융 이해력이라고 부를
            수 있는 이 능력은 키웠을 때 돈과 닿아 있는 모든 일상에서 더 나은
            쪽으로 결정할 수 있는 힘이 생기고, 낮으면 생존에 위협적이다. 부자가
            되는 법과는 다르며, 개개인의 삶을 지탱해주는 근간이 된다.
            <br />
            문제는 금융 이해력을 기르는 과정이 많은 부분 개인의 의지에 달렸다는
            점이다. 각자 처한 환경과 정보 비대칭 속에서 알음알음 이뤄지다 보니
            공통적으로 알고 있어야 하는 수준을 가늠하기 어렵다는 것 또한 우리
            모두의 숙제다. 이를 해결하고자 토스는 가장 편리한 금융 서비스인
            동시에 생존에 필수인 ‘돈’에 관해 꼭 필요한 정보를 얻는 곳이 되기
            위해 애쓰고 있다.
          </span>
          {/* <TextMore text={"펼치기"} /> */}
        </section>
      </div>
    </section>
  );
};

export default IntroBook;
