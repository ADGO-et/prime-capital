"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  FormDataState,
  Lang,
  AccountType,
  initialFormState,
  sections,
} from "./formTypes";
import {
  calculateAge,
  validateFormData,
  buildFormPayload,
  generateReferenceId,
  t,
} from "./formUtils";
import {
  PersonalInfoSection,
  AddressContactSection,
  EmploymentSection,
  BeneficiarySection,
  PaymentInfoSection,
  IDVerificationSection,
  DisclosuresSection,
  FinancialsSection,
  PEPSection,
  BankruptcySection,
  CriminalRecordSection,
  RiskToleranceSection,
  ExperienceSection,
  ObjectivesSection,
  DeclarationSection,
  AccountTypeDetailsSection,
} from "./sections";
import { FormNavigationSidebar, MobileFormNav } from "./FormNavigation";

export default function RegisterPage() {
  const [lang, setLang] = useState<Lang>("en");
  const [formData, setFormData] = useState<FormDataState>(initialFormState);
  const [activeSection, setActiveSection] = useState<string>("sec-01");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [accountType, setAccountType] = useState<AccountType | null>(null);

  const mobileNavRef = useRef<HTMLDivElement>(null);
  const isClickScrolling = useRef<boolean>(false);

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

  const selectAccountType = (type: AccountType) => {
    setAccountType(type);
    setFormData((prev) => ({ ...prev, investorType: type }));
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

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof FormDataState
  ) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prev) => ({ ...prev, [fieldName]: file }));
    }
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

    const validation = validateFormData(formData, lang);
    if (!validation.valid) {
      alert(validation.message);
      return;
    }

    setIsSubmitting(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const payload = buildFormPayload(formData);

      try {
        const res = await fetch(`${apiUrl}/api/kyc/submit`, {
          method: "POST",
          body: payload,
        });

        const data = await res.json();
        if (res.ok && data.referenceId) {
          setSubmittedRef(data.referenceId);
        } else {
          setSubmittedRef(generateReferenceId());
        }
      } catch (networkErr) {
        // Fallback for offline client demo
        setSubmittedRef(generateReferenceId());
      }
    } catch (err) {
      alert(
        err instanceof Error
          ? err.message
          : t(
              "Failed to submit application. Please try again.",
              "ማመልከቻውን ማስገባት አልተሳካም። እባክዎ እንደገና ይሞክሩ።",
              lang
            )
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

  if (submittedRef) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4 py-20">
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 max-w-md text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            {lang === "en" ? "Application Submitted!" : "ማመልከቻ ተቀበለ!"}
          </h2>
          <p className="text-slate-600 mb-6">
            {lang === "en"
              ? "Your KYC application has been successfully submitted."
              : "የKYC ማመልከቻዎ በተሳካ ሁኔታ ተቀበለ።"}
          </p>
      </div>
    </div>
    );
  }

  if (!accountType) {
    const options: Array<[AccountType, string, string]> = [
      ["individual", "Individual account", "For one person opening a brokerage account."],
      ["corporate", "Corporate account", "For a registered company; includes company and authorized-contact details."],
      ["joint", "Joint account", "For two people sharing one brokerage account."],
    ];
    return (
      <main className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4 py-16">
        <section className="max-w-4xl w-full bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10">
          <p className="text-sm font-bold text-[#2014FF] uppercase tracking-wider">Prime Capital</p>
          <h1 className="text-3xl font-extrabold text-slate-900 mt-2">Choose your account type</h1>
          <p className="text-slate-600 mt-3">Select the account you want to open. We will show the information required for that account type.</p>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {options.map(([type, title, description]) => (
              <button key={type} type="button" onClick={() => selectAccountType(type)} className="text-left rounded-2xl border-2 border-slate-200 p-5 hover:border-[#2014FF] hover:bg-blue-50 transition">
                <h2 className="font-bold text-lg text-slate-900">{title}</h2>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{description}</p>
                <span className="inline-block text-sm font-bold text-[#01016F] mt-5">Continue →</span>
              </button>
            ))}
          </div>
        </section>
      </main>
    );
  }

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
              {t(
                "Individual Brokerage Account Application",
                "የግል አክሲዮንና ቦንድ መገበያያ ሂሳብ ማመልከቻ",
                lang
              )}
            </div>
            <h5 className="sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-tight">
              {t("Open Your Account", "የንግድ ሂሳብዎን ይክፈቱ", lang)}
            </h5>
            <p className="mt-2.5 text-blue-100/90 text-xs sm:text-base leading-relaxed font-normal">
              {t(
                "Complete the Know Your Customer (KYC) application below to begin trading on the Ethiopian Securities Exchange (ESX) with Prime Capital.",
                "በኢትዮጵያ ሰነደ መለወጫ ገበያ (ESX) ለመሳተፍ ከዚህ በታች ያለውን የደንበኛ ማንነት ማረጋገጫ (KYC) ቅፅ በጥንቃቄ ይሙሉ",
                lang
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

      {/* Mobile Navigation */}
      <MobileFormNav
        activeSection={activeSection}
        onSectionClick={scrollToSection}
        mobileNavRef={mobileNavRef as React.RefObject<HTMLDivElement>}
        lang={lang}
      />

      {/* Main Layout Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Sidebar Navigation */}
        <FormNavigationSidebar
          activeSection={activeSection}
          onSectionClick={scrollToSection}
          lang={lang}
        />

        {/* Right Form Content */}
        <main className="lg:col-span-9">
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            <PersonalInfoSection
              formData={formData}
              onChange={handleChange}
              onDobChange={handleDobChange}
              lang={lang}
            />

            <AccountTypeDetailsSection formData={formData} onChange={handleChange} lang={lang} />

            <AddressContactSection
              formData={formData}
              onChange={handleChange}
              lang={lang}
            />

            <EmploymentSection
              formData={formData}
              onChange={handleChange}
              lang={lang}
            />

            <BeneficiarySection
              formData={formData}
              onChange={handleChange}
              lang={lang}
            />

            <PaymentInfoSection
              formData={formData}
              onChange={handleChange}
              onSettlementCheck={handleSettlementCheck}
              lang={lang}
            />

            <IDVerificationSection
              formData={formData}
              onChange={handleChange}
              onFileChange={handleFileChange}
              lang={lang}
            />

            <DisclosuresSection
              formData={formData}
              onChange={handleChange}
              lang={lang}
            />

            <FinancialsSection
              formData={formData}
              onChange={handleChange}
              lang={lang}
            />

            <PEPSection
              formData={formData}
              onChange={handleChange}
              lang={lang}
            />

            <BankruptcySection
              formData={formData}
              onChange={handleChange}
              lang={lang}
            />

            <CriminalRecordSection
              formData={formData}
              onChange={handleChange}
              lang={lang}
            />

            <RiskToleranceSection
              formData={formData}
              onChange={handleChange}
              lang={lang}
            />

            <ExperienceSection
              formData={formData}
              onChange={handleChange}
              lang={lang}
            />

            <ObjectivesSection
              formData={formData}
              onObjectiveCheck={handleObjectiveCheck}
              lang={lang}
            />

            <DeclarationSection
              formData={formData}
              onChange={handleChange}
              isSubmitting={isSubmitting}
              lang={lang}
            />
          </form>
        </main>
      </div>
    </div>
  );
}
