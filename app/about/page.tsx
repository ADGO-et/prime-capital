"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
import { useAboutPage } from "@/hooks/queries/usePagesQuery";
import { strapiMediaUrl } from "@/lib/strapi";

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

const coreValueIcons = [
  <Users key="users" size={22} />,
  <Shield key="shield" size={22} />,
  <Award key="award" size={22} />,
  <TrendingUp key="trending" size={22} />,
  <Target key="target" size={22} />,
];

const strategicContextIcons = [
  <Sliders key="sliders" size={24} />,
  <Banknote key="banknote" size={24} />,
  <Earth key="earth" size={24} />,
];

const csrIcons = [
  <GraduationCap key="grad" size={20} />,
  <Sprout key="sprout" size={20} className="text-green-600" />,
];

export default function About() {
  const { data: about } = useAboutPage();

  const overviewParagraphs = (about?.overview ?? "").split("\n\n").filter(Boolean);

  return (
    <main className="min-h-screen w-full bg-white text-gray-900 overflow-x-hidden">
      {/* Corporate Overview */}
      <section className="pt-20 pb-0 px-6 md:px-12 overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInLeft}>
            <h2 className="text-4xl md:text-5xl text-center font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Corporate Overview
            </h2>
            <div className="space-y-4 text-[#0E0066] text-base md:text-lg leading-relaxed">
              {overviewParagraphs.map((p, i) => (
                <p key={i} className="text-[#0E0066]">{p}</p>
              ))}
            </div>
          </motion.div>
        </div>
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
              <h3 className="text-2xl font-bold text-[#0E0066]">{about?.visionTitle}</h3>
            </div>
            <p className="text-sm text-[#504785] leading-loose">
              {about?.vision}
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
              <h3 className="text-2xl font-bold text-[#0E0066]">{about?.missionTitle}</h3>
            </div>
            <p className="text-sm text-[#504785] leading-loose">
              {about?.mission}
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
          {(about?.coreValues ?? []).slice(0, 3).map((v, i) => (
            <motion.div
              key={v.id}
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative overflow-hidden rounded-2xl p-6 bg-white border border-gray-200 shadow-md hover:shadow-xl inset-shadow-sm inset-shadow-gray-300"
            >
              <div className="mb-3 inline-flex items-center justify-center bg-[#B9B7F1] text-[#2014FF] w-10 h-10 rounded-full">
                {coreValueIcons[i % coreValueIcons.length]}
              </div>
              <h3 className="font-semibold text-[#0E0066]">{v.title}</h3>
              <p className="text-sm text-[#4A5565] mt-1">{v.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          {...staggerContainer}
          className="grid gap-6 lg:grid-cols-2 max-w-5xl mx-auto mt-6"
        >
          {(about?.coreValues ?? []).slice(3, 5).map((v, i) => (
            <motion.div
              key={v.id}
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative overflow-hidden rounded-2xl p-6 bg-white border border-gray-200 shadow-md hover:shadow-xl inset-shadow-sm inset-shadow-gray-300"
            >
              <div className="mb-3 inline-flex items-center justify-center bg-[#B9B7F1] text-[#2014FF] w-10 h-10 rounded-full">
                {coreValueIcons[(i + 3) % coreValueIcons.length]}
              </div>
              <h3 className="font-semibold text-[#0E0066]">{v.title}</h3>
              <p className="text-sm text-[#4A5565] mt-1">{v.description}</p>
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
          {(about?.strategicContext ?? []).map((item, i) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 border border-white/20 flex flex-col items-center text-center"
            >
              <div className="mb-3 inline-flex items-center justify-center h-16">
                {strategicContextIcons[i % strategicContextIcons.length]}
              </div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm opacity-90 mt-1">{item.description}</p>
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
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto"
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
              Internal Committees
            </h3>
            <p className="text-sm text-[#504785]">
              Risk & Compliance, Nomination & Remuneration and Audit
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

        {about?.orgChartImage && (
          <div className="mt-1 flex justify-center">
            <Image
              src={strapiMediaUrl(about.orgChartImage.url)}
              alt="Organizational structure chart"
              width={1200}
              height={900}
              className="max-h-[70rem] w-auto h-auto object-contain my-10"
            />
          </div>
        )}
      </section>

      <section className="pt-0 pb-16 px-6 md:px-12 text-center" style={{marginTop: '-1.5rem'}}>
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0E0066] my-0 mb-2">
            Corporate Social Responsibility
          </h2>
        </motion.div>

        <motion.div
          {...staggerContainer}
          className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto text-start"
        >
          {(about?.csrItems ?? []).map((item, i) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-2xl p-6 bg-white border border-gray-200 shadow hover:border-[#0E0066]"
            >
              <div className="flex flex-col items-start gap-3 mb-2 ">
                <div className="">
                  {csrIcons[i % csrIcons.length]}
                </div>
                <h3 className="text-2xl font-bold text-[#0E0066]">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-[#504785] leading-loose">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
