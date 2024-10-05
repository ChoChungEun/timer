// import TextMore from "@/rdtbiz/components/kds/Button/TextMore";

import RdtTypography from "@/components/Rdt/atoms/RdtTypography";

const BookIndex = () => {
  return (
    <section className="flex w-full flex-col gap-5 border-b border-[#EAEAEA] pb-[60px]">
      <RdtTypography type="H4" weight="Bold" color="#000000">
        목차
      </RdtTypography>
      <div className="flex flex-col gap-3">
        <RdtTypography type="B2" weight="Regular" color="#595959">
          [프롤로그] 하루 5분, 작은 습관이 만드는 위대한 변화
          <br />
          <br />
          [1장] 자존감
          <br />
          혼란스러운 세상에서도
          <br />
          ‘너’라는 세계는 반짝이고 있다
          <br />- 우리는 모두 자신의 모양대로 세상에 존재하려고 태어났다
          <br />- 언제든 질 수 있지만 그게 실패를 뜻하는 건 아니다
          <br />- 세상에서 가장 힘이 센 사람은 조용히 인내한다
          <br />- ‘통쾌하다’는 감정을 지우면 나 자신과 만날 수 있다
        </RdtTypography>
        {/* <TextMore text={'펼치기'} /> */}
      </div>
    </section>
  );
};

export default BookIndex;
