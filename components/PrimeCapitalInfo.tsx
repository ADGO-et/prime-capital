"use client"

import React from "react"

export default function PrimeCapitalInfo() {
  return (
    <section className="w-full bg-white py-16">
      <div className="flex flex-col md:flex-row items-start justify-between w-full gap-10 md:gap-16 px-6 md:px-12">
        {/* Left: Text Content */}
        <div className="flex-1 space-y-5">
          {/* Gradient Title */}
          <h1 className="text-3xl md:text-4xl font-bold leading-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Ethiopia&apos;s First Dedicated <br />
            Investment Banking <br />
            Institution
          </h1>

          {/* Subtitle Paragraph 1 */}
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Founded in 2016 E.C. with <strong>ETB 25 million</strong> paid-up capital,
            Prime Capital S.C. stands as Ethiopia&apos;s first dedicated investment
            banking institution — built on the pillars of{" "}
            <strong>innovation, integrity, and excellence</strong> to shape the
            nation&apos;s financial future.
          </p>

          {/* Subtitle Paragraph 2 */}
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            We empower Ethiopian enterprises and investors through innovative,
            independent, and accessible investment banking solutions that foster
            inclusive, sustainable economic growth.
          </p>

         
        </div>

   
        <div className="flex-shrink-0 relative w-full md:w-[380px] lg:w-[450px] flex justify-center">
          <div className="w-full h-64 md:h-80 bg-white rounded-3xl shadow-lg border border-gray-100 transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-out overflow-hidden">
            {/* Image placeholder */}
          </div>
        </div>
      </div>
    </section>
  )
}
