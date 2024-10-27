import { useState } from "react";
import { useIsMobile } from "../ink";
import { JournalContent } from "./JournalContent";
import { JournalHeader } from "./JournalHeader";
import { JournalNavTab } from "./JournalNavTab";
import { JournalSearch } from "./JournalSearch";
import { JournalSubTab } from "./JournalSubTab";
import { JournalTitle } from "./JournalTItle";

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
        className={`${IS_MOBILE ? "gap-[20px]" : "gap-[32px]"} flex flex-col`}
      >
        {/* 타이틀 */}
        <JournalTitle />
        {/* 헤더 */}
        <JournalHeader />
        {/* 검색 */}
        <JournalSearch />
        {/* body */}
        <section className="flex flex-col">
          {/* nav tab */}
          <JournalNavTab navTab={navTab} onNavTab={setNavTab} />
          {/* sub tab */}
          {!IS_MOBILE && navTab === NAV_TAB_JOURNAL && <JournalSubTab />}
          {navTab === NAV_TAB_JOURNAL_LIST && <JournalSubTab />}
          {/* contents */}
          <JournalContent />
        </section>
      </section>
    </article>
  );
};
