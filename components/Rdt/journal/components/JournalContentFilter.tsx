import { useIsMobile } from "../ink";
import RdtSpan from "../RdtSpan";

export const JournalContentFilter = () => {
  const IS_MOBILE = useIsMobile();

  return (
    <section
      className={`${
        IS_MOBILE
          ? "flex-col px-[20px] gap-[20px] pt-[0px] pb-[40px]"
          : "flex-row bg-[#F7F7F7] rounded-[16px] items-center"
      } flex justify-between p-[16px]`}
    >
      <section
        className={`${
          IS_MOBILE ? "flex-col w-full" : "flex-row items-center"
        } flex gap-[16px]`}
      >
        <RdtSpan type="B2" weight="Medium" color="#000000">
          동일 발행기관의 다른 간행물
        </RdtSpan>
        <select name="" id="" className="w-full">
          <option value="">option1</option>
          <option value="">option2</option>
          <option value="">option2</option>
        </select>
      </section>
      <section
        className={`${
          IS_MOBILE ? "flex-col" : "flex-row items-center"
        } flex gap-[20px]`}
      >
        <RdtSpan type="B2" weight="Medium" color="#000000">
          권호 리스트
        </RdtSpan>
        <section
          className={`${
            IS_MOBILE ? "gap-[10px]" : "gap-[4px]"
          } flex items-center`}
        >
          <select name="" id="" className={IS_MOBILE ? "flex-1" : ""}>
            <option value="">option1</option>
            <option value="">option2</option>
            <option value="">option2</option>
          </select>
          <select name="" id="" className={IS_MOBILE ? "flex-1" : ""}>
            <option value="">option1</option>
            <option value="">option2</option>
            <option value="">option2</option>
          </select>
          {!IS_MOBILE && (
            <button className="bg-[#767676] w-[100px] h-[38px] rounded-[8px] flex items-center justify-center">
              <RdtSpan type="B2" weight="Medium" color="#FFFFFF">
                조회
              </RdtSpan>
            </button>
          )}
        </section>
      </section>
    </section>
  );
};
