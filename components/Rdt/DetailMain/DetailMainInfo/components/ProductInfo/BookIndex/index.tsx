// import TextMore from "@/rdtbiz/components/kds/Button/TextMore";

import RdtTypography from "@/components/Rdt/atoms/RdtTypography";

const BookIndex = () => {
  return (
    <section className="flex w-full flex-col gap-5 border-b border-[#EAEAEA] pb-[60px]">
      <RdtTypography type="H4" weight="Bold" color="#000000">
        목차
      </RdtTypography>
      <div className="flex flex-col gap-3">
        <RdtTypography type="B2" weight="Regular" color="#595959">
          [프롤로그] 하루 5분, 작은 습관이 만드는 위대한 변화
          <br />
          <br />
          [1장] 자존감
          <br />
          혼란스러운 세상에서도
          <br />
          ‘너’라는 세계는 반짝이고 있다
          <br />- 우리는 모두 자신의 모양대로 세상에 존재하려고 태어났다
          <br />- 언제든 질 수 있지만 그게 실패를 뜻하는 건 아니다
          <br />- 세상에서 가장 힘이 센 사람은 조용히 인내한다
          <br />- ‘통쾌하다’는 감정을 지우면 나 자신과 만날 수 있다
        </RdtTypography>
        <button className="flex items-center gap-[4px]">
          <RdtTypography type="B3" weight="Medium" color="#767676">
            펼치기
          </RdtTypography>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <g clip-path="url(#clip0_1932_71744)">
              <path
                d="M19.5 10.8545C19.5 16.1012 15.2467 20.3545 10 20.3545C4.75329 20.3545 0.5 16.1012 0.5 10.8545C0.5 5.60779 4.75329 1.35449 10 1.35449C15.2467 1.35449 19.5 5.60779 19.5 10.8545Z"
                fill="white"
                stroke="#CCCCCC"
              />
              <path
                d="M9.99919 13.3555C9.94444 13.3556 9.8902 13.3449 9.83959 13.324C9.78897 13.3031 9.74295 13.2725 9.70419 13.2338L6.37086 9.90046C6.29496 9.82188 6.25297 9.71663 6.25392 9.60738C6.25487 9.49813 6.29869 9.39362 6.37594 9.31637C6.45319 9.23912 6.55768 9.1953 6.66693 9.19435C6.77618 9.1934 6.88146 9.2354 6.96005 9.3113L9.99838 12.3496L13.0367 9.3113C13.1153 9.2354 13.2205 9.1934 13.3298 9.19435C13.439 9.1953 13.5435 9.23912 13.6208 9.31637C13.698 9.39362 13.7418 9.49813 13.7428 9.60738C13.7437 9.71663 13.7017 9.82188 13.6259 9.90046L10.2925 13.2338C10.2146 13.3115 10.1092 13.3552 9.99919 13.3555Z"
                fill="#767676"
              />
            </g>
            <defs>
              <clipPath id="clip0_1932_71744">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(0 0.854492)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default BookIndex;
