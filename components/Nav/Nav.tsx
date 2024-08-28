"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LIST = [
  // { name: "Timer", href: "/", value: "timer" },
  // { name: "Stopwatch", href: "/stopwatch", value: "stopwatch" },
  { name: "CityClock", href: "/", value: "cityClock" },
];

const Nav = () => {
  const pathname = usePathname();
  const newPathname = pathname.replace("/", "");

  return (
    <ul className="w-[120px] h-[100vh] bg-[#212226]">
      {NAV_LIST.map((nav, idx) => {
        const isActive = newPathname === nav.value;
        const isHome = newPathname === "" && nav.value === "timer";
        const activeStyles =
          isHome || isActive ? "!bg-[#040404] !text-[#ffffff]" : "";

        return (
          <li
            key={idx}
            className={`${activeStyles} h-[74px] text-[14px] text-[#c2c7d0] font-[600]`}
          >
            <Link
              href={nav.href}
              className="w-[100%] h-[100%] flex items-center justify-center"
            >
              {nav.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
