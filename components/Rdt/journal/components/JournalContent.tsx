import { useIsMobile } from "../ink";
import RdtSpan from "../RdtSpan";
import { JournalContentFooterButtons } from "./JournalContentFooterButtons";
import { JournalContentImage } from "./JournalContentImage";
import { JournalContentSideButtons } from "./JournalContentSideButtons";

export const JournalContent = () => {
  const IS_MOBILE = useIsMobile();

  return (
    <section className="flex flex-col">
      {Array.from({ length: 5 }).map((_, idx) => (
        <section
          className={`${
            IS_MOBILE
              ? "flex flex-col px-[20px] py-[20px] relative"
              : "grid grid-cols-[144px,1fr,100px] py-[36px] gap-[16px]"
          } border-t-[1px] border-t-[#EAEAEA]`}
          key={idx}
        >
          {!IS_MOBILE && <JournalContentImage />}
          <section className="flex flex-col gap-[12px]">
            <section
              className={`${
                IS_MOBILE ? "gap-[4px]" : "gap-[8px]"
              } flex flex-col`}
            >
              <div className="w-[22px] h-[22px] rounded-[4px] bg-[#767676] items-center justify-center flex">
                <RdtSpan type="B3" weight="Bold" color="#FFFFFF">
                  <span className="text-[#FFFFFF]">1</span>
                </RdtSpan>
              </div>
              <RdtSpan type="B1" weight="Bold" color="#000000">
                논문명
              </RdtSpan>
              <section
                className={`${
                  IS_MOBILE ? "flex-wrap" : ""
                } flex items-center gap-[4px]`}
              >
                {[
                  "저자명",
                  "발행기관",
                  "발생연도",
                  "간행물 정보",
                  "KCI 등재정보",
                ].map((item, idx) => (
                  <section className="flex items-center gap-[4px]" key={idx}>
                    <RdtSpan type="B3" weight="Regular" color="#595959">
                      {item}
                    </RdtSpan>
                    {idx !== 4 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2"
                        height="2"
                        viewBox="0 0 2 2"
                        fill="none"
                      >
                        <path
                          d="M1 2C1.55228 2 2 1.55228 2 1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2Z"
                          fill="#595959"
                        />
                      </svg>
                    )}
                  </section>
                ))}
              </section>
              <RdtSpan type="B3" weight="Regular" color="#000000">
                이 논문은 저작권자의 요청으로 무료로 제공됩니다.
              </RdtSpan>
            </section>
            <section
              className={`${
                IS_MOBILE ? "pb-[12px]" : ""
              } flex items-center gap-[4px]`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path d="M2.33301 11.666H11.6663" stroke="black" />
                <path d="M3.5 5.83398L7 9.33398L10.5 5.83398" stroke="black" />
                <path d="M7 2.33398V9.33398" stroke="black" />
              </svg>
              <RdtSpan type="B3" weight="Regular" color="#595959">
                이용수
              </RdtSpan>
              <RdtSpan type="B3" weight="Bold" color="#000000">
                100
              </RdtSpan>
            </section>
            <JournalContentFooterButtons />
          </section>
          <JournalContentSideButtons />
        </section>
      ))}
    </section>
  );
};
