import RdtTypography from "@/components/Rdt/atoms/RdtTypography";
import DropdownIcon from "./chevDown_12.png";
import Image from "next/image";
const ReviewTab = () => {
  return (
    <section className="flex justify-between border-b border-[#EAEAEA] items-center">
      <div className="flex flex-row gap-[24px]">
        <div className="flex flex-col h-[48px] items-center justify-center border-b-[2px] border-[#000000]">
          <RdtTypography type="B2" weight="Bold" color="#000000">
            전체 리뷰
          </RdtTypography>
        </div>
        <div className="flex flex-col h-[48px] items-center justify-center">
          <RdtTypography type="B2" weight="Bold" color="#767676">
            구매자 리뷰
          </RdtTypography>
        </div>
        <div className="flex flex-col h-[48px] items-center justify-center">
          <RdtTypography type="B2" weight="Regular" color="#767676">
            한달 후 리뷰
          </RdtTypography>
        </div>
      </div>
      <div className="flex h-[38px] w-[62px] flex-row items-center justify-between gap-[4px]">
        <RdtTypography type="caption" weight="Regular" color="#000000">
          좋아요순
        </RdtTypography>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
        >
          <path
            d="M1.5 4.62378L2.23096 3.92383L6 7.5238L9.76898 3.92383L10.5 4.62378L6 8.92383L1.5 4.62378Z"
            fill="black"
          />
        </svg>
      </div>
    </section>
  );
};

export default ReviewTab;
