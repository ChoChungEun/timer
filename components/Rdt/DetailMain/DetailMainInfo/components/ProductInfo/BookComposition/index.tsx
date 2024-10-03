const BookComposition = () => {
  return (
    <section className='flex flex-col'>
      <div className='flex w-full items-center justify-between border-b border-black pb-[20px]'>
        <span className='text-title-s flex w-full font-bold tracking-[-0.01em]'>
          이 책의 상품구성
        </span>
        <div className='flex w-full gap-1'>
          <div className='flex h-[18px] w-[6px] items-center justify-center'>
            <div className='flex h-[2px] w-[2px] rounded-full bg-[#595959]' />
          </div>
          <span className='items-center text-[12px] font-normal leading-[18px] text-[#595959]'>
            자세한 상품구성정보에 대한 문의사항은 도서·정보 1:1상담을
            이용해주세요.
          </span>
        </div>
      </div>
      <table>
        <thead>
          <tr className='text-text-l h-[52px] w-full items-center  justify-center border-b border-[#EAEAEA] px-[12px] py-[9px] font-medium text-[#767676]'>
            <th>상품명</th>
            <th className='w-[80px]'>저자</th>
            <th className='w-[100px]'>출간일</th>
            <th className='w-[60px]'>쪽수</th>
            <th className='w-[230px]'>크기/중량 (mm/g)</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(Array(4).keys()).map((_, i) => (
            <tr
              className='text-text-l w-full border-b border-[#EAEAEA] px-[12px] py-[13px] font-normal tracking-[-0.01em]'
              key={i}
            >
              <td className='w-[344px] py-[13px] pl-[12px] pr-[36px]'>
                현대미술학 논문집 제 11호
              </td>
              <td className='w-[80px] px-[12px] py-[13px] text-center'>저자</td>
              <td className='w-[100px] px-[12px] py-[13px] text-center'>
                2012/12/03
              </td>
              <td className='w-[60px] px-[12px] py-[13px] text-center'>180</td>
              <td className='w-[230px] px-[12px] py-[13px] text-center'>
                129×130×400 / 8000
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default BookComposition
