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
      (prevIndex) => (prevIndex - 1 + poems.length) % poems.length,
    );
  };

  return (
    <main
      style={{ backgroundColor: "#FFFEF4" }}
      className={
        "text-red flex h-screen w-screen flex-col justify-between overflow-hidden overflow-y-hidden px-8 py-6"
      }
    >
      <nav className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tighter">
            ISABEL ALICE
          </h1>
          <p className="font-medium tracking-tight">Author & Copywriter</p>
        </div>

        <div className="flex flex-col items-end gap-2 font-semibold tracking-tight md:flex-row md:items-center md:justify-end md:gap-8">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="relative"
          >
            <button className="relative" type="button">
              POEMS
            </button>
            <p className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 pl-4 text-xs font-normal">
              ({poems.length})
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

      <section className="absolute right-56 top-1/3">
        <div
          className="min-w-40 flex h-72 max-w-sm flex-col justify-between gap-8 text-lg"
          style={{ fontFamily: "Garamond", fontStyle: "italic" }}
        >
          <div className="flex flex-col gap-2">
            <p className="text- font-semibold">{currentPoem.title}</p>
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

      <section className="flex items-end justify-between">
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
        <div className="flex flex-col items-end gap-0">
          <p className="font-semibold">GET IN TOUCH</p>
          <div
            className="flex flex-col items-end text-lg"
            style={{ fontFamily: "Garamond", fontStyle: "italic" }}
          >
            <p className="font-medium">
              <a href="mailto:isabelalice27@icloud.com">
                isabelalice27@icloud.com
              </a>
            </p>
            <p className="font-medium">
              <a href="tel:+436644129612">+43 664 412 9612</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
