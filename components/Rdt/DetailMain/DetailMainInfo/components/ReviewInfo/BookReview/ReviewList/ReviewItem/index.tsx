import Image from "next/image";

import LikeIcon from "./images/IC_Like_24.png";
import ReplyIcon from "./images/IC_reply_24.png";
import ReviewIcon from "./images/ico_review_16.png";
import SampleImage from "./images/img_sample.png";
import Badge, { BadgeColor } from "@/components/Rdt/atoms/Badge";
import CloverList from "@/components/Rdt/atoms/CloverList";
import ReviewImage from "./ReviewImage";
import ReplySection from "./ReplySection";

const ReviewItem = () => {
  const BadgeList: { title: string; color: BadgeColor }[] = [
    { title: "종이책", color: "green" },
    { title: "구매자", color: "gray" },
  ];
  return (
    <section className="flex flex-col gap-4 border-b border-[#EAEAEA] px-3 py-6">
      <div className="flex w-full justify-between">
        <div className="flex flex-row gap-2">
          <div className="flex flex-row items-center justify-center gap-1">
            {BadgeList.map((el, i) => (
              <Badge {...el} key={i} />
            ))}
            <span className="text-text-m font-roboto font-normal tracking-[-0.01em] text-[#767676]">
              mm********
            </span>
            <div className="h-2 w-[1px] bg-[#CCCCCC]" />
            <span className="text-text-m font-roboto font-normal tracking-[-0.01em] text-[#767676]">
              2024.07.15
            </span>
          </div>
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
            <span className="text-text-l font-medium tracking-[-0.01em] text-[#474C98]">
              좋았어요
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex w-full justify-between">
          <span className="text-text-l font-normal tracking-[-0.01em]">
            배송도 빠르고 너무나 좋습니다.^^
            <br /> 배송도 빠르고 너무나 좋습니다.^^
          </span>
          <div className="relative h-16 w-16 overflow-hidden rounded-lg">
            <Image
              src={SampleImage.src}
              layout={"fill"}
              alt={"썸네일 이미지"}
            />
          </div>
        </div>
        <ReviewImage />
      </div>

      <div className="flex w-full justify-between">
        {/* <TextMore text={'펼치기'} /> */}
        <div className="flex flex-row gap-2.5">
          <div className="flex flex-row items-center gap-[2px]">
            <div className="relative h-6 w-6 items-center">
              <Image src={LikeIcon.src} layout={"fill"} alt={"좋아요 아이콘"} />
            </div>
            <span className="font-roboto text-text-l font-normal tracking-[-0.01em] text-[#595959]">
              234
            </span>
          </div>
          <div className="flex flex-row  gap-[2px]">
            <div className="relative h-6 w-6 items-center">
              <Image src={ReplyIcon.src} layout={"fill"} alt={"댓글 아이콘"} />
            </div>

            <span className="font-roboto text-text-l inline-flex items-center whitespace-nowrap font-normal tracking-[-0.01em] text-[#595959]">
              답글 10
            </span>
          </div>
        </div>
      </div>
      <ReplySection />
    </section>
  );
};

export default ReviewItem;
