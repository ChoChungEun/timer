import { useIsMobile } from "../ink";
import RdtSpan from "../RdtSpan";
import { NAV_TAB_JOURNAL, NAV_TAB_JOURNAL_LIST } from "./JournalRoot";

interface IJournalNavTabProps {
  navTab: string;
  onNavTab: (value: string) => void;
}
export const JournalNavTab = ({ navTab, onNavTab }: IJournalNavTabProps) => {
  const IS_MOBILE = useIsMobile();

  console.log("navTab 1", navTab);
  console.log("navTab 2", NAV_TAB_JOURNAL);

  return (
    <section
      className={`${
        IS_MOBILE ? "border-[#EAEAEA] w-full" : "border-[#000000]"
      } flex items-center border-b-[1px] mb-[32px]`}
    >
      <button
        onClick={() => onNavTab(NAV_TAB_JOURNAL)}
        className={`${
          IS_MOBILE
            ? `${
                navTab === NAV_TAB_JOURNAL
                  ? "border-b-[2px] border-b-[#000000]"
                  : ""
              } flex-1`
            : `${
                navTab === NAV_TAB_JOURNAL
                  ? "border-[#000000]"
                  : "border-[#D5D5D5]"
              } w-[166px] rounded-tr-[8px] rounded-tl-[8px] border border-b-[0px]`
        } flex items-center justify-center h-[44px]`}
      >
        <RdtSpan
          type="B2"
          weight={navTab === NAV_TAB_JOURNAL ? "Bold" : "Regular"}
          color="#000000"
        >
          간행물 데이터
        </RdtSpan>
      </button>
      <button
        onClick={() => onNavTab(NAV_TAB_JOURNAL_LIST)}
        className={`${
          IS_MOBILE
            ? `${
                navTab === NAV_TAB_JOURNAL_LIST
                  ? "border-b-[2px] border-b-[#000000]"
                  : ""
              } flex-1`
            : `${
                navTab === NAV_TAB_JOURNAL_LIST
                  ? "border-[#000000]"
                  : "border-[#D5D5D5]"
              } w-[166px] rounded-tr-[8px] rounded-tl-[8px] border border-b-[0px]`
        } flex items-center justify-center h-[44px]`}
      >
        <RdtSpan
          type="B2"
          weight={navTab === NAV_TAB_JOURNAL_LIST ? "Bold" : "Regular"}
          color="#595959"
        >
          권호목록 검색
        </RdtSpan>
      </button>
    </section>
  );
};
