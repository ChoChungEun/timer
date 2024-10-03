import SideProductList from "./SideProductList";

const DetailSideInfo = () => {
  return (
    <section className="flex w-full flex-col gap-6">
      <SideProductList title={"학습 과정 베스트"} />
      <SideProductList title={"이 분야의 베스트"} />
      <SideProductList title={"이 분야의 신간"} />
    </section>
  );
};

export default DetailSideInfo;
