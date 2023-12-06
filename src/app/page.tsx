"use client";

import { useState, useRef, useEffect } from "react";
import poems from "../data/PoemsData";

export default function Home() {
  const [theme, setTheme] = useState("dark"); // Default theme is dark

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
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
      style={{
        backgroundColor: theme === "light" ? "#FFFEF4" : "#B80002",
      }}
      className={`flex h-screen w-screen flex-col justify-between overflow-hidden overflow-y-hidden px-8 py-6 ${
        theme === "light" ? "text-red" : "text-light"
      }`}
    >
      <nav className="relative flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tighter">
            ISABEL ALICE
          </h1>
          <p className="text-s font-normal tracking-tight">
            Author & Copywriter
          </p>
        </div>

        <div className="hidden sm:flex sm:absolute left-1/2 -translate-x-1/2 transform font-medium top-3 -translate-y-1/2">
          <button
            type="button"
            onClick={toggleTheme}
            style={{ fontFamily: "Garamond", fontStyle: "italic" }}
          >
            {theme === "light" ? "◖ dark" : "● light"}
          </button>
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
        </div>
      </nav>

      <section className="flex justify-center sm:mr-40 sm:justify-end">
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
          <h1 className="hidden sm:flex responsive-title">isabel alice</h1>
          <div className="flex sm:hidden font-medium">
          <button
            type="button"
            onClick={toggleTheme}
            style={{ fontFamily: "Garamond", fontStyle: "italic" }}
          >
            {theme === "light" ? "◖ dark" : "● light"}
          </button>
        </div>
        </div>
        <div className="flex flex-col items-end gap-0">
          <p className="font-semibold">GET IN TOUCH</p>
          <div
            className="flex flex-col items-end text-lg"
            style={{ fontFamily: "Garamond", fontStyle: "italic" }}
          >
            <p className="font-medium">
              <a href="tel:+436644129612">+43 664 412 9612</a>
            </p>
            <p className="font-medium">
              <a href="mailto:isabelalice27@icloud.com">
                isabelalice@icloud.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
