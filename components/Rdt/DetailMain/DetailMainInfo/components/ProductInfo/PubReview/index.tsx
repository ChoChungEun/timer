// import TextMore from '@/rdtbiz/components/kds/Button/TextMore'
import RdtTypography from "@/components/Rdt/atoms/RdtTypography";
import React from "react";

const PubReview = () => {
  return (
    <section className="flex flex-col gap-5 border-b border-[#EAEAEA] pb-[60px]">
      <RdtTypography type="H4" weight="Bold" color="#000000">
        출판사 서평
      </RdtTypography>
      <div className="flex  flex-col gap-3 tracking-[-0.01em]">
        <RdtTypography type="B1" weight="Bold" color="#000000">
          《더 머니북》의 4가지 특징
        </RdtTypography>
        <RdtTypography type="B2" weight="Regular" color="#595959">
          1. 일상에서 만나는 모든 금융 분야를 한 권에
          <br />
          저축, 소비, 투자, 대출, 부동산, 세금, 보험, 연금의 기본 상식을 한 권에
          담았다.
          <br />
          2. 사람들이 자주 묻는 궁금증 해소
          <br />
          토스 사용자가 꼽은 ‘금융이 궁금한 순간' 100가지를 선별했다.
          <br />
          3. 각 분야를 가장 잘 아는 전문가의 답변
          <br />
          100가지 질문에 대해 금융·경제 전문가 27명이 답했다.
        </RdtTypography>
        {/* <TextMore text='펼치기' /> */}
      </div>
    </section>
  );
};

export default PubReview;
