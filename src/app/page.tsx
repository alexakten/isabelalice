"use client";

import dynamic from "next/dynamic";

import { useState, useRef, useEffect } from "react";
import Footer from "./components/footer/Footer";
import Poems from "./components/poems/Poems";


export default function Home() {
  const [viewportHeight, setViewportHeight] = useState(855);
  useEffect(() => {
    const setVH = () => {
      setViewportHeight(window.innerHeight);
    };

    setVH();

    window.addEventListener("resize", setVH);
    return () => window.removeEventListener("resize", setVH);
  }, []);

  useEffect(() => {
    const preventDefault = (e: TouchEvent) => e.preventDefault();

    document.addEventListener("touchmove", preventDefault, { passive: false });

    return () => {
      document.removeEventListener("touchmove", preventDefault);
    };
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
