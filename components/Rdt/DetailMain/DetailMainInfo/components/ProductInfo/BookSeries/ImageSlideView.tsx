import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

// import { KdsCheckBox } from '@/kds'
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import SwiperCore from "swiper";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
    <section className="flex w-full flex-col gap-6">
      <div className="flex w-full flex-row">
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
      {/* <KdsCheckBox /> */}
      <div className="flex w-[116px] flex-col gap-4">
        <div className="h-[170px] w-[116px] bg-[#F7F7F7]">
          <img src="hhttps://placehold.co/116x170" alt="상품이미지" />
        </div>
        <div className="flex h-[48px] w-full flex-col gap-2 overflow-hidden">
          <span className="line-clamp-2 overflow-hidden text-ellipsis text-base font-medium tracking-[-0.01em]">
            그래머 게이트웨이 베이직: 초보를 위한 기초 영문법(Grammar Gateway
            Basic)
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageSlideView;
