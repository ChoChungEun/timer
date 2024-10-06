import CloverList from "@/components/Rdt/atoms/CloverList";
import RdtTypography from "@/components/Rdt/atoms/RdtTypography";

interface IProps {
  rate: number;
  index: number;
}
const CloverReviewItem = (props: Readonly<IProps>) => {
  const { rate, index } = props;
  return (
    <div className="flex flex-row items-center justify-center gap-3">
      <CloverList rate={index} />
      <div className="h-1 w-[178px] rounded-[50px] bg-[#F0F0F0]">
        <div
          className="h-1 rounded-[50px] bg-[#4DAC27]"
          style={{ width: `${rate}%` }}
        />
      </div>
      <RdtTypography type="caption" weight="Regular" color="#595959">
        {rate}%
      </RdtTypography>
    </div>
  );
};

export default CloverReviewItem;
