import Link from "next/link";

const Nav = () => {
  const navList = [
    { name: "Timer", href: "timer" },
    { name: "Stopwatch", href: "stopwatch" },
  ];

  return (
    <ul className="w-[100px] h-[100vh] bg-[#212226]">
      {navList.map((nav) => (
        <li className="flex items-center justify-center h-[74px] text-[14px] text-[#c2c7d0] font-[600]">
          <Link href={nav.href}>{nav.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
