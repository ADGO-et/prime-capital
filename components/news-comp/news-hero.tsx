"use client";

import { useNewsPage } from "@/hooks/queries/usePagesQuery";

export function NewsHero() {
  const { data: newsPage } = useNewsPage();

  return (
    <section className="pt-24 pb-12 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
          {newsPage?.heroTitle}
        </h1>
        <p className="text-lg md:text-xl text-[#504785] leading-relaxed">
          {newsPage?.heroDescription}
        </p>
      </div>
    </section>
  )
}
