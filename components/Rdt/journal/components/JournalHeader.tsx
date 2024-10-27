import { headerData, useIsMobile } from "../ink";
import RdtSpan from "../RdtSpan";

export const JournalHeader = () => {
  const IS_MOBILE = useIsMobile();

  return (
    <section
      className={`${
        IS_MOBILE ? "px-[20px]" : "grid grid-cols-[154px,1fr]"
      } items-center gap-[20px]`}
    >
      {!IS_MOBILE && (
        <section>
          <img src="https://placehold.co/154x222" alt="간행물 이미지" />
        </section>
      )}
      <section
        className={`${
          IS_MOBILE
            ? "flex flex-col py-[20px] gap-[16px]"
            : "grid grid-cols-2 py-[30px] gap-[24px] border-b-[1px] border-b-[#EAEAEA]"
        } border-t-[1px] border-t-[#000000]`}
      >
        {headerData.map((data, idx) => (
          <section
            className={`${
              IS_MOBILE ? "grid-cols-[100px,1fr]" : "grid-cols-[140px,1fr]"
            } grid gap-[20px]`}
            key={idx}
          >
            <RdtSpan type="B2" weight="Medium" color="#000000">
              {data.title}
            </RdtSpan>
            <RdtSpan type="B2" weight="Regular" color="#767676">
              {data.content}
            </RdtSpan>
          </section>
        ))}
      </section>
    </section>
  );
};
