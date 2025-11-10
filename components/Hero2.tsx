"use client";

import React from "react";

type Hero2Props = {
  title: React.ReactNode;
  description?: React.ReactNode;
};

export default function Hero2({ title, description }: Hero2Props) {
  return (
  <section className="relative isolate min-h-[90vh] w-full overflow-hidden flex flex-col bg-linear-to-br from-primary via-secondary to-[#2014FF]">
      {/* Main Background */}
      <div
        className="absolute -z-10 bg-[url('/herobg.png')] bg-cover bg-center mt-0 opacity-30 pointer-events-none"
        style={{
          width: "900px",
          height: "900px",
          top: "-100px",
          transform: "rotate(10deg)",
          transformOrigin: "0% 50%",
        }}
      />
      <div className="mt-10"></div>

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 py-20 text-white mt-[10vh]">
        <div className="relative w-full max-w-3xl">
          <div className="relative rounded-2xl shadow-[0_0_15px_rgba(20,28,255,0.4),inset_0_0_10px_rgba(20,28,255,0.2)] bg-secondary/0 p-8 text-center shadow-2xl backdrop-blur-[4px] before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-[secondary]/15 before:to-[secondary]/10 before:content-['']">
            <div className="relative z-10">
              <h1 className="mb-4 text-4xl font-extrabold leading-tight sm:text-5xl">
                {title}
              </h1>
              {description && (
                <p className="mx-auto max-w-xl text-sm text-white/90 sm:text-base">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom curve (seamless to white) */}
  <div className="pointer-events-none absolute inset-x-0 bottom-0 leading-0 overflow-hidden">
        <svg
          className="block w-[calc(100%+2px)] h-[90px] relative -left-px"
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,0 C240,60 480,90 720,90 C960,90 1200,60 1440,0 L1440,90 L0,90 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
