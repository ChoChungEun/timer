import RdtTypography from "@/components/Rdt/atoms/RdtTypography";

const NO_KEYWORDS = false;
const KeywordPicks = () => {
  return (
    <section className="flex flex-col gap-[24px]">
      <section className="flex justify-between">
        <div className="flex items-center gap-[8px]">
          <RdtTypography type="H4" weight="Bold" color="#000000">
            키워드 PICK
          </RdtTypography>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="23"
            viewBox="0 0 22 23"
            fill="none"
          >
            <circle
              cx="11"
              cy="11.4482"
              r="10.5"
              fill="white"
              stroke="#CCCCCC"
            />
          </svg>
        </div>
        <button className="flex items-center gap-2">
          <RdtTypography type="B3" weight="Medium" color="#595959">
            더보기 +
          </RdtTypography>
        </button>
      </section>
      {NO_KEYWORDS ? (
        <div className="flex justify-center py-[28px]">
          <div className="flex flex-col gap-[10px] items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="47"
              height="47"
              viewBox="0 0 47 47"
              fill="none"
            >
              <path
                d="M23.5 46.6558C36.2025 46.6558 46.5 36.3583 46.5 23.6558C46.5 10.9532 36.2025 0.655762 23.5 0.655762C10.7975 0.655762 0.5 10.9532 0.5 23.6558C0.5 36.3583 10.7975 46.6558 23.5 46.6558Z"
                fill="#D5D5D5"
              />
              <path
                d="M24.7782 14.7114H22.2227V27.4892H24.7782V14.7114Z"
                fill="white"
              />
              <path
                d="M24.7782 30.0444H22.2227V32.6H24.7782V30.0444Z"
                fill="white"
              />
            </svg>
            <RdtTypography type="B3" weight="Medium" color="#595959">
              등록된 키워드가 없습니다.
            </RdtTypography>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-[20px]">
          <div className="w-ful flex-for flex gap-[8px]">
            {Array.from(Array(2).keys()).map((_, i) => (
              <div
                className="rounded-[18px] bg-[#F7F7F7] px-4 py-[7px]"
                key={i}
              >
                <RdtTypography type="B2" weight="Regular" color="#595959">
                  키워드명
                </RdtTypography>
              </div>
            ))}
            <div className="rounded-[18px] bg-[#292929] px-4 py-[7px]">
              <RdtTypography type="B2" weight="Regular" color="#FFFFFF">
                키워드명
              </RdtTypography>
            </div>
          </div>
          <div className="flex flex-row gap-[16px] w-[335px] overflow-scroll">
            {Array.from(Array(6).keys()).map((_, i) => (
              <div className="min-w-[100px] bg-[#F7F7F7]" key={i}>
                <img src="https://placehold.co/100x138" alt="도서 이미지" />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default KeywordPicks;
