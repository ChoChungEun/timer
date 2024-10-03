import Image from "next/image";
import PlusIcon from "./ico_plus_12.png";
import SampleImage from "./image_thumbnail.png";
interface IProps {
  title: string;
}
const SideProductList = ({ title }: IProps) => {
  return (
    <section className="flex w-full flex-col  gap-6">
      <section className="flex w-full items-center justify-between">
        <span className="text-[20px] font-bold leading-[30px]">{title}</span>
        <button className="flex flex-row items-center gap-1">
          <span className="text-[12px] font-medium leading-[18px] text-[#595959]">
            더보기
          </span>
          <Image
            src={PlusIcon.src}
            height={12}
            width={12}
            alt={"더보기 플러스 아이콘"}
          />
        </button>
      </section>
      {Array.from(Array(6).keys()).map((_, i) => (
        <section className="flex flex-row gap-4" key={i}>
          <Image
            src={SampleImage.src}
            width={96}
            height={140}
            alt="상품 이미지"
          />
          <div className="flex flex-col justify-center gap-2">
            <div className="flex h-[22px] w-[22px]">
              {/* <Rank rank={i + 1} /> */}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <span className="text-base font-medium">
                  전지적 루이&후이 시점
                </span>
                <span className="text-[14px] font-normal leading-[22px] text-[#595959]">
                  김호연·나무옆의자
                </span>
              </div>
              <div className="flex flex-row gap-1 text-base font-bold">
                <span>21,000</span>
                <span>원</span>
              </div>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
};

export default SideProductList;
