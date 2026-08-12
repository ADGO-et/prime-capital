import React from "react";
import { FormDataState, Lang } from "../formTypes";
import { SectionHeader, SectionContainer, SelectInput, TextInput, CheckboxInput } from "../SharedComponents";
import { BANK_OPTIONS, SETTLEMENT_OPTIONS } from "@/lib/kycFormFields";

interface PaymentInfoSectionProps {
  formData: FormDataState;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSettlementCheck: (val: string) => void;
  lang: Lang;
}

export const PaymentInfoSection: React.FC<PaymentInfoSectionProps> = ({
  formData,
  onChange,
  onSettlementCheck,
  lang,
}) => {
  return (
    <SectionContainer id="sec-05">
      <SectionHeader
        num="05"
        titleEn="Payment Instructions"
        titleAm="የደንበኛ የባንክ መረጃ"
        descEn="Specify your preferred Pay-to Bank account for settlement & corporate actions."
        descAm="የክፍያ እና የትርፍ ድርሻ መቀበያ ባንክ ሂሳብ ዝርዝር"
        lang={lang}
      />

      <div className="bg-amber-50/80 border border-amber-200/90 rounded-xl sm:rounded-2xl p-4 mt-5">
        <p className="text-xs text-amber-950 leading-relaxed font-semibold">
          Notice:{" "}
          {lang === "en"
            ? "Please indicate your preferred Pay-to Bank account details. All fields except bank branch are mandatory."
            : "እባክዎ ተመራጭ የክፍያ የባንክ ሂሳብ ዝርዝሮችን ከዚህ በታች ያስገቡ። ከባንክ ቅርንጫፍ በስተቀር ሁሉም መስኮች ግዴታ ናቸው።"}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-5 sm:mt-6">
        <TextInput
          label={lang === "en" ? "Account Title" : "የሂሳብ ስም"}
          name="accountTitle"
          required
          value={formData.accountTitle}
          onChange={onChange}
          placeholder={lang === "en" ? "Name as it appears on the bank account" : "በባንክ ሂሳብ ላይ የተመዘገበ ስም"}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6">
        <SelectInput
          label={lang === "en" ? "Bank Name" : "የባንክ ስም"}
          name="bankName"
          required
          value={formData.bankName}
          onChange={onChange as any}
          options={BANK_OPTIONS.map((bank) => ({
            value: bank,
            label: bank,
          }))}
          placeholder={lang === "en" ? "Select Bank" : "ባንክ ይምረጡ"}
        />
        <TextInput
          label={lang === "en" ? "Bank Branch" : "የባንክ ቅርንጫፍ"}
          name="bankBranch"
          value={formData.bankBranch}
          onChange={onChange}
          placeholder="e.g. Main Branch"
        />
        <TextInput
          label={lang === "en" ? "Account Number" : "ሂሳብ ቁጥር"}
          name="accountNumber"
          required
          value={formData.accountNumber}
          onChange={onChange}
          placeholder="0123456789"
        />
      </div>

      <div className="mt-5 sm:mt-6 pt-4 border-t border-slate-100">
        <label className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200/60 bg-slate-50/80 cursor-pointer hover:border-slate-300 transition-all">
          <input
            type="checkbox"
            id="bankChangeAck"
            name="bankChangeAck"
            checked={formData.bankChangeAck}
            onChange={onChange}
            className="w-5 h-5 text-[#01016F] rounded-lg focus:ring-[#2014FF] shrink-0"
          />
          <label htmlFor="bankChangeAck" className="text-xs text-slate-700 font-medium select-none cursor-pointer">
            {lang === "en"
              ? "I acknowledge that any change in bank account details must be documented in writing."
              : "ሂሳብ ዝርዝር ለውጡን በጽሑፍ መዛግበት እንደሚገባኝ ተስማምተዋል።"}
          </label>
        </label>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100">
        <h3 className="text-sm font-bold text-slate-900 mb-3.5">
          {lang === "en"
            ? "Settlement Options (Select All That Apply)"
            : "ተስማምነት ማዋቀር (ተፈጻሚ የሆነውን ሁሉ ይምረጡ)"}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {SETTLEMENT_OPTIONS.map((opt) => (
            <label
              key={opt.value}
              className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/50 cursor-pointer hover:border-slate-300 transition-all"
            >
              <input
                type="checkbox"
                checked={formData.settlementOptions.includes(opt.value)}
                onChange={() => onSettlementCheck(opt.value)}
                className="w-4 h-4 text-[#01016F] rounded focus:ring-[#2014FF] shrink-0"
              />
              <span className="text-xs font-medium text-slate-700">
                {lang === "en" ? opt.label.en : opt.label.am}
              </span>
            </label>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
