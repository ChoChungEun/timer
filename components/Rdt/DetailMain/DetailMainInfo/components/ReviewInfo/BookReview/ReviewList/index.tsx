import ReviewItem from './ReviewItem'
import Image from 'next/image'
import NoReviewIcon from './ico_NoReview.png'

const ReviewList = () => {
  return (
    <section className='flex w-full flex-col'>
      {Array.from(Array(1).keys()).map((_, i) => (
        <ReviewItem key={i} />
      ))}
      <NoReview />
    </section>
  )
}
const NoReview = () => {
  return (
    <section className='flex w-full items-center justify-center border-b border-[#EAEAEA] py-3'>
      <div className='flex flex-col items-center justify-center gap-2.5 py-[27px]'>
        <Image src={NoReviewIcon} width={46} height={46} alt='No Review Icon' />
        <span className='text-text-l font-medium tracking-[-0.01em]'>
          작성된 리뷰가 없습니다.
        </span>
      </div>
    </section>
  )
}

export default ReviewList
