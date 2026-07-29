import React from "react";
import { FormDataState, Lang } from "../formTypes";
import { SectionHeader, SectionContainer, TextInput, SelectInput, CheckboxInput } from "../SharedComponents";

interface AddressContactSectionProps {
  formData: FormDataState;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  lang: Lang;
}

export const AddressContactSection: React.FC<AddressContactSectionProps> = ({
  formData,
  onChange,
  lang,
}) => {
  return (
    <SectionContainer id="sec-02">
      <SectionHeader
        num="02"
        titleEn="Address & Contact Details"
        titleAm="የደንበኛ መኖሪያ መረጃ"
        descEn="Current residential address and contact preferences."
        descAm="የአሁኑ መኖሪያ አድራሻ እና የመገናኛ ምርጫ"
        lang={lang}
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-5 sm:mt-6">
        <TextInput
          label={lang === "en" ? "City Administration / Region" : "ከተማ አስተዳደር / ክልል"}
          name="cityAdministration"
          required
          value={formData.cityAdministration}
          onChange={onChange}
          placeholder="e.g. Addis Ababa / Oromia"
        />
        <TextInput
          label={lang === "en" ? "Zone / Sub-City" : "ዞን / ክፍለ ከተማ"}
          name="subCity"
          required
          value={formData.subCity}
          onChange={onChange}
          placeholder="e.g. Kirkos / Bole"
        />
        <TextInput
          label={lang === "en" ? "Woreda / Kebele" : "ወረዳ / ቀበሌ"}
          name="woredaKebele"
          required
          value={formData.woredaKebele}
          onChange={onChange}
          placeholder="e.g. Woreda 03"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
        <TextInput
          label={lang === "en" ? "House Number" : "የቤት ቁጥር"}
          name="houseNumber"
          value={formData.houseNumber}
          onChange={onChange}
          placeholder="e.g. New / 1234"
        />
        <SelectInput
          label={lang === "en" ? "Preferred Contact Method" : "የተመራጭ መገናኛ መንገድ"}
          name="preferredContact"
          value={formData.preferredContact}
          onChange={onChange as any}
          options={[
            { value: "phone", label: lang === "en" ? "Phone Call" : "በስልክ" },
            { value: "email", label: lang === "en" ? "Email" : "በኢሜይል" },
            { value: "sms", label: lang === "en" ? "SMS" : "በኤስኤምኤስ (SMS)" },
            { value: "whatsapp", label: lang === "en" ? "WhatsApp" : "በዋትስአፕ (WhatsApp)" },
          ]}
        />
      </div>

      <div className="mt-5 sm:mt-6">
        <label className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200/60 bg-slate-50/80 cursor-pointer hover:border-slate-300 transition-all">
          <input
            type="checkbox"
            id="marketingCommunications"
            name="marketingCommunications"
            checked={formData.marketingCommunications}
            onChange={onChange as any}
            className="w-5 h-5 text-[#01016F] rounded-lg border-slate-300 focus:ring-[#2014FF] shrink-0 mt-0.5 sm:mt-0"
          />
          <label
            htmlFor="marketingCommunications"
            className="text-xs text-slate-700 font-medium select-none cursor-pointer leading-normal"
          >
            {lang === "en"
              ? "I agree to receive market updates, research reports, and trade execution notifications."
              : "የገበያ ዝመናዎችን፣ የጥናት ሪፖርቶችን እና የንግድ ማሳወቂያዎችን ለማግኘት እስማማለሁ።"}
          </label>
        </label>
      </div>
    </SectionContainer>
  );
};
