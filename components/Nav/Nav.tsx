"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LIST = [
  { name: "Timer", href: "/", value: "timer" },
  { name: "Stopwatch", href: "stopwatch", value: "stopwatch" },
];

const Nav = () => {
  const pathname = usePathname();

  const navList = NAV_LIST;

  const newPathname = pathname.replace("/", "");

  console.log("newPathname", newPathname);

  return (
    <ul className="w-[100px] h-[100vh] bg-[#212226]">
      {navList.map((nav, idx) => {
        const isActive = newPathname === nav.value;
        const isHome = newPathname === "" && nav.value === "timer";
        const activeStyles =
          isHome || isActive ? "!bg-[#040404] !text-[#ffffff]" : "";

        return (
          <li
            key={idx}
            className={`${activeStyles} flex items-center justify-center h-[74px] text-[14px] text-[#c2c7d0] font-[600]`}
          >
            <Link href={nav.href}>{nav.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
