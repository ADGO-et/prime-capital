"use client";

import React from "react";

type Hero2Props = {
  title: React.ReactNode;
  description?: React.ReactNode;
};

export default function Hero2({ title, description }: Hero2Props) {
  const bgStyle: React.CSSProperties = {
    // white base, then gradient layer + repeated image on top
    backgroundColor: "#ffffff",
    backgroundImage:
      "linear-gradient(to bottom, rgba(14,0,102,0.92), rgba(32,20,255,0.8)), url('/rubix.png')",
    backgroundRepeat: "repeat-x",
    backgroundSize: "50% 100%",
    backgroundPosition: "top center",
  };

  return (
    <section className="relative overflow-hidden" style={bgStyle}>
      <div className="relative z-10 mx-auto w-full max-w-3xl mx-auto  py-20 md:my-16 text-center flex flex-col gap-6 border-[1px] border-white/20 rounded-xl">
        <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            {description}
          </p>
        )}
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1))",
          opacity: 1,
        }}
      />
    </section>
  );
}
