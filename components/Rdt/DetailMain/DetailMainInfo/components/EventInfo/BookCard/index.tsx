"use client";

import "swiper/css";
import "swiper/css/free-mode";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import Image from "next/image";
import SampleImage from "./img_sample.png";

const BookCard = () => {
  const swiperRef = useRef<SwiperCore | null>(null);
  return (
    <section className="flex w-full flex-col gap-5">
      <div className="w-full">
        <span className="text-[20px] font-bold leading-[30px]">북카드</span>
      </div>
      <div className="flex w-full flex-row">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={20}
          slidesPerView="auto"
          centeredSlides={false}
          freeMode={true}
        >
          {Array.from(Array(10).keys()).map((i) => (
            <SwiperSlide key={i} style={{ width: "auto" }}>
              <div className="flex-shrink-0 overflow-hidden rounded-[20px] bg-gray-100">
                <Image
                  src={SampleImage.src}
                  width={397}
                  height={397}
                  alt="image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BookCard;
