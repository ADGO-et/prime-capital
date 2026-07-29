import React from "react";
import { FormDataState, Lang } from "../formTypes";
import { SectionHeader, SectionContainer, TextInput } from "../SharedComponents";

interface BeneficiarySectionProps {
  formData: FormDataState;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  lang: Lang;
}

export const BeneficiarySection: React.FC<BeneficiarySectionProps> = ({
  formData,
  onChange,
  lang,
}) => {
  return (
    <SectionContainer id="sec-04">
      <SectionHeader
        num="04"
        titleEn="Beneficiary Information"
        titleAm="ስለ ተጠሪ መረጃ"
        descEn="Designate a legal beneficiary for your brokerage account."
        descAm="ለሂሳብዎ ህጋዊ ተጠሪ/ወራሽ መሾም"
        lang={lang}
      />

      <div className="mt-5 sm:mt-6">
        <label className="flex items-center gap-3.5 p-4 sm:p-5 rounded-xl sm:rounded-2xl border-2 border-slate-200/80 bg-slate-50/70 cursor-pointer hover:border-slate-300 transition-all">
          <input
            type="checkbox"
            name="hasBeneficiary"
            checked={formData.hasBeneficiary}
            onChange={onChange}
            className="w-5 h-5 text-[#01016F] rounded-lg focus:ring-[#2014FF] shrink-0"
          />
          <span className="text-xs font-bold text-slate-900">
            {lang === "en"
              ? "I have a beneficiary to declare"
              : "ስለ ተጠሪ/ወራሽ ማሳወቅ እፈልጋለሁ"}
          </span>
        </label>
      </div>

      {formData.hasBeneficiary && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-5 sm:mt-6 pt-4 border-t border-slate-100 animate-in fade-in slide-in-from-top-2">
          <TextInput
            label={lang === "en" ? "Beneficiary Full Name" : "የተጠሪ ሙሉ ስም"}
            name="beneficiaryName"
            required={formData.hasBeneficiary}
            value={formData.beneficiaryName}
            onChange={onChange}
            placeholder={lang === "en" ? "Full Name" : "ሙሉ ስም"}
          />
          <TextInput
            label={lang === "en" ? "Relationship" : "የዝምድና ሁኔታ"}
            name="beneficiaryRelationship"
            required={formData.hasBeneficiary}
            value={formData.beneficiaryRelationship}
            onChange={onChange}
            placeholder="e.g. Spouse / Child / Parent"
          />
        </div>
      )}
    </SectionContainer>
  );
};
