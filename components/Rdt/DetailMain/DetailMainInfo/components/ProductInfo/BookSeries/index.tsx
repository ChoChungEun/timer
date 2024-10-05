"use client";

import React, { useState } from "react";

import ImageSlideView from "./ImageSlideView";
import TextSlideView from "./TextSlideView";
import BookSeriesHeader from "./BookSeriesHeader";
import RdtTypography from "@/components/Rdt/atoms/RdtTypography";

const BookSeries = () => {
  const [isTextViewMode, setIsTextViewMode] = useState(false);

  return (
    <section className="flex flex-col gap-5 rounded-[20px] border border-[#F7F7F7]">
      <BookSeriesHeader
        setIsTextViewMode={setIsTextViewMode}
        isTextViewMode={isTextViewMode}
      />
      <div className="flex flex-col gap-6 py-[23px] pl-[23px]">
        {isTextViewMode ? <TextSlideView /> : <ImageSlideView />}
        <div className="flex flex-row items-center justify-center gap-1 pr-[30px]">
          <button className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-300 bg-white p-3" />
          <button className="flex h-11 w-[90px]  items-center justify-center rounded-lg border border-gray-300 bg-[#767676] p-3">
            <RdtTypography type="B2" weight="Regular" color="#000000">
              장바구니
            </RdtTypography>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookSeries;
