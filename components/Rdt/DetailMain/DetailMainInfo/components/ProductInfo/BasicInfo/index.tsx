import RdtTypography from "@/components/Rdt/atoms/RdtTypography";

const BasicInfo = () => {
  return (
    <section className="flex flex-col border-b">
      <div className="flex flex-col items-center justify-between border-b border-black pb-5 gap-[16px]">
        <RdtTypography type="H4" weight="Bold" color="#000000">
          기본/상세 정보
        </RdtTypography>
        <div className="flex flex-row gap-2">
          <button className="flex flex-grow h-[44px] flex-row gap-1 rounded-[8px] bg-black px-[14px] py-[9px]">
            <RdtTypography type="B2" weight="Bold" color="#FFFFFF">
              1:1 문의
            </RdtTypography>
          </button>
          <button className="flex flex-grow h-[44px] flex-row gap-1 rounded-[8px] border border-[#CCCCCC] px-[14px] py-[9px]">
            <RdtTypography type="B2" weight="Bold" color="#000000">
              외서용어안내
            </RdtTypography>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-[16px] py-[30px] border-b-[1px] border-[#EAEAEA]">
        <div className="flex flex-row gap-[20px]">
          <RdtTypography type="B2" weight="Medium" color="#000000">
            크기/증량
          </RdtTypography>
          <RdtTypography type="B2" weight="Bold" color="#767676">
            155 * 215 mm
          </RdtTypography>
        </div>
        <div className="flex flex-row gap-[20px]">
          <RdtTypography type="B2" weight="Medium" color="#000000">
            사용연령
          </RdtTypography>
          <RdtTypography type="B2" weight="Bold" color="#767676">
            3세 이상
          </RdtTypography>
        </div>
        <div className="flex flex-row gap-[20px]">
          <RdtTypography type="B2" weight="Medium" color="#000000">
            색상
          </RdtTypography>
          <RdtTypography type="B2" weight="Bold" color="#767676">
            이미지 참고
          </RdtTypography>
        </div>
        <div className="flex flex-row gap-[20px]">
          <RdtTypography type="B2" weight="Medium" color="#000000">
            재질
          </RdtTypography>
          <RdtTypography type="B2" weight="Bold" color="#767676">
            이미지 참고
          </RdtTypography>
        </div>
      </div>
    </section>
  );
};

export default BasicInfo;
