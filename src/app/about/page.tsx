"use client";

import { useState, useRef, useEffect } from "react";
import Footer from "../components/footer/Footer";
import Image from "next/image";

export default function About() {
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
      <section className="flex flex-col items-start justify-between gap-4 md:flex-row md:gap-12 lg:items-end">
        <div className=" flex w-28 md:w-72">
          <Image
            src="/photo-1583599499601-6ace8c41b622.avif" // Replace with the path to your image
            alt="Descriptive text about the image"
            width={2} // Adjust as needed
            height={3} // Adjust as needed
            layout="responsive"
          />
        </div>
        <div
          className="min-w-40 flex h-72 max-w-sm flex-col items-start justify-start gap-8 text-lg sm:mr-40"
          style={{ fontFamily: "Garamond", fontStyle: "italic" }}
        >
          <h1>
            hello. my name is isabel alice.
            <br />
            <span style={{ paddingLeft: 105 }}>i’m an author</span>
            <br /> &amp; copywriter based <br />
            in vienna, austria. i write poems
            <br />
            & i am
            <br />
            currently working on a book.{" "}
          </h1>
        </div>
      </section>
      <Footer showLogo={false} />
    </main>
  );
}
