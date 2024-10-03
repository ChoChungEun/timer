import SampleImage from './img_sample.png'
import MoreIcon from './icon_more.png'

import Image from 'next/image'

const KeywordPicks = () => {
  return (
    <section className='flex w-full flex-col gap-5'>
      <div className='w-full'>
        <span className='text-[20px] font-bold leading-[30px]'>
          키워드 Pick
        </span>
      </div>
      <div className='flex w-full flex-col gap-5'>
        <div className='w-ful flex-for flex gap-2'>
          {Array.from(Array(2).keys()).map((_, i) => (
            <div className='rounded-[18px] bg-[#F7F7F7] px-4 py-[7px]' key={i}>
              <span className='text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-[#595959]'>
                키워드명
              </span>
            </div>
          ))}
        </div>
        <div className='flex w-full flex-row gap-6'>
          {Array.from(Array(6).keys()).map((_, i) => (
            <div className='bg-[#F7F7F7]' key={i}>
              <Image
                src={SampleImage.src}
                width={106}
                height={143}
                alt='상품 이미지'
              />
            </div>
          ))}
          <button className='flex w-[39px] flex-col items-center justify-center gap-2'>
            <Image
              src={MoreIcon.src}
              height={24}
              width={24}
              alt='더보기 아이콘'
            />
            <span className='text-[14px] font-normal leading-[22px] text-[#767676]'>
              더보기
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default KeywordPicks
