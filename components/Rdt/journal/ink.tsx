import { JournalRoot } from "./components/JournalRoot";
import { useEffect, useState } from "react";

export const headerData = [
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

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    setIsMobile(/mobile/i.test(userAgent));
  }, []);

  return isMobile;
};

const PageInk = () => {
  return <JournalRoot />;
};

export default PageInk;
