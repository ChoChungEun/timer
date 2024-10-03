import Image from "next/image";

import ReviewIcon from "./ico_review_16.png";
import CloverReviewItem from "./CloverReviewItem";
import LikeReviewItem from "./LikeReviewItem";
import CloverList from "@/components/Rdt/atoms/CloverList";
const CloverReview = () => {
  return (
    <section className="flex flex-row gap-12 rounded-[20px] bg-[#F7F7F7] p-7">
      <div className="flex w-[318px] flex-col items-center gap-7">
        <div className="flex w-[161px] flex-col gap-1">
          <span className="text-text-l text-center font-medium tracking-[-0.01em]">
            사용자 총점
          </span>
          <div className="flex w-full flex-row gap-2">
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
        </div>
        <div className="flex flex-col gap-3">
          {[92, 1, 25, 30].map((rate, index, arr) => (
            <CloverReviewItem
              rate={rate}
              index={arr.length - index}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="w-[1px] bg-[#EAEAEA]" />
      <div className="flex w-[318px] flex-col items-center gap-7">
        <div className="flex flex-col gap-1 text-center">
          <span className="text-text-xl font-normal">100%의 구매자가</span>
          <div className="flex flex-row items-center gap-1">
            <Image
              src={ReviewIcon.src}
              width={16}
              height={16}
              alt="Review Icon"
            />
            <span className="text-text-xl font-bold text-[#474C98]">
              좋았어요
            </span>
            <span className="text-text-xl font-normal">라고 응답했어요</span>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          {[74, 14, 32, 10, 2].map((rate, index, arr) => (
            <LikeReviewItem rate={rate} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloverReview;
