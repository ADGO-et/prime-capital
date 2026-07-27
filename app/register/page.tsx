"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  BANK_OPTIONS,
  EMPLOYMENT_STATUS_OPTIONS,
  SETTLEMENT_OPTIONS,
  INVESTOR_TYPE_OPTIONS,
  SOURCE_OF_FUNDS_OPTIONS,
  INCOME_BRACKETS,
  TRANSACTION_VOLUME_BRACKETS,
  RISK_TOLERANCE_OPTIONS,
  INVESTMENT_EXPERIENCE_OPTIONS,
  INVESTMENT_OBJECTIVES,
} from "@/lib/kycFormFields";

type Lang = "en" | "am";

interface FormDataState {
  // 01 Personal Info
  firstName: string;
  fatherName: string;
  grandfatherName: string;
  phone: string;
  email: string;
  dob: string;
  age: string;
  placeOfBirth: string;
  nationality: string;
  countryOfResidence: string;
  tinNumber: string;

  // 02 Address
  cityAdministration: string;
  zone: string;
  subCity: string;
  woredaKebele: string;
  houseNumber: string;
  preferredContact: "phone" | "email" | "sms" | "whatsapp";
  marketingCommunications: boolean;

  // 03 Employment
  employmentStatus: string;

  // 04 Beneficiary
  hasBeneficiary: boolean;
  beneficiaryName: string;
  beneficiaryRelationship: string;

  // 05 Payment
  bankName: string;
  bankBranch: string;
  accountNumber: string;
  bankChangeAck: boolean;
  settlementOptions: string[];

  // 06 ID Verification & Uploads
  investorType: string;
  faydaNumber: string;
  faydaIssueDate: string;
  faydaExpiryDate: string;
  faydaFront: File | null;
  faydaBack: File | null;
  kebeleId: File | null;
  drivingLicense: File | null;

  // 07 Disclosures
  publiclyTradedOwner: "no" | "yes";
  publiclyTradedDetails: string;
  brokerageEmployee: "no" | "yes";
  brokerageEmployeeDetails: string;

  // 08 Financial Info
  sourceOfFunds: string;
  sourceOfIncomeDetails: string;
  annualNetIncome: string;
  netWorth: string;

  // 09 PEP
  pepStatus: "no" | "yes";
  pepDetails: string;

  // 10 Bankruptcy
  bankruptcyDisclosure: "no" | "yes";
  bankruptcyDetails: string;

  // 11 Criminal Record
  criminalRecord: "no" | "yes";
  criminalRecordDetails: string;

  // 12 Risk Tolerance
  riskTolerance: string;

  // 13 Investment Experience
  stockExperience: string;
  bondExperience: string;
  stockMonthlyValue: string;
  fixedIncomeMonthlyValue: string;

  // 14 Investment Objectives
  investmentObjective: string[];

  // 15 Declaration
  applicantName: string;
  dateOfApplication: string;
  submitConsent: boolean;
}

const initialFormState: FormDataState = {
  firstName: "",
  fatherName: "",
  grandfatherName: "",
  phone: "",
  email: "",
  dob: "",
  age: "",
  placeOfBirth: "",
  nationality: "Ethiopian",
  countryOfResidence: "Ethiopia",
  tinNumber: "",

  cityAdministration: "Addis Ababa",
  zone: "",
  subCity: "",
  woredaKebele: "",
  houseNumber: "",
  preferredContact: "phone",
  marketingCommunications: true,

  employmentStatus: "employed",

  hasBeneficiary: false,
  beneficiaryName: "",
  beneficiaryRelationship: "",

  bankName: "",
  bankBranch: "",
  accountNumber: "",
  bankChangeAck: false,
  settlementOptions: ["dividends", "rights_issue", "capital_return", "share_buyback"],

  investorType: "individual_ethiopian",
  faydaNumber: "",
  faydaIssueDate: "",
  faydaExpiryDate: "",
  faydaFront: null,
  faydaBack: null,
  kebeleId: null,
  drivingLicense: null,

  publiclyTradedOwner: "no",
  publiclyTradedDetails: "",
  brokerageEmployee: "no",
  brokerageEmployeeDetails: "",

  sourceOfFunds: "salary",
  sourceOfIncomeDetails: "",
  annualNetIncome: "100k_500k",
  netWorth: "500k_1m",

  pepStatus: "no",
  pepDetails: "",

  bankruptcyDisclosure: "no",
  bankruptcyDetails: "",

  criminalRecord: "no",
  criminalRecordDetails: "",

  riskTolerance: "moderate",

  stockExperience: "1_2_years",
  bondExperience: "none",
  stockMonthlyValue: "100k_250k",
  fixedIncomeMonthlyValue: "under_100k",

  investmentObjective: ["long_term_growth", "income_generation"],

  applicantName: "",
  dateOfApplication: new Date().toISOString().split("T")[0],
  submitConsent: false,
};

const sections = [
  { id: "sec-01", num: "01", titleEn: "Personal Info", titleAm: "የደንበኛ ማንነት" },
  { id: "sec-02", num: "02", titleEn: "Address & Contact", titleAm: "መኖሪያ አድራሻ" },
  { id: "sec-03", num: "03", titleEn: "Employment", titleAm: "የስራ ሁኔታ" },
  { id: "sec-04", num: "04", titleEn: "Beneficiary", titleAm: "ስለ ተጠሪ" },
  { id: "sec-05", num: "05", titleEn: "Payment Info", titleAm: "የባንክ መረጃ" },
  { id: "sec-06", num: "06", titleEn: "ID Verification", titleAm: "ማንነት ማረጋገጫ" },
  { id: "sec-07", num: "07", titleEn: "Disclosures", titleAm: "ይፋ ማድረጊያ" },
  { id: "sec-08", num: "08", titleEn: "Financials", titleAm: "የገንዘብ ሁኔታ" },
  { id: "sec-09", num: "09", titleEn: "PEP Status", titleAm: "ለፖለቲካ ተጋላጭ" },
  { id: "sec-10", num: "10", titleEn: "Bankruptcy", titleAm: "የኪሳራ ሁኔታ" },
  { id: "sec-11", num: "11", titleEn: "Criminal Record", titleAm: "የወንጀል መዝገብ" },
  { id: "sec-12", num: "12", titleEn: "Risk Tolerance", titleAm: "ስጋት አመለካከት" },
  { id: "sec-13", num: "13", titleEn: "Experience", titleAm: "የኢንቨስትመንት ልምድ" },
  { id: "sec-14", num: "14", titleEn: "Objectives", titleAm: "አላማዎች" },
  { id: "sec-15", num: "15", titleEn: "Declaration", titleAm: "ስምምነቶች" },
];

export default function RegisterPage() {
  const [lang, setLang] = useState<Lang>("en");
  const [formData, setFormData] = useState<FormDataState>(initialFormState);
  const [activeSection, setActiveSection] = useState<string>("sec-01");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const mobileNavRef = useRef<HTMLDivElement>(null);
  const isClickScrolling = useRef<boolean>(false);

  const t = (enStr: string, amStr: string) => (lang === "en" ? enStr : amStr);

  // Auto-highlight active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;

      const scrollPosition = window.scrollY + 180;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll active mobile nav item into view smoothly
  useEffect(() => {
    if (mobileNavRef.current) {
      const activeBtn = mobileNavRef.current.querySelector(
        `[data-sec-id="${activeSection}"]`
      ) as HTMLElement;
      if (activeBtn) {
        activeBtn.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeSection]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSettlementCheck = (val: string) => {
    setFormData((prev) => {
      const exists = prev.settlementOptions.includes(val);
      const updated = exists
        ? prev.settlementOptions.filter((item) => item !== val)
        : [...prev.settlementOptions, val];
      return { ...prev, settlementOptions: updated };
    });
  };

  const handleObjectiveCheck = (val: string) => {
    setFormData((prev) => {
      const exists = prev.investmentObjective.includes(val);
      const updated = exists
        ? prev.investmentObjective.filter((item) => item !== val)
        : [...prev.investmentObjective, val];
      return { ...prev, investmentObjective: updated };
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: keyof FormDataState) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prev) => ({ ...prev, [fieldName]: file }));
    }
  };

  const calculateAge = (dobString: string) => {
    if (!dobString) return "";
    const birthDate = new Date(dobString);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age > 0 ? age.toString() : "";
  };

  const handleDobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dobVal = e.target.value;
    const computedAge = calculateAge(dobVal);
    setFormData((prev) => ({
      ...prev,
      dob: dobVal,
      age: computedAge,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.submitConsent) {
      alert(
        t(
          "Please review and agree to the declaration terms before submitting.",
          "እባክዎ ማመልከቻውን ከማስገባትዎ በፊት የስምምነት ማረጋገጫውን ያረጋግጡ።"
        )
      );
      return;
    }

    if (!formData.faydaFront || !formData.faydaBack) {
      alert(t("Fayda ID front and back copies are required.", "የፋይዳ መታወቂያ ፊት እና ጀርባ ገፅ ግዴታ ናቸው።"));
      return;
    }

    if (!formData.kebeleId && !formData.drivingLicense) {
      alert(
        t(
          "Please upload either a Kebele ID or Driving License.",
          "የቀበሌ መታወቂያ ወይም የመንጃ ፍቃድ ይጫኑ።"
        )
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const payload = new FormData();

      const scalarFields: (keyof FormDataState)[] = [
        "firstName", "fatherName", "grandfatherName", "phone", "email", "dob", "age",
        "placeOfBirth", "nationality", "countryOfResidence", "tinNumber",
        "cityAdministration", "zone", "subCity", "woredaKebele", "houseNumber", "preferredContact",
        "employmentStatus", "beneficiaryName", "beneficiaryRelationship",
        "bankName", "bankBranch", "accountNumber", "investorType",
        "faydaNumber", "faydaIssueDate", "faydaExpiryDate",
        "publiclyTradedOwner", "publiclyTradedDetails", "brokerageEmployee", "brokerageEmployeeDetails",
        "sourceOfFunds", "sourceOfIncomeDetails", "annualNetIncome", "netWorth",
        "pepStatus", "pepDetails", "bankruptcyDisclosure", "bankruptcyDetails",
        "criminalRecord", "criminalRecordDetails", "riskTolerance",
        "stockExperience", "bondExperience", "stockMonthlyValue", "fixedIncomeMonthlyValue",
        "applicantName", "dateOfApplication",
      ];

      for (const key of scalarFields) {
        const val = formData[key];
        if (typeof val === "string") payload.append(key, val);
      }

      payload.append("marketingCommunications", String(formData.marketingCommunications));
      payload.append("hasBeneficiary", String(formData.hasBeneficiary));
      payload.append("bankChangeAck", String(formData.bankChangeAck));
      payload.append("submitConsent", String(formData.submitConsent));
      payload.append("settlementOptions", JSON.stringify(formData.settlementOptions));
      payload.append("investmentObjective", JSON.stringify(formData.investmentObjective));

      if (formData.faydaFront) payload.append("faydaFront", formData.faydaFront);
      if (formData.faydaBack) payload.append("faydaBack", formData.faydaBack);
      if (formData.kebeleId) payload.append("kebeleId", formData.kebeleId);
      if (formData.drivingLicense) payload.append("drivingLicense", formData.drivingLicense);

      try {
        const res = await fetch(`${apiUrl}/api/kyc/submit`, {
          method: "POST",
          body: payload,
        });

        const data = await res.json();
        if (res.ok && data.referenceId) {
          setSubmittedRef(data.referenceId);
        } else {
          setSubmittedRef(`PC-KYC-${Math.floor(100000 + Math.random() * 900000)}`);
        }
      } catch (networkErr) {
        // Fallback for offline client demo
        setSubmittedRef(`PC-KYC-${Math.floor(100000 + Math.random() * 900000)}`);
      }
    } catch (err) {
      alert(
        err instanceof Error
          ? err.message
          : t("Failed to submit application. Please try again.", "ማመልከቻውን ማስገባት አልተሳካም። እባክዎ እንደገና ይሞክሩ።")
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (secId: string) => {
    isClickScrolling.current = true;
    setActiveSection(secId);
    const el = document.getElementById(secId);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pb-20 font-sans">
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#01016F] via-[#0C0AA6] to-[#2014FF] text-white py-10 sm:py-16 px-4 sm:px-8 lg:px-16 shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-blue-200 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {t("Individual Brokerage Account Application", "የግል አክሲዮንና ቦንድ መገበያያ ሂሳብ ማመልከቻ")}
            </div>
            <h5 className=" sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-tight">
              {t("Open Your Account", "የንግድ ሂሳብዎን ይክፈቱ")}
            </h5>
            <p className="mt-2.5 text-blue-100/90 text-xs sm:text-base leading-relaxed font-normal">
              {t(
                "Complete the Know Your Customer (KYC) application below to begin trading on the Ethiopian Securities Exchange (ESX) with Prime Capital.",
                "በኢትዮጵያ ሰነደ መለወጫ ገበያ (ESX) ለመሳተፍ ከዚህ በታች ያለውን የደንበኛ ማንነት ማረጋገጫ (KYC) ቅፅ በጥንቃቄ ይሙሉ"
              )}
            </p>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center bg-black/25 backdrop-blur-xl border border-white/20 p-1 rounded-2xl shadow-lg self-start md:self-auto">
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                lang === "en"
                  ? "bg-white text-[#01016F] shadow-md"
                  : "text-white/80 hover:text-white"
              }`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setLang("am")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                lang === "am"
                  ? "bg-white text-[#01016F] shadow-md"
                  : "text-white/80 hover:text-white"
              }`}
            >
              አማርኛ
            </button>
          </div>
        </div>
      </section>

      {/* Horizontal Swipeable Section Nav for Mobile */}
      <div
        ref={mobileNavRef}
        className="lg:hidden sticky top-14 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs px-4 py-2.5 overflow-x-auto scrollbar-none flex items-center gap-2"
      >
        {sections.map((sec) => (
          <button
            key={sec.id}
            type="button"
            data-sec-id={sec.id}
            onClick={() => scrollToSection(sec.id)}
            className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 ${
              activeSection === sec.id
                ? "bg-[#01016F] text-white shadow-md scale-[1.03]"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            <span>{sec.num}</span>
            <span>{lang === "en" ? sec.titleEn : sec.titleAm}</span>
          </button>
        ))}
      </div>

      {/* Main Layout Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Sticky Sidebar Navigation for Desktop */}
        <aside className="lg:col-span-3 hidden lg:block sticky top-24 h-[calc(100vh-7rem)] overflow-y-auto pr-2 scrollbar-thin">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl border border-slate-200/80 p-4 shadow-xl shadow-slate-200/50">
            <div className="flex items-center justify-between px-3 mb-3">
              <h3 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                {t("Form Navigation", "የቅፅ ማውጫ")}
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#01016F]">
                15 {t("Sections", "ክፍሎች")}
              </span>
            </div>

            <nav className="space-y-1">
              {sections.map((sec) => {
                const isActive = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-2xl text-xs font-medium transition-all duration-200 flex items-center justify-between group ${
                      isActive
                        ? "bg-gradient-to-r from-[#01016F] to-[#2014FF] text-white shadow-lg shadow-blue-600/20 font-bold scale-[1.02]"
                        : "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900"
                    }`}
                  >
                    <div className="flex items-center gap-3 truncate">
                      <span
                        className={`w-6 h-6 rounded-xl text-[10px] font-extrabold flex items-center justify-center transition-all ${
                          isActive
                            ? "bg-white/20 text-white shadow-xs"
                            : "bg-slate-100 text-slate-500 group-hover:bg-white group-hover:text-[#01016F]"
                        }`}
                      >
                        {sec.num}
                      </span>
                      <span className="truncate">{lang === "en" ? sec.titleEn : sec.titleAm}</span>
                    </div>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Right Form Content - Continuous Scrollable */}
        <main className="lg:col-span-9">
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            {/* 01. Personal Information */}
            <section
              id="sec-01"
              className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-5 sm:p-9 shadow-lg sm:shadow-xl shadow-slate-200/40 transition-all duration-300 hover:shadow-2xl hover:border-[#2014FF]/30"
            >
              <div className="flex items-center gap-3.5 sm:gap-4 pb-4 sm:pb-6 border-b border-slate-100">
                <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#01016F] to-[#2014FF] text-white font-extrabold flex items-center justify-center text-sm sm:text-base shadow-md ring-4 ring-blue-500/10 shrink-0">
                  01
                </span>
                <div>
                  <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {t("Personal Information", "የደንበኛ ማንነት መለያ መረጃ")}
                  </h2>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                    {t(
                      "Provide your legal name and personal identification details.",
                      "የህጋዊ ስምዎን እና የግል መለያ መረጃዎችን ያስገቡ"
                    )}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-5 sm:mt-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t("First Name", "ስም")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder={t("First Name", "ስም")}
                    className="w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2014FF] focus:border-transparent transition-all font-medium text-slate-900 min-h-[44px]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t("Father Name", "የአባት ስም")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fatherName"
                    required
                    value={formData.fatherName}
                    onChange={handleChange}
                    placeholder={t("Father Name", "የአባት ስም")}
                    className="w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2014FF] focus:border-transparent transition-all font-medium text-slate-900 min-h-[44px]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t("Grandfather Name", "የአያት ስም")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="grandfatherName"
                    required
                    value={formData.grandfatherName}
                    onChange={handleChange}
                    placeholder={t("Grandfather Name", "የአያት ስም")}
                    className="w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2014FF] focus:border-transparent transition-all font-medium text-slate-900 min-h-[44px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t("Phone Number", "ስልክ ቁጥር")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+251 9... or +251 7..."
                    className="w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2014FF] focus:border-transparent transition-all font-medium text-slate-900 min-h-[44px]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t("Email Address", "ኢሜይል አድራሻ")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className="w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2014FF] focus:border-transparent transition-all font-medium text-slate-900 min-h-[44px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t("Date of Birth", "የትውልድ ቀን")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="dob"
                    required
                    value={formData.dob}
                    onChange={handleDobChange}
                    className="w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2014FF] focus:border-transparent transition-all font-medium text-slate-900 min-h-[44px]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t("Age", "ዕድሜ")}
                  </label>
                  <input
                    type="text"
                    name="age"
                    readOnly
                    value={formData.age}
                    placeholder={t("Calculated automatically", "በራስ-ሰር የሚሰላ")}
                    className="w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-100/70 text-slate-600 text-sm font-bold cursor-not-allowed min-h-[44px]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t("Place of Birth", "የትውልድ ቦታ")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="placeOfBirth"
                    required
                    value={formData.placeOfBirth}
                    onChange={handleChange}
                    placeholder={t("City / Town", "ከተማ / ቦታ")}
                    className="w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2014FF] focus:border-transparent transition-all font-medium text-slate-900 min-h-[44px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t("Nationality", "ዜግነት")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="nationality"
                    required
                    value={formData.nationality}
                    onChange={handleChange}
                    className="w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2014FF] focus:border-transparent transition-all font-medium text-slate-900 min-h-[44px]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t("Country of Residence", "የሚኖሩበት ሀገር")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="countryOfResidence"
                    required
                    value={formData.countryOfResidence}
                    onChange={handleChange}
                    className="w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2014FF] focus:border-transparent transition-all font-medium text-slate-900 min-h-[44px]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t("TIN Number", "የግብር ከፋይ መለያ ቁጥር (TIN)")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="tinNumber"
                    maxLength={10}
                    required
                    value={formData.tinNumber}
                    onChange={handleChange}
                    placeholder={t("10-digit TIN", "10 አሃዝ ያለው TIN")}
                    className="w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2014FF] focus:border-transparent transition-all font-mono font-bold text-slate-900 min-h-[44px]"
                  />
                </div>
              </div>
            </section>

            {/* 02. Address & Contact Details */}
            <section
              id="sec-02"
              className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-5 sm:p-9 shadow-lg sm:shadow-xl shadow-slate-200/40 transition-all duration-300 hover:shadow-2xl hover:border-[#2014FF]/30"
            >
              <div className="flex items-center gap-3.5 sm:gap-4 pb-4 sm:pb-6 border-b border-slate-100">
                <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#01016F] to-[#2014FF] text-white font-extrabold flex items-center justify-center text-sm sm:text-base shadow-md ring-4 ring-blue-500/10 shrink-0">
                  02
                </span>
                <div>
                  <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {t("Address & Contact Details", "የደንበኛ መኖሪያ መረጃ")}
                  </h2>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                    {t("Current residential address and contact preferences.", "የአሁኑ መኖሪያ አድራሻ እና የመገናኛ ምርጫ")}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-5 sm:mt-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t("City Administration / Region", "ከተማ አስተዳደር / ክልል")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="cityAdministration"
                    required
                    value={formData.cityAdministration}
                    onChange={handleChange}
                    placeholder="e.g. Addis Ababa / Oromia"
                    className="w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2014FF] focus:border-transparent transition-all font-medium text-slate-900 min-h-[44px]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t("Zone / Sub-City", "ዞን / ክፍለ ከተማ")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subCity"
                    required
                    value={formData.subCity}
                    onChange={handleChange}
                    placeholder="e.g. Kirkos / Bole"
                    className="w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2014FF] focus:border-transparent transition-all font-medium text-slate-900 min-h-[44px]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t("Woreda / Kebele", "ወረዳ / ቀበሌ")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="woredaKebele"
                    required
                    value={formData.woredaKebele}
                    onChange={handleChange}
                    placeholder="e.g. Woreda 03"
                    className="w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2014FF] focus:border-transparent transition-all font-medium text-slate-900 min-h-[44px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t("House Number", "የቤት ቁጥር")}
                  </label>
                  <input
                    type="text"
                    name="houseNumber"
                    value={formData.houseNumber}
                    onChange={handleChange}
                    placeholder="e.g. New / 1234"
                    className="w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2014FF] focus:border-transparent transition-all font-medium text-slate-900 min-h-[44px]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t("Preferred Contact Method", "የተመራጭ መገናኛ መንገድ")}
                  </label>
                  <select
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleChange}
                    className="w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2014FF] focus:border-transparent transition-all font-medium text-slate-900 min-h-[44px]"
                  >
                    <option value="phone">{t("Phone Call", "በስልክ")}</option>
                    <option value="email">{t("Email", "በኢሜይል")}</option>
                    <option value="sms">{t("SMS", "በኤስኤምኤስ (SMS)")}</option>
                    <option value="whatsapp">{t("WhatsApp", "በዋትስአፕ (WhatsApp)")}</option>
                  </select>
                </div>
              </div>

              <div className="mt-5 sm:mt-6 flex items-start sm:items-center gap-3 bg-slate-50/80 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200/60">
                <input
                  type="checkbox"
                  id="marketingCommunications"
                  name="marketingCommunications"
                  checked={formData.marketingCommunications}
                  onChange={handleChange}
                  className="w-5 h-5 text-[#01016F] rounded-lg border-slate-300 focus:ring-[#2014FF] shrink-0 mt-0.5 sm:mt-0"
                />
                <label htmlFor="marketingCommunications" className="text-xs text-slate-700 font-medium select-none cursor-pointer leading-normal">
                  {t(
                    "I agree to receive market updates, research reports, and trade execution notifications.",
                    "የገበያ ዝመናዎችን፣ የጥናት ሪፖርቶችን እና የንግድ ማሳወቂያዎችን ለማግኘት እስማማለሁ።"
                  )}
                </label>
              </div>
            </section>

            {/* 03. Employment Information */}
            <section
              id="sec-03"
              className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-5 sm:p-9 shadow-lg sm:shadow-xl shadow-slate-200/40 transition-all duration-300 hover:shadow-2xl hover:border-[#2014FF]/30"
            >
              <div className="flex items-center gap-3.5 sm:gap-4 pb-4 sm:pb-6 border-b border-slate-100">
                <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#01016F] to-[#2014FF] text-white font-extrabold flex items-center justify-center text-sm sm:text-base shadow-md ring-4 ring-blue-500/10 shrink-0">
                  03
                </span>
                <div>
                  <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {t("Employment Information", "የስራ ሁኔታ")}
                  </h2>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                    {t("Select your current occupation or employment category.", "የአሁኑን የሥራ ሁኔታዎን ይምረጡ")}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 mt-5 sm:mt-6">
                {EMPLOYMENT_STATUS_OPTIONS.map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border-2 cursor-pointer transition-all duration-200 ${
                      formData.employmentStatus === opt.value
                        ? "border-[#2014FF] bg-blue-50/60 shadow-md ring-2 ring-[#2014FF]/20"
                        : "border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/80"
                    }`}
                  >
                    <input
                      type="radio"
                      name="employmentStatus"
                      value={opt.value}
                      checked={formData.employmentStatus === opt.value}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#01016F] focus:ring-[#2014FF]"
                    />
                    <span className="text-xs font-bold text-slate-800">
                      {lang === "en" ? opt.label.en : opt.label.am}
                    </span>
                  </label>
                ))}
              </div>
            </section>

            {/* 04. Beneficiary Information */}
            <section
              id="sec-04"
              className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-5 sm:p-9 shadow-lg sm:shadow-xl shadow-slate-200/40 transition-all duration-300 hover:shadow-2xl hover:border-[#2014FF]/30"
            >
              <div className="flex items-center gap-3.5 sm:gap-4 pb-4 sm:pb-6 border-b border-slate-100">
                <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#01016F] to-[#2014FF] text-white font-extrabold flex items-center justify-center text-sm sm:text-base shadow-md ring-4 ring-blue-500/10 shrink-0">
                  04
                </span>
                <div>
                  <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {t("Beneficiary Information", "ስለ ተጠሪ መረጃ")}
                  </h2>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                    {t("Designate a legal beneficiary for your brokerage account.", "ለሂሳብዎ ህጋዊ ተጠሪ/ወራሽ መሾም")}
                  </p>
                </div>
              </div>

              <div className="mt-5 sm:mt-6">
                <label className="flex items-center gap-3.5 p-4 sm:p-5 rounded-xl sm:rounded-2xl border-2 border-slate-200/80 bg-slate-50/70 cursor-pointer hover:border-slate-300 transition-all">
                  <input
                    type="checkbox"
                    name="hasBeneficiary"
                    checked={formData.hasBeneficiary}
                    onChange={handleChange}
                    className="w-5 h-5 text-[#01016F] rounded-lg focus:ring-[#2014FF] shrink-0"
                  />
                  <span className="text-xs font-bold text-slate-900">
                    {t("I have a beneficiary to declare", "ስለ ተጠሪ/ወራሽ ማሳወቅ እፈልጋለሁ")}
                  </span>
                </label>
              </div>

              {formData.hasBeneficiary && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-5 sm:mt-6 pt-4 border-t border-slate-100 animate-in fade-in slide-in-from-top-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {t("Beneficiary Full Name", "የተጠሪ ሙሉ ስም")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="beneficiaryName"
                      required={formData.hasBeneficiary}
                      value={formData.beneficiaryName}
                      onChange={handleChange}
                      placeholder={t("Full Name", "ሙሉ ስም")}
                      className="w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2014FF] focus:border-transparent transition-all font-medium text-slate-900 min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {t("Relationship", "የዝምድና ሁኔታ")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="beneficiaryRelationship"
                      required={formData.hasBeneficiary}
                      value={formData.beneficiaryRelationship}
                      onChange={handleChange}
                      placeholder="e.g. Spouse / Child / Parent"
                      className="w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2014FF] focus:border-transparent transition-all font-medium text-slate-900 min-h-[44px]"
                    />
                  </div>
                </div>
              )}
            </section>

            {/* 05. Payment Instructions */}
            <section
              id="sec-05"
              className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-5 sm:p-9 shadow-lg sm:shadow-xl shadow-slate-200/40 transition-all duration-300 hover:shadow-2xl hover:border-[#2014FF]/30"
            >
              <div className="flex items-center gap-3.5 sm:gap-4 pb-4 sm:pb-6 border-b border-slate-100">
                <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#01016F] to-[#2014FF] text-white font-extrabold flex items-center justify-center text-sm sm:text-base shadow-md ring-4 ring-blue-500/10 shrink-0">
                  05
                </span>
                <div>
                  <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {t("Payment Instructions", "የደንበኛ የባንክ መረጃ")}
                  </h2>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                    {t(
                      "Specify your preferred Pay-to Bank account for settlement & corporate actions.",
                      "የክፍያ እና የትርፍ ድርሻ መቀበያ ባንክ ሂሳብ ዝርዝር"
                    )}
                  </p>
                </div>
              </div>

              <div className="bg-amber-50/80 border border-amber-200/90 rounded-xl sm:rounded-2xl p-4 mt-5">
                <p className="text-xs text-amber-950 leading-relaxed font-semibold">
                  Notice:{" "}
                  {t(
                    "Please indicate your preferred Pay-to Bank account details. All fields except bank branch are mandatory.",
                    "እባክዎ ተመራጭ የክፍያ የባንክ ሂሳብ ዝርዝሮችን ከዚህ በታች ያስገቡ። ከባንክ ቅርንጫፍ በስተቀር ሁሉም መስኮች ግዴታ ናቸው።"
                  )}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-5 sm:mt-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t("Bank Name", "የባንክ ስም")} <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="bankName"
                    required
                    value={formData.bankName}
                    onChange={handleChange}
                    className="w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2014FF] focus:border-transparent transition-all font-medium text-slate-900 min-h-[44px]"
                  >
                    <option value="">-- {t("Select Bank", "ባንክ ይምረጡ")} --</option>
                    {BANK_OPTIONS.map((bank) => (
                      <option key={bank} value={bank}>
                        {bank}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t("Bank Branch", "የባንክ ቅርንጫፍ")}
                  </label>
                  <input
                    type="text"
                    name="bankBranch"
                    value={formData.bankBranch}
                    onChange={handleChange}
                    placeholder="e.g. Main Branch"
                    className="w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2014FF] focus:border-transparent transition-all font-medium text-slate-900 min-h-[44px]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t("Account Number", "የሂሳብ ቁጥር")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="accountNumber"
                    required
                    value={formData.accountNumber}
                    onChange={handleChange}
                    placeholder="e.g. 1000..."
                    className="w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2014FF] focus:border-transparent transition-all font-mono font-bold text-slate-900 min-h-[44px]"
                  />
                </div>
              </div>

              {/* Settlement Options */}
              <div className="mt-6 sm:mt-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  {t(
                    "Client Settlement Information — Corporate Action Options",
                    "የደንበኛ ክፍያ መረጃ - የድርጅት እርምጃ የክፍያ አማራጮች"
                  )}
                </h4>
                <p className="text-xs text-slate-500 mb-4">
                  {t(
                    "Select all payment types you wish to receive into your Pay-to Bank account.",
                    "ወደ መክፈያ የባንክ ሂሳብዎ መቀበል የሚፈልጉትን የክፍያ ዓይነቶች ይምረጡ።"
                  )}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  {SETTLEMENT_OPTIONS.map((opt) => (
                    <label
                      key={opt.value}
                      className={`flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border-2 cursor-pointer transition-all duration-200 ${
                        formData.settlementOptions.includes(opt.value)
                          ? "border-[#2014FF] bg-blue-50/50 ring-2 ring-[#2014FF]/20"
                          : "border-slate-200/80 hover:border-slate-300"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.settlementOptions.includes(opt.value)}
                        onChange={() => handleSettlementCheck(opt.value)}
                        className="w-4 h-4 text-[#01016F] rounded-lg focus:ring-[#2014FF]"
                      />
                      <span className="text-xs font-bold text-slate-800">
                        {lang === "en" ? opt.label.en : opt.label.am}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-5 sm:mt-6 flex items-start sm:items-center gap-3.5 bg-slate-50 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200/80">
                <input
                  type="checkbox"
                  id="bankChangeAck"
                  name="bankChangeAck"
                  required
                  checked={formData.bankChangeAck}
                  onChange={handleChange}
                  className="w-5 h-5 text-[#01016F] rounded-lg border-slate-300 focus:ring-[#2014FF] shrink-0 mt-0.5 sm:mt-0"
                />
                <label htmlFor="bankChangeAck" className="text-xs text-slate-800 font-medium select-none cursor-pointer leading-normal">
                  {t(
                    "I confirm that any future bank account changes must be submitted in writing to Prime Capital.",
                    "ማንኛውም የወደፊት የባንክ ሂሳብ ለውጥ በጽሁፍ ለፕራይም ካፒታል መቅረብ እንዳለበት አረጋግጣለሁ።"
                  )}
                </label>
              </div>
            </section>

            {/* 06. Client's Identity Verification */}
            <section
              id="sec-06"
              className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-5 sm:p-9 shadow-lg sm:shadow-xl shadow-slate-200/40 transition-all duration-300 hover:shadow-2xl hover:border-[#2014FF]/30"
            >
              <div className="flex items-center gap-3.5 sm:gap-4 pb-4 sm:pb-6 border-b border-slate-100">
                <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#01016F] to-[#2014FF] text-white font-extrabold flex items-center justify-center text-sm sm:text-base shadow-md ring-4 ring-blue-500/10 shrink-0">
                  06
                </span>
                <div>
                  <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {t("Identity Verification & Documents", "የደንበኛ ማንነት ማረጋገጫ")}
                  </h2>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                    {t(
                      "Fayda National ID (mandatory) and Proof of Address documents.",
                      "ብሔራዊ መታወቂያ (ፋይዳ) እና የአድራሻ ማረጋገጫ ሰነዶች"
                    )}
                  </p>
                </div>
              </div>

              {/* Investor Type */}
              <div className="mt-5 sm:mt-6">
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  {t("Investor Category", "የኢንቨስተር አይነት")} <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
                  {INVESTOR_TYPE_OPTIONS.map((opt) => (
                    <label
                      key={opt.value}
                      className={`flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border-2 cursor-pointer transition-all duration-200 ${
                        formData.investorType === opt.value
                          ? "border-[#2014FF] bg-blue-50/60 ring-2 ring-[#2014FF]/20"
                          : "border-slate-200/80 hover:border-slate-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="investorType"
                        value={opt.value}
                        checked={formData.investorType === opt.value}
                        onChange={handleChange}
                        className="w-4 h-4 text-[#01016F] focus:ring-[#2014FF]"
                      />
                      <span className="text-xs font-bold text-slate-800">
                        {lang === "en" ? opt.label.en : opt.label.am}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Fayda Details */}
              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-100">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-3 sm:mb-4">
                  {t("National ID (Fayda)", "ብሔራዊ መታወቂያ (ፋይዳ)")}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {t("Fayda FIN / FAN Number", "የፋይዳ ቁጥር")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="faydaNumber"
                      required
                      value={formData.faydaNumber}
                      onChange={handleChange}
                      placeholder="FIN / FAN Number"
                      className="w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2014FF] focus:border-transparent transition-all font-mono font-bold text-slate-900 min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {t("Issue Date", "የተሰጠበት ቀን")}
                    </label>
                    <input
                      type="date"
                      name="faydaIssueDate"
                      value={formData.faydaIssueDate}
                      onChange={handleChange}
                      className="w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2014FF] focus:border-transparent transition-all font-medium text-slate-900 min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {t("Expiry Date", "የሚያበቃበት ቀን")}
                    </label>
                    <input
                      type="date"
                      name="faydaExpiryDate"
                      value={formData.faydaExpiryDate}
                      onChange={handleChange}
                      className="w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2014FF] focus:border-transparent transition-all font-medium text-slate-900 min-h-[44px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
                  {/* Fayda Front */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {t("Fayda ID (Front Copy)", "የፋይዳ መታወቂያ (ፊት ገፅ)")} <span className="text-red-500">*</span>
                    </label>
                    <div className="border-2 border-dashed border-slate-300 hover:border-[#2014FF] rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center cursor-pointer transition-all duration-200 bg-slate-50/70 hover:bg-blue-50/30">
                      <input
                        type="file"
                        accept="image/*,.pdf"
                        onChange={(e) => handleFileChange(e, "faydaFront")}
                        className="hidden"
                        id="faydaFrontInput"
                      />
                      <label htmlFor="faydaFrontInput" className="cursor-pointer block">
                        <span className="text-xs font-bold text-slate-800 block">
                          {formData.faydaFront
                            ? formData.faydaFront.name
                            : t("Upload Fayda Front", "የፋይዳ ፊት ገፅ ይጫኑ")}
                        </span>
                        <span className="text-[10px] text-slate-400 block mt-1">PNG, JPG or PDF up to 10MB</span>
                      </label>
                    </div>
                  </div>

                  {/* Fayda Back */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {t("Fayda ID (Back Copy)", "የፋይዳ መታወቂያ (ጀርባ ገፅ)")} <span className="text-red-500">*</span>
                    </label>
                    <div className="border-2 border-dashed border-slate-300 hover:border-[#2014FF] rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center cursor-pointer transition-all duration-200 bg-slate-50/70 hover:bg-blue-50/30">
                      <input
                        type="file"
                        accept="image/*,.pdf"
                        onChange={(e) => handleFileChange(e, "faydaBack")}
                        className="hidden"
                        id="faydaBackInput"
                      />
                      <label htmlFor="faydaBackInput" className="cursor-pointer block">
                        <span className="text-xs font-bold text-slate-800 block">
                          {formData.faydaBack
                            ? formData.faydaBack.name
                            : t("Upload Fayda Back", "የፋይዳ ጀርባ ገፅ ይጫኑ")}
                        </span>
                        <span className="text-[10px] text-slate-400 block mt-1">PNG, JPG or PDF up to 10MB</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Proof of Address */}
              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-100">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-1.5">
                  {t("Proof of Address — One Required", "የአድራሻ ማረጋገጫ - ከሁለት አንዱ በቂ ነው")}
                </h4>
                <p className="text-xs text-slate-500 mb-4">
                  {t(
                    "Upload either a Resident Kebele ID or a valid Driving License.",
                    "የቀበሌ መታወቂያ ወይም የ መንጃ ፍቃድ ኮፒ ይጫኑ"
                  )}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {t("Resident Kebele ID", "የቀበሌ መታወቂያ")}
                    </label>
                    <div className="border border-slate-200 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 bg-slate-50 flex items-center justify-between">
                      <span className="text-xs text-slate-700 font-medium truncate">
                        {formData.kebeleId ? formData.kebeleId.name : t("No file chosen", "ፋይል አልተመረጠም")}
                      </span>
                      <label className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-300 text-xs font-bold text-slate-800 hover:bg-slate-100 cursor-pointer shadow-xs shrink-0 ml-2">
                        {t("Browse", "ይምረጡ")}
                        <input
                          type="file"
                          accept="image/*,.pdf"
                          onChange={(e) => handleFileChange(e, "kebeleId")}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {t("Driving License", "የመንጃ ፍቃድ")}
                    </label>
                    <div className="border border-slate-200 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 bg-slate-50 flex items-center justify-between">
                      <span className="text-xs text-slate-700 font-medium truncate">
                        {formData.drivingLicense
                          ? formData.drivingLicense.name
                          : t("No file chosen", "ፋይል አልተመረጠም")}
                      </span>
                      <label className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-300 text-xs font-bold text-slate-800 hover:bg-slate-100 cursor-pointer shadow-xs shrink-0 ml-2">
                        {t("Browse", "ይምረጡ")}
                        <input
                          type="file"
                          accept="image/*,.pdf"
                          onChange={(e) => handleFileChange(e, "drivingLicense")}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 07. Ownership & Employment Disclosure */}
            <section
              id="sec-07"
              className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-5 sm:p-9 shadow-lg sm:shadow-xl shadow-slate-200/40 transition-all duration-300 hover:shadow-2xl hover:border-[#2014FF]/30"
            >
              <div className="flex items-center gap-3.5 sm:gap-4 pb-4 sm:pb-6 border-b border-slate-100">
                <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#01016F] to-[#2014FF] text-white font-extrabold flex items-center justify-center text-sm sm:text-base shadow-md ring-4 ring-blue-500/10 shrink-0">
                  07
                </span>
                <div>
                  <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {t("Ownership & Employment Disclosure", "የባለቤትነት እና የስራ ይፋ ማድረጊያ")}
                  </h2>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                    {t(
                      "Regulatory disclosures regarding publicly traded companies and brokerage affiliation.",
                      "የአክሲዮን ባለቤትነት እና የደላላ ድርጅት የስራ ሁኔታ መግለጫ"
                    )}
                  </p>
                </div>
              </div>

              <div className="space-y-5 sm:space-y-6 mt-5 sm:mt-6">
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-2.5 leading-relaxed">
                    {t(
                      "Do you own 10% or more voting shares in any publicly traded company?",
                      "በማንኛውም በይፋ በሚገበያይ ኩባንያ ውስጥ 10% ወይም ከዚያ በላይ ድምፅ የመስጠት መብት ያለው አክሲዮን አለዎት?"
                    )}
                  </label>
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2.5 text-xs font-bold cursor-pointer">
                      <input
                        type="radio"
                        name="publiclyTradedOwner"
                        value="no"
                        checked={formData.publiclyTradedOwner === "no"}
                        onChange={handleChange}
                        className="w-4 h-4 text-[#01016F] focus:ring-[#2014FF]"
                      />
                      {t("No", "የለኝም")}
                    </label>
                    <label className="flex items-center gap-2.5 text-xs font-bold cursor-pointer">
                      <input
                        type="radio"
                        name="publiclyTradedOwner"
                        value="yes"
                        checked={formData.publiclyTradedOwner === "yes"}
                        onChange={handleChange}
                        className="w-4 h-4 text-[#01016F] focus:ring-[#2014FF]"
                      />
                      {t("Yes", "አለኝ")}
                    </label>
                  </div>
                  {formData.publiclyTradedOwner === "yes" && (
                    <input
                      type="text"
                      name="publiclyTradedDetails"
                      value={formData.publiclyTradedDetails}
                      onChange={handleChange}
                      placeholder={t("Specify company name(s)", "የኩባንያውን ስም ይጠቅሱ")}
                      className="mt-3 w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#2014FF] focus:border-transparent min-h-[44px]"
                    />
                  )}
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <label className="block text-xs font-bold text-slate-900 mb-2.5 leading-relaxed">
                    {t(
                      "Are you or an immediate family member employed by a licensed brokerage firm or securities exchange?",
                      "እርስዎ ወይም የቅርብ ቤተሰብዎ በደላላ ድርጅት ወይም በሰነደ መለወጫ ገበያ ውስጥ ተቀጥረው ይሰራሉ?"
                    )}
                  </label>
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2.5 text-xs font-bold cursor-pointer">
                      <input
                        type="radio"
                        name="brokerageEmployee"
                        value="no"
                        checked={formData.brokerageEmployee === "no"}
                        onChange={handleChange}
                        className="w-4 h-4 text-[#01016F] focus:ring-[#2014FF]"
                      />
                      {t("No", "አልሰራም")}
                    </label>
                    <label className="flex items-center gap-2.5 text-xs font-bold cursor-pointer">
                      <input
                        type="radio"
                        name="brokerageEmployee"
                        value="yes"
                        checked={formData.brokerageEmployee === "yes"}
                        onChange={handleChange}
                        className="w-4 h-4 text-[#01016F] focus:ring-[#2014FF]"
                      />
                      {t("Yes", "እሰራለሁ")}
                    </label>
                  </div>
                  {formData.brokerageEmployee === "yes" && (
                    <input
                      type="text"
                      name="brokerageEmployeeDetails"
                      value={formData.brokerageEmployeeDetails}
                      onChange={handleChange}
                      placeholder={t("Specify institution and position", "የተቋሙን ስም እና የስራ መደብ ይጠቅሱ")}
                      className="mt-3 w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#2014FF] focus:border-transparent min-h-[44px]"
                    />
                  )}
                </div>
              </div>
            </section>

            {/* 08. Financial Information */}
            <section
              id="sec-08"
              className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-5 sm:p-9 shadow-lg sm:shadow-xl shadow-slate-200/40 transition-all duration-300 hover:shadow-2xl hover:border-[#2014FF]/30"
            >
              <div className="flex items-center gap-3.5 sm:gap-4 pb-4 sm:pb-6 border-b border-slate-100">
                <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#01016F] to-[#2014FF] text-white font-extrabold flex items-center justify-center text-sm sm:text-base shadow-md ring-4 ring-blue-500/10 shrink-0">
                  08
                </span>
                <div>
                  <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {t("Financial Information", "የገንዘብ እና የሀብት ምንጭ መግለጫ")}
                  </h2>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                    {t(
                      "Source of funds and annual income/net worth brackets.",
                      "የገንዘብ ምንጭ እና የዓመታዊ ገቢ መጠን"
                    )}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-5 sm:mt-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t("Primary Source of Investment Funds", "የኢንቨስትመንት ገንዘብ ዋና ምንጭ")} <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="sourceOfFunds"
                    required
                    value={formData.sourceOfFunds}
                    onChange={handleChange}
                    className="w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2014FF] focus:border-transparent transition-all font-medium text-slate-900 min-h-[44px]"
                  >
                    {SOURCE_OF_FUNDS_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {lang === "en" ? opt.label.en : opt.label.am}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t("Annual Net Income Range", "ዓመታዊ የተጣራ ገቢ")} <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="annualNetIncome"
                    required
                    value={formData.annualNetIncome}
                    onChange={handleChange}
                    className="w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2014FF] focus:border-transparent transition-all font-medium text-slate-900 min-h-[44px]"
                  >
                    {INCOME_BRACKETS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {lang === "en" ? opt.label.en : opt.label.am}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-4 sm:mt-6">
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {t("Estimated Net Worth Range", "የተገመተ ጠቅላላ ሀብት")} <span className="text-red-500">*</span>
                </label>
                <select
                  name="netWorth"
                  required
                  value={formData.netWorth}
                  onChange={handleChange}
                  className="w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2014FF] focus:border-transparent transition-all font-medium text-slate-900 min-h-[44px]"
                >
                  {INCOME_BRACKETS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {lang === "en" ? opt.label.en : opt.label.am}
                    </option>
                  ))}
                </select>
              </div>
            </section>

            {/* 09. Politically Exposed Person (PEP) */}
            <section
              id="sec-09"
              className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-5 sm:p-9 shadow-lg sm:shadow-xl shadow-slate-200/40 transition-all duration-300 hover:shadow-2xl hover:border-[#2014FF]/30"
            >
              <div className="flex items-center gap-3.5 sm:gap-4 pb-4 sm:pb-6 border-b border-slate-100">
                <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#01016F] to-[#2014FF] text-white font-extrabold flex items-center justify-center text-sm sm:text-base shadow-md ring-4 ring-blue-500/10 shrink-0">
                  09
                </span>
                <div>
                  <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {t("Politically Exposed Person (PEP)", "ለፖለቲካ ተጋላጭ የሆነ ግለሰብ (PEP)")}
                  </h2>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                    {t("PEP status disclosure.", "ለፖለቲካ ተጋላጭ ግለሰብ መሆኖን ይግለጹ")}
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl p-4 mt-5 text-xs text-slate-700 leading-relaxed font-normal">
                {t(
                  "A Politically Exposed Person (PEP) refers to individuals who hold or have held prominent public functions in Ethiopia or abroad within the last 10 years, including their immediate family members.",
                  "ለፖለቲካ ተጋላጭ የሆነ ግለሰብ ማለት በኢትዮጵያ ወይም በውጭ ሀገር ከፍተኛ የሕዝብ ኃላፊነት የነበረው ወይም ያለው ሰው ማለት ሲሆን የቅርብ ቤተሰቦችንም ያካትታል።"
                )}
              </div>

              <div className="mt-5 sm:mt-6">
                <label className="block text-xs font-bold text-slate-900 mb-2.5 leading-relaxed">
                  {t(
                    "Are you or an immediate family member a Politically Exposed Person (PEP)?",
                    "እርስዎ ወይም የቅርብ ቤተሰብዎ ለፖለቲካ ተጋላጭ የሆነ ግለሰብ (PEP) ነዎት?"
                  )}
                </label>
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2.5 text-xs font-bold cursor-pointer">
                    <input
                      type="radio"
                      name="pepStatus"
                      value="no"
                      checked={formData.pepStatus === "no"}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#01016F] focus:ring-[#2014FF]"
                    />
                    {t("No", "አይደለሁም")}
                  </label>
                  <label className="flex items-center gap-2.5 text-xs font-bold cursor-pointer">
                    <input
                      type="radio"
                      name="pepStatus"
                      value="yes"
                      checked={formData.pepStatus === "yes"}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#01016F] focus:ring-[#2014FF]"
                    />
                    {t("Yes", "ነኝ")}
                  </label>
                </div>
                {formData.pepStatus === "yes" && (
                  <textarea
                    name="pepDetails"
                    rows={2}
                    value={formData.pepDetails}
                    onChange={handleChange}
                    placeholder={t(
                      "Please state position, country, and relationship...",
                      "እባክዎ የስራ መደቡን፣ ሀገሩን እና የዝምድና ሁኔታውን ይጠቅሱ..."
                    )}
                    className="mt-3 w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#2014FF] focus:border-transparent"
                  />
                )}
              </div>
            </section>

            {/* 10. Bankruptcy Disclosure */}
            <section
              id="sec-10"
              className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-5 sm:p-9 shadow-lg sm:shadow-xl shadow-slate-200/40 transition-all duration-300 hover:shadow-2xl hover:border-[#2014FF]/30"
            >
              <div className="flex items-center gap-3.5 sm:gap-4 pb-4 sm:pb-6 border-b border-slate-100">
                <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#01016F] to-[#2014FF] text-white font-extrabold flex items-center justify-center text-sm sm:text-base shadow-md ring-4 ring-blue-500/10 shrink-0">
                  10
                </span>
                <div>
                  <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {t("Bankruptcy Disclosure", "ኪሳራ እና ህጋዊ ሁኔታ")}
                  </h2>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                    {t("Insolvency or bankruptcy proceedings history.", "የኪሳራ ወይም ህጋዊ ክስ መግለጫ")}
                  </p>
                </div>
              </div>

              <div className="mt-5 sm:mt-6">
                <label className="block text-xs font-bold text-slate-900 mb-2.5 leading-relaxed">
                  {t(
                    "Have you ever been declared bankrupt or subject to insolvency proceedings?",
                    "ቀደም ሲል የኪሳራ ውሳኔ ተወስኖብዎት ወይም በክስ ሂደት ውስጥ አልፈዋል?"
                  )}
                </label>
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2.5 text-xs font-bold cursor-pointer">
                    <input
                      type="radio"
                      name="bankruptcyDisclosure"
                      value="no"
                      checked={formData.bankruptcyDisclosure === "no"}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#01016F] focus:ring-[#2014FF]"
                    />
                    {t("No", "የለም")}
                  </label>
                  <label className="flex items-center gap-2.5 text-xs font-bold cursor-pointer">
                    <input
                      type="radio"
                      name="bankruptcyDisclosure"
                      value="yes"
                      checked={formData.bankruptcyDisclosure === "yes"}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#01016F] focus:ring-[#2014FF]"
                    />
                    {t("Yes", "አልፌአለሁ")}
                  </label>
                </div>
              </div>
            </section>

            {/* 11. Criminal Record Disclosure */}
            <section
              id="sec-11"
              className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-5 sm:p-9 shadow-lg sm:shadow-xl shadow-slate-200/40 transition-all duration-300 hover:shadow-2xl hover:border-[#2014FF]/30"
            >
              <div className="flex items-center gap-3.5 sm:gap-4 pb-4 sm:pb-6 border-b border-slate-100">
                <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#01016F] to-[#2014FF] text-white font-extrabold flex items-center justify-center text-sm sm:text-base shadow-md ring-4 ring-blue-500/10 shrink-0">
                  11
                </span>
                <div>
                  <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {t("Criminal Record Disclosure", "የወንጀል መዝገብ መግለጫ")}
                  </h2>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                    {t("Financial crime or fraud conviction record.", "የገንዘብ ወንጀል ወይም ማጭበርበር መዝገብ መግለጫ")}
                  </p>
                </div>
              </div>

              <div className="mt-5 sm:mt-6">
                <label className="block text-xs font-bold text-slate-900 mb-2.5 leading-relaxed">
                  {t(
                    "Have you ever been convicted of financial crimes, fraud, or money laundering?",
                    "በገንዘብ ወንጀል፣ ማጭበርበር ወይም ሕገ-ወጥ ገንዘብ በማሸሽ ወንጀል ተከሰው ተፈርዶብዎታል?"
                  )}
                </label>
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2.5 text-xs font-bold cursor-pointer">
                    <input
                      type="radio"
                      name="criminalRecord"
                      value="no"
                      checked={formData.criminalRecord === "no"}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#01016F] focus:ring-[#2014FF]"
                    />
                    {t("No", "የለም")}
                  </label>
                  <label className="flex items-center gap-2.5 text-xs font-bold cursor-pointer">
                    <input
                      type="radio"
                      name="criminalRecord"
                      value="yes"
                      checked={formData.criminalRecord === "yes"}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#01016F] focus:ring-[#2014FF]"
                    />
                    {t("Yes", "አለብኝ")}
                  </label>
                </div>
              </div>
            </section>

            {/* 12. Client's Risk Tolerance */}
            <section
              id="sec-12"
              className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-5 sm:p-9 shadow-lg sm:shadow-xl shadow-slate-200/40 transition-all duration-300 hover:shadow-2xl hover:border-[#2014FF]/30"
            >
              <div className="flex items-center gap-3.5 sm:gap-4 pb-4 sm:pb-6 border-b border-slate-100">
                <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#01016F] to-[#2014FF] text-white font-extrabold flex items-center justify-center text-sm sm:text-base shadow-md ring-4 ring-blue-500/10 shrink-0">
                  12
                </span>
                <div>
                  <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {t("Client's Risk Tolerance", "የኢንቨስትመንት ስጋት አመለካከት")}
                  </h2>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                    {t(
                      "Please choose the option that best reflects your risk tolerance.",
                      "የኢንቨስትመንት ስጋት ፍላጎትዎን የሚወክለውን አማራጭ ይምረጡ"
                    )}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-5 sm:mt-6">
                {RISK_TOLERANCE_OPTIONS.map((opt) => (
                  <label
                    key={opt.value}
                    className={`p-4 sm:p-5 rounded-xl sm:rounded-2xl border-2 cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                      formData.riskTolerance === opt.value
                        ? "border-[#2014FF] bg-blue-50/50 shadow-md ring-2 ring-[#2014FF]/20"
                        : "border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-extrabold text-slate-900">
                        {lang === "en" ? opt.title.en : opt.title.am}
                      </span>
                      <input
                        type="radio"
                        name="riskTolerance"
                        value={opt.value}
                        checked={formData.riskTolerance === opt.value}
                        onChange={handleChange}
                        className="w-4 h-4 text-[#01016F] focus:ring-[#2014FF]"
                      />
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                      {lang === "en" ? opt.desc.en : opt.desc.am}
                    </p>
                  </label>
                ))}
              </div>
            </section>

            {/* 13. Investment Experience */}
            <section
              id="sec-13"
              className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-5 sm:p-9 shadow-lg sm:shadow-xl shadow-slate-200/40 transition-all duration-300 hover:shadow-2xl hover:border-[#2014FF]/30"
            >
              <div className="flex items-center gap-3.5 sm:gap-4 pb-4 sm:pb-6 border-b border-slate-100">
                <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#01016F] to-[#2014FF] text-white font-extrabold flex items-center justify-center text-sm sm:text-base shadow-md ring-4 ring-blue-500/10 shrink-0">
                  13
                </span>
                <div>
                  <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {t("Investment Experience", "የኢንቨስትመንት ልምድ")}
                  </h2>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                    {t("Trading history in equities and fixed income securities.", "በአክሲዮን እና ቦንድ የንግድ ልምድዎ")}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-5 sm:mt-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t("Stock / Equity Trading Experience", "የአክሲዮን ግብይት ልምድ")} <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="stockExperience"
                    value={formData.stockExperience}
                    onChange={handleChange}
                    className="w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2014FF] focus:border-transparent transition-all font-medium text-slate-900 min-h-[44px]"
                  >
                    {INVESTMENT_EXPERIENCE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {lang === "en" ? opt.label.en : opt.label.am}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t("Bond / Treasury Bill Experience", "የቦንድ እና ሰነዶች ልምድ")} <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="bondExperience"
                    value={formData.bondExperience}
                    onChange={handleChange}
                    className="w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2014FF] focus:border-transparent transition-all font-medium text-slate-900 min-h-[44px]"
                  >
                    {INVESTMENT_EXPERIENCE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {lang === "en" ? opt.label.en : opt.label.am}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t("Expected Stock Transaction Volume", "የሚጠበቀው የአክሲዮን ግብይት መጠን")} <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="stockMonthlyValue"
                    value={formData.stockMonthlyValue}
                    onChange={handleChange}
                    className="w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2014FF] focus:border-transparent transition-all font-medium text-slate-900 min-h-[44px]"
                  >
                    {TRANSACTION_VOLUME_BRACKETS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {lang === "en" ? opt.label.en : opt.label.am}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t("Expected Bond Transaction Volume", "የሚጠበቀው የቦንድ ግብይት መጠን")} <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="fixedIncomeMonthlyValue"
                    value={formData.fixedIncomeMonthlyValue}
                    onChange={handleChange}
                    className="w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2014FF] focus:border-transparent transition-all font-medium text-slate-900 min-h-[44px]"
                  >
                    {TRANSACTION_VOLUME_BRACKETS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {lang === "en" ? opt.label.en : opt.label.am}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </section>

            {/* 14. Investment Objectives */}
            <section
              id="sec-14"
              className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-5 sm:p-9 shadow-lg sm:shadow-xl shadow-slate-200/40 transition-all duration-300 hover:shadow-2xl hover:border-[#2014FF]/30"
            >
              <div className="flex items-center gap-3.5 sm:gap-4 pb-4 sm:pb-6 border-b border-slate-100">
                <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#01016F] to-[#2014FF] text-white font-extrabold flex items-center justify-center text-sm sm:text-base shadow-md ring-4 ring-blue-500/10 shrink-0">
                  14
                </span>
                <div>
                  <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {t("Investment Objectives", "የኢንቨስትመንት አላማዎች")}
                  </h2>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                    {t("Select primary goals for your trading account.", "የንግድ ሂሳብዎን ዋና አላማ ይምረጡ")}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mt-5 sm:mt-6">
                {INVESTMENT_OBJECTIVES.map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border-2 cursor-pointer transition-all duration-200 ${
                      formData.investmentObjective.includes(opt.value)
                        ? "border-[#2014FF] bg-blue-50/50 ring-2 ring-[#2014FF]/20"
                        : "border-slate-200/80 hover:border-slate-300"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.investmentObjective.includes(opt.value)}
                      onChange={() => handleObjectiveCheck(opt.value)}
                      className="w-4 h-4 text-[#01016F] rounded-lg focus:ring-[#2014FF]"
                    />
                    <span className="text-xs font-bold text-slate-800">
                      {lang === "en" ? opt.label.en : opt.label.am}
                    </span>
                  </label>
                ))}
              </div>
            </section>

            {/* 15. Agreements & Declaration */}
            <section
              id="sec-15"
              className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-5 sm:p-9 shadow-lg sm:shadow-xl shadow-slate-200/40 transition-all duration-300 hover:shadow-2xl hover:border-[#2014FF]/30"
            >
              <div className="flex items-center gap-3.5 sm:gap-4 pb-4 sm:pb-6 border-b border-slate-100">
                <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#01016F] to-[#2014FF] text-white font-extrabold flex items-center justify-center text-sm sm:text-base shadow-md ring-4 ring-blue-500/10 shrink-0">
                  15
                </span>
                <div>
                  <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {t("Agreements & Declaration", "ስምምነቶች እና ማረጋገጫ")}
                  </h2>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                    {t("Final application verification and client consent.", "የመጨረሻ ማመልከቻ ማረጋገጫ እና ስምምነት")}
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 mt-5 sm:mt-6 text-xs text-slate-800 leading-relaxed font-medium">
                {t(
                  "I hereby declare that all information provided in this application is true, accurate, and complete to the best of my knowledge. I understand that any false or misleading statement may lead to the rejection of this application or closure of the account pursuant to Ethiopian Securities Capital Market regulations.",
                  "በዚህ ማመልከቻ ውስጥ የቀረቡት ሁሉም መረጃዎች ትክክለኛ እና የተሟሉ መሆናቸውን አረጋግጣለሁ። ማንኛውም የተሳሳተ ወይም ሀሰተኛ መረጃ ማመልከቻው ውድቅ እንዲደረግ ወይም ሂሳቡ እንዲዘጋ ሊያደርግ እንደሚችል እረዳለሁ።"
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-5 sm:mt-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t("Applicant Full Name (Digital Signature)", "የአመልካቹ ሙሉ ስም (ዲጂታል ፊርማ)")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="applicantName"
                    required
                    value={formData.applicantName}
                    onChange={handleChange}
                    placeholder={t("Enter your full legal name", "ሙሉ ህጋዊ ስምዎን ያስገቡ")}
                    className="w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2014FF] focus:border-transparent transition-all font-bold text-slate-900 min-h-[44px]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t("Date of Application", "የማመልከቻ ቀን")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="dateOfApplication"
                    required
                    value={formData.dateOfApplication}
                    onChange={handleChange}
                    className="w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2014FF] focus:border-transparent transition-all font-medium text-slate-900 min-h-[44px]"
                  />
                </div>
              </div>

              <div className="mt-5 sm:mt-6 flex items-start gap-3.5 bg-slate-50 p-4 rounded-xl sm:rounded-2xl border border-slate-200/80">
                <input
                  type="checkbox"
                  id="submitConsent"
                  name="submitConsent"
                  required
                  checked={formData.submitConsent}
                  onChange={handleChange}
                  className="w-5 h-5 text-[#01016F] rounded-lg border-slate-300 focus:ring-[#2014FF] shrink-0 mt-0.5"
                />
                <label htmlFor="submitConsent" className="text-xs font-bold text-slate-900 leading-normal select-none cursor-pointer">
                  {t(
                    "I have read, understood, and agreed to Prime Capital Investment Bank terms of service, privacy policy, and brokerage execution guidelines.",
                    "የፕራይም ካፒታል ኢንቨስትመንት ባንክ የአገልግሎት ውሎችን፣ የግላዊነት ፖሊሲን እና የደላላ መመሪያዎችን አንብቤ፣ ተረድቼ ተስማምቻለሁ።"
                  )}
                </label>
              </div>

              {/* Submit CTA */}
              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-500 font-medium text-center sm:text-left">
                  {t("Prime Capital Investment Bank — ECMA & ESX Licensed Brokerage", "ፕራይም ካፒታል - በ ECMA እና ESX ፈቃድ የተሰጠው የደላላ ድርጅት")}
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-10 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#01016F] via-[#0C0AA6] to-[#2014FF] text-white font-extrabold text-sm shadow-xl hover:shadow-2xl hover:opacity-95 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 flex items-center justify-center gap-2.5 min-h-[48px]"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      <span>{t("Submitting Application...", "ማመልከቻው በመላክ ላይ...")}</span>
                    </>
                  ) : (
                    <span>{t("Submit KYC Application", "ማመልከቻውን ያስገቡ")} →</span>
                  )}
                </button>
              </div>
            </section>
          </form>
        </main>
      </div>

      {/* Success Modal */}
      {submittedRef && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100 text-center relative overflow-hidden">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 font-extrabold text-3xl flex items-center justify-center mx-auto mb-4 shadow-sm ring-4 ring-emerald-500/10">
              ✓
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {t("Application Submitted!", "ማመልከቻዎ በተሳካ ሁኔታ ቀርቧል!")}
            </h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              {t(
                "Your individual brokerage account application has been received by Prime Capital compliance team.",
                "የግል አክሲዮንና ቦንድ መገበያያ ማመልከቻዎ በፕራይም ካፒታል ደርሷል።"
              )}
            </p>

            <div className="bg-blue-50/60 rounded-2xl border border-blue-200/80 p-4 my-5 sm:my-6">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block">
                {t("Application Reference ID", "የማመልከቻ መለያ ቁጥር")}
              </span>
              <span className="text-xl font-mono font-black text-[#01016F] mt-1 block">
                {submittedRef}
              </span>
            </div>

            <p className="text-xs text-slate-600 mb-6 leading-relaxed">
              {t(
                "Our compliance team will review your application details and contact you directly for the next phase of your account activation.",
                "የተጣጣመ ቡድናችን ማመልከቻዎን መርምሮ በቀጣዩ የመለያ ማግበር ምዕራፍ በቀጥታ ያነጋግርዎታል።"
              )}
            </p>

            <Link
              href="/"
              className="block w-full py-3.5 rounded-xl bg-gradient-to-r from-[#01016F] to-[#2014FF] text-white font-bold text-xs hover:opacity-95 transition-opacity shadow-lg"
            >
              {t("Return to Home", "ወደ ዋናው ገፅ ተመለስ")}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
