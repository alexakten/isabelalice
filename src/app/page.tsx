"use client";

import { useState, useRef, useEffect } from "react";
import poems from "../data/PoemsData";

export default function Home() {
  const [currentPoemIndex, setCurrentPoemIndex] = useState(0);
  const currentPoem = poems[currentPoemIndex];

  const goToNextPoem = () => {
    setCurrentPoemIndex((prevIndex) => (prevIndex + 1) % poems.length);
  };

  const goToPreviousPoem = () => {
    setCurrentPoemIndex(
      (prevIndex) => (prevIndex - 1 + poems.length) % poems.length
    );
  };

  return (
    <main
      style={{ backgroundColor: "#FFFEF4" }}
      className={
        "flex text-red flex-col justify-between w-screen h-screen overflow-hidden overflow-y-hidden px-8 py-6"
      }
    >
      <nav className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-semibold tracking-tighter">
            ( ISABEL ALICE )
          </h1>
          <p className="tracking-tight font-medium">Author & Copywriter</p>
        </div>

        <div className="font-semibold tracking-tight flex flex-col md:flex-row items-end md:items-center md:justify-end gap-2 md:gap-8">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="relative"
          >
            <button className="relative" type="button">
              POEMS
            </button>
            <p className="absolute pl-2 top-0 right-0 text-xs font-normal translate-x-1/2 -translate-y-1/2">
              {poems.length}
            </p>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <button type="button">BOOK</button>
          </a>
          <a href="">
            <button type="button">ABOUT</button>
          </a>
          {/* <a href="tel:+46709136514">
            <button type="button">tel</button>
          </a> */}
        </div>
      </nav>

      <section className="absolute top-1/3 right-56">
        <div
          className="flex max-w-md min-w-40 h-72 flex-col justify-between gap-8"
          style={{ fontFamily: "Garamond", fontStyle: "italic" }}
        >
          <div className="flex gap-2 flex-col text-xl">
            <p className="font-semibold">{currentPoem.title}</p>
            <p>{currentPoem.content}</p>
          </div>
          <div className="flex flex-row justify-between">
            <button type="button" onClick={goToPreviousPoem}>
              previous
            </button>
            <p>
              {currentPoem.id} — {poems.length}
            </p>
            <button type="button" onClick={goToNextPoem}>
              next
            </button>
          </div>
        </div>
      </section>

      <section className="flex justify-between items-end">
        <div className="">
          <h1
            style={{
              margin: 0,
              fontSize: "14rem",
              lineHeight: 0.75,
              fontFamily: "Garamond",
              fontStyle: "italic",
              letterSpacing: "-0.5rem",
            }}
          >
            isabel alice
          </h1>
        </div>
        <div className="flex flex-col gap-0 items-end">
          <p className="font-semibold">GET IN TOUCH</p>
          <div style={{ fontFamily: "Garamond", fontStyle: "italic" }}>
            <p className="font-medium">isabel@alice.com</p>
            <p className="font-medium">+46 709 81 91 19</p>
          </div>
        </div>
      </section>
    </main>
  );
}
