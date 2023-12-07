"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import poems from "../../../data/PoemsData";
import Link from "next/link";
import ThemeSwitcher from "../../ThemeSwitcher";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <nav
      className={
        "fixed left-0 top-0 z-10 flex w-screen flex-row items-start justify-between overflow-hidden px-8 py-6"
      }
    >
      <div>
        <Link href="/">
          <h1 className="text-2xl font-semibold tracking-tighter">
            ISABEL ALICE
          </h1>
          <p className="text-s font-normal tracking-tight">
            Author & Copywriter
          </p>
        </Link>
      </div>

      <div className="left-1/2 top-9 hidden -translate-x-1/2 -translate-y-1/2 transform font-medium sm:absolute sm:flex">
        <ThemeSwitcher />
      </div>

      <div className="flex flex-col items-end gap-2 font-semibold md:flex-row md:items-center md:justify-end md:gap-8">
        <Link href="/poems">
          <button className="relative" type="button">
            POEMS
            <p className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 pl-5 text-xs font-normal">
              ({poems.length})
            </p>
          </button>
        </Link>
        <Link href="/book">
          <button type="button">BOOK</button>
        </Link>
        <Link href="/about">
          <button type="button">ABOUT</button>
        </Link>
      </div>
    </nav>
  );
}
