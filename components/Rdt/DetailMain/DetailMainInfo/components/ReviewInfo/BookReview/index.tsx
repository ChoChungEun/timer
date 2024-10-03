import Image from "next/image";

import ReviewIcon from "./icon_review.png";
import ReviewBox from "./ReviewBox";
import ReviewList from "./ReviewList";

const BookReview = () => {
  return (
    <section className="flex w-full flex-col">
      <div className="flex w-full items-center justify-between pb-7">
        <div className="flex flex-row gap-2">
          <span className="text-title-s font-bold tracking-[-0.01em]">
            리뷰(135)
          </span>
          {/* todo 느낌표 아이콘 */}
        </div>
        <button className="h-[38px] rounded-[8px] bg-black px-[14px] py-[9px]">
          <div className="flex flex-row items-center gap-1">
            <Image
              src={ReviewIcon.src}
              width={16}
              height={16}
              alt={"review icon"}
            />
            <span className="text-text-l font-medium tracking-[-0.01em] text-white">
              리뷰 작성
            </span>
          </div>
        </button>
      </div>
      <ReviewBox />
      <ReviewList />
    </section>
  );
};

export default BookReview;
