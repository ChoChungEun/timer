import EventInfo from "./components/EventInfo";
import LearningInfo from "./components/LearningInfo";
import NoticeInfo from "./components/NoticeInfo";
import ProductInfo from "./components/ProductInfo";
import ReviewInfo from "./components/ReviewInfo";

const DetailMainInfo = () => {
  return (
    <section className="flex flex-col gap-[60px]">
      <LearningInfo />
      <EventInfo />
      <ProductInfo />
      <ReviewInfo />
      <NoticeInfo />
    </section>
  );
};

export default DetailMainInfo;
