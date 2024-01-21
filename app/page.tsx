"use client";
import { Nav } from "@/components/Nav";
import Timer from "@/components/Timer";
import { MantineProvider } from "@mantine/core";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <RecoilRoot>
      <MantineProvider>
        <Timer />
      </MantineProvider>
    </RecoilRoot>
  );
}
