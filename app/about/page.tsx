"use client";

import { motion } from "framer-motion";
import {
  Target,
  Shield,
  Award,
  Users,
  TrendingUp,
  Goal,
  Eye,
  GraduationCap,
  Sprout,
  Earth,
  Banknote,
  Sliders,
  Crown,
} from "lucide-react";
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { margin: "-50px" },
  transition: { duration: 0.6, ease: EASE },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: {},
  transition: { staggerChildren: 0.2 },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { margin: "-50px" },
  transition: { duration: 0.6, ease: EASE },
};

// const fadeInRight = {
//   initial: { opacity: 0, x: 60 },
//   whileInView: { opacity: 1, x: 0 },
//   viewport: { margin: "-50px" },
//   transition: { duration: 0.6, ease: EASE },
// };

const coreValues = [
  {
    icon: <Users size={22} />,
    title: "Partnership & Professionalism",
    desc: "Collaborative excellence in every engagement",
  },
  {
    icon: <Shield size={22} />,
    title: "Responsibility & Reliability",
    desc: "Trusted stewardship of client interests",
  },
  {
    icon: <Award size={22} />,
    title: "Integrity & Innovation",
    desc: "Ethical leadership with creative solutions",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Market Leadership & Mutual Growth",
    desc: "Pioneering sustainable progress together",
  },
  {
    icon: <Target size={22} />,
    title: "Excellence & Empowerment",
    desc: "Delivering exceptional value and opportunity",
  },
];

const strategicContext = [
  {
    title: "HGER 2.0 Reform",
    desc: "Ethiopia's Homegrown Economic Reform Agenda creates generational opportunity for investment banking",
    icon: <Sliders size={24} />,
  },
  {
    title: "$4.9B SME Gap",
    desc: "Prime Capital bridges Ethiopia's significant SME financing gap through innovative solutions",
    icon: <Banknote size={24} />,
  },
  {
    title: "Market Leadership",
    desc: "Supporting privatization, infrastructure financing, and non-bank funding channels",
    icon: <Earth size={24} />,
  },
];

export default function About() {
  return (
    <main className="min-h-screen w-full bg-white text-gray-900 overflow-x-hidden">
      {/* Corporate Overview */}
      <section className="pt-20 pb-12 px-6 md:px-12 overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInLeft}>
            <h2 className="text-4xl md:text-5xl text-center font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Corporate Overview
            </h2>
            <div className="space-y-4 text-[#0E0066] text-base md:text-lg leading-relaxed">
              <p className="text-[#0E0066]">
                Prime Capital S.C. is a pioneering investment banking firm
                established to drive Ethiopia&apos;s capital market development.
                Founded with a clear vision to transform the financial
                landscape, we bring together deep market expertise and
                innovative solutions.
              </p>
              <p className="text-[#0E0066]">
                Our foundation is built on regulatory excellence and a
                commitment to the highest standards of corporate governance. We
                operate with full compliance with Ethiopian securities
                regulations while maintaining international best practices.
              </p>
              <p className="text-[#0E0066]">
                With a team of seasoned professionals and strategic
                partnerships, we&apos;re positioned to deliver comprehensive
                investment banking and advisory services that meet the evolving
                needs of our clients.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Statistics - Side by side, no cards */}
      <section className="py-12 px-6 md:px-12">
        <motion.div {...fadeInUp} className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Paid-up Capital */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center border-b-4 border-[#0E0066] pb-4"
            >
              <h3 className="text-xs md:text-sm uppercase tracking-wider font-semibold text-[#0E0066]/60 mb-3">
                Paid-up Capital
              </h3>
              <p className="text-3xl md:text-4xl font-bold text-[#0E0066]">
                ETB 25M
              </p>
            </motion.div>

            {/* Subscribed Capital */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center border-b-4 border-[#2014FF] pb-4"
            >
              <h3 className="text-xs md:text-sm uppercase tracking-wider font-semibold text-[#2014FF]/60 mb-3">
                Subscribed Capital
              </h3>
              <p className="text-3xl md:text-4xl font-bold text-[#2014FF]">
                ETB 32M
              </p>
            </motion.div>

            {/* Callable Capital */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center border-b-4 border-[#504785] pb-4"
            >
              <h3 className="text-xs md:text-sm uppercase tracking-wider font-semibold text-[#504785]/60 mb-3">
                Callable Capital
              </h3>
              <p className="text-3xl md:text-4xl font-bold text-[#504785]">
                ETB 7M
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="py-8 px-6 md:px-12">
        <motion.div
          {...staggerContainer}
          className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-2xl p-6 bg-white border border-gray-200 shadow hover:border-[#0E0066]"
          >
            <div className="flex items-center gap-3 mb-2 ml-4">
              <div className="">
                <Eye size={20} />
              </div>
              <h3 className="text-2xl font-bold text-[#0E0066]">Vision 2030</h3>
            </div>
            <p className="text-sm text-[#504785] leading-loose">
              To be the leading and most trusted investment banking partner in
              Ethiopia — driving the growth of a vibrant capital market through
              innovation, integrity, and world-class expertise.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-2xl p-6 bg-white border border-gray-200 shadow hover:border-[#0E0066]"
          >
            <div className="flex items-center gap-3 mb-2 ml-4">
              <div className="">
                <Goal size={20} />
              </div>
              <h3 className="text-2xl font-bold text-[#0E0066]">Mission</h3>
            </div>
            <p className="text-sm text-[#504785] leading-loose">
              To empower Ethiopian enterprises and investors through innovative,
              independent, and accessible investment banking solutions that
              unlock capital market opportunities.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-6 md:px-12">
        <motion.div {...fadeInUp}>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Core Values — The PRIME Principles
          </h2>
        </motion.div>

        <motion.div
          {...staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto"
        >
          {coreValues.slice(0, 3).map((v, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative overflow-hidden rounded-2xl p-6 bg-white border border-gray-200 shadow-md hover:shadow-xl inset-shadow-sm inset-shadow-gray-300"
            >
              <div className="mb-3 inline-flex items-center justify-center bg-[#B9B7F1] text-[#2014FF] w-10 h-10 rounded-full">
                {v.icon}
              </div>
              <h3 className="font-semibold text-[#0E0066]">{v.title}</h3>
              <p className="text-sm text-[#4A5565] mt-1">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          {...staggerContainer}
          className="grid gap-6 lg:grid-cols-2 max-w-5xl mx-auto mt-6"
        >
          {coreValues.slice(3, 5).map((v, i) => (
            <motion.div
              key={i + 3}
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative overflow-hidden rounded-2xl p-6 bg-white border border-gray-200 shadow-md hover:shadow-xl inset-shadow-sm inset-shadow-gray-300"
            >
              <div className="mb-3 inline-flex items-center justify-center bg-[#B9B7F1] text-[#2014FF] w-10 h-10 rounded-full">
                {v.icon}
              </div>
              <h3 className="font-semibold text-[#0E0066]">{v.title}</h3>
              <p className="text-sm text-[#4A5565] mt-1">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Strategic Context */}
      <section className="py-20 px-6 md:px-12 bg-linear-to-b from-[#0E0066] to-[#2014FF] text-white">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Strategic Context
          </h2>
        </motion.div>

        <motion.div
          {...staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto"
        >
          {strategicContext.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 border border-white/20 flex flex-col items-center text-center"
            >
              <div className="mb-3 inline-flex items-center justify-center h-16">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm opacity-90 mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Governance & Organizational Structure */}
      <section className="py-16 px-6 md:px-12">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#0E0066]">
            Governance & Organizational Structure
          </h2>
        </motion.div>

        <motion.div
          {...staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl space-y-2 hover:border-[#0E0066]"
          >
            <div className="mb-2 inline-flex items-center justify-center bg-[#2014FF]/10 text-[#2014FF] w-10 h-10 rounded-full">
              <Crown size={18} />
            </div>
            <h3 className="font-semibold text-[#0E0066] ">
              Board of Directors
            </h3>
            <p className="text-sm text-[#504785]">
              Provides oversight and strategic direction
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl space-y-2 hover:border-[#0E0066]"
          >
            <div className="mb-2 inline-flex items-center justify-center bg-[#2014FF]/10 text-[#2014FF] w-10 h-10 rounded-full">
              <Users size={18} />
            </div>
            <h3 className="font-semibold text-[#0E0066]">
              Executive Management
            </h3>
            <p className="text-sm text-[#504785]">
              Handles daily leadership and operations
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:border-[#0E0066]"
          >
            <div className="mb-2 inline-flex items-center justify-center bg-[#2014FF]/10 text-[#2014FF] w-10 h-10 rounded-full">
              <TrendingUp size={18} />
            </div>
            <h3 className="font-semibold text-[#0E0066]">
              Control & Support Units
            </h3>
            <p className="text-sm text-[#504785]">
              Manages compliance, risk, finance, and IT
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          {...fadeInUp}
          className="max-w-6xl mx-auto mt-6 drop-shadow-2xl drop-shadow-gray-400"
        >
          <div className="rounded-2xl bg-[#B9B7F1]/20 border-gray-200 p-4 sm:p-6 text-center">
            <div className="text-sm text-[#0E0066] font-medium">
              Internal Committees:{" "}
              <span className="text-[#504785]">
                Investment • Risk • Audit • Compliance
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-4 pb-16 px-6 md:px-12 text-center">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0E0066] my-4 mb-12">
            Corporate Social Responsibility
          </h2>
        </motion.div>

        <motion.div
          {...staggerContainer}
          className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto text-start"
        >
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-2xl p-6 bg-white border border-gray-200 shadow hover:border-[#0E0066]"
          >
            <div className="flex flex-col items-start gap-3 mb-2 ">
              <div className="">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-2xl font-bold text-[#0E0066]">
                Education & Empowerment
              </h3>
            </div>
            <p className="text-sm text-[#504785] leading-loose">
              Supporting education, entrepreneurship training, and financial
              literacy programs that empower youth and SMEs across Ethiopia.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-2xl p-6 bg-white border border-gray-200 shadow hover:border-[#0E0066]"
          >
            <div className="flex flex-col items-start gap-3 mb-2 ">
              <div className=" text-green-600">
                <Sprout size={20} />
              </div>
              <h3 className="text-2xl font-bold text-[#0E0066]">
                Green Growth & Sustainability
              </h3>
            </div>
            <p className="text-sm text-[#504785] leading-loose">
              Contributing to Ethiopia&apos;s green growth strategy by promoting
              ESG-aligned investments and community engagement initiatives.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
