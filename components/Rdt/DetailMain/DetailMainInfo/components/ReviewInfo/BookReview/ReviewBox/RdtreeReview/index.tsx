import CloverList from "@/components/Rdt/atoms/CloverList";

const RdtreeReview = () => {
  return (
    <section className="flex w-full justify-between rounded-[12px] bg-[#F7F7F7] p-7">
      <span className="text-text-xl font-medium tracking-[-0.01em]">
        도서평점
      </span>
      <div className="flex flex-row gap-2">
        <CloverList size={24} rate={4} />
        <div className="flex items-center gap-1">
          <span className="text-title-s font-roboto font-bold text-[#3C9A17]">
            9.7
          </span>
          <span className="text-text-l inline-flex items-center whitespace-nowrap font-normal leading-none text-[#767676]">
            / 10
          </span>
        </div>
      </div>
    </section>
  );
};

export default RdtreeReview;
