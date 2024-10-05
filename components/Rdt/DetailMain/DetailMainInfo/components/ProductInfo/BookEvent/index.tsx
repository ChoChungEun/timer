import Image from "next/image";
import SampleImage from "./img_sample.png";
import RdtTypography from "@/components/Rdt/atoms/RdtTypography";

const BookEvent = () => {
  return (
    <section className="flex flex-col gap-[20px]">
      <div className="flex justify-between">
        <RdtTypography type="H4" weight="Bold" color="#000000">
          이 책의 이벤트
        </RdtTypography>
        <button>
          <RdtTypography type="B3" weight="Medium" color="#595959">
            더보기 +
          </RdtTypography>
        </button>
      </div>
      <div className="flex gap-[8px] w-[330px] overflow-auto">
        {Array.from(Array(6).keys()).map((_, i) => (
          <EventItem key={i} />
        ))}
      </div>
    </section>
  );
};
const EventItem = () => {
  return (
    <section className="flex w-[258px] flex-col gap-4">
      <div className="relative overflow-hidden rounded-2xl">
        <img src="https://placehold.co/258x143" alt="이벤트 상품 이미지" />
      </div>
      <div className="flex flex-col gap-[2px]">
        <RdtTypography type="B2" weight="Medium" color="#000000">
          [가이드북 특별 기획전] 내가 여행을 떠나는 101가지 이유
        </RdtTypography>
        <RdtTypography type="B3" weight="Regular" color="#595959">
          2024/07/04 ~ 2024/07/31
        </RdtTypography>
      </div>
    </section>
  );
};

export default BookEvent;
