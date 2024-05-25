"use client";

import Image from "next/image";
import React from "react";
import Logo from "../../public/next.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },

  {
    href: "/posts",
    label: "Posts",
  },
];

const Header = () => {
  const pathName = usePathname();

  return (
    <header className="flex justify-between items-center py-4 px-7 border border-b">
      <Link href="/">
        <Image src={Logo} alt="Brand ogo" className="w-[80px]" width={80} />
      </Link>

      <nav>
        <ul className="flex gap-x-5 text-[14px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={` ${
                  pathName === link.href ? "text-zinc-900" : "text-zinc-400"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
