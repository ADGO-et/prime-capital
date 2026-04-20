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
    edu: "MBA, BA in Management",
    img: "/muk.jpg",
    education: [
      "MBA — Addis Ababa University",
      "BA in Management — Haramaya University",
    ],
    exposure: [
      "Over 17 years in consulting, finance, real estate, academia, and governance",
      "Chairperson of the Board and Managing Partner at Elegance Group, overseeing consulting, real estate, and trading",
      "Former Chairman at Hijra Bank (2020-2023); current Chairman at Credoks Tech Group (2023-Present)",
      "Senior roles at Deloitte as Human Capital Manager and academic at Addis Ababa University",
      "Led restructuring and advisory projects for banks, MFIs, and corporates in Africa, Middle East, Europe, and North America",
      "Expertise in corporate governance, strategic management, organizational design, and Islamic finance",
    ],
    occupation: "Chairperson and Managing Partner, Elegance Group; Chairman, Credoks Tech Group",
    bio: "Seasoned executive with 17+ years in finance and governance. Co-founder of Hijra Bank; expertise in strategic direction and financial sector growth in Ethiopia.",
  },
  {
    name: "Tewodros M. Delelegn",
    role: "V/Board Chairperson",
    edu: "MSc in Telecom Business Administration, BA in Management",
    img: "/tewodros.jpg",
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
    edu: "MBA in International Business, BA in Accounting",
    img: "/habib.jpg",
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
    edu: "MBA in International Business, BA in Economics",
    img: "/behailu2.jpg",
    education: [
      "MBA in International Business — Mekelle University",
      "BA in Economics — Debub University",
    ],
    exposure: [
      "Managing Partner & Lead Consultant at Chartered Advisory Services PLC",
      "Representative of Global DWC LLC in Ethiopia and East Africa",
      "Drove business development with Ethio Telecom, Ingenico, and UROVO",
      "Former COO at Thabet Technology PLC; managed major enterprise projects including National Bank’s EATS system at Ethio Telecom",
      "Director of Operations & Business Development at WebSprix IT Solutions PLC",
      "Served Ethiotelecom as key Account Manager; managed enterprise and government projects"
    ],
  },
  {
    name: "Kalkidan Nigusse",
    role: "Board Member",
    edu: "Master’s in Marketing Management, Master’s in Development Management, BA in Economics",
    img: "/kalidan.jpg",
    education: [
      "Master’s in Marketing Management — Addis Ababa University",
      "Master’s in Development Management — University of Torino (ITC, Italy)",
      "BA in Economics — Addis Ababa University",
    ],
    exposure: [
      "Managing Director at iConnect Digital Services",
      "Board Member at NEO Microfinance Institution (MFI) and Credoks Digital Services PLC",
      "Contributes to strategic leadership and organizational development",
      "Over 15 years in telecom and digital service sectors",
      "Senior leadership at Ethio Telecom; key role in nationwide rebranding and major initiatives",
      "Led marketing strategy, research, intelligence, and international business development",
      "Drove growth and innovation",
      "Expertise in strategic management, marketing, project leadership, and business development",
    ],
  },
  {
    name: "Banteyrga Kebede",
    role: "Board Member",
    edu: "MBA in Telecom Business Administration, BA in Management",
    img: "/banteyerga.jpg",
    education: [
      "MBA in Telecom Business Administration",
      "BA in Management",
    ],
    exposure: [
      "Managing Partner at Chartered Advisory Services PLC; Board Member at NEO Microfinance Institution (MFI), contributing to strategic planning, governance, and organizational growth",
      "Over 15 years of leadership experience across telecom, manufacturing, and service sectors",
      "Held senior positions including CEO, Senior Officer, and Managing Partner, leading initiatives in organizational restructuring, operational efficiency, and new product development",
      "Successfully driven profitability, achieved ISO certifications, and led HR transformation programs covering recruitment, training, and performance management",
      "Expertise in leadership, operations, finance, and telecom innovation",
      "Recognized for results-driven approach and commitment to excellence",
    ],
  }
];

const execMembers: MemberType[] = [
  {
    name: "Habib Mohammed",
    role: "Chief Executive Officer",
    edu: "MBA in International Business, BA in Accounting, FCCA, CISI",
    img: "/habib2.jpg",
    education: [
      "MBA in International Business — University of Greenwich (UK)",
      "BA in Accounting — Jimma University",
      "Fellow Chartered Certified Accountant (FCCA)",
      "Certified Member — Chartered Institute for Securities & Investment (CISI)",
    ],
    exposure: [
      "Over 20 years in banking, finance, and corporate management",
      "CEO and Executive Board Member, guiding strategic growth, governance, and financial management",
      "Vice President for Banking Business at Hijra Bank (2021-2025); oversaw treasury, credit risk, and foreign exchange operations",
      "Former CEO at Yekatit Paper Converting PLC (2015-2021); achieved ISO certification, IFRS adoption, and strong business growth",
      "Over a decade at NIB International Bank; advanced to Director of Domestic Banking and Director of Credit Management",
      "Advisor and trainer for World Bank Group (IFC) on IFRS adoption",
      "Current Board Member at Chartered Advisory Services PLC and Best Western Plus Addis Ababa",
    ],
  },
  {
    name: "Haileleul Kassa",
    role: "Chief Risk and Compliance Officer",
    edu: "MSc in International Business, BA in Economics",
    img: "/haile.jpg",
    education: [
      "MSc in International Business",
      "BA in Economics",
      "Certifications from CISI, CFI, and Udacity; ongoing ACCA studies",
    ],
    exposure: [
      "Over 14 years in banking, corporate strategy, and performance management",
      "Director of Corporate Strategy at Ayat Group S.C.; leads five-year strategy, performance systems, and transformation",
      "Senior Manager of Strategy Planning & Monitoring at Hijra Bank; led strategic planning and change management",
      "Senior Manager of Corporate Investment at Hijra Bank; developed corporate performance frameworks",
      "Earlier roles at Hibret Bank, Nib International Bank, and Global Bank Ethiopia in trade finance, credit, and planning",
      "Specializes in corporate strategy, investment analysis, capital market operations, and performance management",
    ],
  },
  {
    name: "Yonas Alemayehu",
    role: "Chief Technology Officer",
    edu: "MBA in Project Management, BSc in Electrical Engineering",
    img: "/yonas.jpg",
    education: [
      "MBA in Project Management — Columbia Southern University (USA)",
      "BSc in Electrical Engineering — Mekelle University",
    ],
    exposure: [
      "Over 15 years in ICT and telecom platform development across Ethiopia and East Africa",
      "Co-Founder and CEO of TelePort Technologies Plc; led design/delivery of large-scale digital/telecom systems",
      "Key projects: WeCare (digital health platform), TMS (Telebirr Management System), VMS (Voucher Management System), ePAY (EVD platform) handling multi-billion ETB transactions",
      "Expertise in Intelligent Network (IN) systems, digital service architecture, telecom billing, and enterprise SaaS",
      "Leadership roles at Ericsson and Zain Telecom",
      "Recognized for hands-on leadership in AI integration, financial systems, and real-time telecom architecture",
      "Certifications from Ericsson Academy, Alibaba Business School, and Sun Microsystems",
    ],
  },
  {
    name: "Muluken Asrat",
    role: "Chief Financial Officer",
    edu: "BA in Accounting, Certificates in IFRS and financial reporting",
    img: "/muluken.jpg",
    education: [
      "BA in Accounting — Jimma University",
      "Certificates in IFRS and financial reporting",
    ],
    exposure: [
      "Over 22 years in strategic finance, corporate planning, treasury management, ERP systems, and financial governance",
      "CFO leading financial strategy, investment evaluation, and organizational transformation",
      "Deputy CEO for Planning, Trade & Finance at Aleta Land Group (2017-2022); managed group-wide financial operations, investment planning, and corporate strategy",
      "Senior finance roles at Aleta Land Group, OLAM International, and Ethiopian Roads Authority; led financial reporting, budgeting, and ERP implementation",
      "Skilled in financial leadership, project finance, compliance, streamlining operations, and driving efficiency",
    ],
  },
  {
    name: "Getahun Worku",
    role: "Legal Advisor",
    edu: "LL.M. in Human Rights, LL.B., MBA in Governance and Development",
    img: "/getahun.jpg",
    education: [
      "LL.M. in Human Rights",
      "LL.B.",
      "MBA in Governance and Development",
      "PRINCE2 Project Management Certification",
      "Currently pursuing a Ph.D. — Addis Ababa University",
    ],
    exposure: [
      "Over 24 years in corporate law, arbitration, and legal advisory across Ethiopia's public, private, and development sectors",
      "Chief Legal Advisor and Board Member; provides strategic legal guidance, governance oversight, and regulatory compliance",
      "Senior roles including Legal Advisor and Assistant Manager at Korea International Cooperation Agency (KOICA); led contract negotiations, project management, and resource mobilization",
      "Columnist for The Reporter Newspaper; authors weekly articles on legal and judicial matters",
      "Law Instructor; mentors students and coordinates academic programs",
      "Represented institutions before Ethiopian courts and ministerial bodies",
      "Fluent in English and Amharic",
    ],
  },
];

// Removed unused social icon helper for this page (modal handles social links separately)

export default function OurTeamPage() {
  const [selected, setSelected] = useState<MemberType | null>(null);

  // function getPlatformIcon(platform: string): import("react").ReactNode {
  //   throw new Error("Function not implemented.");
  // }

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
            src="/team-photo.jpg"
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
                <p className="text-[13px] text-[#504785] mt-2">{execMembers[0].edu}</p>
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

                {/* {m.socialLinks && m.socialLinks.length > 0 && (
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
                )} */}
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
