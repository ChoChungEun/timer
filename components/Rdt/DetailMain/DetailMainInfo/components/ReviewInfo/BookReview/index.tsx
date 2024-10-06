import Image from "next/image";

import ReviewIcon from "./icon_review.png";
import ReviewBox from "./ReviewBox";
import ReviewList from "./ReviewList";
import RdtTypography from "@/components/Rdt/atoms/RdtTypography";

const BookReview = () => {
  return (
    <section className="flex flex-col w-[335px]">
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-row gap-[8px]">
          <RdtTypography type="H4" weight="Bold" color="#000000">
            리뷰(135)
          </RdtTypography>
          {/* todo 느낌표 아이콘 */}
        </div>
        <button className="h-[44px] rounded-[8px] bg-black flex items-center justify-center">
          <div className="flex flex-row items-center gap-[4px]">
            <Image
              src={ReviewIcon.src}
              width={16}
              height={16}
              alt="리뷰 아이콘"
            />
            <RdtTypography type="B2" weight="Bold" color="#FFFFFF">
              리뷰 작성
            </RdtTypography>
          </div>
        </button>
      </div>
      <ReviewBox />
      <ReviewList />
    </section>
  );
};

export default BookReview;
