import CloverReview from "./CloverReview";
import RdtreeReview from "./RdtreeReview";
import ReviewNav from "./ReviewNav";
import ReviewTab from "./ReviewTab";

const ReviewBox = () => {
  return (
    <section className="flex flex-col gap-6">
      <ReviewNav />
      <CloverReview />
      {/* 모바일에서 사용안하는 듯 확인 필요 */}
      {/* <RdtreeReview />' */}
      <ReviewTab />
    </section>
  );
};

export default ReviewBox;
