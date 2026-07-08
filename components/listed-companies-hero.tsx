"use client";

import { useListedCompaniesPage } from "@/hooks/queries/usePagesQuery";

export default function ListedCompaniesHero() {
  const { data: listedCompaniesPage } = useListedCompaniesPage();

  return (
    <section className="relative isolate w-full overflow-hidden bg-linear-to-br from-primary/80 via-secondary/80 to-[#2014FF] text-white">
      {/* Background texture */}
      <div
        className="absolute -z-10 bg-[url('/herobg.png')] bg-cover bg-center opacity-20 pointer-events-none"
        style={{ width: "900px", height: "900px", top: "-120px", right: "-120px", transform: "rotate(12deg)" }}
      />

      <div className="mx-auto max-w-6xl px-4 md:px-8 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">{listedCompaniesPage?.heroTitle}</h1>
          <p className="mt-4 md:mt-6 text-white/90 text-base md:text-lg leading-relaxed">
            {listedCompaniesPage?.heroDescription}
          </p>
        </div>
      </div>

      {/* Bottom curve to white */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 leading-0 overflow-hidden">
        <svg className="block w-[calc(100%+2px)] h-[90px] relative -left-px" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0 C240,60 480,90 720,90 C960,90 1200,60 1440,0 L1440,90 L0,90 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
