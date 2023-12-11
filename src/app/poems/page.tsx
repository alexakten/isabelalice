import React, { useState } from "react";
import poems from "../../data/PoemsData";

interface Poem {
  id: number;
  title: string;
  content: string;
}

const poemData: Poem[] = poems as Poem[];

export default function Poems() {
  function formatPoem(poemContent: string) {
    return poemContent.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  }

  return (
    <main className="flex w-screen flex-col items-end justify-center px-8 py-6">
      <section className="flex flex-col justify-center pt-40 pb-40 sm:mr-40 sm:justify-end">
        {poemData.map((poem) => (
          <div
            key={poem.id}
            className={`h-72 max-w-md text-lg ${
              poem.id % 2 === 0 ? "md:mr-0" : "md:mr-0"
            }`}
            style={{ fontFamily: "Garamond", fontStyle: "italic" }}
          >
            
            <div className="flex flex-col gap-2">
            <p className="font-normal text-xs">{poem.id}</p>
              <p className="font-semibold">{poem.title}</p>
              <div>{formatPoem(poem.content)}</div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
