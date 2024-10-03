const BasicInfo = () => {
  return (
    <section className='flex w-full flex-col border-b'>
      <div className='flex w-full flex-row items-center justify-between border-b border-black pb-5'>
        <span className='text-title-s font-bold tracking-[-0.01]'>
          기본/상세 정보
        </span>
        <div className='flex flex-row gap-2'>
          <button className='flex h-[38px] flex-row gap-1 rounded-[8px] bg-black px-[14px] py-[9px]'>
            <span className='text-text-l font-medium tracking-[-0.01em] text-white'>
              1:1 문의
            </span>
          </button>
          <button className='flex h-[38px] flex-row gap-1 rounded-[8px] border border-[#CCCCCC] px-[14px] py-[9px]'>
            <span className='text-text-l font-medium tracking-[-0.01em]'>
              외서용어안내
            </span>
          </button>
        </div>
      </div>
      <div className='flex w-full border-b pb-5'>
        {Array.from(Array(2).keys()).map((_, i) => (
          <div
            className='flex flex-1 flex-row gap-5 px-[12px] pt-[30px]'
            key={i}
          >
            <div className='flex flex-col gap-5'>
              <div className='flex flex-row gap-5'>
                <span className='text-text-l flex w-[140px] font-medium'>
                  크기/증량
                </span>
                <span className='text-text-l font-normal text-[#595959]'>
                  155 * 215 mm
                </span>
              </div>
              <div className='flex flex-row gap-5'>
                <span className='text-text-l flex w-[140px] font-medium'>
                  사용연령
                </span>
                <span className='text-text-l font-normal text-[#595959]'>
                  3세 이상
                </span>
              </div>
              <div className='flex flex-row gap-5'>
                <span className='text-text-l flex w-[140px] font-medium'>
                  색상
                </span>
                <span className='text-text-l font-normal text-[#595959]'>
                  이미지 참고
                </span>
              </div>
              <div className='flex flex-row gap-5'>
                <span className='text-text-l flex w-[140px] font-medium'>
                  재질
                </span>
                <span className='text-text-l font-normal text-[#595959]'>
                  이미지 참고
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BasicInfo
