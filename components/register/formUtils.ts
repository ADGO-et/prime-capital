import { FormDataState, Lang } from "./formTypes";

export const calculateAge = (dobString: string) => {
  if (!dobString) return "";
  const birthDate = new Date(dobString);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age > 0 ? age.toString() : "";
};

export const t = (enStr: string, amStr: string, lang: Lang) =>
  lang === "en" ? enStr : amStr;

export const validateFormData = (
  formData: FormDataState,
  lang: Lang
): { valid: boolean; message?: string } => {
  if (!formData.submitConsent) {
    return {
      valid: false,
      message: t(
        "Please review and agree to the declaration terms before submitting.",
        "እባክዎ ማመልከቻውን ከማስገባትዎ በፊት የስምምነት ማረጋገጫውን ያረጋግጡ።",
        lang
      ),
    };
  }

  if (!formData.faydaFront || !formData.faydaBack) {
    return {
      valid: false,
      message: t(
        "Fayda ID front and back copies are required.",
        "የፋይዳ መታወቂያ ፊት እና ጀርባ ገፅ ግዴታ ናቸው።",
        lang
      ),
    };
  }

  if (!formData.kebeleId && !formData.drivingLicense) {
    return {
      valid: false,
      message: t(
        "Please upload either a Kebele ID or Driving License.",
        "የቀበሌ መታወቂያ ወይም የመንጃ ፍቃድ ይጫኑ።",
        lang
      ),
    };
  }

  return { valid: true };
};

export const buildFormPayload = (formData: FormDataState): FormData => {
  const payload = new FormData();

  const scalarFields: (keyof FormDataState)[] = [
    "firstName",
    "fatherName",
    "grandfatherName",
    "phone",
    "email",
    "dob",
    "age",
    "placeOfBirth",
    "nationality",
    "countryOfResidence",
    "tinNumber",
    "cityAdministration",
    "zone",
    "subCity",
    "woredaKebele",
    "houseNumber",
    "preferredContact",
    "employmentStatus",
    "beneficiaryName",
    "beneficiaryRelationship",
    "bankName",
    "bankBranch",
    "accountNumber",
    "investorType",
    "faydaNumber",
    "faydaIssueDate",
    "faydaExpiryDate",
    "publiclyTradedOwner",
    "publiclyTradedDetails",
    "brokerageEmployee",
    "brokerageEmployeeDetails",
    "sourceOfFunds",
    "sourceOfIncomeDetails",
    "annualNetIncome",
    "netWorth",
    "pepStatus",
    "pepDetails",
    "bankruptcyDisclosure",
    "bankruptcyDetails",
    "criminalRecord",
    "criminalRecordDetails",
    "riskTolerance",
    "stockExperience",
    "bondExperience",
    "stockMonthlyValue",
    "fixedIncomeMonthlyValue",
    "applicantName",
    "dateOfApplication",
  ];

  for (const key of scalarFields) {
    const val = formData[key];
    if (typeof val === "string") payload.append(key, val);
  }

  payload.append("marketingCommunications", String(formData.marketingCommunications));
  payload.append("hasBeneficiary", String(formData.hasBeneficiary));
  payload.append("bankChangeAck", String(formData.bankChangeAck));
  payload.append("submitConsent", String(formData.submitConsent));
  payload.append("settlementOptions", JSON.stringify(formData.settlementOptions));
  payload.append("investmentObjective", JSON.stringify(formData.investmentObjective));

  if (formData.faydaFront) payload.append("faydaFront", formData.faydaFront);
  if (formData.faydaBack) payload.append("faydaBack", formData.faydaBack);
  if (formData.kebeleId) payload.append("kebeleId", formData.kebeleId);
  if (formData.drivingLicense) payload.append("drivingLicense", formData.drivingLicense);

  return payload;
};

export const generateReferenceId = (): string => {
  return `PC-KYC-${Math.floor(100000 + Math.random() * 900000)}`;
};
