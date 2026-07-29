import React from "react";
import { FormDataState, Lang } from "../formTypes";
import { SectionHeader, SectionContainer, TextInput } from "../SharedComponents";

interface PEPSectionProps {
  formData: FormDataState;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  lang: Lang;
}

export const PEPSection: React.FC<PEPSectionProps> = ({
  formData,
  onChange,
  lang,
}) => {
  return (
    <SectionContainer id="sec-09">
      <SectionHeader
        num="09"
        titleEn="PEP Status"
        titleAm="ለፖለቲካ ተጋላጭ ሰዎች (PEP)"
        descEn="Politically Exposed Person (PEP) disclosure for compliance."
        descAm="ለፖለቲካ ተጋላጭ ሰዎች (PEP) ይፋ ማድረጊያ"
        lang={lang}
      />

      <div className="mt-5 sm:mt-6">
        <h3 className="text-sm font-bold text-slate-900 mb-3">
          {lang === "en"
            ? "Are you a Politically Exposed Person (PEP)?"
            : "ለፖለቲካ ተጋላጭ ሰው (PEP) ነዎት?"}
        </h3>
        <div className="flex gap-4">
          {["no", "yes"].map((val) => (
            <label key={val} className="flex items-center gap-2">
              <input
                type="radio"
                name="pepStatus"
                value={val}
                checked={formData.pepStatus === val}
                onChange={onChange}
                className="w-4 h-4 text-[#01016F] focus:ring-[#2014FF]"
              />
              <span className="text-xs font-medium text-slate-700">
                {val === "yes"
                  ? lang === "en"
                    ? "Yes"
                    : "አዎ"
                  : lang === "en"
                  ? "No"
                  : "ሥር"}
              </span>
            </label>
          ))}
        </div>
      </div>

      {formData.pepStatus === "yes" && (
        <div className="mt-5 sm:mt-6">
          <TextInput
            label={lang === "en" ? "PEP Details" : "PEP ዝርዝሮች"}
            name="pepDetails"
            value={formData.pepDetails}
            onChange={onChange}
            placeholder={
              lang === "en"
                ? "Describe your political position or affiliation"
                : "የፖለቲካ ቦታ ወይም ግንኙነት መግለጫ"
            }
          />
        </div>
      )}
    </SectionContainer>
  );
};
