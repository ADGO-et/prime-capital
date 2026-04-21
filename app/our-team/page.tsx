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
    summary:"An MBA graduate from Addis Ababa University and holder of a BA in Management from Haramaya University, he is a seasoned executive with over 17 years of experience spanning finance, consulting, real estate, academia, and governance. He serves as Chairperson and Managing Partner at Elegance Group and Chairman of Credoks Tech Group, and is a co-founder and former Chairman of Hijra Bank. His background includes senior roles at Deloitte and academic work at Addis Ababa University, with extensive experience leading advisory and restructuring projects across multiple regions. He specializes in strategic leadership, corporate governance, organizational design, and Islamic finance."
  },
  {
    name: "Tewodros M. Delelegn",
    role: "V/Board Chairperson",
    edu: "MSc in Telecom Business Administration, BA in Management",
    img: "/tewodros.jpg",
    summary:"An MSc graduate in Telecom Business Administration and BA holder in Management from Addis Ababa University, he is a telecom and fintech executive with over 20 years of leadership experience. He currently serves as Managing Director at Credoks Digital Services and Board Chairman of NEO Microfinance. His background includes eight years at Ethio Telecom in senior product development roles, with strong expertise in leadership, innovation, governance, and financial technology."
  },
  {
    name: "Habib Mohammed",
    role: "Board Member",
    edu: "MBA in International Business, BA in Accounting",
    img: "/habib.jpg",
    summary:"An MBA graduate in International Business from University of Greenwich and BA holder in Accounting from Jimma University, he is a Fellow Chartered Certified Accountant (FCCA) and a certified member of the Chartered Institute for Securities & Investment (CISI). With over 20 years of leadership experience in banking and corporate management, he has served as Vice President for Banking Business at Hijra Bank and CEO of Yekatit Paper Converting PLC, and spent more than a decade at NIB International Bank in senior leadership roles. He has also worked as an advisor and trainer for the World Bank Group (IFC) and the National Bank of Ethiopia on IFRS and capital markets. He currently serves on the boards of Chartered Advisory Services PLC and Best Western Plus Addis Ababa."
  },
  {
    name: "Behailu Aregahgn",
    role: "Board Member",
    edu: "MBA in International Business, BA in Economics",
    img: "/behailu2.jpg",
    summary:"An MBA graduate in International Business from Mekelle University and BA holder in Economics from Debub University, he is an experienced business and technology consultant with a strong background in advisory and operations. He serves as Managing Partner and Lead Consultant at Chartered Advisory Services PLC and represents Global DWC LLC in Ethiopia and East Africa. His experience includes leadership roles at Thabet Technology PLC and WebSprix IT Solutions PLC, as well as extensive work with Ethio Telecom on enterprise and government projects, including major systems such as the National Bank’s EATS platform."
  },
  {
    name: "Kalkidan Nigusse",
    role: "Board Member",
    edu: "Master’s in Marketing Management, Master’s in Development Management, BA in Economics",
    img: "/kalidan.jpg",
    summary:"He holds a Master’s in Marketing Management from Addis Ababa University, a Master’s in Development Management from University of Torino, and a BA in Economics from Addis Ababa University. He is the Managing Director of iConnect Digital Services and serves on the boards of NEO Microfinance Institution and Credoks Digital Services PLC. With over 15 years of experience in telecom and digital services, he has held senior leadership roles at Ethio Telecom, contributing to nationwide rebranding, marketing strategy, research, and international business development. He specializes in strategic management, marketing, project leadership, and business growth."
  },
  {
    name: "Banteyrga Kebede",
    role: "Board Member",
    edu: "MBA in Telecom Business Administration, BA in Management",
    img: "/banteyerga.jpg",
    summary:"He holds an MBA in Telecom Business Administration and a BA in Management from Addis Ababa University. With over 15 years of leadership experience across telecom, manufacturing, and service sectors, he currently serves as Managing Partner at Chartered Advisory Services PLC and Board Member of NEO Microfinance Institution. Throughout his career, he has held senior roles including CEO and Managing Partner, leading organizational restructuring, operational improvements, and product development initiatives. He has also driven profitability growth, ISO certifications, and HR transformation programs, and is recognized for his strong expertise in leadership, operations, finance, and telecom innovation."
  },
  {
    name: "Yitages Tefera",
    role: "Board Member",
    edu: "Fellow of the Association of Chartered Certified Accountants (FCCA, UK)",
    appointed:true,
    img: "/yitages.jpg",
    summary:"He is a Fellow of the Association of Chartered Certified Accountants (FCCA) from Association of Chartered Certified Accountants and a member of the Institute of Chartered Certified Accountants. With over 10 years of experience in auditing, accounting, and risk management, he specializes in audit and assurance services, IFRS and IPSAS consulting, and financial statement preparation and analysis. He has led audit engagements for both business and non-profit organizations, ensuring compliance with international financial reporting standards and Ethiopian legal frameworks, while also providing financial oversight, risk assessment, and advisory services."
  },
  {
    name: "Getahun Worku",
    role: "Board Member",
    edu: "Bachelors of art in Accounting and finance",
    appointed:true,
    img: "/getahun.jpg",
    summary:"He holds an LLM in Human Rights and an MBA in Governance and Development, and is currently pursuing a PhD in Law. With over 20 years of experience in legal advisory, compliance, governance, and academic instruction in Ethiopia, she specializes in contract law, labor law, procurement, banking regulation, donor agreements, and institutional governance frameworks. She has provided high-level legal counsel on grant agreements, MOUs, project design, monitoring, and regulatory compliance. Her career includes senior legal roles at NIB International Bank and the Commercial Bank of Ethiopia, alongside academic and advisory positions in higher education and legal institutions. She is a licensed advocate before all Federal Courts of Ethiopia and a member of both the Ethiopian Bar Association and Ethiopian Women Lawyers Association, with strong expertise in governance, compliance, and organizational risk management."
  },
  {
    name: "Assan Mohammed Ali",
    role: "Board Member",
    edu: "MBA in IT Management",
    appointed:true,
    img: "/placeholder.png",
    summary:"He holds an MBA in IT Management, an MSc in Information Technology, and a BSc in Computer Science. With over 20 years of experience in digital transformation and IT leadership, he specializes in enterprise systems management, IT governance, and financial technology innovation. He has led major telecom and banking projects, including ERP, BSS/OSS, CRM, billing systems, and digital financial services, with a strong focus on Sharia-compliant Islamic banking solutions. His career includes senior roles at Hijra Bank and Ethio Telecom, where he worked on core banking systems, mobile wallets, business intelligence, and enterprise IT architecture. He provides strategic leadership in digital transformation, retail banking growth, and technology governance, driving innovation and operational resilience."
  }
];

const execMembers: MemberType[] = [
  {
    name: "Habib Mohammed",
    role: "Chief Executive Officer",
    edu: "MBA in International Business, BA in Accounting, FCCA, CISI",
    appointed:true,
    img: "/habib2.jpg",
    summary:"He holds an MBA in International Business from University of Greenwich and a BA in Accounting from Jimma University, and is a Fellow Chartered Certified Accountant (FCCA) as well as a certified member of the Chartered Institute for Securities & Investment (CISI). With over 20 years of experience in banking, finance, and corporate management, he has served as CEO and Executive Board Member, driving strategic growth and governance across multiple institutions. He was Vice President for Banking Business at Hijra Bank, overseeing treasury, credit risk, and foreign exchange operations, and previously served as CEO of Yekatit Paper Converting PLC, achieving key milestones such as ISO certification and IFRS adoption. He also spent over a decade at NIB International Bank in senior leadership roles. Additionally, he has advised the World Bank Group’s International Finance Corporation on IFRS implementation and currently serves on the boards of Chartered Advisory Services PLC and Best Western Plus Addis Ababa."
  },
  {
    name: "Haileleul Kassa",
    role: "Chief Risk and Compliance Officer",
    edu: "MSc in International Business, BA in Economics",
    appointed:true,
    img: "/haile.jpg",
    summary:"He holds an MSc in International Business and a BA in Economics, along with professional certifications from CISI, CFI, and Udacity, and is currently pursuing ACCA studies. With over 14 years of experience in banking and corporate strategy, he has held key leadership roles including Director of Corporate Strategy at Ayat Group S.C., where he leads five-year strategic planning, performance systems, and organizational transformation. He also served as Senior Manager of Strategy Planning & Monitoring and Corporate Investment at Hijra Bank, focusing on strategic execution and performance frameworks. Earlier in his career, he worked at Hibret Bank, Nib International Bank, and Global Bank Ethiopia in areas including trade finance, credit, and planning. He specializes in corporate strategy, investment analysis, capital markets, and performance management."
  },
  {
    name: "Habtemariam Geta",
    role: "Head of Corporate Finance and Advisory",
    edu: "MBA in Project Management, BSc in Electrical Engineering",
    appointed:true,
    img: "/habte-new.jpg",
    summary:"He holds an MSc in Accounting and Finance from Addis Ababa University and a BA in Accounting and Finance from Woldia University. He is currently a Senior Financial Analyst on the Capital Market and Investment Bank Project at Amhara Bank. Previously, he worked as a Lecturer of Accounting and Finance at St. Mary's University and Woldia University. He has also completed investment banking virtual simulations with Citi Bank, Standard Bank, and Fidelity International, as well as a 12-week MBA leadership program from Abilitie. His expertise lies in financial analysis, investment banking, accounting, and finance education."
  },
  {
    name: "Agazi Hailesilasse",
    role: "Securities Trader",
    edu: "Bachelors of art in Accounting and finance",
    appointed:true,
    img: "/agazi.jpg",
    summary:"He holds bachelor’s degrees in Accounting and Finance, as well as Management. He works in financial trading and market analysis, focusing on monitoring global and local economic trends to identify trading opportunities. His experience includes designing, backtesting, and executing trading strategies across stocks, bonds, and treasury bills using firm capital. He applies strict risk management practices, maintains detailed trade records, and reports performance insights to management, contributing to data-driven investment decision-making."
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
          className="mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto"
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
