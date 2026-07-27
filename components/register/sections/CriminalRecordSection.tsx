import React from "react";
import { FormDataState, Lang } from "../formTypes";
import { SectionHeader, SectionContainer, TextInput } from "../SharedComponents";

interface CriminalRecordSectionProps {
  formData: FormDataState;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  lang: Lang;
}

export const CriminalRecordSection: React.FC<CriminalRecordSectionProps> = ({
  formData,
  onChange,
  lang,
}) => {
  return (
    <SectionContainer id="sec-11">
      <SectionHeader
        num="11"
        titleEn="Criminal Record Disclosure"
        titleAm="የወንጀል መዝገብ"
        descEn="Disclose any criminal convictions or pending charges."
        descAm="ሉታወቅ ወንጀለኝ ወይም ተጠይቅ ሁኔታ"
        lang={lang}
      />

      <div className="mt-5 sm:mt-6">
        <h3 className="text-sm font-bold text-slate-900 mb-3">
          {lang === "en"
            ? "Have you ever been convicted of a crime or face pending charges?"
            : "የወንጀል ሕጋዊ ፍርድ ወይም ተጠይቅ ሁኔታ ነበር?"}
        </h3>
        <div className="flex gap-4">
          {["no", "yes"].map((val) => (
            <label key={val} className="flex items-center gap-2">
              <input
                type="radio"
                name="criminalRecord"
                value={val}
                checked={formData.criminalRecord === val}
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

      {formData.criminalRecord === "yes" && (
        <div className="mt-5 sm:mt-6">
          <TextInput
            label={lang === "en" ? "Criminal Record Details" : "ወንጀል ዝርዝሮች"}
            name="criminalRecordDetails"
            value={formData.criminalRecordDetails}
            onChange={onChange}
            placeholder={
              lang === "en"
                ? "Describe the offense, date, and outcome"
                : "ወንጀል ዓይነት፣ ታሪክ እና ውጤት"
            }
          />
        </div>
      )}
    </SectionContainer>
  );
};
