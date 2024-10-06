import RdtTypography from "@/components/Rdt/atoms/RdtTypography";

const ReviewNav = () => {
  return (
    <div className="flex items-end justify-start border-b-[1px] boeder-[#EAEAEA]">
      <button className="flex items-center justify-center h-[48px] flex-grow border-b-[1px] border-[#000000] bg-white text-center">
        <RdtTypography type="B1" weight="Bold" color="#000000">
          Klover 리뷰(120)
        </RdtTypography>
      </button>
      <button className="flex items-center justify-center h-[48px] flex-grow border-b-[1px] border-[#EAEAEA] bg-white text-center">
        <RdtTypography type="B1" weight="Regular" color="#767676">
          리딩트리 리뷰(15)
        </RdtTypography>
      </button>
    </div>
  );
};

export default ReviewNav;
