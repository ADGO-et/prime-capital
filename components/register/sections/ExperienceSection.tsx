import React from "react";
import { FormDataState, Lang } from "../formTypes";
import { SectionHeader, SectionContainer, SelectInput } from "../SharedComponents";
import {
  INVESTMENT_EXPERIENCE_OPTIONS,
  TRANSACTION_VOLUME_BRACKETS,
} from "@/lib/kycFormFields";

interface ExperienceSectionProps {
  formData: FormDataState;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  lang: Lang;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  formData,
  onChange,
  lang,
}) => {
  return (
    <SectionContainer id="sec-13">
      <SectionHeader
        num="13"
        titleEn="Investment Experience"
        titleAm="የኢንቨስትመንት ልምድ"
        descEn="Share your experience with stocks, bonds, and other investments."
        descAm="ሥቆች, ቦንዶች እና ሌላ ኢንቨስትመንት ልምድ"
        lang={lang}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-5 sm:mt-6">
        <SelectInput
          label={lang === "en" ? "Stock Market Experience" : "የሥቆች የገበያ ልምድ"}
          name="stockExperience"
          required
          value={formData.stockExperience}
          onChange={onChange}
          options={INVESTMENT_EXPERIENCE_OPTIONS.map((opt) => ({
            value: opt.value,
            label: lang === "en" ? opt.label.en : opt.label.am,
          }))}
        />
        <SelectInput
          label={lang === "en" ? "Bond/Fixed Income Experience" : "ቦንድ/ቋሚ ገቢ ልምድ"}
          name="bondExperience"
          required
          value={formData.bondExperience}
          onChange={onChange}
          options={INVESTMENT_EXPERIENCE_OPTIONS.map((opt) => ({
            value: opt.value,
            label: lang === "en" ? opt.label.en : opt.label.am,
          }))}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
        <SelectInput
          label={lang === "en" ? "Typical Monthly Stock Holdings" : "ወርሃዊ የሥቆች ብዛት"}
          name="stockMonthlyValue"
          required
          value={formData.stockMonthlyValue}
          onChange={onChange}
          options={TRANSACTION_VOLUME_BRACKETS.map((bracket) => ({
            value: bracket.value,
            label: lang === "en" ? bracket.label.en : bracket.label.am,
          }))}
        />
        <SelectInput
          label={lang === "en" ? "Typical Monthly Fixed Income Holdings" : "ወርሃዊ ቦንድ ብዛት"}
          name="fixedIncomeMonthlyValue"
          required
          value={formData.fixedIncomeMonthlyValue}
          onChange={onChange}
          options={TRANSACTION_VOLUME_BRACKETS.map((bracket) => ({
            value: bracket.value,
            label: lang === "en" ? bracket.label.en : bracket.label.am,
          }))}
        />
      </div>
    </SectionContainer>
  );
};
