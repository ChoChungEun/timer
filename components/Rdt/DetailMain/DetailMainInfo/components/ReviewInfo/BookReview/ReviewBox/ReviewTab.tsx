import DropdownIcon from './chevDown_12.png'
import Image from 'next/image'
const ReviewTab = () => {
  return (
    <section className='flex w-full justify-between border-b border-[#EAEAEA]'>
      <div className='flex flex-row gap-6'>
        <div className='flex flex-col gap-[11px] pt-[13px]'>
          <span className='text-text-l font-bold tracking-[-0.01em]'>
            전체 리뷰
          </span>
          <div className='h-[2px] bg-black' />
        </div>
        <div className='flex flex-col gap-[11px] pt-[13px]'>
          <span className='text-text-l font-normal tracking-[-0.01em] text-[#767676]'>
            구매자 리뷰
          </span>
        </div>
        <div className='flex flex-col gap-[11px] pt-[13px]'>
          <span className='text-text-l font-normal tracking-[-0.01em] text-[#767676]'>
            한달 후 리뷰
          </span>
        </div>
      </div>
      <div className='flex h-[38px] w-[120px] flex-row items-center justify-between gap-2 rounded-[8px] border border-[#CCCCCC] px-[14px] py-2'>
        <span className='text-text-l font-normal tracking-[-0.01em]'>
          좋아요순
        </span>
        <Image src={DropdownIcon.src} width={12} height={12} alt={'dropdown'} />
      </div>
    </section>
  )
}

export default ReviewTab
