import { useIsMobile } from "../ink";
import RdtSpan from "../RdtSpan";

export const JournalTitle = () => {
  const IS_MOBILE = useIsMobile();

  return (
    <section
      className={`${
        IS_MOBILE ? "pt-[24px] px-[20px]" : "items-center"
      } flex flex-col gap-[16px] `}
    >
      <section
        className={`${IS_MOBILE ? "" : "items-center"} flex flex-col gap-[8px]`}
      >
        <RdtSpan type="B2" weight="Medium" color="#FF0000">
          <span className="text-[#FF0000]">간행물</span>
        </RdtSpan>
        <RdtSpan type="H2" weight="Bold" color="#000000">
          한국뷰티웰니스학회지(Journal of the Korean society of beauty wellness)
        </RdtSpan>
      </section>
      {!IS_MOBILE && (
        <section className="flex items-center gap-[8px]">
          <RdtSpan type="B1" weight="Medium" color="#595959">
            권호수
          </RdtSpan>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1"
            height="10"
            viewBox="0 0 1 10"
            fill="none"
          >
            <path d="M1 0H0V10H1V0Z" fill="#CCCCCC" />
          </svg>
          <RdtSpan type="B1" weight="Medium" color="#595959">
            권호수
          </RdtSpan>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1"
            height="10"
            viewBox="0 0 1 10"
            fill="none"
          >
            <path d="M1 0H0V10H1V0Z" fill="#CCCCCC" />
          </svg>
          <RdtSpan type="B1" weight="Medium" color="#595959">
            권호수
          </RdtSpan>
        </section>
      )}
    </section>
  );
};
