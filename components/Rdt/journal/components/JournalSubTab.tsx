import RdtSpan from "../RdtSpan";

export const JournalSubTab = () => {
  return (
    <section className="flex items-center gap-[8px] mb-[20px]">
      <button>
        <RdtSpan type="B2" weight="Bold" color="#000000">
          많이 이용된 논문
        </RdtSpan>
      </button>
      <span className="h-[12px] w-[1px] bg-[#CCCCCC]" />
      <button>
        <RdtSpan type="B2" weight="Regular" color="#000000">
          최근 발간된 논문
        </RdtSpan>
      </button>
    </section>
  );
};
