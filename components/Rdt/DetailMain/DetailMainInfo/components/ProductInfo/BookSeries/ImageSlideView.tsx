import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

// import { KdsCheckBox } from '@/kds'
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import SwiperCore from "swiper";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import RdtTypography from "@/components/Rdt/atoms/RdtTypography";

const ImageSlideView = () => {
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
    <section className="flex flex-col">
      <div className="flex flex-row w-[330px] overflow-auto">
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
              <ProductItem />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="main-visual-scrollbar">
        <div className="visual-scrollbar-line"></div>
      </div>
    </section>
  );
};

const ProductItem = () => {
  return (
    <div className="flex flex-col gap-[10px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="23"
        viewBox="0 0 22 23"
        fill="none"
      >
        <rect
          x="1.5"
          y="2.35449"
          width="19"
          height="19"
          rx="3.5"
          fill="white"
          stroke="#CCCCCC"
        />
        <path
          d="M9.99754 15.8545C9.73169 15.8544 9.47675 15.7489 9.28879 15.561L6.2814 12.5562C6.0988 12.3673 5.99775 12.1143 6.00004 11.8516C6.00232 11.589 6.10775 11.3378 6.29362 11.1521C6.47948 10.9664 6.73091 10.861 6.99375 10.8588C7.2566 10.8565 7.50982 10.9574 7.69889 11.1399L9.99754 13.4356L14.3011 9.13566C14.4902 8.95321 14.7434 8.85225 15.0062 8.85453C15.2691 8.85681 15.5205 8.96215 15.7064 9.14786C15.8923 9.33357 15.9977 9.58478 16 9.8474C16.0022 10.11 15.9012 10.363 15.7186 10.5519L10.7063 15.56C10.6133 15.6532 10.5028 15.7272 10.3812 15.7777C10.2596 15.8282 10.1292 15.8543 9.99754 15.8545Z"
          fill="#CCCCCC"
        />
      </svg>
      <div className="flex w-[116px] flex-col gap-4">
        <div className="h-[170px] w-[116px] bg-[#F7F7F7]">
          <img src="https://placehold.co/116x170" alt="상품이미지" />
        </div>
        <div className="flex h-[48px] w-full flex-col gap-2 overflow-hidden">
          <RdtTypography type="B2" weight="Medium" color="#595959" clamp={2}>
            그래머 게이트웨이 베이직: 초보를 위한 기초 영문법(Grammar Gateway
            Basic)
          </RdtTypography>
        </div>
      </div>
    </div>
  );
};

export default ImageSlideView;
