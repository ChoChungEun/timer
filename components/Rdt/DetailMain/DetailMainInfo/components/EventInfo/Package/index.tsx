"use client";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import SampleImage from "./image_sample.png";
import MoreButton from "./btn_more.png";
import MoreDown from "./img.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import React, { useEffect, useRef } from "react";
import SwiperCore from "swiper";
import RdtTypography from "@/components/Rdt/atoms/RdtTypography";

const Package = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  const updateScrollbar = (swiper: any) => {
    const totalSlides = swiper.slides.length;
    const activeIndex = swiper.realIndex + 1; // Adjust for 1-based indexing
    const progress = (activeIndex / totalSlides) * 100;
    const scrollbar = document.querySelector(
      ".visual-scrollbar-line"
    ) as HTMLElement;
    if (scrollbar) {
      scrollbar.style.width = `${progress}%`;
    }
  };
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on("slideChange", () =>
        updateScrollbar(swiperRef.current)
      );
    }
  }, []);
  return (
    <section className="flex flex-col gap-[16px]">
      <RdtTypography type="H4" weight="Bold" color="#000000">
        패키지
      </RdtTypography>
      <section className="flex flex-col gap-[30px]">
        {Array.from(Array(2).keys()).map((_, i) => (
          <section
            className="flex flex-col rounded-[20px] w-[335px] border-[#EAEAEA] border-[1px]"
            key={i}
          >
            <article className="flex flex-col bg-[#F7F7F7] px-[23px] py-[19px]">
              <RdtTypography type="B1" weight="Bold" color="#000000">
                해커스 그래머 게이트웨이 베이직+베이직(Light Version)+인터미디엇
                세트
              </RdtTypography>
              <section className="flex flex-row gap-[4px]">
                <RdtTypography type="B1" weight="Bold" color="#767676">
                  10%
                </RdtTypography>
                <div className="flex">
                  <RdtTypography type="B1" weight="Bold" color="#000000">
                    30,000
                  </RdtTypography>
                  <RdtTypography type="B1" weight="Regular" color="#000000">
                    원
                  </RdtTypography>
                </div>
                <span className="text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-[#767676] line-through">
                  24,000원
                </span>
                <RdtTypography type="B2" weight="Bold" color="#595959">
                  (250P)
                </RdtTypography>
              </section>
            </article>
            <section className="flex flex-col pl-[23px] py-[23px] gap-[24px]">
              <div className="overflow-hidden">
                <Swiper
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                  spaceBetween={24}
                  slidesPerView="auto"
                  centeredSlides={false}
                  freeMode={true}
                  modules={[Scrollbar]}
                  scrollbar={{
                    el: ".main-visual-scrollbar",
                    hide: false,
                  }}
                >
                  {Array.from(Array(10).keys()).map((i) => (
                    <SwiperSlide key={i} style={{ width: "auto" }}>
                      <div className="flex flex-row items-center gap-6">
                        <ProductItem />
                        {i === 0 && <More />}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <section className="flex flex-row items-center justify-center gap-1">
                <button className="flex h-[44px] w-[44px] items-center justify-center rounded-lg border border-gray-300 bg-white p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M5.71046 3.10986C5.54878 3.10986 5.39759 3.11755 5.24452 3.13377C2.59161 3.40486 1.62013 5.18585 1.27716 6.22334C0.670125 8.05964 1.09586 10.2528 2.26718 11.3297L9.2711 17.4916C9.47209 17.6679 9.7285 17.765 9.99309 17.765C10.2577 17.765 10.5141 17.6679 10.7141 17.4924L17.719 11.3297C18.8904 10.2528 19.3161 8.05964 18.709 6.22334C18.3661 5.18584 17.3946 3.40486 14.738 3.13338C14.5886 3.11755 14.4374 3.10986 14.2757 3.10986C12.9841 3.10986 11.6962 3.66402 10.7395 4.63305C10.5437 4.82986 10.2716 4.94273 9.99308 4.94273C9.71416 4.94273 9.44184 4.8296 9.24356 4.62991C8.29085 3.6639 7.00308 3.10986 5.71046 3.10986ZM5.71046 2.10986C7.2941 2.10986 8.8247 2.78108 9.95555 3.92772C9.97543 3.94774 10.0108 3.94772 10.0306 3.92772C11.1626 2.78108 12.691 2.10986 14.2757 2.10986C14.4645 2.10986 14.6534 2.11882 14.8433 2.13895C20.5572 2.72283 21.1491 9.55002 18.3872 12.0738L11.3746 18.2432C10.5817 18.939 9.40451 18.939 8.61157 18.2432L1.59904 12.0738C-1.16292 9.55002 -0.570968 2.72283 5.14286 2.13895C5.3328 2.11882 5.52165 2.10986 5.71046 2.10986Z"
                      fill="black"
                    />
                  </svg>
                </button>
                <button className="flex items-center justify-center rounded-lg border border-gray-300 bg-white py-[12px] px-[20px]">
                  <RdtTypography type="B2" weight="Medium" color="#000000">
                    상세보기
                  </RdtTypography>
                </button>
                <button className="flex items-center justify-center rounded-lg border border-gray-300 bg-[#767676] py-[12px] px-[20px]">
                  <RdtTypography type="B2" weight="Bold" color="#FFFFFF">
                    장바구니
                  </RdtTypography>
                </button>
              </section>
            </section>
          </section>
        ))}
        <section className="flex flex-row items-center justify-center gap-2.5">
          <RdtTypography type="B1" weight="Medium" color="#767676">
            더보기
          </RdtTypography>
          <Image
            src={MoreDown.src}
            height={24}
            width={24}
            alt="Package 더보기"
          />
        </section>
      </section>
    </section>
  );
};

const ProductItem = () => {
  return (
    <div className="flex w-[100px] flex-col gap-[16px]">
      <img src="https://placehold.co/100x150" alt="상품 이미지" />
      <RdtTypography type="B2" weight="Medium" color="#000000" clamp={2}>
        그래머 게이트웨이 베이직: 초보를 위한 기초 영문법(Grammar Gateway Basic)
      </RdtTypography>
    </div>
  );
};
const More = () => {
  return (
    <button className="h-full">
      <Image src={MoreButton.src} width={28} height={28} alt={"더보기 버튼"} />
    </button>
  );
};

export default Package;
