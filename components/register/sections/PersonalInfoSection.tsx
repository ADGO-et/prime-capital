import React from "react";
import { FormDataState, Lang } from "../formTypes";
import { SectionHeader, SectionContainer, TextInput } from "../SharedComponents";
import { calculateAge } from "../formUtils";

interface PersonalInfoSectionProps {
  formData: FormDataState;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDobChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  lang: Lang;
}

export const PersonalInfoSection: React.FC<PersonalInfoSectionProps> = ({
  formData,
  onChange,
  onDobChange,
  lang,
}) => {
  if (formData.investorType === "corporate") {
    return (
      <SectionContainer id="sec-01">
        <SectionHeader num="01" titleEn="Corporate account contact" titleAm="" descEn="Provide the company contact and tax details." descAm="" lang={lang} />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-5 sm:mt-6">
          <TextInput label="Company email address" name="email" type="email" required value={formData.email} onChange={onChange} />
          <TextInput label="Company phone number" name="phone" type="tel" required value={formData.phone} onChange={onChange} />
          <TextInput label="Tax Identification Number (TIN)" name="tinNumber" required value={formData.tinNumber} onChange={onChange} />
        </div>
      </SectionContainer>
    );
  }
  return (
    <SectionContainer id="sec-01">
      <SectionHeader
        num="01"
        titleEn="Personal Information"
        titleAm="የደንበኛ ማንነት መለያ መረጃ"
        descEn="Provide your legal name and personal identification details."
        descAm="የህጋዊ ስምዎን እና የግል መለያ መረጃዎችን ያስገቡ"
        lang={lang}
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-5 sm:mt-6">
        <TextInput
          label={lang === "en" ? "First Name" : "ስም"}
          name="firstName"
          required
          value={formData.firstName}
          onChange={onChange}
          placeholder={lang === "en" ? "First Name" : "ስም"}
        />
        <TextInput
          label={lang === "en" ? "Father Name" : "የአባት ስም"}
          name="fatherName"
          required
          value={formData.fatherName}
          onChange={onChange}
          placeholder={lang === "en" ? "Father Name" : "የአባት ስም"}
        />
        <TextInput
          label={lang === "en" ? "Grandfather Name" : "የአያት ስም"}
          name="grandfatherName"
          required
          value={formData.grandfatherName}
          onChange={onChange}
          placeholder={lang === "en" ? "Grandfather Name" : "የአያት ስም"}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
        <TextInput
          label={lang === "en" ? "Phone Number" : "ስልክ ቁጥር"}
          name="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={onChange}
          placeholder="+251 9... or +251 7..."
        />
        <TextInput
          label={lang === "en" ? "Email Address" : "ኢሜይል አድራሻ"}
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={onChange}
          placeholder="email@example.com"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6">
        <TextInput
          label={lang === "en" ? "Date of Birth" : "የትውልድ ቀን"}
          name="dob"
          type="date"
          required
          value={formData.dob}
          onChange={onDobChange}
        />
        <TextInput
          label={lang === "en" ? "Age" : "ዕድሜ"}
          name="age"
          readOnly
          value={formData.age}
          onChange={() => {}}
          placeholder={
            lang === "en" ? "Calculated automatically" : "በራስ-ሰር የሚሰላ"
          }
        />
        <TextInput
          label={lang === "en" ? "Place of Birth" : "የትውልድ ቦታ"}
          name="placeOfBirth"
          required
          value={formData.placeOfBirth}
          onChange={onChange}
          placeholder={lang === "en" ? "City / Town" : "ከተማ / ቦታ"}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6">
        <TextInput
          label={lang === "en" ? "Nationality" : "ዜግነት"}
          name="nationality"
          required
          value={formData.nationality}
          onChange={onChange}
        />
        <TextInput
          label={lang === "en" ? "Country of Residence" : "የሚኖሩበት ሀገር"}
          name="countryOfResidence"
          required
          value={formData.countryOfResidence}
          onChange={onChange}
        />
        <TextInput
          label={lang === "en" ? "TIN Number" : "የግብር ከፋይ መለያ ቁጥር (TIN)"}
          name="tinNumber"
          maxLength={10}
          required
          value={formData.tinNumber}
          onChange={onChange}
          placeholder={lang === "en" ? "10-digit TIN" : "10 አሃዝ ያለው TIN"}
        />
      </div>
    </SectionContainer>
  );
};
