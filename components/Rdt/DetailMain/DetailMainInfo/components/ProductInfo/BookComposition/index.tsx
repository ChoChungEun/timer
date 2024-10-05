import RdtTypography from "@/components/Rdt/atoms/RdtTypography";

const BookComposition = () => {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col border-b border-black pb-[20px] gap-[8px]">
        <RdtTypography type="H4" weight="Bold" color="#000000">
          이 책의 상품구성
        </RdtTypography>
        <div className="flex gap-[4px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="21"
            viewBox="0 0 6 21"
            fill="none"
          >
            <circle cx="3" cy="10.8545" r="1" fill="#595959" />
          </svg>
          <RdtTypography type="B3" weight="Regular" color="#595959">
            자세한 상품구성정보에 대한 문의사항은 도서·정보 1:1상담을
            이용해주세요.
          </RdtTypography>
        </div>
      </div>
      <section>
        <ul>
          <li className="flex flex-col gap-[4px] border-b-[1px] border-[#EAEAEA] py-[20px] px-[4px]">
            <RdtTypography type="B2" weight="Regular" color="#000000">
              그레이의 50가지 그림자 10권
            </RdtTypography>
            <RdtTypography type="B2" weight="Regular" color="#767676">
              E.L 제임스
            </RdtTypography>
            <RdtTypography type="B2" weight="Regular" color="#767676">
              2021년 09월 09일 출간
            </RdtTypography>
            <RdtTypography type="B2" weight="Regular" color="#767676">
              180쪽·140*201*32mm·468g
            </RdtTypography>
          </li>
          <li className="flex flex-col gap-[4px] border-b-[1px] border-[#EAEAEA] py-[20px] px-[4px]">
            <RdtTypography type="B2" weight="Regular" color="#000000">
              그레이의 50가지 그림자 10권
            </RdtTypography>
            <RdtTypography type="B2" weight="Regular" color="#767676">
              E.L 제임스
            </RdtTypography>
            <RdtTypography type="B2" weight="Regular" color="#767676">
              2021년 09월 09일 출간
            </RdtTypography>
            <RdtTypography type="B2" weight="Regular" color="#767676">
              180쪽·140*201*32mm·468g
            </RdtTypography>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default BookComposition;
