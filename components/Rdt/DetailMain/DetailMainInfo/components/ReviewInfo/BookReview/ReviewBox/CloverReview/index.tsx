import Image from "next/image";

import ReviewIcon from "./ico_review_16.png";
import CloverReviewItem from "./CloverReviewItem";
import LikeReviewItem from "./LikeReviewItem";
import CloverList from "@/components/Rdt/atoms/CloverList";
import RdtTypography from "@/components/Rdt/atoms/RdtTypography";
const CloverReview = () => {
  return (
    <section className="flex flex-col gap-[20px] rounded-[20px] bg-[#F7F7F7] py-[28px] px-[20px]">
      <div className="flex w-[318px] flex-col items-center gap-[20px]">
        <div className="flex flex-row gap-[8px]">
          <CloverList size={24} rate={4} />
          <div className="flex items-center gap-[4px]">
            <RdtTypography type="H3" weight="Bold" color="#3C9A17">
              9.7
            </RdtTypography>
            <RdtTypography type="B2" weight="Regular" color="#767676">
              / 10
            </RdtTypography>
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
      <div className="h-[1px] bg-[#EAEAEA]" />
      <div className="flex w-[318px] flex-col items-center gap-[20px]">
        <div className="flex flex-col justify-center items-center">
          <RdtTypography type="B1" weight="Regular" color="#000">
            100%의 구매자가
          </RdtTypography>
          <div className="flex flex-row items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                d="M11.2706 12.4213C10.9033 12.4277 10.5388 12.3571 10.2018 12.2145C9.8648 12.0718 9.56309 11.8603 9.31689 11.5943C9.05118 11.322 8.84298 11.0013 8.70428 10.6505C8.56558 10.2998 8.49911 9.92578 8.50856 9.54991C8.52432 8.98917 8.64459 8.43595 8.86362 7.91732C9.10007 7.31752 9.41325 6.74934 9.79573 6.2262C10.1625 5.72074 10.618 5.28247 11.1411 4.93174C11.5705 4.62017 12.0868 4.44349 12.6216 4.42528C12.8313 4.41332 13.0384 4.47543 13.2052 4.60008C13.2631 4.63922 13.311 4.6906 13.3455 4.75048C13.38 4.81037 13.4 4.87713 13.4042 4.9457C13.3819 5.07706 13.3206 5.19923 13.228 5.29699C13.0909 5.47812 12.9404 5.64915 12.7778 5.8089C12.5929 5.99184 12.4278 6.193 12.2854 6.40916C12.1391 6.60773 12.0545 6.84332 12.0417 7.08759C12.0417 7.34498 12.3541 7.48983 12.4569 7.53722C12.6559 7.63014 12.8815 7.7333 13.1233 7.85131C13.3764 7.99798 13.5808 8.21289 13.7117 8.47018C13.9139 8.8414 14.0125 9.25806 13.9974 9.6782C14.0134 10.0415 13.9551 10.4043 13.826 10.7453C13.6968 11.0864 13.4994 11.399 13.2452 11.6648C12.9887 11.9189 12.6804 12.1175 12.3402 12.2478C12 12.3781 11.6357 12.4373 11.2706 12.4213ZM4.76201 12.4213C4.39472 12.4277 4.03035 12.3571 3.69334 12.2145C3.35633 12.0718 3.0545 11.8603 2.80831 11.5943C2.54276 11.322 2.33481 11.0013 2.19628 10.6505C2.05775 10.2998 1.99133 9.92571 2.00091 9.54991C2.01619 8.98911 2.1366 8.43582 2.35608 7.91732C2.59224 7.31757 2.90513 6.7494 3.28726 6.2262C3.6541 5.72079 4.1095 5.28253 4.63254 4.93174C5.06222 4.62005 5.57897 4.44337 6.11403 4.42528C6.32343 4.41347 6.53016 4.47557 6.69665 4.60008C6.75448 4.63922 6.80246 4.6906 6.83693 4.75048C6.8714 4.81037 6.89144 4.87713 6.89562 4.9457C6.89562 4.99402 6.86714 5.13707 6.5996 5.43163C6.36444 5.68995 6.13308 5.96036 5.91029 6.23448C5.68883 6.46904 5.55467 6.76959 5.52943 7.08759C5.52943 7.34498 5.84175 7.48983 5.94457 7.53722C6.14356 7.63014 6.36916 7.7333 6.61099 7.85131C6.86411 7.99798 7.06847 8.21289 7.19943 8.47018C7.40168 8.84137 7.50013 9.25805 7.48499 9.6782C7.501 10.0415 7.44281 10.4043 7.31368 10.7453C7.18454 11.0864 6.98711 11.399 6.73291 11.6648C6.47688 11.9184 6.16911 12.1168 5.82963 12.247C5.49015 12.3773 5.12645 12.4367 4.76201 12.4213Z"
                fill="#474C98"
              />
            </svg>
            <RdtTypography type="B1" weight="Regular" color="#474C98">
              좋았어요
            </RdtTypography>
            <RdtTypography type="B1" weight="Regular" color="#000">
              라고 응답했어요
            </RdtTypography>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <div className="flex w-11 flex-col items-center justify-center gap-2">
            <div className="w-[38px] h-[19px] rounded-[50px] flex items-center justify-center">
              <RdtTypography type="caption" weight="Medium" color="#FFFFFF">
                50%
              </RdtTypography>
            </div>
            <div className="relative h-[62px] w-[6px] rounded-[50px] bg-[#F0F0F0]">
              <div
                className="absolute bottom-0 w-[6px] rounded-[50px] bg-[#474C98]"
                style={{ height: `${50}%` }}
              />
            </div>
            <RdtTypography type="B3" weight="Medium" color="#474C98">
              고마워요
            </RdtTypography>
          </div>
          {[74, 14, 32, 10].map((rate, index, arr) => (
            <LikeReviewItem rate={rate} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloverReview;
