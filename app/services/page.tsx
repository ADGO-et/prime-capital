"use client";

import Hero2 from "../../components/Hero2";
import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  Globe,
  Leaf,
  TrendingUp,
  BriefcaseIcon,
  FileTextIcon,
  Lightbulb,
  Disc2,
} from "lucide-react";

const services = [
  {
    icon: <TrendingUp size={28} />,
    title: "Investment Banking",
    desc: "Comprehensive capital raising solutions including equity and debt financing, helping businesses secure the funding they need to grow and expand.",
  },
  {
    icon: <Building2 size={28} />,
    title: "Capital Markets Advisory",
    desc: "Strategic guidance on market entry, IPOs, and securities offerings, leveraging deep market insights to optimize your capital structure.",
  },
  {
    icon: <BriefcaseIcon size={28} />,
    title: "Mergers & Acquisitions",
    desc: "End-to-end M&A advisory services from target identification to deal closure, ensuring maximum value creation for all stakeholders.",
  },
  {
    icon: <FileTextIcon size={28} />,
    title: "Corporate Restructuring",
    desc: "Expert advisory on organizational restructuring, financial reorganization, and strategic repositioning to enhance business performance.",
  },
  {
    icon: <Lightbulb size={28} />,
    title: "Strategic Advisory",
    desc: "Tailored strategic consulting services to help businesses navigate complex market dynamics and achieve sustainable growth.",
  },
  {
    icon: <Disc2 size={28} />,
    title: "Valuation Services",
    desc: "Comprehensive business and asset valuation services using industry-leading methodologies and market analysis.",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Discovery & Analysis",
    desc: "We begin with a comprehensive assessment of your business, market position, and strategic objectives. Our team conducts thorough due diligence and market analysis to understand your unique needs and opportunities.",
  },
  {
    step: "2",
    title: "Strategy Development",
    desc: "Based on our analysis, we develop tailored strategic recommendations that align with your goals. We present multiple scenarios and options, helping you make informed decisions about your financial future.",
  },
  {
    step: "3",
    title: "Execution & Delivery",
    desc: "Our experienced team manages the entire execution process, ensuring seamless implementation of your chosen strategy and delivering results that exceed expectations.",
  },
];

const differentiators = [
  {
    icon: <Globe size={24} />,
    title: "Market Differentiation",
    desc: "Deep understanding of Ethiopia’s unique market dynamics combined with international best practices and innovative solutions.",
  },
  {
    icon: <Briefcase size={24} />,
    title: "Strategic Partnerships",
    desc: "Extensive network of local and international partners enabling seamless execution and superior deal outcomes.",
  },
  {
    icon: <Leaf size={24} />,
    title: "ESG Integration",
    desc: "Commitment to environmental, social, and governance principles in all advisory services and business operations.",
  },
];

export default function Services() {
  return (
    <main className="min-h-screen w-full bg-white  text-gray-900">
      <Hero2
        title="Our Services"
        description="Comprehensive Investment Banking and Advisory Solutions"
      />

      {/* What We Offer */}
      <section className="py-20 px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#0E0066]">
          What We Offer
        </h2>
        <p className="text-gray-600 text-[#0E0066] mb-12">
          Tailored financial solutions designed to drive your business forward
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {services.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-6 bg-white  rounded-2xl shadow-md hover:shadow-xl border border-gray-200  items-center "
            >
              <div className="text-white mx-auto mb-4 bg-gradient-to-br from-[#0E0066] to-[#2014FF] w-fit p-2 rounded-full items-center">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2 text-[#0E0066]">
                {item.title}
              </h3>
              <p className="text-sm text-[#504785]  leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-[#0E0066]">
          How We Work
        </h2>
        <p className="text-center mb-12 text-[#504785]">
          Our proven methodology ensures exceptional results at every stage
        </p>

        <div className="space-y-8 max-w-5xl mx-auto">
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.01 }}
              className="group bg-white  border border-gray-200  rounded-xl p-6 flex flex-col sm:flex-row gap-4 items-start drop-shadow-lg"
            >
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#2014FF] group-hover:bg-primary text-white flex items-center justify-center font-bold">
                {step.step}
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-[#0E0066]">
                  {step.title}
                </h4>
                <p className="text-sm text-[#504785] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Clients Choose */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-[#0E0066] to-[#2014FF] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Why Clients Choose Prime Capital
        </h2>
        <p className="mb-12 opacity-90">
          Our unique combination of expertise, values, and innovation sets us
          apart
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {differentiators.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border-[1px] border-white/20"
            >
              <div className="mb-4 flex justify-center bg-white/10 backdrop-blur-lg w-fit p-2 rounded-full text-white mx-auto">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm opacity-90">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto  rounded-2xl p-10 border border-[#DAD9F280] shadow drop-shadow-xl ">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#0E0066]">
            Partner with Prime Capital to Shape Ethiopia&apos;s Capital Market
            Future
          </h3>
          <p className="text-[#504785] mb-6">
            Let’s discuss how our services can help you achieve your strategic
            objectives and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-2 bg-gradient-to-r from-[#0E0066] to-[#2014FF] text-white rounded-full  hover:scale-105 transition transform duration-200 ease-in-out">
              Contact Us
            </button>
            <button className="px-6 py-2 border border-[#0E0066] text-[#0E0066] rounded-full   hover:scale-105 transition transform duration-200 ease-in-out">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
