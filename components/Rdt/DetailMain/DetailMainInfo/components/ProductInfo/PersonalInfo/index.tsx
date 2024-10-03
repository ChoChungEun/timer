"use client";

import Chip from "@/components/Rdt/atoms/Chip";
import ImageSlideView from "../BookSeries/ImageSlideView";

const PersonalInfo = () => {
  return (
    <section className="flex w-full flex-col gap-5">
      <div className="w-full">
        <span className="text-title-s font-bold">인물 정보</span>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-6 rounded-[20px] bg-[#F7F7F7] px-[30px] pb-10 pt-9">
          <div className="flex flex-row gap-2">
            <span className="text-text-xl font-medium text-[#595959]">
              저자(글)
            </span>
            <span className="text-text-xl font-bold">저자명</span>
          </div>
          <div className="flex flex-row gap-2">
            {Array.from(Array(2).keys()).map((_, i) => (
              <Chip text={"저자 소분야 〉 저자 세분야"} key={i} />
            ))}
          </div>
          <div className="flex w-full flex-row gap-4">
            {/* <Avatar /> */}
            <div className="w-full flex-1 flex-col gap-3">
              <span className="text-text-l font-normal tracking-[-0.01em] text-[#595959]">
                1970년 겨울에 태어났다. 1993년 『문학과사회』 겨울호에 시
                「서울의 겨울」 외 4편을 발표하고 이듬해 서울신문 신춘문예에
                단편소설 「붉은 닻」이 당선되면서 작품활동을 시작했다. 장편소설
                『검은 사슴』 『그대의 차가운 손』 『채식주의자』 『바람이 분다,
                가라』 『희랍어 시간』 『소년이 온다』...
              </span>
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
