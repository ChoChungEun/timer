import RdtTypography from "@/components/Rdt/atoms/RdtTypography";

interface IProps {
  rate: number;
}
const LikeReviewItem = (props: Readonly<IProps>) => {
  const { rate } = props;
  return (
    <div className="flex w-11 flex-col items-center justify-center gap-2">
      <RdtTypography type="caption" weight="Medium" color="#595959">
        {rate}%
      </RdtTypography>
      <div className="relative h-[62px] w-[6px] rounded-[50px] bg-[#F0F0F0]">
        <div
          className="absolute bottom-0 w-[6px] rounded-[50px] bg-[#767676]"
          style={{ height: `${rate}%` }}
        />
      </div>
      <RdtTypography type="B3" weight="Medium" color="#767676">
        최고에요
      </RdtTypography>
    </div>
  );
};

export default LikeReviewItem;
