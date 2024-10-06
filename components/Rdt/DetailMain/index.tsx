import RdtTypography from "../atoms/RdtTypography";
import DetailMainInfo from "./DetailMainInfo";
import DetailSideInfo from "./DetailSideInfo";

const DetailMain = () => {
  return (
    <section className="flex flex-col gap-[60px]">
      <section className="flex gap-[24px] px-[20px]">
        <div className="whitespace-nowrap flex-1 flex items-center justify-center h-[48px] border-b-[2px] border-[#000000]">
          <RdtTypography type="B1" weight="Regular" color="#767676">
            학습정보
          </RdtTypography>
        </div>
        {["상품정보", "이벤트", "리뷰(999+)", "교환/반품/품절"].map((el, i) => (
          <div
            className="whitespace-nowrap flex-1 flex items-center justify-center h-[48px]"
            key={i}
          >
            <RdtTypography type="B1" weight="Regular" color="#767676">
              {el}
            </RdtTypography>
          </div>
        ))}
      </section>
      <section className="flex flex-row items-start gap-14 px-[20px]">
        <DetailMainInfo />
        {/* <DetailSideInfo /> */}
      </section>
    </section>
  );
};

export default DetailMain;
