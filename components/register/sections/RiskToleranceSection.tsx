import React from "react";
import { FormDataState, Lang } from "../formTypes";
import { SectionHeader, SectionContainer, SelectInput, TextInput } from "../SharedComponents";
import {
  RISK_TOLERANCE_OPTIONS,
  INVESTMENT_EXPERIENCE_OPTIONS,
  TRANSACTION_VOLUME_BRACKETS,
} from "@/lib/kycFormFields";

interface RiskToleranceSectionProps {
  formData: FormDataState;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  lang: Lang;
}

export const RiskToleranceSection: React.FC<RiskToleranceSectionProps> = ({
  formData,
  onChange,
  lang,
}) => {
  return (
    <SectionContainer id="sec-12">
      <SectionHeader
        num="12"
        titleEn="Risk Tolerance Profile"
        titleAm="ስጋት አመለካከት"
        descEn="Assess your comfort level with investment volatility."
        descAm="ኢንቨስትመንት ለውጦች ላይ ሰናፈነትዎ ደረጃ"
        lang={lang}
      />

      <div className="mt-5 sm:mt-6">
        <SelectInput
          label={lang === "en" ? "Risk Tolerance" : "ስጋት አመለካከት"}
          name="riskTolerance"
          required
          value={formData.riskTolerance}
          onChange={onChange as any}
          options={RISK_TOLERANCE_OPTIONS.map((opt) => ({
            value: opt.value,
            label: lang === "en" ? opt.title.en : opt.title.am,
          }))}
        />
      </div>

      <div className="bg-blue-50/80 border border-blue-200/90 rounded-xl sm:rounded-2xl p-4 mt-5 sm:mt-6">
        <ul className="text-xs text-blue-950 space-y-2 font-semibold">
          <li>
            <strong>
              {lang === "en" ? "Conservative:" : "ሰናዳም:"}
            </strong>{" "}
            {lang === "en"
              ? "Preservation of capital, low volatility"
              : "ካፒታል ተጠበቅ, ዝቅተኛ ለውጦች"}
          </li>
          <li>
            <strong>
              {lang === "en" ? "Moderate:" : "መካከለኛ:"}
            </strong>{" "}
            {lang === "en"
              ? "Balanced growth and income"
              : "ሚዛናዊ ኢንቨስትመንት ትርፍ"}
          </li>
          <li>
            <strong>
              {lang === "en" ? "Aggressive:" : "ተኩላ:"}
            </strong>{" "}
            {lang === "en"
              ? "High growth potential, accept volatility"
              : "ከፍተኛ ትርፍ, ለውጥ ተቀበላ"}
          </li>
        </ul>
      </div>
    </SectionContainer>
  );
};
