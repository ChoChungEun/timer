"use client";

import Chip from "@/components/Rdt/atoms/Chip";
import ImageSlideView from "../BookSeries/ImageSlideView";
import RdtTypography from "@/components/Rdt/atoms/RdtTypography";

const PersonalInfo = () => {
  return (
    <section className="flex flex-col gap-[20x]">
      <RdtTypography type="H4" weight="Bold" color="#000000">
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
          <div className="flex flex-col gap-[8px] w-[fit-content]">
            {Array.from(Array(2).keys()).map((_, i) => (
              <Chip text={"저자 소분야 〉 저자 세분야"} key={i} />
            ))}
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col gap-[12px]">
              <RdtTypography type="B2" weight="Bold" color="#595959">
                1970년 겨울에 태어났다. 1993년 『문학과사회』 겨울호에 시
                「서울의 겨울」 외 4편을 발표하고 이듬해 서울신문 신춘문예에
                단편소설 「붉은 닻」이 당선되면서 작품활동을 시작했다. 장편소설
                『검은 사슴』 『그대의 차가운 손』 『채식주의자』 『바람이 분다,
                가라』 『희랍어 시간』 『소년이 온다』...
              </RdtTypography>
              <button className="flex items-center gap-[4px]">
                <RdtTypography type="B3" weight="Medium" color="#767676">
                  펼치기
                </RdtTypography>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1932_71744)">
                    <path
                      d="M19.5 10.8545C19.5 16.1012 15.2467 20.3545 10 20.3545C4.75329 20.3545 0.5 16.1012 0.5 10.8545C0.5 5.60779 4.75329 1.35449 10 1.35449C15.2467 1.35449 19.5 5.60779 19.5 10.8545Z"
                      fill="white"
                      stroke="#CCCCCC"
                    />
                    <path
                      d="M9.99919 13.3555C9.94444 13.3556 9.8902 13.3449 9.83959 13.324C9.78897 13.3031 9.74295 13.2725 9.70419 13.2338L6.37086 9.90046C6.29496 9.82188 6.25297 9.71663 6.25392 9.60738C6.25487 9.49813 6.29869 9.39362 6.37594 9.31637C6.45319 9.23912 6.55768 9.1953 6.66693 9.19435C6.77618 9.1934 6.88146 9.2354 6.96005 9.3113L9.99838 12.3496L13.0367 9.3113C13.1153 9.2354 13.2205 9.1934 13.3298 9.19435C13.439 9.1953 13.5435 9.23912 13.6208 9.31637C13.698 9.39362 13.7418 9.49813 13.7428 9.60738C13.7437 9.71663 13.7017 9.82188 13.6259 9.90046L10.2925 13.2338C10.2146 13.3115 10.1092 13.3552 9.99919 13.3555Z"
                      fill="#767676"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1932_71744">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0 0.854492)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
          <ImageSlideView />
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
