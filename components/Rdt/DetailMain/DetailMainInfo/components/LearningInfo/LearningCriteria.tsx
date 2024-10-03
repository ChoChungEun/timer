import RdtTypography from "@/components/Rdt/atoms/RdtTypography";

const LearningCriteria = () => {
  return (
    <section className="flex flex-col gap-[20px] border-b border-gray-300 pb-[60px]">
      <RdtTypography type="H4" weight="Bold" color="#000000">
        학습 수료기준
      </RdtTypography>
      <div className="pb-[20px]">
        <table className="border-t-[1px] border-b-[1px] border-[#000000]">
          <thead>
            <tr>
              <th className="border-r border-b border-gray-300 p-3">
                <RdtTypography type="B2" weight="Medium" color="#767676">
                  평가구분
                </RdtTypography>
              </th>
              <th className="border-r border-b border-gray-300 p-3">
                <RdtTypography type="B2" weight="Medium" color="#767676">
                  과정명
                </RdtTypography>
              </th>
              <th className="border-r border-b border-gray-300 p-3">
                <RdtTypography type="B2" weight="Medium" color="#767676">
                  평가항목
                </RdtTypography>
              </th>
              <th className="border-r border-b border-gray-300 p-3">
                <RdtTypography type="B2" weight="Medium" color="#767676">
                  취득점수
                </RdtTypography>
              </th>
              <th className="border-r border-b border-gray-300 p-3">
                <RdtTypography type="B2" weight="Medium" color="#767676">
                  과락기준
                </RdtTypography>
              </th>
              <th className="border-b border-gray-300 p-3">
                <RdtTypography type="B2" weight="Medium" color="#767676">
                  수료여부
                </RdtTypography>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                className="border-r border-gray-300 p-3 text-center"
                rowSpan={6}
              >
                <RdtTypography type="B2" weight="Regular" color="#000000">
                  과정평가
                </RdtTypography>
              </td>
              <td
                className="border-r border-gray-300 p-3 text-center"
                rowSpan={6}
              >
                <RdtTypography type="B2" weight="Regular" color="#000000">
                  상품명 or 과정명
                </RdtTypography>
              </td>
              <td className="border border-gray-300 p-3">
                <RdtTypography type="B2" weight="Regular" color="#000000">
                  시험
                </RdtTypography>
              </td>
              <td className="border border-gray-300 p-3 text-center">
                <RdtTypography type="B2" weight="Regular" color="#000000">
                  70점
                </RdtTypography>
              </td>
              <td className="border border-gray-300 p-3 text-center">
                <RdtTypography type="B2" weight="Regular" color="#000000">
                  60점
                </RdtTypography>
              </td>
              <td
                className="justify-center border-gray-300 p-3 text-center"
                rowSpan={6}
              >
                <RdtTypography type="B2" weight="Regular" color="#000000">
                  평가항목 중,
                  <br />
                  한가지 항목이라도
                  <br />
                  미달 시 미수료
                </RdtTypography>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">
                <RdtTypography type="B2" weight="Regular" color="#000000">
                  서평
                </RdtTypography>
              </td>
              <td className="border border-gray-300 p-3 text-center">
                <RdtTypography type="B2" weight="Regular" color="#000000">
                  제출
                </RdtTypography>
              </td>
              <td className="border border-gray-300 p-3 text-center">
                <RdtTypography type="B2" weight="Regular" color="#000000">
                  미제출
                </RdtTypography>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">
                <RdtTypography type="B2" weight="Regular" color="#000000">
                  퀴즈 1차
                </RdtTypography>
              </td>
              <td className="border border-gray-300 p-3 text-center">
                <RdtTypography type="B2" weight="Regular" color="#000000">
                  응시
                </RdtTypography>
              </td>
              <td className="border border-gray-300 p-3 text-center">
                <RdtTypography type="B2" weight="Regular" color="#000000">
                  미응시
                </RdtTypography>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">
                <RdtTypography type="B2" weight="Regular" color="#000000">
                  퀴즈 2차
                </RdtTypography>
              </td>
              <td className="border border-gray-300 p-3 text-center">
                <RdtTypography type="B2" weight="Regular" color="#000000">
                  응시
                </RdtTypography>
              </td>
              <td className="border border-gray-300 p-3 text-center">
                <RdtTypography type="B2" weight="Regular" color="#000000">
                  미응시
                </RdtTypography>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">
                <RdtTypography type="B2" weight="Regular" color="#000000">
                  퀴즈 3차
                </RdtTypography>
              </td>
              <td className="border border-gray-300 p-3 text-center">
                <RdtTypography type="B2" weight="Regular" color="#000000">
                  응시
                </RdtTypography>
              </td>
              <td className="border border-gray-300 p-3 text-center">
                <RdtTypography type="B2" weight="Regular" color="#000000">
                  미응시
                </RdtTypography>
              </td>
            </tr>
            <tr>
              <td className="border-r border-gray-300 p-3">
                <RdtTypography type="B2" weight="Regular" color="#000000">
                  진도
                </RdtTypography>
              </td>
              <td className="border-r border-gray-300 p-3 text-center">
                <RdtTypography type="B2" weight="Regular" color="#000000">
                  100%
                </RdtTypography>
              </td>
              <td className="border-r border-gray-300 p-3 text-center">
                <RdtTypography type="B2" weight="Regular" color="#000000">
                  100%
                </RdtTypography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default LearningCriteria;
