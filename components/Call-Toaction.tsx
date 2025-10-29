"use client"

import { ArrowRight, Mail } from "lucide-react"
import { motion } from "framer-motion"



export default function CallToAction() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] overflow-hidden bg-gradient-to-b from-primary to-secondary text-white px-6">
      {/* Floating stars / dots */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />

      {/* Centered content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-5xl font-bold leading-tight"
        >
          Partner with Prime Capital to <br />
          Shape Ethiopia&apos;s Financial Future
        </motion.h1>

        {/* Buttons container */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 relative z-10">
          <button className="group relative px-6 py-3 rounded-xl font-medium bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all z-10">
            <span className="flex items-center gap-2">
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button className="group relative px-6 py-3 rounded-xl font-medium bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all z-10">
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Contact Us
            </span>
          </button>
        </div>
      </div>

      {/* Glowing circle under everything */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15, scale: [0.9, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute bottom-[-80px] w-96 h-48 rounded-full border border-white/20 flex items-center justify-center pointer-events-none"
      >
        <div className="w-72 h-36 rounded-full border border-white/10 flex items-center justify-center">
          <div className="w-56 h-24 rounded-full bg-white/10" />
        </div>
      </motion.div>

      {/* Remaining subtle background circles */}
      <div className="absolute w-[480px] h-[480px] rounded-full border border-[#6f7aff]/40 animate-[pulse_6s_ease-in-out_infinite] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute w-[360px] h-[360px] rounded-full border border-[#7b86ff]/40 animate-[pulse_6s_ease-in-out_infinite] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute w-[160px] h-[160px] rounded-full shadow-[0_0_80px_20px_rgba(30,60,255,0.3)] animate-[pulse_4s_ease-in-out_infinite] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    </section>
  )
}
