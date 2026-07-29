import React from "react";
import { FormDataState, Lang } from "../formTypes";
import { SectionHeader, SectionContainer, TextInput } from "../SharedComponents";

interface DisclosuresSectionProps {
  formData: FormDataState;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  lang: Lang;
}

export const DisclosuresSection: React.FC<DisclosuresSectionProps> = ({
  formData,
  onChange,
  lang,
}) => {
  return (
    <SectionContainer id="sec-07">
      <SectionHeader
        num="07"
        titleEn="Disclosures"
        titleAm="ይፋ ማድረጊያ"
        descEn="Disclose any relevant regulatory or professional affiliations."
        descAm="ተገቢ የሚሰሩ የሥራ እና ሕግ አውጃዊ ግንኙነቶች ይጠቁሙ"
        lang={lang}
      />

      <div className="space-y-5 sm:space-y-6 mt-5 sm:mt-6">
        {/* Publicly Traded Company Owner */}
        <div>
          <h3 className="text-sm font-bold text-slate-900 mb-3">
            {lang === "en"
              ? "Are you a direct or indirect beneficial owner of any publicly traded company?"
              : "የህዝብ ባለሞያ የሆነ ኩባንያ ቀጥተኛ ወይም ዝነኛ ባለሞያ ነዎት?"}
          </h3>
          <div className="flex gap-4">
            {["no", "yes"].map((val) => (
              <label key={val} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="publiclyTradedOwner"
                  value={val}
                  checked={formData.publiclyTradedOwner === val}
                  onChange={onChange}
                  className="w-4 h-4 text-[#01016F] focus:ring-[#2014FF]"
                />
                <span className="text-xs font-medium text-slate-700">
                  {val === "yes"
                    ? lang === "en"
                      ? "Yes"
                      : "አዎ"
                    : lang === "en"
                    ? "No"
                    : "ሥር"}
                </span>
              </label>
            ))}
          </div>
        </div>

        {formData.publiclyTradedOwner === "yes" && (
          <TextInput
            label={lang === "en" ? "Please provide details" : "ዝርዝሮችን ያስገቡ"}
            name="publiclyTradedDetails"
            value={formData.publiclyTradedDetails}
            onChange={onChange}
            placeholder={lang === "en" ? "Company name, percentage, etc." : "ኩባንያ ስም፣ መቶኛ፣ ወዘተ"}
          />
        )}

        {/* Brokerage Employee */}
        <div>
          <h3 className="text-sm font-bold text-slate-900 mb-3">
            {lang === "en"
              ? "Are you employed by a brokerage or involved in securities trading?"
              : "በቦንድ ወይም በጥቅም መዋቅር ውስጥ ይሰሩ?"}
          </h3>
          <div className="flex gap-4">
            {["no", "yes"].map((val) => (
              <label key={val} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="brokerageEmployee"
                  value={val}
                  checked={formData.brokerageEmployee === val}
                  onChange={onChange}
                  className="w-4 h-4 text-[#01016F] focus:ring-[#2014FF]"
                />
                <span className="text-xs font-medium text-slate-700">
                  {val === "yes"
                    ? lang === "en"
                      ? "Yes"
                      : "አዎ"
                    : lang === "en"
                    ? "No"
                    : "ሥር"}
                </span>
              </label>
            ))}
          </div>
        </div>

        {formData.brokerageEmployee === "yes" && (
          <TextInput
            label={lang === "en" ? "Please provide details" : "ዝርዝሮችን ያስገቡ"}
            name="brokerageEmployeeDetails"
            value={formData.brokerageEmployeeDetails}
            onChange={onChange}
            placeholder={lang === "en" ? "Company name, position, etc." : "ኩባንያ ስም፣ ቦታ፣ ወዘተ"}
          />
        )}
      </div>
    </SectionContainer>
  );
};
