// import TextMore from '@/rdtbiz/components/kds/Button/TextMore'
import Image from "next/image";
import React from "react";

import SampleImage from "./image.png";

const IntoBook = () => {
  return (
    <section className="flex w-full flex-col gap-5 border-b border-[#EAEAEA] pb-[60px]">
      <div className="w-full">
        <span className="text-[20px] font-bold leading-[30px]">책속으로</span>
      </div>
      <div className="flex flex-col gap-5">
        <span className="text-text-l font-normal tracking-[-0.01em] text-[#595959]">
          물론 이런 생각이 들 수도 있다. ‘이 적은 돈을 모으는 게 무슨 의미가
          있을까? 그냥 내가 사고 싶고 하고 싶은 걸 해서 만족감이라도 얻는 게
          낫지 않을까?’ 하지만 현금 흐름을 살피는 돈 관리는 자산의 많고 적음이
          중요한 것이 아니다. 아무리 적은 돈이라도 돈 관리 자체를 회피하면 안
          된다. 인생 전반에 걸쳐 필요한 순간에 사용할 목돈은 오랜 기간 ‘저축’과
          ‘투자’를 지속해야 마련할 수 있기 때문이다. 그래서 경제적 안전지대를
          마련하는 일은 하루아침에 되는 것이 아닌, 오랜 시간과 습관을 필요로
          한다.
          <br />⁃ ‘Q1. 돈이 늘 부족한데 저축을 꼭 해야 할까?’ 중에서
        </span>
        {/* <TextMore text={'펼치기'} /> */}
      </div>
      <div className="grid h-auto w-full grid-cols-2 gap-6 rounded-[20px] bg-[#F7F7F7] px-[30px] pb-[40px] pt-[36px]">
        {Array.from(Array(4).keys()).map((i) => (
          <ProductItem key={i} />
        ))}
      </div>
    </section>
  );
};
const ProductItem = () => {
  return (
    <section className="flex flex-1 flex-row gap-4">
      <Image
        src={SampleImage.src}
        height={140}
        width={96}
        alt={"상품 이미지"}
      />
      <div className="flex w-full flex-col gap-1">
        <span className="font-roboto text-text-xl font-bold">01</span>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <span className="text-text-xl font-medium tracking-[-0.01em]">
              언젠가 우리가
              <br /> 같은 별을 바라본다면
            </span>
            <span className="text-text-l font-normal text-[#595959]">
              김호연·나무옆의자
            </span>
          </div>
          <section className="flex w-full flex-row gap-1">
            <span className="font-roboto text-base font-bold tracking-[-0.01em] text-[#767676]">
              10%
            </span>
            <span className="font-roboto text-base font-bold tracking-[-0.01em] ">
              21,600
              <span className="font-normal">원</span>
            </span>
          </section>
        </div>
      </div>
    </section>
  );
};

export default IntoBook;
