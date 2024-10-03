import CloverList from "@/components/Rdt/atoms/CloverList";

interface IProps {
  rate: number;
  index: number;
}
const CloverReviewItem = (props: Readonly<IProps>) => {
  const { rate, index } = props;
  return (
    <div className="flex flex-row items-center justify-center gap-3">
      <CloverList rate={index} />
      <div className="h-1 w-[195px] rounded-[50px] bg-[#F0F0F0]">
        <div
          className="h-1 rounded-[50px] bg-[#4DAC27]"
          style={{ width: `${rate}%` }}
        />
      </div>
      <span className="text-text-m font-normal text-[#595959]">{rate}%</span>
    </div>
  );
};

export default CloverReviewItem;
