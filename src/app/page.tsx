"use client";

import dynamic from "next/dynamic";

import { useState, useRef, useEffect } from "react";
import Footer from "./components/footer/Footer";
import Poems from "./components/poems/Poems";
import { useTheme } from "next-themes";

export default function Home() {
  const [viewportHeight, setViewportHeight] = useState(0);
  useEffect(() => {
    const setVH = () => {
      setViewportHeight(window.innerHeight);
    };

    setVH();

    window.addEventListener("resize", setVH);
    return () => window.removeEventListener("resize", setVH);
  }, []);

  return (
    <main
      className="flex h-screen w-screen flex-col items-end justify-center overflow-hidden overflow-y-hidden px-8 py-6"
      style={{ userSelect: "none", height: `${viewportHeight}px` }}
    >
      <section className="flex justify-center sm:mr-40 sm:justify-end">
        <Poems />
      </section>

      <Footer />
    </main>
  );
}
