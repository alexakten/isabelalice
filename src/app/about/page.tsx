"use client";

import Footer from "../components/footer/Footer";
import Image from "next/image";

export default function About() {
  return (
    <main className="flex h-screen flex-col items-end justify-center overflow-hidden overflow-y-hidden px-8 py-6">
      <section className="flex flex-col items-end justify-between gap-12 md:flex-row lg:items-end">
        <div className=" flex w-40 md:w-72">
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
            in <br />
            vienna, austria.
            <br />
            i write poems and i am
            <br />
            <span style={{ paddingLeft: 105 }}>
              currently working on a book.{" "}
            </span>
          </h1>
        </div>
      </section>
      <Footer showLogo={false} />
    </main>
  );
}
