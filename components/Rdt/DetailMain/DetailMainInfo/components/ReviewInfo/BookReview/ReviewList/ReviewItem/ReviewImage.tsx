'use client'

import 'swiper/css'
import 'swiper/css/free-mode'
import { Swiper, SwiperSlide } from 'swiper/react'
import React, { useRef } from 'react'
import SwiperCore from 'swiper'
import SampleImage from './images/img_sample.png'
import Image from 'next/image'
const ReviewImage = () => {
  const swiperRef = useRef<SwiperCore | null>(null)
  return (
    <section className='flex w-full flex-row'>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        slidesPerView='auto'
        centeredSlides={false}
        freeMode={true}
        modules={[]}
      >
        {Array.from(Array(10).keys()).map((i) => (
          <SwiperSlide key={i} style={{ width: 'auto' }}>
            <div className='relative h-[300px] w-[300px] overflow-hidden rounded-[16px] bg-[#F7F7F7]'>
              <Image
                src={SampleImage.src}
                layout={'fill'}
                alt={'리뷰 이미지'}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default ReviewImage
