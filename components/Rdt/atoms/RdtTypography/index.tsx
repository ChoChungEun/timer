"use client";

import clsx from "clsx";
import { ReactNode } from "react";

import styles from "./RdtTypography.module.css";

export interface IRdtTypographyProps {
  type: "H1" | "H2" | "H3" | "H4" | "H5" | "B1" | "B2" | "B3" | "caption";
  weight: "Regular" | "Medium" | "Bold";
  color?: string;
  clamp?: number;
  children: string | ReactNode;
  align?: "left" | "center" | "right";
  oneLine?: boolean;
}

const typographyStyles: Record<IRdtTypographyProps["type"], string> = {
  H1: "text-[32px] leading-[44px]",
  H2: "text-[28px] leading-[38px]",
  H3: "text-[24px] leading-[34px]",
  H4: "text-[20px] leading-[30px]",
  H5: "text-[18px] leading-[28px]",
  B1: "text-[16px] leading-[24px]",
  B2: "text-[14px] leading-[22px]",
  B3: "text-[12px] leading-[18px]",
  caption: "text-[13px] leading-[20px]",
};

const weightStyles: Record<IRdtTypographyProps["weight"], string> = {
  Regular: "font-normal", // 400
  Medium: "font-medium", // 500
  Bold: "font-bold", // 700
};

const clampStyles: Record<number, string> = {
  1: "line-clamp-1",
  2: "line-clamp-2",
  3: "line-clamp-3",
  4: "line-clamp-4",
  5: "line-clamp-5",
  6: "line-clamp-6",
};

const alignStyles: Record<NonNullable<IRdtTypographyProps["align"]>, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export default function RdtTypography({
  type,
  weight = "Regular",
  color = "#000000",
  clamp,
  align = "left",
  children,
  oneLine,
}: Readonly<IRdtTypographyProps>) {
  const typographyClass = clsx(
    typographyStyles[type],
    weightStyles[weight],
    alignStyles[align],
    styles.notoSansCJKKR,
    "-tracking-[0.01em]",
    oneLine ? "inline-block whitespace-nowrap" : "whitespace-preline",
    !oneLine && clamp && clamp >= 1 && clamp <= 6 ? clampStyles[clamp] : null,
    color && `text-[${color}]`
  );

  return <div className={typographyClass}>{children}</div>;
}
