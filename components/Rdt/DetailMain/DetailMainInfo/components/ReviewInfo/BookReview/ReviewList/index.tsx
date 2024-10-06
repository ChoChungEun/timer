import ReviewItem from "./ReviewItem";
import Image from "next/image";
import NoReviewIcon from "./ico_NoReview.png";
import Badge, { BadgeColor } from "@/components/Rdt/atoms/Badge";
import RdtTypography from "@/components/Rdt/atoms/RdtTypography";

import LikeIcon from "./ReviewItem/images/IC_Like_24.png";
import ReplyIcon from "./ReviewItem/images/IC_reply_24.png";
import ReviewIcon from "./ReviewItem/images/ico_review_16.png";
import SampleImage from "./ReviewItem/images/img_sample.png";
import CloverList from "@/components/Rdt/atoms/CloverList";
import { useState } from "react";
import ReviewImage from "./ReviewItem/ReviewImage";
import ReplySection from "./ReviewItem/ReplySection";

const ReviewList = () => {
  const [showMore, setShowMore] = useState(false);
  const BadgeList: { title: string; color: BadgeColor }[] = [
    { title: "종이책", color: "green" },
    { title: "구매자", color: "gray" },
  ];
  const handleClickShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <section className="flex flex-col">
      <section className="flex flex-col gap-4 border-b border-[#EAEAEA] px-3 py-[20px]">
        <div className="flex flex-col gap-[6px]">
          <div className="flex flex-row items-center gap-[8px]">
            <div className="flex items-center gap-[4px]">
              {/* Badge 사이즈 작게 변경 */}
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
        </div>
        <div className="flex flex-col gap-[14px]">
          {showMore && <ReviewImage />}
          <button onClick={handleClickShowMore}>
            <RdtTypography type="B3" weight="Regular" color="#767676">
              {showMore ? "접기" : "펼치기"}
            </RdtTypography>
          </button>
          <div className="flex items-center justify-between">
            <button>
              <RdtTypography type="caption" weight="Medium" color="#474C98">
                한달 후 리뷰보기 &gt;
              </RdtTypography>
            </button>
            <div className="flex flex-row gap-2.5">
              <div className="flex flex-row items-center gap-[2px]">
                <div className="relative h-6 w-6 items-center">
                  <Image
                    src={LikeIcon.src}
                    layout={"fill"}
                    alt={"좋아요 아이콘"}
                  />
                </div>
                <RdtTypography type="B2" weight="Bold" color="#474C98">
                  234
                </RdtTypography>
              </div>
              <div className="flex flex-row  gap-[2px]">
                <div className="relative h-6 w-6 items-center">
                  <Image
                    src={ReplyIcon.src}
                    layout={"fill"}
                    alt={"댓글 아이콘"}
                  />
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
        </div>
        {/* <ReplySection /> */}
      </section>
      <section className="flex flex-col gap-4 border-b border-[#EAEAEA] px-3 py-[20px]">
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
        </div>
        <div className="flex flex-col">
          {/* <TextMore text={'펼치기'} /> */}
          <div className="flex flex-row gap-2.5">
            <div className="flex flex-row items-center gap-[2px]">
              <div className="relative h-6 w-6 items-center">
                <Image
                  src={LikeIcon.src}
                  layout={"fill"}
                  alt={"좋아요 아이콘"}
                />
              </div>
              <RdtTypography type="B2" weight="Bold" color="#474C98">
                234
              </RdtTypography>
            </div>
            <div className="flex flex-row  gap-[2px]">
              <div className="relative h-6 w-6 items-center">
                <Image
                  src={ReplyIcon.src}
                  layout={"fill"}
                  alt={"댓글 아이콘"}
                />
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
        <div className="h-[1px] bg-[#EAEAEA]" />
        <ReplySection />
      </section>
      <NoReview />
    </section>
  );
};

const NoReview = () => {
  return (
    <section className="flex w-full items-center justify-center border-b border-[#EAEAEA] py-3">
      <div className="flex flex-col items-center justify-center gap-2.5 py-[27px]">
        <Image src={NoReviewIcon} width={46} height={46} alt="No Review Icon" />
        <span className="text-text-l font-medium tracking-[-0.01em]">
          작성된 리뷰가 없습니다.
        </span>
      </div>
    </section>
  );
};

export default ReviewList;
