import React from "react";
import Image from "next/image";
import VideoImage from "./image_video.png";
import PlayIcon from "./ico_play.png";
import RdtTypography from "@/components/Rdt/atoms/RdtTypography";

const BookTrailer = () => {
  return (
    <section className="flex flex-col gap-5 border-b border-[#EAEAEA] pb-[60px]">
      <RdtTypography type="H4" weight="Bold" color="#000000">
        북 트레일러
      </RdtTypography>
      <div className="flex flex-col gap-3">
        <div className="relative overflow-hidden rounded-[16px]">
          <img src="https://placehold.co/335x458" alt="동영상 썸네일 이미지" />
          <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
            <Image
              src={PlayIcon.src}
              height={70}
              width={70}
              alt={"재생 버튼"}
            />
          </button>
        </div>
        <div className="flex flex-col gap-1">
          {Array.from(Array(3).keys()).map((_, i) => (
            <div className="flex flex-row gap-1" key={i}>
              <div className="flex h-[18px] w-[6px] items-center justify-center">
                <div className="flex h-[2px] w-[2px] rounded-full bg-[#595959]" />
              </div>
              <RdtTypography type="B3" weight="Regular" color="#595959">
                출판사의 사정에 따라 서비스가 변경 또는 중지될 수 있습니다.
              </RdtTypography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookTrailer;
