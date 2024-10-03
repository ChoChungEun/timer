const NoticeInto = () => {
  return (
    <section className='flex w-full flex-col gap-[30px]'>
      <div className='flex w-full justify-between border-b border-black pb-5 '>
        <span className='text-title-s font-bold'>교환/반품/품절</span>
        <div className='flex flex-row gap-2'>
          <button className='flex h-[38px] items-center rounded-[8px] border px-[14px] py-[9px]'>
            <span className='text-text-l font-medium tracking-[-0.01em]'>
              반품/교환 신청
            </span>
          </button>
          <button className='flex h-[38px] items-center rounded-[8px] border bg-[#292929] px-[14px] py-[9px]'>
            <div className='flex flex-row items-center gap-1'>
              <span className='text-text-l font-medium tracking-[-0.01em] text-white'>
                1:1 문의
              </span>
            </div>
          </button>
        </div>
      </div>
      <div className='flex flex-col gap-[30px]'>
        <div className='flex flex-col gap-3 border-b border-[#EAEAEA] pb-[30px]'>
          <span className='text-text-xl font-bold tracking-[-0.01em]'>
            교환/반품 내용
          </span>
          <div className='flex w-full gap-1'>
            <div className='flex h-[18px] w-[6px] items-center justify-center'>
              <div className='flex h-[2px] w-[2px] rounded-full bg-[#595959]' />
            </div>
            <span className='text-text-l font-normal tracking-[-0.01em] text-[#595959]'>
              입력내용
            </span>
          </div>
        </div>
        <div className='flex flex-col gap-3 border-b border-[#EAEAEA] pb-[30px]'>
          <span className='text-text-xl font-bold tracking-[-0.01em]'>
            교환/반품 방법
          </span>
          <div className='flex flex-col gap-1'>
            <div className='flex w-full flex-row gap-1'>
              <div className='flex h-[18px] w-[6px] items-center justify-center'>
                <div className='flex h-[2px] w-[2px] rounded-full bg-[#595959]' />
              </div>
              <span className='text-text-l font-normal tracking-[-0.01em] text-[#595959]'>
                {
                  '마이룸 > 주문관리 > 주문/배송내역 > 주문조회 > 반품/교환 신청, [1:1 상담 > 반품/교환/환불] 또는 고객센터 (1544-1900)'
                }
              </span>
            </div>
            <div className='flex w-full flex-row gap-1'>
              <div className='flex h-[18px] w-[6px] items-center justify-center'>
                <div className='flex h-[2px] w-[2px] rounded-full bg-[#595959]' />
              </div>
              <span className='text-text-l font-normal tracking-[-0.01em] text-[#595959]'>
                {
                  '오픈마켓, 해외배송 주문, 기프트 주문시 [1:1 상담>반품/교환/환불] 또는 고객센터 (1544-1900)'
                }
              </span>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-3 border-b border-[#EAEAEA] pb-[30px]'>
          <span className='text-text-xl font-bold tracking-[-0.01em]'>
            교환/반품 가능기간
          </span>
          <div className='flex w-full gap-1'>
            <div className='flex h-[18px] w-[6px] items-center justify-center'>
              <div className='flex h-[2px] w-[2px] rounded-full bg-[#595959]' />
            </div>
            <span className='text-text-l font-normal tracking-[-0.01em] text-[#595959]'>
              {
                '변심반품의 경우 수령 후 7일 이내, 상품의 결함 및 계약내용과 다를 경우 문제점 발견 후 30일 이내'
              }
            </span>
          </div>
        </div>
        <div className='flex flex-col gap-3 border-b border-[#EAEAEA] pb-[30px]'>
          <span className='text-text-xl font-bold tracking-[-0.01em]'>
            교환/반품 비용
          </span>
          <div className='flex w-full gap-1'>
            <div className='flex h-[18px] w-[6px] items-center justify-center'>
              <div className='flex h-[2px] w-[2px] rounded-full bg-[#595959]' />
            </div>
            <span className='text-text-l font-normal tracking-[-0.01em] text-[#595959]'>
              입력내용
            </span>
          </div>
        </div>
        <div className='flex flex-col gap-3 border-b border-[#EAEAEA] pb-[30px]'>
          <span className='text-text-xl font-bold tracking-[-0.01em]'>
            교환/반품 내용
          </span>
          <div className='flex w-full gap-1'>
            <div className='flex h-[18px] w-[6px] items-center justify-center'>
              <div className='flex h-[2px] w-[2px] rounded-full bg-[#595959]' />
            </div>
            <span className='text-text-l font-normal tracking-[-0.01em] text-[#595959]'>
              변심 혹은 구매착오로 인한 반품/교환은 반송료 고객 부담
            </span>
          </div>
        </div>
        <div className='flex flex-col gap-3 border-b border-[#EAEAEA] pb-[30px]'>
          <span className='text-text-xl font-bold tracking-[-0.01em]'>
            교환/반품 비용
          </span>
          <div className='flex flex-col gap-1'>
            <div className='flex w-full flex-row gap-1'>
              <div className='flex h-[18px] w-[6px] items-center justify-center'>
                <div className='flex h-[2px] w-[2px] rounded-full bg-[#595959]' />
              </div>
              <span className='text-text-l font-normal tracking-[-0.01em] text-[#595959]'>
                소비자의 책임 있는 사유로 상품 등이 손실 또는 훼손된 경우 (단지
                확인을 위한 포장 훼손은 제외)
              </span>
            </div>
            <div className='flex w-full flex-row gap-1'>
              <div className='flex h-[18px] w-[6px] items-center justify-center'>
                <div className='flex h-[2px] w-[2px] rounded-full bg-[#595959]' />
              </div>
              <span className='text-text-l font-normal tracking-[-0.01em] text-[#595959]'>
                소비자의 사용, 포장 개봉에 의해 상품 등의 가치가 현저히 감소한
                경우 예) 화장품, 식품, 가전제품(악세서리 포함) 등
              </span>
            </div>
          </div>
        </div>
        <div className='w-full rounded-[12px] bg-[#F7F7F7] p-5'>
          <div className='flex w-full flex-row gap-1'>
            <div className='flex h-[18px] w-[6px] items-center justify-center'>
              <div className='flex h-[2px] w-[2px] rounded-full bg-[#595959]' />
            </div>
            <span className='text-text-l font-normal tracking-[-0.01em] text-[#595959]'>
              상품 설명에 반품/교환 관련한 안내가 있는 경우 그 내용을 우선으로
              합니다. (업체 사정에 따라 달라질 수 있습니다.)
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NoticeInto
