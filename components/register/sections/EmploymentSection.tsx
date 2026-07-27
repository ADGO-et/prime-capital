import React from "react";
import { FormDataState, Lang } from "../formTypes";
import { SectionHeader, SectionContainer } from "../SharedComponents";
import { EMPLOYMENT_STATUS_OPTIONS } from "@/lib/kycFormFields";

interface EmploymentSectionProps {
  formData: FormDataState;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  lang: Lang;
}

export const EmploymentSection: React.FC<EmploymentSectionProps> = ({
  formData,
  onChange,
  lang,
}) => {
  return (
    <SectionContainer id="sec-03">
      <SectionHeader
        num="03"
        titleEn="Employment Information"
        titleAm="የስራ ሁኔታ"
        descEn="Select your current occupation or employment category."
        descAm="የአሁኑን የሥራ ሁኔታዎን ይምረጡ"
        lang={lang}
      />

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
              onChange={onChange}
              className="w-4 h-4 text-[#01016F] focus:ring-[#2014FF]"
            />
            <span className="text-xs font-bold text-slate-800">
              {lang === "en" ? opt.label.en : opt.label.am}
            </span>
          </label>
        ))}
      </div>
    </SectionContainer>
  );
};
