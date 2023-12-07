"use client";

import dynamic from "next/dynamic";

import { useState, useRef, useEffect } from "react";
import Footer from "./components/footer/Footer";
import Poems from "./components/poems/page";
import { useTheme } from "next-themes";

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-end justify-center overflow-hidden overflow-y-hidden px-8 py-6">
      
      <section className="flex justify-center sm:mr-40 sm:justify-end">
        <Poems />
      </section>

      <Footer />
    </main>
  );
}
