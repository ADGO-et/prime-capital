import React from "react";
import { FormDataState, Lang } from "../formTypes";
import { SectionContainer, SectionHeader, TextInput } from "../SharedComponents";

type Props = { formData: FormDataState; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; lang: Lang };
type Field = [string, string, string?];

export function AccountTypeDetailsSection({ formData, onChange, lang }: Props) {
  const corporate = formData.investorType === "corporate";
  const joint = formData.investorType === "joint";
  if (!corporate && !joint) return null;
  const fields: Field[] = corporate
    ? [["Company legal name", "companyName"], ["Registration number", "registrationNumber"], ["Registration date", "registrationDate", "date"], ["Registered address", "registeredAddress"]]
    : [["Second holder's full name", "jointFullName"], ["Second holder's email", "jointEmail", "email"], ["Second holder's phone", "jointPhone", "tel"], ["Second holder's TIN", "jointTin"], ["Second holder's date of birth", "jointDob", "date"], ["Second holder's ID number", "jointIdNumber"]];
  const contactFields: Field[] = [
    ["Contact 1 full name", "corporateContactOneName"], ["Contact 1 phone", "corporateContactOnePhone", "tel"], ["Contact 1 email", "corporateContactOneEmail", "email"],
    ["Contact 2 full name", "corporateContactTwoName"], ["Contact 2 phone", "corporateContactTwoPhone", "tel"], ["Contact 2 email", "corporateContactTwoEmail", "email"],
  ];
  const input = ([label, name, type]: Field) => <TextInput key={name} label={label} name={name} type={type || "text"} required value={formData[name as keyof FormDataState] as string} onChange={onChange} />;
  return <SectionContainer id="account-type-details">
    <SectionHeader num="A" titleEn={corporate ? "Company details" : "Second account holder"} titleAm="" descEn={corporate ? "Information required for the corporate account." : "Information required for the second joint account holder."} descAm="" lang={lang} />
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-5 sm:mt-6">{fields.map(input)}</div>
    {corporate && <><h3 className="text-sm font-bold text-slate-900 mt-7">Authorized contacts (minimum two)</h3><div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-4">{contactFields.map(input)}</div></>}
  </SectionContainer>;
}
