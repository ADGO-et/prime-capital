"use client";

import Hero2 from "@/components/Hero2";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import {
  Target,
  Shield,
  Award,
  Users,
  TrendingUp,
  Goal,
  Eye,
  Linkedin,
  Instagram,
  Youtube,
  Facebook,
  Send,
  Mail,
  GraduationCap,
  Sprout,
  Earth,
  Banknote,
  Sliders,
} from "lucide-react";
import { FaTiktok, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import MemberModal from "@/components/Member";
import { useState } from "react";
type SocialLink = { platform: string; url: string };
type BoardMember = {
  name: string;
  role: string;
  edu: string;
  img: string;
  socialLinks?: SocialLink[];
  qualifications?: string;
  occupation?: string;
  bio?: string;
};
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

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { margin: "-50px" },
  transition: { duration: 0.6, ease: EASE },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { margin: "-50px" },
  transition: { duration: 0.5, ease: EASE },
};

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

const boardMembers = [
  {
    name: "Mukemil Bedru",
    role: "Board Chairperson",
    edu: "MBA • BSc",
    img: "./mukemil.png",
    socialLinks: [
      { platform: "linkedin", url: "https://linkedin.com/in/mukemilbedru" },
      { platform: "telegram", url: "https://t.me/mukemilbedru" },
    ],
    qualifications: "MBA (AAU), BA in Management (Haramaya University)",
    occupation: "Managing Partner, Elegance Group",
    bio: "17+ years in consulting, finance, and governance. Former Chair, Hijra Bank. Expertise in corporate strategy and financial sector leadership.",
  },
  {
    name: "Tewdros M. Delelgn",
    role: "D/Board Chairman",
    edu: "MBA • BA",
    img: "./tewdros.png",
    socialLinks: [{ platform: "twitter", url: "https://twitter.com/tewodros" }],
    qualifications: "MBA (AAU), BA in Management (Haramaya University)",
    occupation: "Managing Partner, Elegance Group",
    bio: "17+ years in consulting, finance, and governance. Former Chair, Hijra Bank. Brings extensive expertise in corporate strategy and financial sector leadership.",
  },
  {
    name: "Habib Mohammed",
    role: "Executive Board Director",
    edu: "MSc • BSc",
    img: "./habib.png",
    socialLinks: [
      { platform: "linkedin", url: "https://linkedin.com/in/mukemilbedru" },
      { platform: "email", url: "mailto:mukemil@primecapital.com" },
    ],
  },
  {
    name: "Behailu Aregahgn",
    role: "Board Secretary",
    edu: "MBA, BA in Management",
    img: "./behailu.png",
    socialLinks: [{ platform: "twitter", url: "https://twitter.com/tewodros" }],
  },
  {
    name: "Kalkidan Niguse",
    role: "Board Director",
    edu: "MBA, BA in Management",
    img: "./kalkidan.png",
    socialLinks: [{ platform: "twitter", url: "https://twitter.com/tewodros" }],
  },
  {
    name: "Banteyrga Kebede",
    role: "Board Director",
    edu: "MBA, BA in Management",
    img: "./banteyrga.png",
    socialLinks: [{ platform: "twitter", url: "https://twitter.com/tewodros" }],
  },
  {
    name: "Leake Melaku",
    role: "Board Director",
    edu: "MBA (AAU), BA in Management (Haramaya University)",
    img: "./placeholder.png",
    socialLinks: [
      { platform: "linkedin", url: "https://linkedin.com/in/mukemilbedru" },
      { platform: "email", url: "mailto:mukemil@primecapital.com" },
    ],
  },
];

const execMembers = [
  {
    name: "Habib Mohammed",
    role: "Chief Executive Officer",
    edu: "FCCA, MBA (University of Greenwich), BA (Jimma University)",
    socialLinks: [{ platform: "twitter", url: "https://twitter.com/tewodros" }],
  },
  {
    name: "Haileleul Kassa Merha",
    role: "Chief Operating Officer",
    edu: "MSc (International Business), BA (Economics)",
    socialLinks: [
      { platform: "linkedin", url: "https://linkedin.com/in/executive2" },
      { platform: "email", url: "mailto:executive2@primecapital.com" },
    ],
  },
  {
    name: "Frezer Ayele",
    role: "Chief Compliant Officer",
    edu: "MBA (General Management), BA (Business Management)",
    socialLinks: [
      { platform: "linkedin", url: "https://linkedin.com/in/executive2" },
      { platform: "email", url: "mailto:executive2@primecapital.com" },
    ],
  },
];

const getPlatformIcon = (platform: string) => {
  switch (platform.toLowerCase()) {
    case "linkedin":
      return <Linkedin size={18} />;
    case "instagram":
      return <Instagram size={18} />;
    case "twitter":
      return <FaXTwitter size={18} />;
    case "youtube":
      return <Youtube size={18} />;
    case "telegram":
      return <Send size={18} />;
    case "facebook":
      return <Facebook size={18} />;
    case "whatsapp":
      return <FaWhatsapp size={18} />;
    case "tiktok":
      return <FaTiktok size={18} />;
    case "email":
      return <Mail size={18} />;
    default:
      return null;
  }
};

export default function About() {
  const [selected, setSelected] = useState<BoardMember | null>(null);

  return (
    <main className="min-h-screen w-full bg-white text-gray-900 overflow-x-hidden">
      <Hero2
        title="About Prime Capital S.C."
        description="Building Ethiopia's Financial Future Through Integrity, Innovation, and Leadership"
      />

      {/* Corporate Overview */}
      <section className="py-16 px-6 md:px-12 overflow-x-hidden">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] max-w-6xl mx-auto">
          <motion.div {...fadeInLeft}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0E0066]">
              Corporate Overview
            </h2>
            <div className="space-y-4 text-[#0E0066]">
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

          <motion.div
            {...fadeInRight}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative overflow-hidden p-6 md:p-8 bg-white/90 rounded-2xl shadow-md hover:shadow-xl border border-gray-200"
          >
            <h3 className="text-2xl font-bold mb-8 text-[#0E0066] leading-tight">
              Company Statistics
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="border-0 border-l-4 pl-4 border-[#2014FF] hover:border-[#0E0066]">
                <div className="text-xs uppercase tracking-wide text-[#0E0066]">
                  Paid-Up Capital
                </div>
                <div className="text-2xl font-extrabold text-[#2014FF] hover:text-[#0E0066]">
                  ETB 25M
                </div>
              </div>
              <div className="border-0 border-l-4 pl-4 border-[#2014FF] hover:border-[#0E0066]">
                <div className="text-xs uppercase tracking-wide text-[#0E0066]">
                  Subscribed Capital
                </div>
                <div className="text-2xl font-extrabold text-[#2014FF] hover:text-[#0E0066]">
                  ETB 32M
                </div>
              </div>
              <div className="border-0 border-l-4 pl-4 border-[#2014FF] hover:border-[#0E0066] sm:col-span-2">
                <div className="text-xs uppercase tracking-wide text-[#0E0066]">
                  Callable Capital
                </div>
                <div className="text-2xl font-extrabold text-[#2014FF] hover:text-[#0E0066]">
                  ETB 7M
                </div>
              </div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#0E0066]">
            Core Values — The PRIME Principles
          </h2>
        </motion.div>

        <motion.div
          {...staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto"
        >
          {coreValues.map((v, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative overflow-hidden rounded-2xl p-6 bg-white border border-gray-200 shadow-md hover:shadow-xl
                      inset-shadow-sm inset-shadow-gray-300"
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
              {/* <Users size={18} /> */}
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

      {/* Board of Directors */}
      <section className="py-20 pt-10 px-6 md:px-12 bg-white">
        <motion.div {...fadeInUp} className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-6xl font-bold text-[#0E0066]">
            Board of Directors
          </h2>
          <p className="text-sm text-[#504785] mt-4 max-w-2xl mx-auto leading-tight">
            Our distinguished board brings directors of combined expertise in
            finance, technology, and strategic leadership.
          </p>
        </motion.div>

        <motion.div
          {...staggerContainer}
          className="mt-10 grid gap-8 md:grid-cols-3 sm:grid-cols-1 max-w-5xl mx-auto"
        >
          {boardMembers.map((m, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => setSelected(m)}
              className="cursor-pointer bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl overflow-hidden flex flex-col hover:border-[#0E0066]"
            >
              {/* Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-full object-fill transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-3 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-[#0E0066] text-lg">
                    {m.name}
                  </h3>
                  <p className="text-sm text-[#2014FF] font-semibold mt-1">
                    {m.role}
                  </p>
                  <p className="text-[13px] text-[#504785] mt-2">{m.edu}</p>
                </div>

                <div className="border-t border-gray-200 mt-2 mb-1"></div>

                {m.socialLinks && m.socialLinks.length > 0 && (
                  <div className="flex gap-3 mt-2">
                    {m.socialLinks.map((link) => (
                      <button
                        key={link.platform}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(link.url, "_blank", "noopener");
                        }}
                        className="p-2 bg-[#EEF2FF] text-[#0E0066] rounded-full hover:bg-[#0E0066] hover:text-white transition"
                      >
                        {getPlatformIcon(link.platform)}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Executive Management */}
      <section className="py-20 px-6 md:px-12 bg-[#F9FAFB]">
        <motion.div {...fadeInUp} className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0E0066]">
            Executive Management
          </h2>
          <p className="text-sm text-[#504785] mt-2 max-w-2xl mx-auto">
            Experienced leaders driving operational excellence and strategic
            innovation.
          </p>
        </motion.div>

        <motion.div
          {...scaleIn}
          className="max-w-5xl mx-auto mt-10 rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src="/grouppic.jpg"
            alt="Executive Team"
            className="w-full object-cover"
          />
        </motion.div>

        <motion.div
          {...staggerContainer}
          className="mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto"
        >
          {execMembers.map((m, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl overflow-hidden hover:border-[#0E0066]"
            >
              <div className="p-5 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-[#0E0066] text-lg">
                    {m.name}
                  </h3>
                  <p className="text-sm text-[#2014FF] font-semibold mt-1">
                    {m.role}
                  </p>
                  <p className="text-[13px] text-[#504785] mt-2 italic">
                    {m.edu}
                  </p>
                </div>

                <div className="border-t border-gray-200 mt-4 mb-3"></div>

                {/* Social Links (conditionally rendered) */}
                {m.socialLinks && m.socialLinks.length > 0 && (
                  <div className="flex gap-3 mt-2">
                    {m.socialLinks.map(
                      (link: { platform: string; url: string }) => {
                        const icon = getPlatformIcon(link.platform);
                        if (!icon) return null;
                        return (
                          <button
                            key={link.platform}
                            onClick={() => window.open(link.url, "_blank")}
                            className="p-2 bg-[#EEF2FF] text-[#0E0066] rounded-full hover:bg-[#0E0066] hover:text-white transition"
                          >
                            {icon}
                          </button>
                        );
                      }
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-4 pb-16 px-6 md:px-12 text-center">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0E0066] my-4 mb-12">
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
      <MemberModal
        open={!!selected}
        member={selected}
        onClose={() => setSelected(null)}
      />
    </main>
  );
}
