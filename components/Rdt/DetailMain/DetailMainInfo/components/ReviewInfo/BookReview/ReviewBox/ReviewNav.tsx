const ReviewNav = () => {
  return (
    <div className='flex w-full items-end justify-start'>
      <div className=' h-11 w-40 cursor-pointer rounded-tl-lg rounded-tr-lg border-x border-t border-black bg-white py-[11px] text-center'>
        <span className='text-text-l font-medium tracking-[-0.01em]'>
          Klover 리뷰(120)
        </span>
      </div>
      <div className=' h-11 w-40 cursor-pointer rounded-tl-lg rounded-tr-lg border-x border-b border-t border-gray-400 border-b-black bg-white py-[11px] text-center'>
        <span className='text-text-l font-normal tracking-[-0.01em] text-[#767676]'>
          리딩트리 리뷰(15)
        </span>
      </div>
      <div className='h-[1px] flex-1 bg-[#000000]' />
    </div>
  )
}

export default ReviewNav
