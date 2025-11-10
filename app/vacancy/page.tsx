"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Lightbulb, Globe, Users, BookOpen, HeartHandshake, TrendingUp } from 'lucide-react'

const reasons = [
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: 'Innovative Mission',
    body: 'Help shape Ethiopia\'s emerging capital markets and build foundational financial infrastructure.'
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Inclusive Team Culture',
    body: 'We value diverse perspectives, open communication, and collaborative problem‑solving.'
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: 'Continuous Growth',
    body: 'Access to mentorship, learning resources, and challenging projects that accelerate your career.'
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: 'Broader Impact',
    body: 'Your work contributes to sustainable economic development and empowers local businesses.'
  },
  {
    icon: <HeartHandshake className="w-5 h-5" />,
    title: 'People‑First Flexibility',
    body: 'A balanced approach to work & life with supportive policies and autonomy.'
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: 'Performance & Ownership',
    body: 'Clear goals, real responsibility, and recognition for moving the needle.'
  }
]

const VacancyLandingPage = () => {
  return (
    <div className="pb-24 bg-white">
      {/* World-Class Hero Section */}
      <section className="relative min-h-[65vh] w-full overflow-hidden bg-linear-to-br from-[#01016F] via-[#141CFF] to-[#2014FF] backdrop-blur-2xl flex items-center justify-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-300 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"
            style={{ animationDuration: '5s' }}
          />
          <div
            className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"
            style={{ animationDuration: '7s', animationDelay: '1s' }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-200 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"
            style={{ animationDuration: '6s', animationDelay: '3s' }}
          />
        </div>


        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >

            {/* Main Title with Gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-3xl lg:text-4xl font-black mb-6 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white">
                Build the Future
              </span>
              <br />
              <span className="text-white/90">
                of Finance in Ethiopia
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed mb-10"
            >
              Join Prime Capital and be part of a pioneering team shaping Ethiopia&apos;s capital markets.
              <span className="block mt-2 text-white/75">
                We&apos;re looking for talented individuals ready to make a lasting impact.
              </span>
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex justify-center items-center mb-16"
            >
              <Link
                href="/vacancy/jobs"
                className="px-4 py-2 bg-white text-[#2014FF] rounded-full font-semibold text-base hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                View Open Positions
              </Link>
            </motion.div>

          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Why Join Section */}
      <section id="why-join" className="max-w-6xl mx-auto px-4 mt-16 bg-white py-16">
        <div className="mb-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#0E0066]">Why join Prime Capital?</h3>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">Beyond a job – it&apos;s a chance to help architect a modern financial ecosystem while growing alongside a supportive, high‑caliber team.</p>
        </div>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <motion.li
              key={r.title}
              whileHover={{ y: -10, scale: 1.04 }}
              whileTap={{ scale: 0.997 }}
              transition={{ type: 'spring', stiffness: 480, damping: 20 }}
              className="group relative rounded-xl border border-blue-100 bg-white shadow-sm hover:shadow-md transition-shadow p-5"
            >
              <div className="flex items-start gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-linear-to-tr from-blue-100 to-blue-200 text-blue-700 group-hover:from-blue-200 group-hover:to-blue-300 transition-colors">
                  {r.icon}
                </span>
                <div className="flex-1">
                  <h4 className="font-semibold text-[#0E0066] mb-1 text-sm md:text-base">{r.title}</h4>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{r.body}</p>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10 pointer-events-none bg-linear-to-br from-blue-200 to-transparent rounded-full blur-xl" />
            </motion.li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default VacancyLandingPage
