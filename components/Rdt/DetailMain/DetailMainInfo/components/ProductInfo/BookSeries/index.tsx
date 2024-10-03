"use client";

import React, { useState } from "react";

import ImageSlideView from "./ImageSlideView";
import TextSlideView from "./TextSlideView";
import BookSeriesHeader from "./BookSeriesHeader";

const BookSeries = () => {
  const [isTextViewMode, setIsTextViewMode] = useState(false);

  return (
    <section className="flex w-full flex-col gap-5">
      <BookSeriesHeader
        setIsTextViewMode={setIsTextViewMode}
        isTextViewMode={isTextViewMode}
      />
      <div className="flex w-full flex-col gap-6 rounded-[20px] bg-[#F7F7F7] pb-[40px] pl-[30px] pt-[36px]">
        {isTextViewMode ? <TextSlideView /> : <ImageSlideView />}
        <div className="flex flex-row items-center justify-center gap-1 pr-[30px]">
          <button className=" flex h-11 w-11 items-center justify-center rounded-lg border border-gray-300 bg-white p-3" />
          <button className=" flex h-11 w-[90px]  items-center justify-center rounded-lg border border-gray-300 bg-[#767676] p-3">
            <span className="text-[14px] font-bold leading-[22px] text-white">
              장바구니
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookSeries;
