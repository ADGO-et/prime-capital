export type Lang = "en" | "am";

export interface FormDataState {
  // 01 Personal Info
  firstName: string;
  fatherName: string;
  grandfatherName: string;
  phone: string;
  email: string;
  dob: string;
  age: string;
  placeOfBirth: string;
  nationality: string;
  countryOfResidence: string;
  tinNumber: string;

  // 02 Address
  cityAdministration: string;
  zone: string;
  subCity: string;
  woredaKebele: string;
  houseNumber: string;
  preferredContact: "phone" | "email" | "sms" | "whatsapp";
  marketingCommunications: boolean;

  // 03 Employment
  employmentStatus: string;

  // 04 Beneficiary
  hasBeneficiary: boolean;
  beneficiaryName: string;
  beneficiaryRelationship: string;

  // 05 Payment
  bankName: string;
  bankBranch: string;
  accountNumber: string;
  bankChangeAck: boolean;
  settlementOptions: string[];

  // 06 ID Verification & Uploads
  investorType: string;
  faydaNumber: string;
  faydaIssueDate: string;
  faydaExpiryDate: string;
  faydaFront: File | null;
  faydaBack: File | null;
  kebeleId: File | null;
  drivingLicense: File | null;

  // 07 Disclosures
  publiclyTradedOwner: "no" | "yes";
  publiclyTradedDetails: string;
  brokerageEmployee: "no" | "yes";
  brokerageEmployeeDetails: string;

  // 08 Financial Info
  sourceOfFunds: string;
  sourceOfIncomeDetails: string;
  annualNetIncome: string;
  netWorth: string;

  // 09 PEP
  pepStatus: "no" | "yes";
  pepDetails: string;

  // 10 Bankruptcy
  bankruptcyDisclosure: "no" | "yes";
  bankruptcyDetails: string;

  // 11 Criminal Record
  criminalRecord: "no" | "yes";
  criminalRecordDetails: string;

  // 12 Risk Tolerance
  riskTolerance: string;

  // 13 Investment Experience
  stockExperience: string;
  bondExperience: string;
  stockMonthlyValue: string;
  fixedIncomeMonthlyValue: string;

  // 14 Investment Objectives
  investmentObjective: string[];

  // 15 Declaration
  applicantName: string;
  dateOfApplication: string;
  submitConsent: boolean;
}

export const initialFormState: FormDataState = {
  firstName: "",
  fatherName: "",
  grandfatherName: "",
  phone: "",
  email: "",
  dob: "",
  age: "",
  placeOfBirth: "",
  nationality: "Ethiopian",
  countryOfResidence: "Ethiopia",
  tinNumber: "",

  cityAdministration: "Addis Ababa",
  zone: "",
  subCity: "",
  woredaKebele: "",
  houseNumber: "",
  preferredContact: "phone",
  marketingCommunications: true,

  employmentStatus: "employed",

  hasBeneficiary: false,
  beneficiaryName: "",
  beneficiaryRelationship: "",

  bankName: "",
  bankBranch: "",
  accountNumber: "",
  bankChangeAck: false,
  settlementOptions: ["dividends", "rights_issue", "capital_return", "share_buyback"],

  investorType: "individual_ethiopian",
  faydaNumber: "",
  faydaIssueDate: "",
  faydaExpiryDate: "",
  faydaFront: null,
  faydaBack: null,
  kebeleId: null,
  drivingLicense: null,

  publiclyTradedOwner: "no",
  publiclyTradedDetails: "",
  brokerageEmployee: "no",
  brokerageEmployeeDetails: "",

  sourceOfFunds: "salary",
  sourceOfIncomeDetails: "",
  annualNetIncome: "100k_500k",
  netWorth: "500k_1m",

  pepStatus: "no",
  pepDetails: "",

  bankruptcyDisclosure: "no",
  bankruptcyDetails: "",

  criminalRecord: "no",
  criminalRecordDetails: "",

  riskTolerance: "moderate",

  stockExperience: "1_2_years",
  bondExperience: "none",
  stockMonthlyValue: "100k_250k",
  fixedIncomeMonthlyValue: "under_100k",

  investmentObjective: ["long_term_growth", "income_generation"],

  applicantName: "",
  dateOfApplication: new Date().toISOString().split("T")[0],
  submitConsent: false,
};

export const sections = [
  { id: "sec-01", num: "01", titleEn: "Personal Info", titleAm: "የደንበኛ ማንነት" },
  { id: "sec-02", num: "02", titleEn: "Address & Contact", titleAm: "መኖሪያ አድራሻ" },
  { id: "sec-03", num: "03", titleEn: "Employment", titleAm: "የስራ ሁኔታ" },
  { id: "sec-04", num: "04", titleEn: "Beneficiary", titleAm: "ስለ ተጠሪ" },
  { id: "sec-05", num: "05", titleEn: "Payment Info", titleAm: "የባንክ መረጃ" },
  { id: "sec-06", num: "06", titleEn: "ID Verification", titleAm: "ማንነት ማረጋገጫ" },
  { id: "sec-07", num: "07", titleEn: "Disclosures", titleAm: "ይፋ ማድረጊያ" },
  { id: "sec-08", num: "08", titleEn: "Financials", titleAm: "የገንዘብ ሁኔታ" },
  { id: "sec-09", num: "09", titleEn: "PEP Status", titleAm: "ለፖለቲካ ተጋላጭ" },
  { id: "sec-10", num: "10", titleEn: "Bankruptcy", titleAm: "የኪሳራ ሁኔታ" },
  { id: "sec-11", num: "11", titleEn: "Criminal Record", titleAm: "የወንጀል መዝገብ" },
  { id: "sec-12", num: "12", titleEn: "Risk Tolerance", titleAm: "ስጋት አመለካከት" },
  { id: "sec-13", num: "13", titleEn: "Experience", titleAm: "የኢንቨስትመንት ልምድ" },
  { id: "sec-14", num: "14", titleEn: "Objectives", titleAm: "አላማዎች" },
  { id: "sec-15", num: "15", titleEn: "Declaration", titleAm: "ስምምነቶች" },
];
