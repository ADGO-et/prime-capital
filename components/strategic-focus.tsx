"use client"

import { Lightbulb, Shuffle, ShieldCheck, Award } from "lucide-react"

const strengths = [
  {
    icon: <Lightbulb className="w-6 h-6 text-white" />,
    title: "Integrity & Innovation",
    description:
      "Pioneering new pathways in Ethiopian finance with transparent practices and cutting-edge solutions that set industry standards.",
  },
  {
    icon: <Shuffle className="w-6 h-6 text-white" />,
    title: "M&A Advisory",
    description:
      "Buy-side, sell-side, and cross-border advisory services.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    title: "Client Trust & Transparency",
    description:
      "Building lasting partnerships through honest communication, ethical practices, and dedicated client-centric service delivery.",
  },
  {
    icon: <Award className="w-6 h-6 text-white" />,
    title: "Professional Excellence",
    description:
      "Delivering world-class financial solutions backed by qualified professionals and international best practices.",
  },
]

export default function SignatureStrengths() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-[#F9FAFF] to-[#EEF2FF]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#0B42FF]">
          Our <span className="text-[#1E3AFF]">Signature Strengths</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Four pillars that define our commitment to Ethiopia’s financial excellence
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {strengths.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-white/20 bg-white/10 
                         backdrop-blur-xl shadow-[0_4px_25px_rgba(20,28,255,0.15)] 
                         hover:shadow-[0_8px_35px_rgba(20,28,255,0.25)] 
                         p-6 text-left transition-all duration-300 hover:-translate-y-1"
            >
              {/* Glow gradient ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 opacity-40 blur-2xl"></div>

              {/* Card content */}
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-primary to-secondary w-10 h-10 rounded-full 
                                flex items-center justify-center mb-4 shadow-md">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
