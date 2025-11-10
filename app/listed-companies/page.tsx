"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import MarketPrices from "@/components/MarketPrices";

interface CompanyData {
  symbol: string;
  companyName: string;
  listedCapital: string;
  listedShares: string;
  shareholders: string;
  marketClassification: string;
  financialStatement?: string;
  financialStatementUrl?: string;
  listedCapitalIncludingPremium?: string;
}

const companies: CompanyData[] = [
  {
    symbol: "WGBX",
    companyName: "Wegagen Bank Share Company",
    listedCapital: "6,218,635,000",
    listedShares: "6,218,635",
    shareholders: "14,549",
    marketClassification: "Main Market",
    financialStatement: "Wegagen Bank Financial Statement 2024-25",
    financialStatementUrl: "https://esx.et/wp-content/uploads/2025/10/Wegagen-Bank-S.C-Financial-Statements-2024-2025.pdf"
  },
  {
    symbol: "GDAB",
    companyName: "Gadaa Bank Share Company",
    listedCapital: "1,232,728,000",
    listedShares: "1,232,728",
    shareholders: "31,136",
    marketClassification: "Main Market",
  },
  {
    symbol: "TELE",
    companyName: "Ethio-Telecom Share Company",
    listedCapital: "1,069,014,900",
    listedCapitalIncludingPremium: "3,207,044,700",
    listedShares: "10,690,149",
    shareholders: "47,305",
    marketClassification: "Main Market",
  }
];

export default function ResourcesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen w-full bg-white text-gray-900">
      <MarketPrices />
      <div className="max-w-5xl mx-auto px-4 py-20">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
          ESX LISTED COMPANIES
        </h1>

        {/* Accordion */}
        <div className="space-y-4">
          {companies.map((company, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden bg-white"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[#0E0066] font-bold text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                  <span className="text-[#0E0066] font-semibold text-lg">
                    {company.companyName}
                  </span>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#0E0066]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#0E0066]" />
                )}
              </button>

              {/* Accordion Content */}
              {openIndex === index && (
                <div className="px-6 pb-6 bg-gray-50">
                  {/* Financial Statement Link */}
                      {company.financialStatement && company.financialStatementUrl && (
                    <div className="mb-4">
                      <Link
                        href={company.financialStatementUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline hover:text-blue-800 font-medium"
                      >
                        {company.financialStatement}
                      </Link>
                    </div>
                  )}

                  {/* Two Column Table */}
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-3 text-left text-[#0E0066] font-semibold">
                          Particulars
                        </th>
                        <th className="border border-gray-300 px-4 py-3 text-left text-[#0E0066] font-semibold">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">
                          Symbol
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900">
                          {company.symbol}
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">
                          Company Name
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900">
                          {company.companyName}
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">
                          Listed Capital
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900">
                          {company.listedCapital}
                        </td>
                      </tr>
                      {company.symbol === "TELE" && company.listedCapitalIncludingPremium && (
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3 text-gray-700">
                            Listed Capital including Premium
                          </td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-900">
                            {company.listedCapitalIncludingPremium}
                          </td>
                        </tr>
                      )}
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">
                          Listed Shares
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900">
                          {company.listedShares}
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">
                          Number of Shareholders
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900">
                          {company.shareholders}
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">
                          Market Classification:
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-900">
                          {company.marketClassification}
                        </td>
                      </tr>
                      {/* Additional details for Wegagen Bank (continuation) */}
                      {company.symbol === "WGBX" && (
                        <>
                          <tr className="bg-white">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Security Type</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">Equity – Ordinary Shares</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Nature of Business</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">Financial Services – Banking</td>
                          </tr>
                          <tr className="bg-white">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Date of Incorporation</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">11 June 1997</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Date Listed</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">10 January 2025</td>
                          </tr>
                          <tr className="bg-white">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Company Address</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">
                              Addis Ababa, Kirkos Sub-City, Wereda 10, House No. New Wegagen Tower, Ras Mekonnen Street, In front Addis Ababa Stadium
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Telephone</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">+251-115-523800</td>
                          </tr>
                          <tr className="bg-white">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Email</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">
                              <Link href="mailto:info@wegagenbanksc.com.et" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">info@wegagenbanksc.com.et</Link>
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Website</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">
                              <Link href="https://www.wegagen.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">www.wegagen.com</Link>
                            </td>
                          </tr>
                          <tr className="bg-white">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Auditor</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">Tafesse, Shisema, and Ayelew Certified Audit Partnership</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700 align-top">Board Of Directors</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Ato Abdishu Hussien (Board Chairperson)</li>
                                <li>Ato Woldegabriel Naizghi (Board Vice Chairperson)</li>
                                <li>Ato Fikru Jiregna (Board Member)</li>
                                <li>Ato Fithanegest Gebru (Board Member)</li>
                                <li>Ato Gebreegziabher Hadush (Board Member)</li>
                                <li>Ato Hassen Yesuf (Board Member)</li>
                                <li>Ato Surfel Berhe Weldu (Board Member)</li>
                                <li>Ato Tesfatsion Desta Tesfay (Board Member)</li>
                                <li>Ato Alemseged Assefa Abera (Board Member)</li>
                                <li>Ato Zenfu Asfaw Gebretinsae (Board Member)</li>
                              </ul>
                            </td>
                          </tr>
                          <tr className="bg-white">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Sector</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">Financial Services</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Sub Sector</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">Banking</td>
                          </tr>
                          <tr className="bg-white">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Prospectus</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">
                              <Link href="https://esx.et/wp-content/uploads/2025/03/Wegagen_Bank_S_C_Prospectus-for-Registration-of-Shares-Currently-Held-by-Shareholders.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Wegagen_Bank_S_C_Prospectus for Registration of Shares Currently Held by Shareholders</Link>
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Financial Statements</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">
                              <ul className="list-disc pl-5 space-y-1">
                                <li>
                                  <Link href="https://esx.et/wp-content/uploads/2025/03/Unaudited-Interim-Financial-Statements-for-the-six-months-ended-31-December-2024.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Unaudited Interim Financial Statements for the six months ended 31 December 2024</Link>
                                </li>
                                <li>
                                  <Link href="https://esx.et/wp-content/uploads/2025/10/Wegagen_Bank_2024_25_Annual_Report_4c4ff4570b.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Wegagen_Bank_Annual_Report_2024-25</Link>
                                </li>
                                <li>
                                  <Link href="https://esx.et/wp-content/uploads/2025/03/Wegagen_Bank_Annual_Report_2023-24.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Wegagen_Bank_Annual_Report_2023-24</Link>
                                </li>
                                <li>
                                  <Link href="https://esx.et/wp-content/uploads/2025/03/Wegagen_Bank_Annual_Report_2022-23.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Wegagen_Bank_Annual_Report_2022-23</Link>
                                </li>
                                <li>
                                  <Link href="https://esx.et/wp-content/uploads/2025/03/Wegagen_Bank_Annual_Report_2021-22.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Wegagen_Bank_Annual_Report_2021-22</Link>
                                </li>
                              </ul>
                            </td>
                          </tr>
                        </>
                      )}
                      {/* Additional details for Gadaa Bank (continuation) */}
                      {company.companyName === "Gadaa Bank Share Company" && (
                        <>
                          <tr className="bg-white">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Security Type</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">Equity – Ordinary Shares</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Nature of Business</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">Financial Services – Banking</td>
                          </tr>
                          <tr className="bg-white">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Date of Incorporation</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">26 April 2022</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Date Listed</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">13 June 2025</td>
                          </tr>
                          <tr className="bg-white">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Company Address</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">Head Office |Gotera | kirkos, SubCity W-03, HNo-#745</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Telephone</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">+251-116-392578</td>
                          </tr>
                          <tr className="bg-white">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Email</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">
                              <Link href="mailto:info@gadaabank.com.et" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">info@gadaabank.com.et</Link>
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Website</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">
                              <Link href="https://gadaabank.com.et" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">gadaabank.com.et</Link>
                            </td>
                          </tr>
                          <tr className="bg-white">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Auditor</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">TEWODROS AND FIKRE AUDIT SERVICES PARTNERSHIP CHARTERED CERTIFIED ACCOUNTANTS</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700 align-top">Board Of Directors</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Dr. Hassan Hussien Kedir (Board Chairperson)</li>
                                <li>Mr. Hailu Ifa Gonfa (Board V/Chairperson)</li>
                                <li>Dr. Degefa Duresa Obbo (Member of the Board)</li>
                                <li>Eng. Abdo galeto Anota (Member of the Board)</li>
                                <li>Dr. Birhanu Assefa Demissie (Member of the Board)</li>
                                <li>Mr. Shiferaw Rufie Bodo (Member of the Board)</li>
                                <li>Mr. Wassihun Amenu Tiyiti (Member of the Board)</li>
                                <li>Mr. Hamdeno Mideso Woya (Member of the Board)</li>
                                <li>Mrs. Semira Mohhamed Abdella (Member of the Board)</li>
                                <li>Mr. Alazar Adula Yatene (Member of the Board)</li>
                                <li>Dr. Gutu Teso Boka (Member of the Board)</li>
                              </ul>
                            </td>
                          </tr>
                          <tr className="bg-white">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Sector</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">Financial Services</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Sub Sector</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">Banking</td>
                          </tr>
                          <tr className="bg-white">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Prospectus</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">
                              <Link href="https://esx.et/wp-content/uploads/2025/06/GB-Final-Propsectus-Dated-June-17-2025.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Gadaa Bank Prospectus</Link>
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Financial Statements</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">
                              <ul className="list-disc pl-5 space-y-1">
                                <li>
                                  <Link href="https://esx.et/wp-content/uploads/2025/11/Audited-Financial-Statement-for-the-year-ended-30-June-2025.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Audited-Financial-Statement-for-the-year-ended-30-June-2025</Link>
                                </li>
                                <li>
                                  <Link href="https://esx.et/wp-content/uploads/2025/10/Gadaa-Bank-Financial-Statment-2024-2025.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Gadaa_Bank_Financial_Statement_2024-2025</Link>
                                </li>
                                <li>
                                  <Link href="https://esx.et/wp-content/uploads/2025/06/Unaudited-Interim-Financial-Statement-December-20241-1.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Unaudited Interim Financial Statement December 2024</Link>
                                </li>
                                <li>
                                  <Link href="https://esx.et/wp-content/uploads/2025/06/Gadaa-Bank-2023-24-Annual-Report.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Gadaa_Bank_Annual_Report_2023-24</Link>
                                </li>
                                <li>
                                  <Link href="https://esx.et/wp-content/uploads/2025/06/Gadaa-Bank-2023-24-Annual-Report.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Gadaa_Bank_Annual_Report_2022-23</Link>
                                </li>
                              </ul>
                            </td>
                          </tr>
                        </>
                      )}
                      {/* Additional details for Ethio-Telecom (continuation) */}
                      {company.companyName === "Ethio-Telecom Share Company" && (
                        <>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Security Type</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">Equity – Ordinary Shares</td>
                          </tr>
                          <tr className="bg-white">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Nature of Business</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">Telecoms, Infrastructure Sharing, and Mobile Financial Services</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Year of Formation</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">1894 GC</td>
                          </tr>
                          <tr className="bg-white">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Date of Incorporation as Share Company</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">01 July 2024</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Date Listed</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">25 June 2025</td>
                          </tr>
                          <tr className="bg-white">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Company Address</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">Addis Ababa, Lideta Sub-City, Woreda 10, House No. New P.O.Box 1047</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Telephone</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">+251-115-510500</td>
                          </tr>
                          <tr className="bg-white">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Email</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">
                              <Link href="mailto:994@ethionet.et" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">994@ethionet.et</Link>
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Website</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">
                              <Link href="https://www.ethiotelecom.et" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">www.ethiotelecom.et</Link>
                            </td>
                          </tr>
                          <tr className="bg-white">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Auditor</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">Audit Services Corporation</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700 align-top">Board Of Directors</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">
                              <ul className="list-disc pl-5 space-y-1">
                                <li>H.E Temesgen Tiruneh (Board Chairman)</li>
                                <li>H.E Dr. Eyob Tekalign (Board Deputy Chairman)</li>
                                <li>H.E Ato Worku Gachena (Board member)</li>
                                <li>H.E Ato Muluneh Desalegn (Board member)</li>
                                <li>H.E Ato Yodahe Arayaselassie (Board member)</li>
                                <li>Ato Kasahun Seboka (Board member)</li>
                              </ul>
                            </td>
                          </tr>
                          <tr className="bg-white">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Sector</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">Telecom Services</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Sub Sector</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">Telecom Services, Infrastructure Sharing, and Mobile Financial Services</td>
                          </tr>
                          <tr className="bg-white">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Prospectus</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">
                              <Link href="https://esx.et/wp-content/uploads/2025/06/Ethio-Telecom-Share-Company-Prospectus.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Ethio Telecom prospectus</Link>
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 text-gray-700">Financial Statements</td>
                            <td className="border border-gray-300 px-4 py-3 text-gray-900">
                              <Link href="https://esx.et/wp-content/uploads/2025/06/Ethio-Telecom-Share-Company-Three-years-historical-financial-information-2022-2024.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Three years historical financial information (2022-2024)</Link>
                            </td>
                          </tr>
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}