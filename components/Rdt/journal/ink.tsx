import RdtSpan from "./RdtSpan";

const headerData = [
  {
    title: "간행물유형",
    content: "등재정보",
  },
  {
    title: "발행주기",
    content: "연 2회간",
  },
  {
    title: "발행기관",
    content: "한국영유아교육실천학회",
  },
  {
    title: "발행기간",
    content: "2023 ~ 2023",
  },
  {
    title: "발행기관구분",
    content: "학회",
  },
  {
    title: "주제분류",
    content: "자연과학 > 자연과학일반",
  },
  {
    title: "ISSN",
    content: "",
  },
  {
    title: "등재정보",
    content: "",
  },
];

const PageInk = () => {
  return (
    <article className="mx-auto w-[1200px] flex-col gap-[60px] py-[40px]">
      <section className="flex flex-col gap-[32px]">
        {/* 타이틀 */}
        <section className="flex flex-col gap-[16px] items-center">
          <section className="flex flex-col gap-[8px] items-center">
            <RdtSpan type="B2" weight="Medium" color="#FF0000">
              간행물
            </RdtSpan>
            <RdtSpan type="H2" weight="Bold" color="#000000">
              한국뷰티웰니스학회지(Journal of the Korean society of beauty
              wellness)
            </RdtSpan>
          </section>
          <section className="flex items-center gap-[8px]">
            <RdtSpan type="B1" weight="Medium" color="#595959">
              권호수
            </RdtSpan>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1"
              height="10"
              viewBox="0 0 1 10"
              fill="none"
            >
              <path d="M1 0H0V10H1V0Z" fill="#CCCCCC" />
            </svg>
            <RdtSpan type="B1" weight="Medium" color="#595959">
              권호수
            </RdtSpan>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1"
              height="10"
              viewBox="0 0 1 10"
              fill="none"
            >
              <path d="M1 0H0V10H1V0Z" fill="#CCCCCC" />
            </svg>
            <RdtSpan type="B1" weight="Medium" color="#595959">
              권호수
            </RdtSpan>
          </section>
        </section>
        {/* 헤더 */}
        <section className="grid grid-cols-[154px,1fr] items-center gap-[20px]">
          <section>
            <img src="https://placehold.co/154x222" alt="간행물 이미지" />
          </section>
          <section className="border-t-[1px] border-t-[#000000] py-[30px]  grid grid-cols-2 gap-[24px] border-b-[1px] border-b-[#EAEAEA]">
            {headerData.map((data, idx) => (
              <section
                className="grid grid-cols-[140px,1fr] gap-[20px]"
                key={idx}
              >
                <RdtSpan type="B2" weight="Medium" color="#000000">
                  {data.title}
                </RdtSpan>
                <RdtSpan type="B2" weight="Regular" color="#767676">
                  {data.content}
                </RdtSpan>
              </section>
            ))}
          </section>
        </section>
        {/* 검색 */}
        <section className="bg-[#F7F7F7] flex justify-center py-[16px]">
          <section className="flex items-center gap-[16px]">
            <RdtSpan type="B2" weight="Medium" color="#000000">
              이 저널에서 논문 검색
            </RdtSpan>
            <section className="w-[422px] items-center grid grid-cols-[1fr,24px] gap-[8px] border border-[#000000] rounded-[8px] bg-[#FFFFFF] px-[14px] py-[8px]">
              <input
                type="text"
                className="border-none text-[14px] placeholder-[#CCCCCC] focus:outline-none"
                placeholder="검색어를 입력해주세요."
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  d="M16 8C16 12.1421 12.6421 15.5 8.5 15.5C4.35786 15.5 1 12.1421 1 8C1 3.85786 4.35786 0.5 8.5 0.5C12.6421 0.5 16 3.85786 16 8Z"
                  stroke="black"
                />
                <path
                  d="M8.5 15C12.366 15 15.5 11.866 15.5 8C15.5 4.13401 12.366 1 8.5 1C4.63401 1 1.5 4.13401 1.5 8C1.5 11.866 4.63401 15 8.5 15Z"
                  stroke="black"
                  stroke-width="2"
                />
                <path
                  d="M13.5 13L18.5 18"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </section>
          </section>
        </section>
        {/* body */}
        <section className="flex flex-col">
          {/* nav tab */}
          <section className="flex items-center border-b-[1px] border-[#000000] mb-[32px]">
            <button className="flex items-center justify-center w-[166px] h-[44px] border-b-[0px] border rounded-tr-[8px] rounded-tl-[8px] border-[#D5D5D5]">
              <RdtSpan type="B2" weight="Medium" color="#595959">
                간행물 데이터
              </RdtSpan>
            </button>
            <button className="flex items-center justify-center w-[166px] h-[44px] border-b-[0px] border rounded-tr-[8px] rounded-tl-[8px] border-[#D5D5D5]">
              <RdtSpan type="B2" weight="Regular" color="#595959">
                권호목록 검색
              </RdtSpan>
            </button>
          </section>
          {/* sub tab */}
          <section className="flex items-center gap-[8px] mb-[20px]">
            <button>
              <RdtSpan type="B2" weight="Bold" color="#000000">
                많이 이용된 논문
              </RdtSpan>
            </button>
            <span className="h-[12px] w-[1px] bg-[#CCCCCC]" />
            <button></button>
          </section>
          {/* contents */}
          <section className="flex flex-col">
            {Array.from({ length: 5 }).map((_, idx) => (
              <section
                className="border-t-[1px] border-t-[#EAEAEA] py-[36px] grid grid-cols-[144px,1fr,100px] gap-[16px]"
                key={idx}
              >
                <section>
                  <img src="https://placehold.co/144x208" alt="간행물 이미지" />
                </section>
                <section className="flex flex-col gap-[12px]">
                  <section className="flex flex-col gap-[8px]">
                    <div className="w-[22px] h-[22px] rounded-[4px] bg-[#767676] items-center justify-center flex">
                      <RdtSpan type="B3" weight="Bold" color="#FFFFFF">
                        <span className="text-[#FFFFFF]">1</span>
                      </RdtSpan>
                    </div>
                    <RdtSpan type="B1" weight="Bold" color="#000000">
                      논문명
                    </RdtSpan>
                    <section className="flex items-center gap-[4px]">
                      {[
                        "저자명",
                        "발행기관",
                        "발생연도",
                        "간행물 정보",
                        "KCI 등재정보",
                      ].map((item, idx) => (
                        <section
                          className="flex items-center gap-[4px]"
                          key={idx}
                        >
                          <RdtSpan type="B3" weight="Regular" color="#595959">
                            {item}
                          </RdtSpan>
                          {idx !== 4 && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="2"
                              height="2"
                              viewBox="0 0 2 2"
                              fill="none"
                            >
                              <path
                                d="M1 2C1.55228 2 2 1.55228 2 1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2Z"
                                fill="#595959"
                              />
                            </svg>
                          )}
                        </section>
                      ))}
                    </section>
                    <section className="flex items-center gap-[4px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path d="M2.33301 11.666H11.6663" stroke="black" />
                        <path
                          d="M3.5 5.83398L7 9.33398L10.5 5.83398"
                          stroke="black"
                        />
                        <path d="M7 2.33398V9.33398" stroke="black" />
                      </svg>
                      <RdtSpan type="B3" weight="Regular" color="#595959">
                        이용수
                      </RdtSpan>
                      <RdtSpan type="B3" weight="Regular" color="#000000">
                        100
                      </RdtSpan>
                    </section>
                  </section>
                  <RdtSpan type="B3" weight="Regular" color="#000000">
                    이 논문은 저작권자의 요청으로 무료로 제공됩니다.
                  </RdtSpan>
                  <section className="flex items-center gap-[6px]">
                    <button className="py-[6px] px-[10px] flex items-center justify-center rouded-[4px] border border-[#CCCCCC]">
                      <RdtSpan type="B3" weight="Medium" color="#000000">
                        초록보기
                      </RdtSpan>
                    </button>
                    <button className="py-[6px] px-[10px] flex items-center justify-center rouded-[4px] border border-[#CCCCCC]">
                      <RdtSpan type="B3" weight="Medium" color="#000000">
                        상세정보보기
                      </RdtSpan>
                    </button>
                    <button className="py-[6px] px-[10px] flex items-center justify-center rouded-[4px] border border-[#CCCCCC]">
                      <RdtSpan type="B3" weight="Medium" color="#000000">
                        인용정보
                      </RdtSpan>
                    </button>
                  </section>
                </section>
                <section className="flex flex-col gap-[20px] items-end">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M8.57337 5.28516C9.83623 5.28516 11.0683 5.84624 11.9718 6.81733C11.9923 6.83891 12.0129 6.83891 12.0334 6.81733C12.9369 5.85703 14.1587 5.28516 15.4318 5.28516C15.5859 5.28516 15.7296 5.28516 15.8836 5.30674C20.4525 5.80308 20.9351 11.5433 18.7173 13.6582L13.1012 18.8482C12.4646 19.4308 11.5201 19.4308 10.8938 18.8482L5.2776 13.6582C3.07016 11.5433 3.54245 5.80308 8.12161 5.30674C8.27562 5.28516 8.42963 5.28516 8.57337 5.28516Z"
                        stroke="#CCCCCC"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                      />
                    </svg>
                  </button>
                  <section className="flex flex-col gap-[6px]">
                    <button className="w-[100px] h-[38px] flex items-center justify-center rounded-[8px] bg-[#767676]">
                      <RdtSpan type="B2" weight="Medium" color="#FFFFFF">
                        장바구니
                      </RdtSpan>
                    </button>
                    <button className="w-[100px] h-[38px] flex items-center justify-center rounded-[8px] bg-[#F4430C]">
                      <RdtSpan type="B2" weight="Medium" color="#FFFFFF">
                        신청하기
                      </RdtSpan>
                    </button>
                    <button></button>
                  </section>
                </section>
              </section>
            ))}
          </section>
        </section>
      </section>
    </article>
  );
};

export default PageInk;
