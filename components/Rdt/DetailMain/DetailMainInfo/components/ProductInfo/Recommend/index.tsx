// import TextMore from '@/rdtbiz/components/kds/Button/TextMore'
import React from "react";

const Recommend = () => {
  return (
    <section className="flex w-full flex-col gap-5 border-b border-[#EAEAEA] pb-[60px]">
      <div className="w-full">
        <span className="text-title-s font-bold">추천사</span>
      </div>
      <div className="flex flex-col gap-6">
        {Array.from(Array(3).keys()).map((_, i) => (
          <div className="flex flex-col gap-3" key={i}>
            <span className="text-text-xl font-bold text-[#292929]">
              조성희 (마인드파워 스쿨 대표)
            </span>
            <span className="text-text-l font-normal text-[#595959]">
              나는 아직도 어둠으로 가득했던 내 인생에 한 줄기 빛이 새어 들어오던
              날을 기억한다. 처음으로 ‘나도 삶을 바꿀 수 있을까’라는 생각이
              떠올랐던 그날을. 그 빛 한 줄기를 따라 어둠의 터널을 기어 나올 수
              있었던 것은 끊임없이 반복해서 부의 원리를 공부했기 때문이다. 이
              책을 통해 스스로 의식을 성장시키고, 마침내 정상에 올라 아름다운
              풍경을 바라보며 두 팔을 활짝 뻗는 당신의 모습을 상상해본다. 매일
              가슴 충만하게 행복한 당신의 여정을 뜨겁게 응원하고 축복한다.
            </span>
          </div>
        ))}
        {/* <TextMore text={'펼치기'} /> */}
      </div>
    </section>
  );
};

export default Recommend;
