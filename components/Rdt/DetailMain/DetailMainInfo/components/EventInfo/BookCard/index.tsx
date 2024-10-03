"use client";

import "swiper/css";
import "swiper/css/free-mode";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import RdtTypography from "@/components/Rdt/atoms/RdtTypography";

const BookCard = () => {
  const swiperRef = useRef<SwiperCore | null>(null);
  return (
    <section className="flex flex-col gap-[16px]">
      <RdtTypography type="H4" weight="Bold" color="#000000">
        북카드
      </RdtTypography>
      <div className="w-[335px] overflow-hidden">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={20}
          slidesPerView="auto"
          centeredSlides={false}
          freeMode={true}
        >
          {Array.from(Array(10).keys()).map((i) => (
            <SwiperSlide key={i} style={{ width: "auto" }}>
              <div className="flex-shrink-0 overflow-hidden rounded-[20px]">
                <img src="https://placehold.co/320x328" alt="도서 이미지" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BookCard;
