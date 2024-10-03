import Button from "../atoms/Button";

const DetailActionBar = () => {
  return (
    <section className="fixed bottom-0 left-0 right-0 z-50 flex w-full items-center justify-center border-t border-[#CCCCCC] bg-white py-[10px]">
      <div className="flex w-[1200px] flex-row items-center justify-between">
        <div className="flex w-[351px] flex-row items-center gap-7">
          <span className="text-text-xl font-normal tracking-[-0.01em]">
            상품 금액
          </span>
          <div className="text-title-m flex flex-row gap-[2px] tracking-[-0.01em]">
            <span className="font-roboto  font-bold">300,000</span>
            <span className="font-normal">원</span>
          </div>
        </div>

        <div className="flex space-x-2">
          <button>장바구니</button>
          <button>신청하기</button>
        </div>
      </div>
    </section>
  );
};

export default DetailActionBar;
