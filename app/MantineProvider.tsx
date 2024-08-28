"use client";
import { MantineProvider as MantineRoot } from "@mantine/core";

export default function MantineProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MantineRoot>{children}</MantineRoot>;
}
