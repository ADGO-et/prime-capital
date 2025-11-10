"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import MemberModal, { Member as MemberType } from "@/components/Member";
import { useState } from "react";
// import { FaTiktok, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

// type SocialLink = { platform: string; url: string };

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

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { margin: "-50px" },
  transition: { duration: 0.5, ease: EASE },
};

const boardMembers: MemberType[] = [
  {
    name: "Mukemil Bedru",
    role: "Board Chairperson",
    edu: "MBA • BSc",
    img: "/mukemil.png",
    education: [
      "MBA — Addis Ababa University",
      "BA in Management — Haramaya University",
    ],
    exposure: [
      "17+ years of cross-continental leadership in consulting, finance, and governance",
      "Managing Partner of Elegance Group; former Chair at Hijra Bank and Credoks Tech Group",
      "Senior leadership background at Deloitte and academic role at Addis Ababa University",
      "Led major restructuring projects for financial institutions across Africa, the Middle East, Europe, and North America",
    ],
    qualifications: "MBA (AAU), BA in Management (Haramaya University)",
    occupation: "Managing Partner, Elegance Group",
    bio: "17+ years in consulting, finance, and governance. Former Chair, Hijra Bank. Expertise in corporate strategy and financial sector leadership.",
  },
  {
    name: "Tewodros M. Delelegn",
    role: "V/Board Chairperson",
    edu: "MSc • BA",
    img: "/tewdros.png",
    education: [
      "MSc in Telecom Business Administration — Addis Ababa University",
      "BA in Management — Addis Ababa University"
    ],
    exposure: [
      "Managing Director at Credoks Digital Services",
      "Board Chairman at NEO Microfinance (MFI)",
      "8 years at Ethio Telecom in senior product development roles",
      "20 years in telecom & fintech leadership"
    ],
    qualifications: "Leadership, innovation, and financial technology expertise",
    occupation: "Managing Director, Credoks Digital Services; Board Chairman, NEO Microfinance (MFI)",
    bio: "Telecom and fintech executive with strong governance and product innovation background."
  },
  {
    name: "Habib Mohammed",
    role: "Board Member",
    edu: "MSc • BSc",
    img: "/habib.png",
    education: [
      "MBA in International Business — University of Greenwich (UK)",
      "BA in Accounting — Jimma University",
      "Fellow Chartered Certified Accountant (FCCA)",
      "Certified Member — Chartered Institute for Securities & Investment (CISI)",
    ],
    exposure: [
      "20+ years of leadership in banking and Corporate management",
      "Vice President for Banking Business at Hijra Bank; former CEO at Yekatit Paper Converting PLC",
      "Over a decade at NIB International Bank, rising to Director levels",
      "Advisor and trainer for World Bank Group (IFC) and National Bank of Ethiopia on IFRS and capital markets",
    ],
  },
  {
    name: "Behailu Aregahgn",
    role: "Board Member",
    edu: "MBA, BA in Management",
    img: "/behailu.jpg",
    education: [
      "MBA in International Business — Mekelle University",
      "BA in Economics — Debub University",
    ],
    exposure: [
      "Managing Partner & Lead Consultant at Chartered Advisory Services PLC",
      "Representative of Global DWC LLC in Ethiopia and East Africa",
      "Drove business development with Ethio Telecom, Ingenico, and UROVO",
      "Former COO at Thabet Technology PLC; managed major enterprise projects including National Bank’s EATS system at Ethio Telecom",
    ],
  },
  {
    name: "Kalkidan Niguse",
    role: "Board Member",
    edu: "MBA, BA in Management",
    img: "/kalkidan.png",
    education: [
      "Master’s in Marketing Management — Addis Ababa University",
      "Master’s in Development Management — University of Torino (Italy)",
      "BA in Economics — Addis Ababa University",
    ],
    exposure: [
      "Managing Director at iConnect Digital Services",
      "Board Member at NEO MFI and Credoks Digital Services",
      "Senior leadership at Ethio Telecom; led nationwide rebranding",
      "Led marketing strategy and international business development",
    ],
  },
  {
    name: "Banteyrga Kebede",
    role: "Board Member",
    edu: "MBA, BA in Management",
    img: "/banteyrga.png",
    education: [
      "MBA in Telecom Business Administration",
      "BA in Management",
    ],
    exposure: [
      "Managing Partner at Chartered Advisory Services PLC; Board Member at NEO MFI",
      "15+ years leading in telecom, manufacturing, and services",
      "CEO and Managing Partner roles driving restructuring and operational efficiency",
      "Proven record in achieving ISO certifications and profitability growth",
    ],
  }
];

const execMembers: MemberType[] = [
  {
    name: "Habib Mohammed",
    role: "Chief Executive Officer",
    edu: "MSc • BSc",
    img: "/habib.png",
    education: [
      "MBA in International Business — University of Greenwich (UK)",
      "BA in Accounting — Jimma University",
      "Fellow Chartered Certified Accountant (FCCA)",
      "Certified Member — Chartered Institute for Securities & Investment (CISI)",
    ],
    exposure: [
      "20+ years of leadership in banking and industry",
      "Vice President for Banking Business at Hijra Bank; former CEO at Yekatit Paper Converting PLC",
      "Over a decade at NIB International Bank, rising to Director levels",
      "Advisor and trainer for World Bank Group (IFC) and National Bank of Ethiopia on IFRS and capital markets",
    ],
  },
  {
    name: "Haileleul Kassa",
    role: "Chief Risk and Compliance Officer",
    edu: "",
    img: "/haileleul.jpg",
    education: [
      "MSc in International Business",
      "BA in Economics",
      "Certifications from CISI and CFI; ongoing ACCA studies",
    ],
    exposure: [
      "Director of Corporate Strategy at Ayat Group S.C. leading five-year strategy and transformation",
      "Senior roles at Hijra Bank leading strategic planning, change management, and corporate investment frameworks",
    ],
  },
  {
    name: "Yonas Alemayehu",
    role: "Chief Technology Officer",
    edu: "",
    img: "/yonas.jpg",
    education: [
      "MBA in Project Management — Columbia Southern University (USA)",
      "BSc in Electrical Engineering — Mekelle University",
    ],
    exposure: [
      "Co-Founder & CEO of TelePort Technologies Plc; designed large-scale digital systems handling multi-billion ETB transactions (incl. Telebirr)",
      "Previous leadership roles at Ericsson and Zain Telecom; expertise in telecom architecture and AI integration",
    ],
  },
  {
    name: "Muluken Asrat",
    role: "Chief Financial Officer",
    edu: "",
    img: "/muluken.jpg",
    education: [
      "BA in Accounting — Jimma University",
      "Certificates in IFRS and financial reporting",
    ],
    exposure: [
      "Deputy CEO for Planning, Trade & Finance at Aleta Land Group, managing group-wide financial operations and corporate strategy",
      "Senior finance roles at OLAM International and Ethiopian Roads Authority (financial reporting, budgeting, ERP implementation)",
    ],
  },
  {
    name: "Getahun Worku",
    role: "Legal Advisor",
    edu: "",
    img: "/getahun.jpg",
    education: [
      "LL.M. in Human Rights",
      "LL.B.",
      "MBA in Governance and Development",
      "Currently pursuing a Ph.D. — Addis Ababa University",
    ],
    exposure: [
      "Legal Advisor and Assistant Manager at Korea International Cooperation Agency (KOICA); led contract negotiations and resource mobilization",
      "Public intellectual authoring weekly legal columns for The Reporter Newspaper; Law Instructor",
    ],
  },
];

// Removed unused social icon helper for this page (modal handles social links separately)

export default function OurTeamPage() {
  const [selected, setSelected] = useState<MemberType | null>(null);

  function getPlatformIcon(platform: string): import("react").ReactNode {
    throw new Error("Function not implemented.");
  }

  return (
    <main className="min-h-screen w-full bg-white text-gray-900 overflow-x-hidden">

      {/* Board of Directors */}
      <section className="py-20 pt-20 px-6 md:px-12 bg-white">
        <motion.div {...fadeInUp} className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            Board of Directors
          </h2>
          <p className="text-md text-[#504785] mt-4 max-w-2xl mx-auto leading-tight">
            Our distinguished board brings directors of combined expertise in
            finance, technology, and strategic leadership.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-col gap-12 max-w-7xl mx-auto">
          {/* Top Level - Chairperson */}
          <div className="flex justify-center">
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => setSelected(boardMembers[0])}
              className="cursor-pointer bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl overflow-hidden flex flex-col hover:border-[#0E0066] w-full max-w-120"
            >
              {/* Image */}
              <div className="relative w-full h-70 overflow-hidden">
                <Image
                  src={boardMembers[0].img || ""}
                  alt={boardMembers[0].name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-3 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-[#0E0066] text-lg">
                    {boardMembers[0].name}
                  </h3>
                  <p className="text-sm text-[#2014FF] font-semibold mt-1">
                    {boardMembers[0].role}
                  </p>
                  <p className="text-[13px] text-[#504785] mt-2">{boardMembers[0].edu}</p>
                </div>
                <div className="text-right mt-2">
                  <span className="text-xs text-[#504785] italic">Click for more detail</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Middle Level - Deputy Chairman */}
          <div className="flex justify-center">
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => setSelected(boardMembers[1])}
              className="cursor-pointer bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl overflow-hidden flex flex-col hover:border-[#0E0066] w-full max-w-120"
            >
              {/* Image */}
              <div className="relative w-full h-70 overflow-hidden">
                <Image
                  src={boardMembers[1].img || ""}
                  alt={boardMembers[1].name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-3 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-[#0E0066] text-lg">
                    {boardMembers[1].name}
                  </h3>
                  <p className="text-sm text-[#2014FF] font-semibold mt-1">
                    {boardMembers[1].role}
                  </p>
                  <p className="text-[13px] text-[#504785] mt-2">{boardMembers[1].edu}</p>
                </div>
                <div className="text-right mt-2">
                  <span className="text-xs text-[#504785] italic">Click for more detail</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Level - Other Directors */}
          <motion.div
            {...staggerContainer}
            className="grid gap-8 md:grid-cols-4 sm:grid-cols-1"
          >
            {boardMembers.slice(2).map((m, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => setSelected(m)}
                className="cursor-pointer bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl overflow-hidden flex flex-col hover:border-[#0E0066] w-full max-w-120"
              >
                {/* Image */}
                <div className="relative w-full h-70 overflow-hidden">
                  <Image
                    src={m.img || ""}
                    alt={m.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
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
                  <div className="text-right mt-2">
                    <span className="text-xs text-[#504785] italic">Click for more detail</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Executive Management */}
      <section className="py-20 px-6 md:px-12 bg-[#F9FAFB]">
        <motion.div {...fadeInUp} className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            Founding Members
          </h2>
          <p className="text-md text-[#504785] mt-2 max-w-2xl mx-auto">
            Experienced leaders driving operational excellence and strategic
            innovation.
          </p>
        </motion.div>

        <motion.div
          {...scaleIn}
          className="max-w-5xl mx-auto mt-10 rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/grouppic.jpg"
            alt="Executive Team"
            width={1600}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>

        <div className="mt-40 text-center max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">Executive Management</h2>
          <p className="text-md text-[#504785] mt-2 max-w-2xl mx-auto leading-tight">
            Experienced leaders driving operational excellence and strategic innovation.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <motion.div
            key={execMembers[0].name}
            variants={fadeInUp}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => setSelected(execMembers[0])}
            className="cursor-pointer bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl overflow-hidden flex flex-col hover:border-[#0E0066] w-full max-w-120"
          >
            {/* Image */}
            <div className="relative w-full h-70 overflow-hidden">
              <Image
                src={execMembers[0].img || ""}
                alt={execMembers[0].name}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="p-3 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-[#0E0066] text-lg">
                  {execMembers[0].name}
                </h3>
                <p className="text-sm text-[#2014FF] font-semibold mt-1">
                  {execMembers[0].role}
                </p>
                {/* <p className="text-[13px] text-[#504785] mt-2">{execMembers[0].edu}</p> */}
              </div>
              <div className="text-right mt-2">
                <span className="text-xs text-[#504785] italic">Click for more detail</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          {...staggerContainer}
          className="mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-4 max-w-7xl mx-auto"
        >
          {execMembers.slice(1).map((m, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => setSelected(m)}
              className="cursor-pointer bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl overflow-hidden flex flex-col hover:border-[#0E0066] w-full max-w-120"
            >
              {/* Image */}
              <div className="relative w-full h-70 overflow-hidden">
                <Image
                  src={m.img || ""}
                  alt={m.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
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

                <div className="text-right mt-2">
                  <span className="text-xs text-[#504785] italic">Click for more detail</span>
                </div>

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

      <MemberModal
        open={!!selected}
        member={selected}
        onClose={() => setSelected(null)}
      />
    </main>
  );
}
