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
      <div className="mt-[20px] flex justify-center">
        <button className="flex gap-[8px] items-center">
          <RdtTypography type="B1" weight="Medium" color="#767676">
            더보기
          </RdtTypography>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M12.5 24.4238C19.1274 24.4238 24.5 19.0512 24.5 12.4238C24.5 5.79641 19.1274 0.423828 12.5 0.423828C5.87258 0.423828 0.5 5.79641 0.5 12.4238C0.5 19.0512 5.87258 24.4238 12.5 24.4238Z"
              fill="white"
            />
            <path
              d="M12.5 23.9238C18.8513 23.9238 24 18.7751 24 12.4238C24 6.07255 18.8513 0.923828 12.5 0.923828C6.14873 0.923828 1 6.07255 1 12.4238C1 18.7751 6.14873 23.9238 12.5 23.9238Z"
              stroke="#CCCCCC"
            />
            <path
              d="M12.4982 15.425C12.4325 15.4251 12.3675 15.4123 12.3067 15.3872C12.246 15.3622 12.1908 15.3254 12.1442 15.279L8.14424 11.279C8.05317 11.1847 8.00279 11.0584 8.00393 10.9273C8.00506 10.7962 8.05764 10.6708 8.15035 10.5781C8.24305 10.4854 8.36843 10.4328 8.49953 10.4317C8.63063 10.4305 8.75698 10.4809 8.85128 10.572L12.4973 14.218L16.1433 10.572C16.2376 10.4809 16.3639 10.4305 16.495 10.4317C16.6261 10.4328 16.7514 10.4854 16.8441 10.5781C16.9368 10.6708 16.9894 10.7962 16.9906 10.9273C16.9917 11.0584 16.9413 11.1847 16.8502 11.279L12.8502 15.279C12.7568 15.3722 12.6303 15.4247 12.4982 15.425Z"
              fill="#595959"
            />
          </svg>
        </button>
      </div>
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
