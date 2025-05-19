"use client";

import React from "react";
import Particles from "@app/hooks/particles";

export default function Home() {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {/* Background Particles */}
      <Particles className="absolute inset-0 animate-fade-in h-full" quantity={500} />

      {/* Main Content (Heading) - Now relative to the viewport due to layout */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        <h1 className="text-4xl font-extrabold font-mono text-center text-white bg-transparent">
          Tommy Le
        </h1>
        <h2 className="text-1xl font-bold font-mono text-center text-gray-300 mt-1 bg-transparent">
          Informatics and Computer Science Student
        </h2>
      </div>
    </div>
  );
}