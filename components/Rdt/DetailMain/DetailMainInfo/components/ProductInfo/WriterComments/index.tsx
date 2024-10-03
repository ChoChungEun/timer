// import TextMore from '@/rdtbiz/components/kds/Button/TextMore'

const WriterComments = () => {
  return (
    <section className="flex w-full flex-col gap-5 border-b border-[#DCDDEF] pb-[60px]">
      <div className="w-full">
        <span className="text-title-s font-bold">작가의 말</span>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-text-xl font-bold tracking-[-0.01em]">
          출발선이 달라도 금융생활은 평등하도록,
          <br />잘 살아가기 위해 꼭 알아야 할 100가지 금융상식
        </span>
        <span className="text-text-l font-normal tracking-[-0.01em] text-[#595959]">
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
        </span>
        {/* <TextMore text={'펼치기'} /> */}
      </div>
    </section>
  );
};

export default WriterComments;