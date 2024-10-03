import SampleImage from "@/rdtbiz/components/biz/detail/DetailMain/DetailMainInfo/components/EventInfo/Package/image_sample.png";
import Image from "next/image";
import React from "react";

const ProductItem = () => {
  return (
    <div className="flex w-[116px] flex-col gap-4">
      <div className="h-[170px] w-[116px] bg-[#F7F7F7]">
        <img src="https://placehold.co/116x170" alt="상품 이미지" />
      </div>
      <section className="flex flex-col gap-2">
        <div className="flex h-[48px] w-full flex-col gap-2 overflow-hidden">
          <span className="line-clamp-2 overflow-hidden text-ellipsis text-base font-medium tracking-[-0.01em]">
            그래머 게이트웨이 베이직: 초보를 위한 기초 영문법(Grammar Gateway
            Basic)
          </span>
        </div>
        <span className="text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-[#595959]">
          김호연·나무옆의자
        </span>
      </section>
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
  );
};

export default ProductItem;
