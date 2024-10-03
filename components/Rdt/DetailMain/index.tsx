import DetailMainInfo from "./DetailMainInfo";
import DetailSideInfo from "./DetailSideInfo";

const DetailMain = () => {
  return (
    <section className="flex w-full flex-col gap-[60px]">
      <section className="flex w-full flex-col items-center gap-2.5 border-b border-[#EAEAEA] p-0">
        <section className="flex w-full flex-row items-start gap-[24px] px-[20px] overflow-auto">
          {[
            "학습정보",
            "상품정보",
            "이벤트",
            "리뷰(999+)",
            "교환/반품/품절",
          ].map((el, i) => (
            <div className="flex items-center justify-center py-6" key={i}>
              <span className="whitespace-nowrap text-base font-normal text-[#767676]">
                {el}
              </span>
            </div>
          ))}
        </section>
      </section>
      <section className="flex w-full flex-row items-start gap-14 px-[20px]">
        <DetailMainInfo />
        {/* <DetailSideInfo /> */}
      </section>
    </section>
  );
};

export default DetailMain;
