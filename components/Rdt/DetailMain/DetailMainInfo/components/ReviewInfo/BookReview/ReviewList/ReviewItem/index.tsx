import Image from "next/image";

import LikeIcon from "./images/IC_Like_24.png";
import ReplyIcon from "./images/IC_reply_24.png";
import ReviewIcon from "./images/ico_review_16.png";
import SampleImage from "./images/img_sample.png";
import Badge, { BadgeColor } from "@/components/Rdt/atoms/Badge";
import CloverList from "@/components/Rdt/atoms/CloverList";
import ReviewImage from "./ReviewImage";
import ReplySection from "./ReplySection";
import RdtTypography from "@/components/Rdt/atoms/RdtTypography";

const ReviewItem = () => {
  const BadgeList: { title: string; color: BadgeColor }[] = [
    { title: "종이책", color: "green" },
    { title: "구매자", color: "gray" },
  ];
  return (
    <section className="flex flex-col gap-4 border-b border-[#EAEAEA] px-3">
      <div className="flex flex-col gap-[6px]">
        <div className="flex flex-row items-center gap-[8px]">
          <div className="flex items-center gap-[4px]">
            {BadgeList.map((el, i) => (
              <Badge {...el} key={i} />
            ))}
          </div>
          <RdtTypography type="B3" weight="Regular" color="#767676">
            mm********
          </RdtTypography>
          <div className="h-2 w-[1px] bg-[#CCCCCC]" />
          <RdtTypography type="B3" weight="Regular" color="#767676">
            2024.07.15
          </RdtTypography>
        </div>
        <div className="flex flex-row gap-1">
          <CloverList rate={4} />
          <div className="flex flex-row items-center gap-1">
            <Image
              src={ReviewIcon.src}
              width={14}
              height={14}
              alt={"review icon"}
            />
            <RdtTypography type="B2" weight="Medium" color="#474C98">
              좋았어요
            </RdtTypography>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <RdtTypography type="B2" weight="Regular" color="#000000">
            배송도 빠르고 너무나 좋습니다.^^
            <br /> 배송도 빠르고 너무나 좋습니다.^^
          </RdtTypography>
          <div className="relative h-16 w-16 overflow-hidden rounded-lg">
            <Image
              src={SampleImage.src}
              layout={"fill"}
              alt={"썸네일 이미지"}
            />
          </div>
        </div>
        {/* <ReviewImage /> */}
      </div>
      <div className="flex flex-col">
        {/* <TextMore text={'펼치기'} /> */}
        <div className="flex flex-row gap-2.5">
          <div className="flex flex-row items-center gap-[2px]">
            <div className="relative h-6 w-6 items-center">
              <Image src={LikeIcon.src} layout={"fill"} alt={"좋아요 아이콘"} />
            </div>
            <RdtTypography type="B2" weight="Bold" color="#474C98">
              234
            </RdtTypography>
          </div>
          <div className="flex flex-row  gap-[2px]">
            <div className="relative h-6 w-6 items-center">
              <Image src={ReplyIcon.src} layout={"fill"} alt={"댓글 아이콘"} />
            </div>
            <RdtTypography type="B2" weight="Regular" color="#767676">
              댓글
            </RdtTypography>
            <RdtTypography type="B2" weight="Regular" color="#767676">
              234
            </RdtTypography>
          </div>
        </div>
      </div>
      <ReplySection />
    </section>
  );
};

export default ReviewItem;
