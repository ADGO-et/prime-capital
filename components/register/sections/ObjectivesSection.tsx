import React from "react";
import { FormDataState, Lang } from "../formTypes";
import { SectionHeader, SectionContainer } from "../SharedComponents";
import { INVESTMENT_OBJECTIVES } from "@/lib/kycFormFields";

interface ObjectivesSectionProps {
  formData: FormDataState;
  onObjectiveCheck: (val: string) => void;
  lang: Lang;
}

export const ObjectivesSection: React.FC<ObjectivesSectionProps> = ({
  formData,
  onObjectiveCheck,
  lang,
}) => {
  return (
    <SectionContainer id="sec-14">
      <SectionHeader
        num="14"
        titleEn="Investment Objectives"
        titleAm="አላማዎች"
        descEn="Select your primary investment goals (select all that apply)."
        descAm="ዋና ኢንቨስትመንት አላማዎች (ሁሉ ተፈጻሚ የሆነውን ይምረጡ)"
        lang={lang}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-5 sm:mt-6">
        {INVESTMENT_OBJECTIVES.map((obj) => (
          <label
            key={obj.value}
            className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/50 cursor-pointer hover:border-slate-300 transition-all"
          >
            <input
              type="checkbox"
              checked={formData.investmentObjective.includes(obj.value)}
              onChange={() => onObjectiveCheck(obj.value)}
              className="w-4 h-4 text-[#01016F] rounded focus:ring-[#2014FF] shrink-0 mt-0.5"
            />
            <span className="text-xs font-medium text-slate-700">
              {lang === "en" ? obj.label.en : obj.label.am}
            </span>
          </label>
        ))}
      </div>
    </SectionContainer>
  );
};
