"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import ListedCompaniesHero from "@/components/listed-companies-hero";
import { useListedCompanies } from "@/hooks/queries/useCompaniesQuery";
import { ListedCompany } from "@/services/companies";
import React from "react";

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <tr className="odd:bg-white even:bg-gray-50">
      <td className="border border-gray-300 px-4 py-3 text-gray-700 align-top">{label}</td>
      <td className="border border-gray-300 px-4 py-3 text-gray-900">{children}</td>
    </tr>
  );
}

function CompanyDetails({ company }: { company: ListedCompany }) {
  return (
    <>
      {company.prospectus && (
        <div className="mb-4">
          <Link
            href={company.prospectus.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 font-medium"
          >
            {company.prospectus.label}
          </Link>
        </div>
      )}

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
          <Row label="Symbol">{company.symbol}</Row>
          <Row label="Company Name">{company.companyName}</Row>
          <Row label="Listed Capital">{company.listedCapital}</Row>
          {company.listedCapitalIncludingPremium && (
            <Row label="Listed Capital including Premium">{company.listedCapitalIncludingPremium}</Row>
          )}
          <Row label="Listed Shares">{company.listedShares}</Row>
          <Row label="Number of Shareholders">{company.shareholders}</Row>
          <Row label="Market Classification">{company.marketClassification}</Row>
          {company.securityType && <Row label="Security Type">{company.securityType}</Row>}
          {company.natureOfBusiness && <Row label="Nature of Business">{company.natureOfBusiness}</Row>}
          {company.yearOfFormation && <Row label="Year of Formation">{company.yearOfFormation}</Row>}
          {company.dateOfIncorporation && <Row label="Date of Incorporation">{company.dateOfIncorporation}</Row>}
          {company.dateListed && <Row label="Date Listed">{company.dateListed}</Row>}
          {company.companyAddress && <Row label="Company Address">{company.companyAddress}</Row>}
          {company.telephone && <Row label="Telephone">{company.telephone}</Row>}
          {company.email && (
            <Row label="Email">
              <Link href={`mailto:${company.email}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                {company.email}
              </Link>
            </Row>
          )}
          {company.website && (
            <Row label="Website">
              <Link href={company.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                {company.website.replace(/^https?:\/\//, "")}
              </Link>
            </Row>
          )}
          {company.auditor && <Row label="Auditor">{company.auditor}</Row>}
          {(company.boardOfDirectors?.length ?? 0) > 0 && (
            <Row label="Board Of Directors">
              <ul className="list-disc pl-5 space-y-1">
                {company.boardOfDirectors!.map((d) => (
                  <li key={d.id}>{d.value}</li>
                ))}
              </ul>
            </Row>
          )}
          {company.sector && <Row label="Sector">{company.sector}</Row>}
          {company.subSector && <Row label="Sub Sector">{company.subSector}</Row>}
          {(company.financialStatements?.length ?? 0) > 0 && (
            <Row label="Financial Statements">
              <ul className="list-disc pl-5 space-y-1">
                {company.financialStatements!.map((f) => (
                  <li key={f.id}>
                    <Link href={f.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                      {f.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Row>
          )}
        </tbody>
      </table>
    </>
  );
}

export default function ResourcesPage() {
  const { data: companies = [], isFetching, isError } = useListedCompanies();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen w-full bg-white text-gray-900">
      <ListedCompaniesHero />
      <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        {isError && <div className="text-red-500">Failed to load listed companies.</div>}

        {isFetching && companies.length === 0 && (
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-16 animate-pulse rounded-lg bg-gray-100" />
            ))}
          </div>
        )}

        <div className="space-y-4">
          {companies.map((company, index) => (
            <div
              key={company.documentId}
              className="border border-gray-300 rounded-lg overflow-hidden bg-white"
            >
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

              {openIndex === index && (
                <div className="px-6 pb-6 bg-gray-50">
                  <CompanyDetails company={company} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
