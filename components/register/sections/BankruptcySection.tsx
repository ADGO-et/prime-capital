import React from "react";
import { FormDataState, Lang } from "../formTypes";
import { SectionHeader, SectionContainer, TextInput } from "../SharedComponents";

interface BankruptcySectionProps {
  formData: FormDataState;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  lang: Lang;
}

export const BankruptcySection: React.FC<BankruptcySectionProps> = ({
  formData,
  onChange,
  lang,
}) => {
  return (
    <SectionContainer id="sec-10">
      <SectionHeader
        num="10"
        titleEn="Bankruptcy Disclosure"
        titleAm="የኪሳራ ሁኔታ"
        descEn="Disclose any bankruptcy or insolvency history."
        descAm="ታሪካዊ የኪሳራ ወይም የብድር አለመቻል ሁኔታ"
        lang={lang}
      />

      <div className="mt-5 sm:mt-6">
        <h3 className="text-sm font-bold text-slate-900 mb-3">
          {lang === "en"
            ? "Have you ever filed for bankruptcy or been declared insolvent?"
            : "ለስራ አለመቻል ወይም ንብረት ድህነት መግለጫ ስልክ ነበር?"}
        </h3>
        <div className="flex gap-4">
          {["no", "yes"].map((val) => (
            <label key={val} className="flex items-center gap-2">
              <input
                type="radio"
                name="bankruptcyDisclosure"
                value={val}
                checked={formData.bankruptcyDisclosure === val}
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

      {formData.bankruptcyDisclosure === "yes" && (
        <div className="mt-5 sm:mt-6">
          <TextInput
            label={lang === "en" ? "Bankruptcy Details" : "ኪሳራ ዝርዝሮች"}
            name="bankruptcyDetails"
            value={formData.bankruptcyDetails}
            onChange={onChange}
            placeholder={
              lang === "en"
                ? "Provide dates, amounts, and circumstances"
                : "ታሪክ፣ ንብረት ዋጋ እና ሁኔታ"
            }
          />
        </div>
      )}
    </SectionContainer>
  );
};
