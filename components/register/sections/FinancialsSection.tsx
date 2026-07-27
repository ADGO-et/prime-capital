import React from "react";
import { FormDataState, Lang } from "../formTypes";
import { SectionHeader, SectionContainer, SelectInput, TextInput } from "../SharedComponents";
import {
  SOURCE_OF_FUNDS_OPTIONS,
  INCOME_BRACKETS,
  TRANSACTION_VOLUME_BRACKETS,
} from "@/lib/kycFormFields";

interface FinancialsSectionProps {
  formData: FormDataState;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  lang: Lang;
}

export const FinancialsSection: React.FC<FinancialsSectionProps> = ({
  formData,
  onChange,
  lang,
}) => {
  return (
    <SectionContainer id="sec-08">
      <SectionHeader
        num="08"
        titleEn="Financial Information"
        titleAm="የገንዘብ ሁኔታ"
        descEn="Provide an overview of your financial situation and investment capacity."
        descAm="የገንዘብ ሁኔታ እና ኢንቨስትመንት ችሎታ ዝርዝር ያስገቡ"
        lang={lang}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-5 sm:mt-6">
        <SelectInput
          label={lang === "en" ? "Source of Funds" : "ገንዘብ ምንጭ"}
          name="sourceOfFunds"
          required
          value={formData.sourceOfFunds}
          onChange={onChange as any}
          options={SOURCE_OF_FUNDS_OPTIONS.map((opt) => ({
            value: opt.value,
            label: lang === "en" ? opt.label.en : opt.label.am,
          }))}
        />
        <TextInput
          label={lang === "en" ? "Additional Details (Optional)" : "ተጨማሪ ዝርዝሮች (አጋዥ)"}
          name="sourceOfIncomeDetails"
          value={formData.sourceOfIncomeDetails}
          onChange={onChange}
          placeholder={
            lang === "en"
              ? "Describe your additional income sources"
              : "ተጨማሪ ገንዘብ ምንጭ መግለጫ"
          }
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
        <SelectInput
          label={lang === "en" ? "Annual Net Income" : "ዓመታዊ ንጹህ ገቢ"}
          name="annualNetIncome"
          required
          value={formData.annualNetIncome}
          onChange={onChange as any}
          options={INCOME_BRACKETS.map((bracket) => ({
            value: bracket.value,
            label: bracket.range,
          }))}
        />
        <SelectInput
          label={lang === "en" ? "Net Worth" : "ንጹህ ዋጋ"}
          name="netWorth"
          required
          value={formData.netWorth}
          onChange={onChange as any}
          options={TRANSACTION_VOLUME_BRACKETS.map((bracket) => ({
            value: bracket.value,
            label: bracket.range,
          }))}
        />
      </div>
    </SectionContainer>
  );
};
