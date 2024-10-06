import RdtTypography from "@/components/Rdt/atoms/RdtTypography";
import Trigger from "./ico_trigger.png";
import Image from "next/image";

const CollectText = () => {
  return (
    <section className="flex flex-col gap-[20px]">
      <div className="flex flex-row gap-[4px]">
        <RdtTypography type="H4" weight="Bold" color="#000000">
          문장수집 (17)
        </RdtTypography>
        <button>
          <Image
            src={Trigger.src}
            height={22}
            width={22}
            alt={"trigger button"}
          />
        </button>
      </div>
      <div className="flex flex-row gap-5">
        {/* 슬라이더 기능 필요 */}
        {Array.from(Array(2).keys()).map((_, i) => (
          <div
            className="flex flex-col gap-5 justify-center items-center"
            key={i}
          >
            <div className="relative flex h-[335px] w-[335px] flex-col items-center justify-center rounded-[8px] bg-[#FAFAFA] ">
              <RdtTypography type="B2" weight="Regular" color="#FFFFFF">
                무엇을 생각하면 견딜 수 있나
                <br />
                가슴에 활활 일어나는 불이 없다면
                <br />
                기어이 돌아가 껴안을 네가 없다면
              </RdtTypography>
              <button className="gap-[4px] w-[82px] h-[30px] absolute bottom-5 flex items-center rounded-[4px] border border-[#FFFFFF] justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path d="M2.83203 12.0898H12.1654" stroke="white" />
                  <path d="M4 6.25781L7.5 9.75781L11 6.25781" stroke="white" />
                  <path d="M7.5 2.75781V9.75781" stroke="white" />
                </svg>
                <RdtTypography type="B3" weight="Medium" color="#FFFFFF">
                  다운로드
                </RdtTypography>
              </button>
            </div>
            <div className="flex items-center gap-[8px] text-center">
              <RdtTypography type="B3" weight="Medium" color="#FFFFFF">
                mm********
              </RdtTypography>
              <span className="w-[1px] h-[8px] bg-[#CCCCCC]" />
              <RdtTypography type="B3" weight="Medium" color="#FFFFFF">
                2024.07.15
              </RdtTypography>
            </div>
          </div>
        ))}
      </div>
      {/* 수집된 문장이 없을때 */}
      <div className="flex flex-col gap-[10px] items-center justify-center py-[28px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="47"
          height="47"
          viewBox="0 0 47 47"
          fill="none"
        >
          <path
            d="M23.5 46.4238C36.2025 46.4238 46.5 36.1264 46.5 23.4238C46.5 10.7213 36.2025 0.423828 23.5 0.423828C10.7975 0.423828 0.5 10.7213 0.5 23.4238C0.5 36.1264 10.7975 46.4238 23.5 46.4238Z"
            fill="#D5D5D5"
          />
          <path
            d="M24.7782 14.4785H22.2227V27.2563H24.7782V14.4785Z"
            fill="white"
          />
          <path
            d="M24.7782 29.8125H22.2227V32.3681H24.7782V29.8125Z"
            fill="white"
          />
        </svg>
        <RdtTypography type="B2" weight="Medium" color="#000000">
          아직 수집된 문장이 없어요.
        </RdtTypography>
      </div>
    </section>
  );
};

export default CollectText;
