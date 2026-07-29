import React from "react";
import { Lang } from "./formTypes";

interface SectionHeaderProps {
  num: string;
  titleEn: string;
  titleAm: string;
  descEn: string;
  descAm: string;
  lang: Lang;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  num,
  titleEn,
  titleAm,
  descEn,
  descAm,
  lang,
}) => {
  return (
    <div className="flex items-center gap-3.5 sm:gap-4 pb-4 sm:pb-6 border-b border-slate-100">
      <span className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-gradient-to-br from-[#01016F] to-[#2014FF] text-white font-extrabold flex items-center justify-center text-xs sm:text-base shadow-md ring-4 ring-blue-500/10 shrink-0">
        {num}
      </span>
      <div>
        <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 tracking-tight">
          {lang === "en" ? titleEn : titleAm}
        </h2>
        <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
          {lang === "en" ? descEn : descAm}
        </p>
      </div>
    </div>
  );
};

interface SectionContainerProps {
  id: string;
  children: React.ReactNode;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({ id, children }) => {
  return (
    <section
      id={id}
      className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 px-4 py-5 sm:p-9 shadow-lg sm:shadow-xl shadow-slate-200/40 transition-all duration-300 hover:shadow-2xl hover:border-[#2014FF]/30"
    >
      {children}
    </section>
  );
};

interface TextInputProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  maxLength?: number;
  readOnly?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  type = "text",
  required = false,
  value,
  onChange,
  placeholder,
  maxLength,
  readOnly = false,
}) => {
  return (
    <div>
      <label className="block text-xs font-bold text-slate-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        readOnly={readOnly}
        className={`w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2014FF] focus:border-transparent transition-all font-medium min-h-[48px] ${
          readOnly
            ? "bg-slate-100/70 text-slate-600 cursor-not-allowed"
            : "bg-slate-50/50 text-slate-900 focus:bg-white"
        }`}
      />
    </div>
  );
};

interface SelectInputProps {
  label: string;
  name: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<{ value: string; label: string }>;
  placeholder?: string;
}

export const SelectInput: React.FC<SelectInputProps> = ({
  label,
  name,
  required = false,
  value,
  onChange,
  options,
  placeholder,
}) => {
  return (
    <div>
      <label className="block text-xs font-bold text-slate-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2014FF] focus:border-transparent transition-all font-medium text-slate-900 min-h-[48px]"
      >
        <option value="">{placeholder || "-- Select --"}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

interface CheckboxInputProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckboxInput: React.FC<CheckboxInputProps> = ({
  label,
  name,
  checked,
  onChange,
}) => {
  return (
    <label className="flex items-center gap-3 p-4 sm:p-5 rounded-xl sm:rounded-2xl border-2 border-slate-200/80 bg-slate-50/70 cursor-pointer hover:border-slate-300 transition-all">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="w-5 h-5 text-[#01016F] rounded-lg focus:ring-[#2014FF] shrink-0"
      />
      <span className="text-xs font-bold text-slate-900">{label}</span>
    </label>
  );
};

interface FileInputProps {
  label: string;
  name: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
  helperText?: string;
}

export const FileInput: React.FC<FileInputProps> = ({
  label,
  name,
  required = false,
  onChange,
  accept = "image/*,.pdf",
  helperText,
}) => {
  return (
    <div>
      <label className="block text-xs font-bold text-slate-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="file"
        name={name}
        required={required}
        onChange={onChange}
        accept={accept}
        className="w-full px-3.5 py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#2014FF] focus:border-transparent transition-all font-medium text-slate-900 min-h-[48px]"
      />
      {helperText && (
        <p className="text-[10px] text-slate-500 mt-1">{helperText}</p>
      )}
    </div>
  );
};
