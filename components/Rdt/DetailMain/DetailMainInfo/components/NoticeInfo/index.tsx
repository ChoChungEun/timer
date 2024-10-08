import RdtTypography from "@/components/Rdt/atoms/RdtTypography";

const NoticeInto = () => {
  return (
    <section className="flex-col gap-[30px]">
      <div className="flex flex-col border-b border-black gap-[16px] pb-[20px]">
        <RdtTypography type="H4" weight="Bold" color="#000000">
          교환/반품/품절
        </RdtTypography>
        <div className="flex flex-row gap-[8px]">
          <button className="flex flex-grow h-[44px] items-center rounded-[8px] border border-[#CCCCCC] bg-[#FFFFFF] justify-center">
            <RdtTypography type="B2" weight="Medium" color="#000000">
              반품/교환 신청
            </RdtTypography>
          </button>
          <button className="flex flex-grow h-[44px] items-center rounded-[8px] border border-[#292929] bg-[#292929] justify-center">
            <RdtTypography type="B2" weight="Medium" color="#FFFFFF">
              1:1 문의
            </RdtTypography>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-3 border-b border-[#EAEAEA] py-[30px]">
          <RdtTypography type="B1" weight="Bold" color="#000000">
            교환/반품 내용
          </RdtTypography>
          <RdtTypography type="B2" weight="Medium" color="#595959">
            입력내용
          </RdtTypography>
        </div>
        <div className="flex flex-col gap-3 border-b border-[#EAEAEA] pb-[30px]">
          <RdtTypography type="B1" weight="Bold" color="#000000">
            교환/반품 방법
          </RdtTypography>
          <div className="flex flex-col gap-1">
            <RdtTypography type="B2" weight="Medium" color="#595959">
              {
                "마이룸 > 주문관리 > 주문/배송내역 > 주문조회 > 반품/교환 신청, [1:1 상담 > 반품/교환/환불] 또는 고객센터 (1544-1900)"
              }
            </RdtTypography>
            <RdtTypography type="B2" weight="Medium" color="#595959">
              {
                "오픈마켓, 해외배송 주문, 기프트 주문시 [1:1 상담>반품/교환/환불] 또는 고객센터 (1544-1900)"
              }
            </RdtTypography>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-b border-[#EAEAEA] pb-[30px]">
          <RdtTypography type="B1" weight="Bold" color="#000000">
            교환/반품 가능기간
          </RdtTypography>
          <RdtTypography type="B2" weight="Medium" color="#595959">
            {
              "변심반품의 경우 수령 후 7일 이내, 상품의 결함 및 계약내용과 다를 경우 문제점 발견 후 30일 이내"
            }
          </RdtTypography>
        </div>
        <div className="flex flex-col gap-3 border-b border-[#EAEAEA] pb-[30px]">
          <RdtTypography type="B1" weight="Bold" color="#000000">
            교환/반품 비용
          </RdtTypography>
          <RdtTypography type="B2" weight="Medium" color="#595959">
            입력내용
          </RdtTypography>
        </div>
        <div className="flex flex-col gap-3 border-b border-[#EAEAEA] pb-[30px]">
          <RdtTypography type="B1" weight="Bold" color="#000000">
            교환/반품 내용
          </RdtTypography>
          <RdtTypography type="B2" weight="Medium" color="#595959">
            변심 혹은 구매착오로 인한 반품/교환은 반송료 고객 부담
          </RdtTypography>
        </div>
        <div className="flex flex-col gap-3 border-b border-[#EAEAEA] pb-[30px]">
          <RdtTypography type="B1" weight="Bold" color="#000000">
            교환/반품 비용
          </RdtTypography>
          <div className="flex flex-col gap-1">
            <RdtTypography type="B2" weight="Medium" color="#595959">
              소비자의 책임 있는 사유로 상품 등이 손실 또는 훼손된 경우 (단지
              확인을 위한 포장 훼손은 제외)
            </RdtTypography>
            <RdtTypography type="B2" weight="Medium" color="#595959">
              소비자의 사용, 포장 개봉에 의해 상품 등의 가치가 현저히 감소한
              경우 예) 화장품, 식품, 가전제품(악세서리 포함) 등
            </RdtTypography>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-b border-[#EAEAEA] pb-[30px]">
          <RdtTypography type="B1" weight="Bold" color="#000000">
            교환/반품 불가 사유
          </RdtTypography>
          <div className="flex flex-col gap-1">
            <div className="flex gap-1">
              <div className="flex h-[18px] w-[6px] items-center justify-center">
                <div className="flex h-[2px] w-[2px] rounded-full bg-[#595959]" />
              </div>
              <RdtTypography type="B2" weight="Medium" color="#595959">
                소비자의 책임 있는 사유로 상품 등이 손실 또는 훼손된 경우 (단지
                확인을 위한 포장 훼손은 제외)
              </RdtTypography>
            </div>
            <div className="flex gap-1">
              <div className="flex h-[18px] w-[6px] items-center justify-center">
                <div className="flex h-[2px] w-[2px] rounded-full bg-[#595959]" />
              </div>
              <RdtTypography type="B2" weight="Medium" color="#595959">
                소비자의 사용, 포장 개봉에 의해 상품 등의 가치가 현저히 감소한
                경우 예) 화장품, 식품, 가전제품(악세서리 포함) 등
              </RdtTypography>
            </div>
            <div className="flex gap-1">
              <div className="flex h-[18px] w-[6px] items-center justify-center">
                <div className="flex h-[2px] w-[2px] rounded-full bg-[#595959]" />
              </div>
              <RdtTypography type="B2" weight="Medium" color="#595959">
                복제가 가능한 상품 등의 포장을 훼손한 경우 예) 음반/DVD/비디오,
                소프트웨어, 만화책, 잡지, 영상 화보집
              </RdtTypography>
            </div>
            <div className="flex gap-1">
              <div className="flex h-[18px] w-[6px] items-center justify-center">
                <div className="flex h-[2px] w-[2px] rounded-full bg-[#595959]" />
              </div>
              <RdtTypography type="B2" weight="Medium" color="#595959">
                소비자의 요청에 따라 개별적으로 주문 제작되는 상품의 경우
                ((1)해외주문도서)
              </RdtTypography>
            </div>
            <div className="flex gap-1">
              <div className="flex h-[18px] w-[6px] items-center justify-center">
                <div className="flex h-[2px] w-[2px] rounded-full bg-[#595959]" />
              </div>
              <RdtTypography type="B2" weight="Medium" color="#595959">
                디지털 컨텐츠인 ebook, 오디오북 등을 1회이상 ‘다운로드’를
                받았거나 '바로보기'로 열람한 경우
              </RdtTypography>
            </div>
            <div className="flex gap-1">
              <div className="flex h-[18px] w-[6px] items-center justify-center">
                <div className="flex h-[2px] w-[2px] rounded-full bg-[#595959]" />
              </div>
              <RdtTypography type="B2" weight="Medium" color="#595959">
                시간의 경과에 의해 재판매가 곤란한 정도로 가치가 현저히 감소한
                경우
              </RdtTypography>
            </div>
            <div className="flex gap-1">
              <div className="flex h-[18px] w-[6px] items-center justify-center">
                <div className="flex h-[2px] w-[2px] rounded-full bg-[#595959]" />
              </div>
              <RdtTypography type="B2" weight="Medium" color="#595959">
                전자상거래 등에서의 소비자보호에 관한 법률이 정하는 소비자
                청약철회 제한 내용에 해당되는 경우
              </RdtTypography>
            </div>
            <div className="flex gap-1">
              <div className="flex h-[18px] w-[6px] items-center justify-center">
                <div className="flex h-[2px] w-[2px] rounded-full bg-[#595959]" />
              </div>
              <RdtTypography type="B2" weight="Medium" color="#595959">
                세트상품 일부만 반품 불가 (필요시 세트상품 반품 후 낱권 재구매)
              </RdtTypography>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-b border-[#EAEAEA] pb-[30px]">
          <RdtTypography type="B1" weight="Bold" color="#000000">
            상품 품절
          </RdtTypography>
          <div className="flex flex-col gap-1">
            <RdtTypography type="B2" weight="Medium" color="#595959">
              공급사(출판사) 재고 사정에 의해 품절/지연될 수 있으며, 품절 시
              관련 사항에 대해서는 이메일과 문자로 안내드리겠습니다.
            </RdtTypography>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-b border-[#EAEAEA] pb-[30px]">
          <RdtTypography type="B1" weight="Bold" color="#000000">
            소비자 피해보상 환불 지연에 따른 배상
          </RdtTypography>
          <div className="flex gap-1">
            <div className="flex h-[18px] w-[6px] items-center justify-center">
              <div className="flex h-[2px] w-[2px] rounded-full bg-[#595959]" />
            </div>
            <RdtTypography type="B2" weight="Medium" color="#595959">
              상품의 불량에 의한 교환, A/S, 환불, 품질보증 및 피해보상 등에 관한
              사항은 소비자분쟁 해결 기준 (공정거래위원회 고시)에 준하여 처리됨
            </RdtTypography>
          </div>
          <div className="flex gap-1">
            <div className="flex h-[18px] w-[6px] items-center justify-center">
              <div className="flex h-[2px] w-[2px] rounded-full bg-[#595959]" />
            </div>
            <RdtTypography type="B2" weight="Medium" color="#595959">
              대금 환불 및 환불지연에 따른 배상금 지급 조건, 절차 등은
              전자상거래 등에서의 소비자 보호에 관한 법률에 따라 처리함
            </RdtTypography>
          </div>
        </div>
        <div className="rounded-[12px] bg-[#F7F7F7] p-5 flex gap-1">
          <div className="flex h-[18px] w-[6px] items-center justify-center">
            <div className="flex h-[2px] w-[2px] rounded-full bg-[#595959]" />
          </div>
          <RdtTypography type="B2" weight="Medium" color="#595959">
            상품 설명에 반품/교환 관련한 안내가 있는 경우 그 내용을 우선으로
            합니다. (업체 사정에 따라 달라질 수 있습니다.)
          </RdtTypography>
        </div>
      </div>
    </section>
  );
};

export default NoticeInto;
