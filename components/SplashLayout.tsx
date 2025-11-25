"use client";

import Image from "next/image";
import { Mail, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function SplashLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white p-6">
      {/* Animated Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/logoblack.png"
          alt="Prime Capital logo"
          width={300}
          height={180}
          priority
          className="drop-shadow-xl mb-8"
        />
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-3xl md:text-5xl font-extrabold tracking-wide flex items-center gap-2"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Sparkles className="w-8 h-8" /> COMING SOON <Sparkles className="w-8 h-8" />
      </motion.h1>

      {/* Subtitle */}
      <p className="text-center mt-4 max-w-md text-blue-100 text-lg">
        We’re coming soon. Stay tuned, the future is almost here.
      </p>

      {/* Icon Row */}
      <div className="flex gap-6 mt-8">
        <div className="flex flex-col items-center">
          <Clock className="w-10 h-10 opacity-80" />
          <span className="mt-2 text-sm opacity-90">Launching Soon</span>
        </div>
        <div className="flex flex-col items-center">
          <Mail className="w-10 h-10 opacity-80" />
          <span className="mt-2 text-sm opacity-90">Stay Updated</span>
        </div>
      </div>

      {/* Footer */}
      <p className="absolute bottom-6 text-xs text-blue-200">
        © {new Date().getFullYear()} Prime Capital. All rights reserved.
      </p>
    </div>
  );
}
