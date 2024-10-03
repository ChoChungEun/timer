import CloverReview from "./CloverReview";
import RdtreeReview from "./RdtreeReview";
import ReviewNav from "./ReviewNav";
import ReviewTab from "./ReviewTab";

const ReviewBox = () => {
  return (
    <section className="flex w-full flex-col gap-6">
      <ReviewNav />
      <CloverReview />
      <RdtreeReview />
      <ReviewTab />
    </section>
  );
};

export default ReviewBox;
