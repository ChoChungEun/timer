import Image from "next/image";
import ReplyInit from "./images/ico_reply_12.png";
import RdtTypography from "@/components/Rdt/atoms/RdtTypography";
const ReplySection = () => {
  return (
    <section className="mt-3 flex flex-col gap-2 rounded-[8px] bg-[#F7F7F7]">
      <div className="m-5 flex w-full flex-row items-start  gap-2 ">
        <Image src={ReplyInit.src} width={12} height={12} alt={"댓글 아이콘"} />
        <div className="flex flex-col gap-2">
          <div className="flex w-full flex-row gap-2">
            <RdtTypography type="B3" weight="Regular" color="#767676">
              mm********
            </RdtTypography>
            <div className="h-2 w-[1px] bg-[#CCCCCC]" />
            <RdtTypography type="B3" weight="Regular" color="#767676">
              2024.07.15
            </RdtTypography>
          </div>
          <div className="flex w-full justify-between">
            <RdtTypography type="B2" weight="Regular" color="#000">
              배송도 빠르고 너무나 좋습니다.^^
              <br /> 배송도 빠르고 너무나 좋습니다.^^
            </RdtTypography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReplySection;
