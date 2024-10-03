import RdtTypography from "@/components/Rdt/atoms/RdtTypography";

const LearningIntro = () => {
  const mockData = [
    {
      title: "과정소개",
      document:
        "해당 과정은 2024년 온보딩 과정으로 첨삭을 진행하는 독서 프로그램 입니다.",
    },
    {
      title: "학습목표",
      document: "선택 도서의 핵심 내용을 이해하고 정리하여 설명할 수 있습니다.",
    },
    {
      title: "학습내용",
      document:
        "좋은 서평을 쓰기 위해서는 저자와 책에 대한 정보를 제시하면서, 이 책이 주는 의미는 무엇인지, 우리 사회에 말하고 싶은 메시지는 무엇인지 성찰하고 물음을 던질 수 있어야 합니다. 해당 과정은 이런 좋은 서평을 쓰기 위해 첨석이 이루어지는 과정입니다. 참여자들의 도서에 대한 핵심 내용의 이해와 이를 통한 통찰적인 사고를 할 수 있도록 하는 독서 프로그램 입니다.좋은 서평을 쓰기 위해서는 저자와 책에 대한 정보를 제시하면서, 이 책이 주는 의미는 무엇인지, 우리 사회에 말하고 싶은 메시지는 무엇인지 성찰하고 물음을 던질 수 있어야 합니다. 해당 과정은 이런 좋은 서평을 쓰기 위해 첨석이 이루어지는 과정입니다. 참여자들의 도서에 대한 핵심 내용의 이해와 이를 통한 통찰적인 사고를 할 수 있도록 하는 독서 프로그램 입니다.좋은 서평을 쓰기 위해서는 저자와 책에 대한 정보를 제시하면서, 이 책이 주는 의미는 무엇인지, 우리 사회에 말하고 싶은 메시지는 무엇인지 성찰하고 물음을 던질 수 있어야 합니다. 해당 과정은 이런 좋은 서평을 쓰기 위해 첨석이 이루어지는 과정입니다. 참여자들의 도서에 대한 핵심 내용의 이해와 이를 통한 통찰적인 사고를 할 수 있도록 하는 독서 프로그램 입니다.",
    },
  ];
  return (
    <section className="flex w-full flex-col gap-[20px] border-b border-gray-300 pb-[30px]">
      <div className="w-full">
        <RdtTypography type="H4" weight="Bold" color="#000000">
          학습 소개
        </RdtTypography>
      </div>
      <ul className="flex w-full flex-col gap-[24px]">
        {mockData.map((el, i) => (
          <li className="flex w-full flex-col gap-[12px]" key={i}>
            <RdtTypography type="B1" weight="Bold" color="#000000">
              {el.title}
            </RdtTypography>
            <RdtTypography type="B2" weight="Regular" color="#000000">
              {el.document}
            </RdtTypography>
          </li>
        ))}
      </ul>
      {/* <TextMore text={'펼치기'} /> */}
    </section>
  );
};

export default LearningIntro;
