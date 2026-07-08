"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  Briefcase,
  Leaf,
  FileTextIcon,
  Target,
} from "lucide-react";
import { useServicesPage } from "@/hooks/queries/usePagesQuery";

const serviceIcons = [
  <FileTextIcon key="file" size={28} />,
  <Target key="target" size={28} />,
];

const differentiatorIcons = [
  <Globe key="globe" size={24} />,
  <Briefcase key="briefcase" size={24} />,
  <Leaf key="leaf" size={24} />,
];

export default function Services() {
  const { data: services } = useServicesPage();

  return (
    <main className="min-h-screen w-full bg-white  text-gray-900">
      {/* What We Offer */}
      <section className="py-20 px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {services?.introHeading}
        </h2>
        <p className="text-gray-600 text-[#0E0066] mb-12">
          {services?.introText}
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {(services?.services ?? []).map((item, i) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative overflow-hidden p-6 bg-white/90 rounded-2xl shadow-md hover:shadow-xl border border-gray-200 items-center bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url(/back-grid.jpg)" }}
            >
              <div className="text-white mx-auto mb-4 bg-linear-to-br from-[#0E0066] to-[#2014FF] w-fit p-2 rounded-full items-center">
                {serviceIcons[i % serviceIcons.length]}
              </div>
              <h3 className="font-semibold text-lg mb-2 text-textPrimary">
                {item.title}
              </h3>
              <p className="text-sm text-[#504785]  leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {services?.processHeading}
        </h2>
        <p className="text-center mb-12 text-[#504785]">
          {services?.processText}
        </p>

        <div className="space-y-8 max-w-5xl mx-auto">
          {(services?.processSteps ?? []).map((step, i) => (
            <motion.div
              key={step.id}
              whileHover={{ scale: 1.01 }}
              className="group bg-white  border border-gray-200  rounded-xl p-6 flex flex-col sm:flex-row gap-4 items-start drop-shadow-lg hover:border-[#0E0066]"
            >
              <div className="shrink-0 h-10 w-10 rounded-full bg-[#2014FF] group-hover:bg-primary text-white flex items-center justify-center font-bold">
                {i + 1}
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-textPrimary">
                  {step.title}
                </h4>
                <p className="text-sm text-[#504785] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Clients Choose */}
      <section className="py-20 px-6 md:px-12 bg-linear-to-br from-[#0E0066] to-[#2014FF] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          {services?.whyChooseHeading}
        </h2>
        <p className="mb-12 opacity-90">
          {services?.whyChooseText}
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {(services?.differentiators ?? []).map((item, i) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
            >
              <div className="mb-4 flex justify-center bg-white/10 backdrop-blur-lg w-fit p-2 rounded-full text-white mx-auto">
                {differentiatorIcons[i % differentiatorIcons.length]}
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm opacity-90">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-12 text-center">
        <div
          className="relative overflow-hidden max-w-3xl mx-auto bg-white/90 rounded-2xl p-10 border border-[#DAD9F280] shadow drop-shadow-xl bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/back-grid.jpg)" }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-textPrimary">
            {services?.ctaHeading}
          </h3>
          <p className="text-[#504785] mb-6">
            {services?.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us">
              <button className="cursor-pointer px-6 py-2 bg-linear-to-r from-[#0E0066] to-[#2014FF] text-white rounded-full  hover:scale-105 transition transform duration-200 ease-in-out">
                Contact Us
              </button>
            </Link>
            <Link href="/services">
              <button className="cursor-pointer px-6 py-2 border border-[#0E0066] text-[#0E0066] rounded-full   hover:scale-105 transition transform duration-200 ease-in-out">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
