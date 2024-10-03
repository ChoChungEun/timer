"use client";

import "swiper/css";
import "swiper/css/free-mode";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import ProductItem from "../ProductItem";
import { Scrollbar } from "swiper/modules";
import RdtTypography from "@/components/Rdt/atoms/RdtTypography";

const TogetherBooks = () => {
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
    <section className="flex flex-col gap-5">
      <RdtTypography type="H4" weight="Bold" color="#000000">
        함께 구매한 책
      </RdtTypography>
      <section className="flex w-[335px] overflow-hidden flex-col">
        <div className="flex">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={20}
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
      </section>
    </section>
  );
};

export default TogetherBooks;
