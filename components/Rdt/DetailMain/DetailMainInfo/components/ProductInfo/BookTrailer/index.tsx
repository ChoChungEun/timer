import React from 'react'
import Image from 'next/image'
import VideoImage from './image_video.png'
import PlayIcon from './ico_play.png'

const BookTrailer = () => {
  return (
    <section className='flex w-full flex-col gap-5 border-b border-[#EAEAEA] pb-[60px]'>
      <div className='w-full'>
        <span className='text-title-s font-bold'>북 트레일러</span>
      </div>
      <div className='flex flex-col gap-3'>
        <div className='relative overflow-hidden rounded-[16px]'>
          <Image
            src={VideoImage.src}
            height={458}
            width={814}
            alt={'동영상 썸네일 이미지'}
          />
          <button className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
            <Image
              src={PlayIcon.src}
              height={70}
              width={70}
              alt={'재생 버튼'}
            />
          </button>
        </div>
        <div className='flex flex-col gap-1'>
          {Array.from(Array(3).keys()).map((_, i) => (
            <div className='flex flex-row gap-1' key={i}>
              <div className='flex h-[18px] w-[6px] items-center justify-center'>
                <div className='flex h-[2px] w-[2px] rounded-full bg-[#595959]' />
              </div>
              <span className='text-text-m items-center font-normal  tracking-[-0.01em] text-[#595959] '>
                출판사의 사정에 따라 서비스가 변경 또는 중지될 수 있습니다.
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BookTrailer
