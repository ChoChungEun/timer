import { useIsMobile } from "../ink";
import RdtSpan from "../RdtSpan";

export const JournalContentFooterButtons = () => {
  const IS_MOBILE = useIsMobile();

  return (
    <section
      className={`${IS_MOBILE ? "w-full" : ""} flex items-center gap-[6px]`}
    >
      {!IS_MOBILE && (
        <>
          <button className="py-[6px] px-[10px] flex items-center justify-center rouded-[4px] border border-[#CCCCCC]">
            <RdtSpan type="B3" weight="Medium" color="#000000">
              초록보기
            </RdtSpan>
          </button>
          <button className="py-[6px] px-[10px] flex items-center justify-center rouded-[4px] border border-[#CCCCCC]">
            <RdtSpan type="B3" weight="Medium" color="#000000">
              상세정보보기
            </RdtSpan>
          </button>
        </>
      )}
      <button
        onClick={() => alert("인용정보")}
        className={`${
          IS_MOBILE ? "w-full rounded-[8px]" : ""
        } py-[6px] px-[10px] flex items-center justify-center rouded-[4px] border border-[#CCCCCC]`}
      >
        <RdtSpan type={IS_MOBILE ? "B2" : "B3"} weight="Medium" color="#000000">
          인용정보
        </RdtSpan>
      </button>
    </section>
  );
};
