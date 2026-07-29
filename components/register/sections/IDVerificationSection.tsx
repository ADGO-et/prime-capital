import React from "react";
import { FormDataState, Lang } from "../formTypes";
import { SectionHeader, SectionContainer, TextInput, SelectInput, FileInput } from "../SharedComponents";

interface IDVerificationSectionProps {
  formData: FormDataState;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>, fieldName: keyof FormDataState) => void;
  lang: Lang;
}

export const IDVerificationSection: React.FC<IDVerificationSectionProps> = ({
  formData,
  onChange,
  onFileChange,
  lang,
}) => {
  const idRequired = formData.investorType !== "corporate";
  return (
    <SectionContainer id="sec-06">
      <SectionHeader
        num="06"
        titleEn="ID Verification & Document Upload"
        titleAm="ማንነት ማረጋገጫ እና ሰነዶች ማስቀመጥ"
        descEn="Upload required identification documents for verification."
        descAm="ማረጋገጫ ላስፈላጊ መታወቂያ ሰነዶች ያስቀምጡ"
        lang={lang}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-5 sm:mt-6">
        <SelectInput
          label={lang === "en" ? "Investor Type" : "ባለበጀት አይነት"}
          name="investorType"
          required={idRequired}
          value={formData.investorType}
          onChange={onChange}
          options={[
            { value: "individual", label: "Individual account" },
            { value: "corporate", label: "Corporate account" },
            { value: "joint", label: "Joint account" },
          ]}
        />
      </div>

      <div className="bg-blue-50/80 border border-blue-200/90 rounded-xl sm:rounded-2xl p-4 mt-5 sm:mt-6">
        <p className="text-xs text-blue-950 leading-relaxed font-semibold">
          {lang === "en"
            ? "Fayda National ID is required for all applicants."
            : "ለሁሉም ገበያዎች የተወሰደ ብሔራዊ መታወቂያ ያስፈላጋል።"}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-5 sm:mt-6">
        <TextInput
          label={lang === "en" ? "Fayda ID Number" : "የፋይዳ መታወቂያ ቁጥር"}
          name="faydaNumber"
          required={idRequired}
          value={formData.faydaNumber}
          onChange={onChange}
          placeholder="XXXXXXXXXXXX"
        />
        <TextInput
          label={lang === "en" ? "Issue Date" : "ታሪክ ስሪት"}
          name="faydaIssueDate"
          type="date"
          required={idRequired}
          value={formData.faydaIssueDate}
          onChange={onChange}
        />
        <TextInput
          label={lang === "en" ? "Expiry Date" : "ማለቅ ታሪክ"}
          name="faydaExpiryDate"
          type="date"
          required={idRequired}
          value={formData.faydaExpiryDate}
          onChange={onChange}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-5 sm:mt-6">
        <FileInput
          label={lang === "en" ? "Fayda Front Side" : "ፋይዳ ፊት ገጽ"}
          name="faydaFront"
          required={idRequired}
          onChange={(e) => onFileChange(e, "faydaFront")}
          helperText={lang === "en" ? "Upload image or PDF (Max 5MB)" : "ምስል ወይም PDF ያስቀምጡ (ከ5MB ያነስ)"}
        />
        <FileInput
          label={lang === "en" ? "Fayda Back Side" : "ፋይዳ ጀርባ ገጽ"}
          name="faydaBack"
          required
          onChange={(e) => onFileChange(e, "faydaBack")}
          helperText={lang === "en" ? "Upload image or PDF (Max 5MB)" : "ምስል ወይም PDF ያስቀምጡ (ከ5MB ያነስ)"}
        />
      </div>

      <div className="bg-blue-50/80 border border-blue-200/90 rounded-xl sm:rounded-2xl p-4 mt-5 sm:mt-6">
        <p className="text-xs text-blue-950 leading-relaxed font-semibold">
          {lang === "en"
            ? "Additional ID: Please provide either Kebele ID or Driving License."
            : "ተጨማሪ መታወቂያ፦ የቀበሌ መታወቂያ ወይም የመንጃ ፍቃድ ያስገቡ።"}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-5 sm:mt-6">
        <FileInput
          label={lang === "en" ? "Kebele ID" : "የቀበሌ መታወቂያ"}
          name="kebeleId"
          onChange={(e) => onFileChange(e, "kebeleId")}
          helperText={lang === "en" ? "Optional if Driving License provided" : "የመንጃ ፍቃድ ከተቀጠቀት 선택적"}
        />
        <FileInput
          label={lang === "en" ? "Driving License" : "የመንጃ ፍቃድ"}
          name="drivingLicense"
          onChange={(e) => onFileChange(e, "drivingLicense")}
          helperText={lang === "en" ? "Optional if Kebele ID provided" : "የቀበሌ መታወቂያ ከተቀጠቀት 선택적"}
        />
      </div>
    </SectionContainer>
  );
};
