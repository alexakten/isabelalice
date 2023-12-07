"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import poems from "../../../data/PoemsData";
import Link from "next/link";

export default function Poems() {
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
    <div
      className="min-w-40 flex h-72 max-w-sm flex-col justify-between gap-8 text-lg"
      style={{ fontFamily: "Garamond", fontStyle: "italic" }}
    >
      <div className="flex flex-col gap-2">
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
  );
}
