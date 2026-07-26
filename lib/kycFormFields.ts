export interface Translations {
  en: string;
  am: string;
}

export const BANK_OPTIONS = [
  "Awash Bank",
  "Commercial Bank of Ethiopia (CBE)",
  "Dashen Bank",
  "Abyssinia Bank",
  "Wegagen Bank",
  "United Bank (Hibret Bank)",
  "NIB International Bank",
  "Cooperative Bank of Oromia",
  "Lion International Bank",
  "Zemen Bank",
  "Oromia Bank",
  "Bunna International Bank",
  "Berhan International Bank",
  "Addis International Bank",
  "ZamZam Bank",
  "Hijra Bank",
  "Siinqee Bank",
  "Gadaa Bank",
  "Amhara Bank",
  "Tsehay Bank",
  "Ahadu Bank",
  "Goh Betoch Bank",
  "Other Bank",
];

export const EMPLOYMENT_STATUS_OPTIONS: { value: string; label: Translations }[] = [
  { value: "employed", label: { en: "Employed", am: "የተቀጠረ" } },
  { value: "self_employed", label: { en: "Self-Employed", am: "የግል ስራ" } },
  { value: "business_owner", label: { en: "Business Owner", am: "የንግድ ባለቤት" } },
  { value: "unemployed", label: { en: "Unemployed", am: "ስራ የሌለው" } },
  { value: "student", label: { en: "Student", am: "ተማሪ" } },
  { value: "retired", label: { en: "Retired", am: "በጡረታ ላይ ያለ" } },
];

export const SETTLEMENT_OPTIONS: { value: string; label: Translations }[] = [
  { value: "dividends", label: { en: "Dividends", am: "የትርፍ ድርሻ (ዲቪደንድ)" } },
  { value: "rights_issue", label: { en: "Rights Issue", am: "የመብት እትም" } },
  { value: "capital_return", label: { en: "Capital Return", am: "የካፒታል መልስ" } },
  { value: "share_buyback", label: { en: "Share Buyback", am: "የአክሲዮን መልሶ ግዥ" } },
];

export const INVESTOR_TYPE_OPTIONS: { value: string; label: Translations }[] = [
  { value: "individual_ethiopian", label: { en: "Individual Ethiopian Citizen", am: "ግለሰብ ኢትዮጵያዊ ዜጋ" } },
  { value: "diaspora", label: { en: "Ethiopian Origin / Diaspora", am: "ትውልደ ኢትዮጵያዊ (ዲያስፖራ)" } },
  { value: "foreign_resident", label: { en: "Foreign Resident in Ethiopia", am: "በኢትዮጵያ የሚኖር የውጭ ሀገር ዜጋ" } },
];

export const SOURCE_OF_FUNDS_OPTIONS: { value: string; label: Translations }[] = [
  { value: "salary", label: { en: "Salary / Employment Income", am: "ደሞዝ / የስራ ገቢ" } },
  { value: "business_profit", label: { en: "Business Profit", am: "የንግድ ትርፍ" } },
  { value: "investment_returns", label: { en: "Investment Returns", am: "የኢንቨስትመንት ገቢ" } },
  { value: "savings", label: { en: "Personal Savings", am: "የግል ቁጠባ" } },
  { value: "inheritance", label: { en: "Inheritance / Gift", am: "ውርስ / ስጦታ" } },
  { value: "real_estate", label: { en: "Real Estate Sale / Rental", am: "የቤት/መሬት ሽያጭ ወይም ኪራይ" } },
  { value: "other", label: { en: "Other", am: "ሌላ" } },
];

export const INCOME_BRACKETS: { value: string; label: Translations }[] = [
  { value: "under_100k", label: { en: "Less than 100,000 ETB", am: "ከ 100,000 ብር በታች" } },
  { value: "100k_500k", label: { en: "100,001 – 500,000 ETB", am: "100,001 - 500,000 ብር" } },
  { value: "500k_1m", label: { en: "500,001 – 1,000,000 ETB", am: "500,001 - 1,000,000 ብር" } },
  { value: "1m_5m", label: { en: "1,000,001 – 5,000,000 ETB", am: "1,000,001 - 5,000,000 ብር" } },
  { value: "over_5m", label: { en: "Over 5,000,001 ETB", am: "ከ 5,000,001 ብር በላይ" } },
];

export const TRANSACTION_VOLUME_BRACKETS: { value: string; label: Translations }[] = [
  { value: "under_100k", label: { en: "Less than 100,000 ETB", am: "ከ 100,000 ብር በታች" } },
  { value: "100k_250k", label: { en: "100,000 – 250,000 ETB", am: "100,000 - 250,000 ብር" } },
  { value: "250k_500k", label: { en: "250,001 – 500,000 ETB", am: "250,001 - 500,000 ብር" } },
  { value: "500k_1m", label: { en: "500,001 – 1,000,000 ETB", am: "500,001 - 1,000,000 ብር" } },
  { value: "1m_5m", label: { en: "1,000,001 – 5,000,000 ETB", am: "1,000,001 - 5,000,000 ብር" } },
  { value: "5m_10m", label: { en: "5,000,001 – 10,000,000 ETB", am: "5,000,001 - 10,000,000 ብር" } },
  { value: "over_10m", label: { en: "Over 10,000,000 ETB", am: "ከ 10,000,000 ብር በላይ" } },
];

export const RISK_TOLERANCE_OPTIONS: { value: string; title: Translations; desc: Translations }[] = [
  {
    value: "low",
    title: { en: "Conservative / Low Risk", am: "ጥንቃቄ የተሞላበት / ዝቅተኛ ስጋት" },
    desc: {
      en: "Focus on capital preservation with minimal risk of loss, accepting lower expected returns.",
      am: "ዋናው ትኩረት ካፒታልን መጠበቅ ላይ ሲሆን குறைந்த የስጋት ደረጃ እና አነስተኛ ትርፍን ይመርጣሉ።",
    },
  },
  {
    value: "moderate",
    title: { en: "Moderate Risk", am: "መጠነኛ ስጋት" },
    desc: {
      en: "Balance between capital growth and safety, willing to accept moderate price fluctuations.",
      am: "በካፒታል እድገት እና ደህንነት መካከል ሚዛን መጠበቅ፤ መጠነኛ የዋጋ መዋዠቅን ለመቀበል ፍቃደኛ።",
    },
  },
  {
    value: "growth",
    title: { en: "Growth / High Risk", am: "ከፍተኛ እድገት / ከፍተኛ ስጋት" },
    desc: {
      en: "Target higher long-term capital appreciation and accept higher market volatility.",
      am: "ለረጅም ጊዜ ከፍተኛ የካፒታል እድገት ማቀድ እና ከፍተኛ የገበያ መዋዠቅን ለመቀበል ዝግጁ መሆን።",
    },
  },
  {
    value: "aggressive",
    title: { en: "Aggressive Speculation", am: "በጣም ከፍተኛ ስጋት (አግረሲቭ)" },
    desc: {
      en: "Maximum potential returns with willingness to accept significant capital fluctuations.",
      am: "ከፍተኛ ሊገኝ የሚችል ትርፍን ለማሳደድ ከፍተኛ የገንዘብ ኪሳራ ስጋትን ለመውሰድ ዝግጁ መሆን።",
    },
  },
];

export const INVESTMENT_EXPERIENCE_OPTIONS: { value: string; label: Translations }[] = [
  { value: "none", label: { en: "No Experience (0 years)", am: "ምንም ልምድ የለኝም (0 ዓመት)" } },
  { value: "1_2_years", label: { en: "1 – 2 Years", am: "ከ 1 - 2 ዓመት" } },
  { value: "3_5_years", label: { en: "3 – 5 Years", am: "ከ 3 - 5 ዓመት" } },
  { value: "over_5_years", label: { en: "Over 5 Years", am: "ከ 5 ዓመት በላይ" } },
];

export const INVESTMENT_OBJECTIVES: { value: string; label: Translations }[] = [
  { value: "capital_preservation", label: { en: "Capital Preservation", am: "ካፒታልን መጠበቅ" } },
  { value: "income_generation", label: { en: "Income Generation (Dividends)", am: "መደበኛ ገቢ ማግኘት (ዲቪደንድ)" } },
  { value: "long_term_growth", label: { en: "Long-term Capital Growth", am: "የረጅም ጊዜ ካፒታል እድገት" } },
  { value: "speculation", label: { en: "Trading / Speculation", am: "የአጭር ጊዜ ግብይት / መገበያየት" } },
];
