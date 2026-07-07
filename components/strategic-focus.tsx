"use client";

import { motion } from "framer-motion";
import { Lightbulb, Shuffle, ShieldCheck, Award } from "lucide-react";
import { useHomePage } from "@/hooks/queries/usePagesQuery";

const icons = [
  <Lightbulb key="lightbulb" className="w-6 h-6 text-white" />,
  <Shuffle key="shuffle" className="w-6 h-6 text-white" />,
  <ShieldCheck key="shield" className="w-6 h-6 text-white" />,
  <Award key="award" className="w-6 h-6 text-white" />,
];

export default function SignatureStrengths() {
  const { data: home } = useHomePage();
  const strengths = home?.strengths ?? [];

  return (
    <section className="w-full py-16 bg-gradient-to-b from-[#F9FAFF] to-[#EEF2FF]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Our <span className="">Signature Strengths</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Four pillars that define our commitment to Ethiopia’s financial
          excellence
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {strengths.map((item, index) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.01 }}
              className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10
                         backdrop-blur-xl shadow-[0_4px_25px_rgba(20,28,255,0.15)]
                         hover:shadow-[0_8px_35px_rgba(20,28,255,0.25)]
                         p-6 text-left transition-all duration-300 hover:-translate-y-1 bg-cover bg-center bg-no-repeat "
              style={{ backgroundImage: "url(/back-grid.jpg)" }}
            >
              {/* Glow gradient ring */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/10 to-secondary/10 opacity-40 blur-2xl"></div>

              {/* Card content */}
              <div className="relative z-10">
                <div
                  className="bg-linear-to-br from-primary to-secondary w-10 h-10 rounded-full
                                flex items-center justify-center mb-4 shadow-md"
                >
                  {icons[index % icons.length]}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
