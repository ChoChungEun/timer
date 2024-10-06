// import { KdsCheckBox } from '@/kds'
import Image from "next/image";

import { IHeader } from "../interfaces";
import TotalIcon from "./icon_total.png";
import TextMode from "./text_mode_btn.png";
import SlideMode from "./view_mode_btn.png";
import RdtTypography from "@/components/Rdt/atoms/RdtTypography";

// import React, { useState } from 'react'

const BookSeriesHeader = (props: Readonly<IHeader>) => {
  const { isTextViewMode, setIsTextViewMode } = props;
  // const [isTotalChecked, setIsTotalChecked] = useState(false)

  return (
    <section className="flex flex-col gap-[16px]">
      <div className="flex items-center gap-[4px]">
        <RdtTypography type="H4" weight="Bold" color="#000000">
          이책 의 시리즈(8)
        </RdtTypography>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M8.57337 5.14062C9.83623 5.14062 11.0683 5.7017 11.9718 6.6728C11.9923 6.69438 12.0129 6.69438 12.0334 6.6728C12.9369 5.71249 14.1587 5.14062 15.4318 5.14062C15.5859 5.14062 15.7296 5.14062 15.8836 5.1622C20.4525 5.65854 20.9351 11.3988 18.7173 13.5136L13.1012 18.7036C12.4646 19.2863 11.5201 19.2863 10.8938 18.7036L5.2776 13.5136C3.07016 11.3988 3.54245 5.65854 8.12161 5.1622C8.27562 5.14062 8.42963 5.14062 8.57337 5.14062Z"
            stroke="#CCCCCC"
            stroke-width="1.5"
            stroke-miterlimit="10"
          />
        </svg>
      </div>
      <div className="flex flex-row justify-between bg-[#F7F7F7] items-center py-[10px] px-[14px]">
        <div className="flex flex-row gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="23"
            viewBox="0 0 22 23"
            fill="none"
          >
            <rect
              x="1.5"
              y="2.35449"
              width="19"
              height="19"
              rx="3.5"
              fill="white"
              stroke="#CCCCCC"
            />
            <path
              d="M9.99754 15.8545C9.73169 15.8544 9.47675 15.7489 9.28879 15.561L6.2814 12.5562C6.0988 12.3673 5.99775 12.1143 6.00004 11.8516C6.00232 11.589 6.10775 11.3378 6.29362 11.1521C6.47948 10.9664 6.73091 10.861 6.99375 10.8588C7.2566 10.8565 7.50982 10.9574 7.69889 11.1399L9.99754 13.4356L14.3011 9.13566C14.4902 8.95321 14.7434 8.85225 15.0062 8.85453C15.2691 8.85681 15.5205 8.96215 15.7064 9.14786C15.8923 9.33357 15.9977 9.58478 16 9.8474C16.0022 10.11 15.9012 10.363 15.7186 10.5519L10.7063 15.56C10.6133 15.6532 10.5028 15.7272 10.3812 15.7777C10.2596 15.8282 10.1292 15.8543 9.99754 15.8545Z"
              fill="#CCCCCC"
            />
          </svg>
          <RdtTypography type="B2" weight="Regular" color="#000000">
            전체선택
          </RdtTypography>
        </div>
        <div className="flex flex-row gap-2">
          <button onClick={() => setIsTextViewMode(!isTextViewMode)}>
            <Image
              src={isTextViewMode ? TextMode.src : SlideMode.src}
              width={75}
              height={38}
              alt={"viewMode button"}
            />
          </button>
          <button className="flex h-[38px] flex-row gap-1 rounded-[8px] border border-[#CCCCCC] px-[14px] py-[9px]">
            <Image
              src={TotalIcon.src}
              height={20}
              width={20}
              alt={"전체 목록 리스트"}
              className="flex-shrink-0"
            />
            <RdtTypography type="B2" weight="Medium" color="#000000">
              전체목록
            </RdtTypography>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookSeriesHeader;
