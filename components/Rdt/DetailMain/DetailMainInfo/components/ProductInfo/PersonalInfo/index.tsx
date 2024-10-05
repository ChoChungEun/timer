"use client";

import Chip from "@/components/Rdt/atoms/Chip";
import ImageSlideView from "../BookSeries/ImageSlideView";
import RdtTypography from "@/components/Rdt/atoms/RdtTypography";

const PersonalInfo = () => {
  return (
    <section className="flex flex-col gap-[24px]">
      <RdtTypography type="B3" weight="Regular" color="#595959">
        인물 정보
      </RdtTypography>
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-col gap-[16px] rounded-[20px] bg-[#F7F7F7] px-[30px] pb-10 pt-9">
          <img src="https://placehold.co/60x60" alt="인물 이미지" />
          <div className="flex flex-row gap-[8px] items-center">
            <RdtTypography type="B1" weight="Regular" color="#595959">
              저자(글)
            </RdtTypography>
            <RdtTypography type="B1" weight="Bold" color="#000000">
              저자명
            </RdtTypography>
          </div>
          <div className="flex flex-col gap-[8px]">
            {Array.from(Array(2).keys()).map((_, i) => (
              <Chip text={"저자 소분야 〉 저자 세분야"} key={i} />
            ))}
          </div>
          <div className="flex flex-row gap-4">
            <div className=" flex-1 flex-col gap-3">
              <RdtTypography type="B2" weight="Bold" color="#595959">
                1970년 겨울에 태어났다. 1993년 『문학과사회』 겨울호에 시
                「서울의 겨울」 외 4편을 발표하고 이듬해 서울신문 신춘문예에
                단편소설 「붉은 닻」이 당선되면서 작품활동을 시작했다. 장편소설
                『검은 사슴』 『그대의 차가운 손』 『채식주의자』 『바람이 분다,
                가라』 『희랍어 시간』 『소년이 온다』...
              </RdtTypography>
              {/* <TextMore text={'펼치기'} /> */}
            </div>
          </div>
          <ImageSlideView />
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
