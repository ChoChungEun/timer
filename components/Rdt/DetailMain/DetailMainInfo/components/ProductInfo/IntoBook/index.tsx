// import TextMore from '@/rdtbiz/components/kds/Button/TextMore'
import React from "react";
import RdtTypography from "@/components/Rdt/atoms/RdtTypography";

const IntoBook = () => {
  return (
    <section className="flex flex-col gap-[40px] border-b border-[#EAEAEA] pb-[40px]">
      <RdtTypography type="H4" weight="Bold" color="#000000">
        책속으로
      </RdtTypography>
      <div className="flex flex-col gap-5">
        <RdtTypography type="B2" weight="Bold" color="#595959">
          물론 이런 생각이 들 수도 있다. ‘이 적은 돈을 모으는 게 무슨 의미가
          있을까? 그냥 내가 사고 싶고 하고 싶은 걸 해서 만족감이라도 얻는 게
          낫지 않을까?’ 하지만 현금 흐름을 살피는 돈 관리는 자산의 많고 적음이
          중요한 것이 아니다. 아무리 적은 돈이라도 돈 관리 자체를 회피하면 안
          된다. 인생 전반에 걸쳐 필요한 순간에 사용할 목돈은 오랜 기간 ‘저축’과
          ‘투자’를 지속해야 마련할 수 있기 때문이다. 그래서 경제적 안전지대를
          마련하는 일은 하루아침에 되는 것이 아닌, 오랜 시간과 습관을 필요로
          한다.
          <br />⁃ ‘Q1. 돈이 늘 부족한데 저축을 꼭 해야 할까?’ 중에서
        </RdtTypography>
        {/* <TextMore text={'펼치기'} /> */}
      </div>
      <div className="flex flex-col gap-[24px]">
        {Array.from(Array(4).keys()).map((i) => (
          <ProductItem key={i} />
        ))}
      </div>
    </section>
  );
};

const ProductItem = () => {
  return (
    <section className="flex flex-col gap-[8px]">
      <RdtTypography type="B1" weight="Bold" color="#292929">
        01
      </RdtTypography>
      <section className="flex items-center gap-[16px]">
        <img src="https://placehold.co/100x148" alt="도서 이미지" />
        <section className="flex flex-col gap-[8px]">
          <section className="flex flex-col gap-1">
            <RdtTypography type="B2" weight="Medium" color="#000000">
              언젠가 우리가
              <br /> 같은 별을 바라본다면
            </RdtTypography>
            <RdtTypography type="B3" weight="Regular" color="#595959">
              김호연·나무옆의자
            </RdtTypography>
          </section>
          <section className="flex items-center">
            <RdtTypography type="B2" weight="Bold" color="#000000">
              12,150
            </RdtTypography>
            <RdtTypography type="B2" weight="Regular" color="#000000">
              원
            </RdtTypography>
          </section>
        </section>
      </section>
    </section>
  );
};

export default IntoBook;
