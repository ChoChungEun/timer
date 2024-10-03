import Image from 'next/image'
import ReplyInit from './images/ico_reply_12.png'
const ReplySection = () => {
  return (
    <section className='mt-3 flex flex-col gap-2 rounded-[8px] bg-[#F7F7F7]'>
      <div className='m-5 flex w-full flex-row items-start  gap-2 '>
        <Image src={ReplyInit.src} width={12} height={12} alt={'댓글 아이콘'} />
        <div className='flex flex-col gap-2'>
          <div className='flex w-full flex-row gap-2'>
            <span className='text-text-m font-roboto font-normal tracking-[-0.01em] text-[#767676]'>
              mm********
            </span>
            <div className='h-2 w-[1px] bg-[#CCCCCC]' />
            <span className='text-text-m font-roboto font-normal tracking-[-0.01em] text-[#767676]'>
              2024.07.15
            </span>
          </div>
          <div className='flex w-full justify-between'>
            <span className='text-text-l font-normal tracking-[-0.01em]'>
              배송도 빠르고 너무나 좋습니다.^^
              <br /> 배송도 빠르고 너무나 좋습니다.^^
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReplySection
