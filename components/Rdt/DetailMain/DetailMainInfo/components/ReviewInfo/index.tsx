import { Fragment } from "react";
import BookReview from "./BookReview";
import CollectText from "./CollectText";

const ReviewInfo = () => {
  return (
    <Fragment>
      <BookReview />
      <CollectText />
    </Fragment>
  );
};

export default ReviewInfo;
