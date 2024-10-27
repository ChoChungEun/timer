"use client";

import clsx from "clsx";
import { ReactNode } from "react";

export interface IRdtSpanProps {
  type: "H1" | "H2" | "H3" | "H4" | "H5" | "B1" | "B2" | "B3" | "caption";
  weight: "Regular" | "Medium" | "Bold";
  color?: string;
  clamp?: number;
  children: string | ReactNode;
  align?: "left" | "center" | "right";
  oneLine?: boolean;
  className?: string;
}

const typographyStyles: Record<IRdtSpanProps["type"], string> = {
  H1: "fz-32",
  H2: "fz-28",
  H3: "fz-24",
  H4: "fz-20",
  H5: "fz-18",
  B1: "fz-16",
  B2: "fz-14",
  B3: "fz-12",
  caption: "text-[13px] leading-[20px]",
};

const weightStyles: Record<IRdtSpanProps["weight"], string> = {
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

const alignStyles: Record<NonNullable<IRdtSpanProps["align"]>, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export default function RdtSpan({
  type,
  weight = "Regular",
  color = "#000000",
  clamp,
  align = "left",
  children,
  oneLine,
  className,
}: Readonly<IRdtSpanProps>) {
  const typographyClass = clsx(
    typographyStyles[type],
    weightStyles[weight],
    alignStyles[align],
    "-tracking-[0.01em]",
    oneLine ? "inline-block whitespace-nowrap" : "whitespace-preline",
    !oneLine && clamp && clamp >= 1 && clamp <= 6 ? clampStyles[clamp] : null,
    color && `text-[${color}]`,
    className
  );

  return <div className={typographyClass}>{children}</div>;
}
