import Image from "next/image";
import MainBookInfo from "./img_book.png";

const InfoImage = () => {
  return (
    <section className="flex-shrink-0 overflow-hidden rounded-[20px]">
      <Image
        src={MainBookInfo.src}
        width={814}
        height={2796}
        layout={"responsive"}
        alt={"상품 상세 이미지"}
      />
    </section>
  );
};

export default InfoImage;
