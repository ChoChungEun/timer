interface IProps {
  rate: number
}
const LikeReviewItem = (props: Readonly<IProps>) => {
  const { rate } = props
  return (
    <div className='flex w-11 flex-col items-center justify-center gap-2'>
      <span className='font-roboto text-text-m font-normal text-[#595959]'>
        {rate}%
      </span>
      <div className='relative h-[62px] w-[6px] rounded-[50px] bg-[#F0F0F0]'>
        <div
          className='absolute bottom-0 w-[6px] rounded-[50px] bg-[#767676]'
          style={{ height: `${rate}%` }}
        />
      </div>
      <span className='text-text-m font-normal tracking-[-0.01em]'>
        최고에요
      </span>
    </div>
  )
}

export default LikeReviewItem
