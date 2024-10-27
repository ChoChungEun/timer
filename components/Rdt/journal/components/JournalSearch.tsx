import { useIsMobile } from "../ink";
import RdtSpan from "../RdtSpan";

export const JournalSearch = () => {
  const IS_MOBILE = useIsMobile();

  return (
    <section
      className={`${
        IS_MOBILE
          ? "bg-[#FFFFFF] px-[20px] py-[32px] flex-col w-full"
          : "bg-[#F7F7F7] justify-center py-[16px]"
      } flex`}
    >
      <section
        className={`${IS_MOBILE ? "flex-col" : "items-center"} flex gap-[16px]`}
      >
        <RdtSpan
          type={`${IS_MOBILE ? "B1" : "B2"}`}
          weight={`${IS_MOBILE ? "Bold" : "Medium"}`}
          color="#000000"
        >
          이 저널에서 논문 검색
        </RdtSpan>
        <section
          className={`${
            IS_MOBILE ? "w-full" : "w-[422px]"
          } items-center grid grid-cols-[1fr,24px] gap-[8px] border border-[#CCCCCC] rounded-[8px] bg-[#FFFFFF] px-[14px] py-[8px]`}
        >
          <input
            type="text"
            className="border-none text-[14px] placeholder-[#CCCCCC] focus:outline-none"
            placeholder="검색어를 입력해주세요."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
          >
            <path
              d="M16 8C16 12.1421 12.6421 15.5 8.5 15.5C4.35786 15.5 1 12.1421 1 8C1 3.85786 4.35786 0.5 8.5 0.5C12.6421 0.5 16 3.85786 16 8Z"
              stroke="black"
            />
            <path
              d="M8.5 15C12.366 15 15.5 11.866 15.5 8C15.5 4.13401 12.366 1 8.5 1C4.63401 1 1.5 4.13401 1.5 8C1.5 11.866 4.63401 15 8.5 15Z"
              stroke="black"
              stroke-width="2"
            />
            <path
              d="M13.5 13L18.5 18"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </section>
      </section>
    </section>
  );
};
