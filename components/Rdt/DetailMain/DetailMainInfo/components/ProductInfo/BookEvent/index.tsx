import Image from 'next/image'
import SampleImage from './img_sample.png'

const BookEvent = () => {
  return (
    <section className='flex w-full flex-col gap-5'>
      <div className='w-full justify-between'>
        <div className='flex flex-col gap-1'>
          <span className='text-title-s font-bold'>이 책의 이벤트</span>
          <span className='text-text-l font-roboto font-normal tracking-[-0.01em] text-[#767676]'>
            해외주문/바로드림/제휴사주문/업체배송 건의 경우 1+1 증정상품이
            발송되지 않습니다.
          </span>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-5'>
        {Array.from(Array(6).keys()).map((_, i) => (
          <EventItem key={i} />
        ))}
      </div>
    </section>
  )
}
const EventItem = () => {
  return (
    <section className='flex w-[258px] flex-col gap-4'>
      <div className='relative overflow-hidden rounded-2xl'>
        <Image
          src={SampleImage.src}
          layout='responsive'
          width={258}
          height={143}
          alt={'이벤트 상품 이미지'}
          objectFit='cover'
        />
      </div>

      <div className='flex flex-col gap-1'>
        <span className='text-text-xl font-medium tracking-[-0.01em]'>
          [가이드북 특별 기획전] 내가 여행을 떠나는 101가지 이유
        </span>
        <span className='text-text-m font-normal tracking-[-0.01em] text-[#595959]'>
          2024/07/04 ~ 2024/07/31
        </span>
      </div>
    </section>
  )
}

export default BookEvent
