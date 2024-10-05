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
    <section className="flex flex-col">
      <div className="flex flex-row gap-[16px]">
        <RdtTypography type="H4" weight="Bold" color="#000000">
          이책의 시리즈(8)
        </RdtTypography>
        {/* todo 하트 버튼 */}
      </div>
      <div className="flex flex-row justify-between bg-[#F7F7F7] items-center py-[10px] px-[14px]">
        <div className="flex flex-row gap-2">
          {/* <KdsCheckBox
            initChecked={isTotalChecked}
            onChange={(e) => setIsTotalChecked(e.target.checked)}
          /> */}
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
