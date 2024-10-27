import { useState } from "react";
import { useIsMobile } from "../ink";
import { JournalContent } from "./JournalContent";
import { JournalHeader } from "./JournalHeader";
import { JournalNavTab } from "./JournalNavTab";
import { JournalSearch } from "./JournalSearch";
import { JournalSubTab } from "./JournalSubTab";
import { JournalTitle } from "./JournalTItle";
import { JournalContentFilter } from "./JournalContentFilter";

export const NAV_TAB_JOURNAL = "journal";
export const NAV_TAB_JOURNAL_LIST = "journalList";

export const JournalRoot = () => {
  const IS_MOBILE = useIsMobile();

  const [navTab, setNavTab] = useState(NAV_TAB_JOURNAL);

  return (
    <article
      className={`${
        IS_MOBILE ? "" : "mx-auto w-[1200px] flex-col gap-[60px] py-[40px]"
      }`}
    >
      <section
        className={`${IS_MOBILE ? "gap-[0px]" : "gap-[32px]"} flex flex-col`}
      >
        {/* 타이틀 */}
        <JournalTitle />
        {/* 헤더 */}
        <JournalHeader />
        {IS_MOBILE && <span className="h-[8px] w-full bg-[#F7F7F7]" />}
        {/* 검색 */}
        <JournalSearch />
        {IS_MOBILE && <span className="h-[8px] w-full bg-[#F7F7F7]" />}
        {/* body */}
        <section className="flex flex-col">
          {/* nav tab */}
          <JournalNavTab navTab={navTab} onNavTab={setNavTab} />
          {/* sub tab */}
          {!IS_MOBILE && navTab === NAV_TAB_JOURNAL && <JournalSubTab />}
          {navTab === NAV_TAB_JOURNAL_LIST && <JournalContentFilter />}
          {/* contents */}
          <JournalContent />
        </section>
      </section>
    </article>
  );
};
