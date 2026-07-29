import React from "react";
import { FormDataState, Lang } from "../formTypes";
import { SectionHeader, SectionContainer, TextInput } from "../SharedComponents";

interface DeclarationSectionProps {
  formData: FormDataState;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSubmitting: boolean;
  lang: Lang;
}

export const DeclarationSection: React.FC<DeclarationSectionProps> = ({
  formData,
  onChange,
  isSubmitting,
  lang,
}) => {
  return (
    <SectionContainer id="sec-15">
      <SectionHeader
        num="15"
        titleEn="Declaration & Consent"
        titleAm="ስምምነቶች"
        descEn="Review, sign, and submit your application."
        descAm="ማመልከቻዎን ይገምግሙ እና ያስገቡ"
        lang={lang}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-5 sm:mt-6">
        <TextInput
          label={lang === "en" ? "Applicant Name" : "ገበያ ስም"}
          name="applicantName"
          required
          value={formData.applicantName}
          onChange={onChange}
          placeholder={lang === "en" ? "Sign with your full name" : "ሙሉ ስምዎን ይቅረጡ"}
        />
        <TextInput
          label={lang === "en" ? "Date of Application" : "ማመልከቻ ታሪክ"}
          name="dateOfApplication"
          type="date"
          required
          value={formData.dateOfApplication}
          onChange={onChange}
        />
      </div>

      <div className="bg-blue-50/80 border border-blue-200/90 rounded-xl sm:rounded-2xl p-4 sm:p-5 mt-5 sm:mt-6">
        <h3 className="text-sm font-bold text-blue-950 mb-3.5">
          {lang === "en" ? "Declaration" : "ስምምነት"}
        </h3>
        <ul className="text-xs text-blue-950 space-y-2.5 leading-relaxed font-medium list-disc list-inside">
          <li>
            {lang === "en"
              ? "I certify that all information provided is accurate and complete."
              : "በዚህ ማመልከቻ ላይ የተሰጡ ሁሉም መረጃዎች ትክክል እና ሙሉ ናቸው."}
          </li>
          <li>
            {lang === "en"
              ? "I understand the risks associated with securities trading."
              : "የሥቆች ገበያ ስጋት ሁኔታዎችን ተረድቻለሁ።"}
          </li>
          <li>
            {lang === "en"
              ? "I have read and understood the Terms and Conditions."
              : "ሁሉንም ሁኔታዎች ቀርጨዋለሁ በመረዳት።"}
          </li>
          <li>
            {lang === "en"
              ? "I authorize Prime Capital to collect and verify my information."
              : "ፕሪም ካፒታል ለማረጋገጡ ተሰጠዋለሁ።"}
          </li>
        </ul>
      </div>

      <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-100">
        <label className="flex items-start gap-3 p-3 sm:gap-3.5 sm:p-4 rounded-xl border-2 border-slate-200/80 bg-slate-50/70 cursor-pointer hover:border-[#2014FF]/50 transition-all">
          <input
            type="checkbox"
            id="submitConsent"
            name="submitConsent"
            checked={formData.submitConsent}
            onChange={onChange}
            className="w-5 h-5 text-[#01016F] rounded-lg focus:ring-[#2014FF] shrink-0 mt-0.5"
          />
          <label htmlFor="submitConsent" className="text-xs text-slate-700 font-medium select-none cursor-pointer leading-relaxed">
            {lang === "en"
              ? "I hereby declare that the information provided is true, accurate, and complete to the best of my knowledge. I consent to the collection, use, and processing of my personal data as outlined in the Privacy Policy."
              : "በዚህ ማመልከቻ ከእኔ ስለ ሰጠሁት ሁሉ መረጃ ትክክል፣ ሙሉ እና ንጹህ ነው። ነፃነት መጠበቅ ሁኔታዎቹን ተስማምተዋል።"}
          </label>
        </label>
      </div>

      <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-100 flex gap-3">
        <button
          type="submit"
          disabled={isSubmitting || !formData.submitConsent}
          className={`w-full px-6 py-4 sm:py-3.5 rounded-xl sm:rounded-2xl font-bold text-sm transition-all ${
            isSubmitting || !formData.submitConsent
              ? "bg-slate-200 text-slate-400 cursor-not-allowed"
              : "bg-gradient-to-r from-[#01016F] to-[#2014FF] text-white hover:shadow-lg hover:shadow-blue-600/30 active:scale-[0.98]"
          }`}
        >
          {isSubmitting
            ? lang === "en"
              ? "Submitting..."
              : "ያስገባ ይላል..."
            : lang === "en"
            ? "Submit Application"
            : "ማመልከቻ ያስገቡ"}
        </button>
      </div>
    </SectionContainer>
  );
};
