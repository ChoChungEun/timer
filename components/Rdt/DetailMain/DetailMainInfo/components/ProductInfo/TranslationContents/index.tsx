// import TextMore from '@/rdtbiz/components/kds/Button/TextMore'
import Image from "next/image";
import React from "react";

import SampleImage from "./image_sample.png";
import RdtTypography from "@/components/Rdt/atoms/RdtTypography";

const TranslationContents = () => {
  return (
    <section className="flex flex-col gap-5">
      <RdtTypography type="H4" weight="Bold" color="#000000">
        원서/번역서 내용 엿보기
      </RdtTypography>
      <div className="flex flex-col gap-[60px]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <RdtTypography type="B2" weight="Regular" color="#595959">
              밤 12시, 죽기 바로 전에만 열리는 마법의 도서관에서
              <br /> 인생의 두 번째 기회를 드립니다
              <br /> ★ 영국 아마존 종합 베스트셀러 1위
              <br /> ★ 미국 아마존, 《뉴욕타임스》, 《선데이타임스》 장기
              베스트셀러
              <br /> ★ 전 세계 42개국 번역 출간 계약!
              <br /> ★〈어바웃 타임〉 제작사 영화화 확정!
              <br /> “이 책들은 네가 살았을 수도 있는 모든 삶으로 들어가는
              입구야.”
              <br /> 더 이상 자신의 하찮고 지질한 삶을 견딜 수 없었던 주인공
              노라 시드가 죽기로 결심한 것은 밤 11시 22분. 그가 눈을 뜬 곳은
              삶과 죽음 사이의 미스터리한 공간 ‘미드나잇 라이브러리’. 시간은
              자정에서 멈춰 있다. 도서관 사서 엘름 부인의 안내로 노라는 과거에
              다른 선택을 했다면 살았을 수도 있는 또 다른 삶을 살아보며, 가장
              완벽한 삶을 찾는 모험을 시작한다.
            </RdtTypography>
            {/* <TextMore text={'펼치기'} /> */}
          </div>
          <div className="boarder-[#EAEAEA] flex flex-row gap-3 border-t pt-6">
            <img src="https://placehold.co/98x144" alt="상품 썸네일 이미지" />
            <div className="flex flex-col justify-center gap-3">
              <div className="gpa-1 flex flex-col">
                <RdtTypography type="B2" weight="Medium" color="#000000">
                  언젠가 우리가 같은 별을 바라본다면
                </RdtTypography>
                <RdtTypography type="B3" weight="Regular" color="#595959">
                  김호연·나무옆의자
                </RdtTypography>
              </div>
              <div className="flex flex-row items-center gap-1">
                <RdtTypography type="B2" weight="Bold" color="#767676">
                  10%
                </RdtTypography>
                <RdtTypography type="B2" weight="Bold" color="#000000">
                  21,600
                  <span className="font-normal">원</span>
                </RdtTypography>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[14px]">
          <RdtTypography type="H4" weight="Bold" color="#000000">
            다른 언어 책
          </RdtTypography>
          <div className="flex flex-row gap-[12px] w-[335px] overflow-auto">
            {Array.from(Array(5).keys()).map((_, i) => (
              <ProductItem key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
const ProductItem = () => {
  return (
    <div className="flex flex-col gap-[12px]">
      <img src="https://placehold.co/116x170" alt="상품 이미지" />
      <div className="flex w-full flex-col gap-2 overflow-hidden">
        <RdtTypography type="B3" weight="Regular" color="#595959">
          영미
        </RdtTypography>
        <RdtTypography type="B2" weight="Medium" color="#000000" clamp={2}>
          그래머 게이트웨이 베이직: 초보를 위한 기초 영문법(Grammar Gateway
          Basic)
        </RdtTypography>
      </div>
    </div>
  );
};

export default TranslationContents;
