import Image from 'next/image'
import TriggerIcon from './images/ico_trigger.png'

interface IProps {
  isSpolier?: boolean
}
const ReviewSecret = (props: Readonly<IProps>) => {
  const { isSpolier } = props
  return (
    <section className='m-auto flex h-[62px] w-full flex-row gap-1 rounded-[8px] bg-[#F7F7F7]'>
      {isSpolier ? <SpolierReview /> : <BliendReview />}
    </section>
  )
}
const SpolierReview = () => {
  return (
    <>
      <span className='text-text-l font-normal tracking-[-0.01em]'>
        이 리뷰에는 <span className='font-bold'>스포일러가 포함</span>되어
        있습니다.
      </span>
      <button className='rouned-[4px] border border-[#CCCCCC] px-[6px] py-[3px]'>
        <span className='text-text-m font-medium tracking-[-0.06em]'>보기</span>
      </button>
    </>
  )
}
const BliendReview = () => {
  return (
    <>
      <Image src={TriggerIcon.src} width={16} height={16} alt='Trigger Icon' />
      <span className='text-text-l font-normal tracking-[-0.01em] text-[#767676]'>
        다른 고객님의 요청에 의해 블라인드 처리 되었습니다.
      </span>
    </>
  )
}

export default ReviewSecret
