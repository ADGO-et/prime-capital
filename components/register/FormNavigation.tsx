import React from "react";
import { Lang, sections } from "./formTypes";

interface FormNavigationProps {
  activeSection: string;
  onSectionClick: (secId: string) => void;
  lang: Lang;
}

export const FormNavigationSidebar: React.FC<FormNavigationProps> = ({
  activeSection,
  onSectionClick,
  lang,
}) => {
  return (
    <aside className="lg:col-span-3 hidden lg:block sticky top-24 h-[calc(100vh-7rem)] overflow-y-auto pr-2 scrollbar-thin">
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl border border-slate-200/80 p-4 shadow-xl shadow-slate-200/50">
        <div className="flex items-center justify-between px-3 mb-3">
          <h3 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
            {lang === "en" ? "Form Navigation" : "የቅፅ ማውጫ"}
          </h3>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#01016F]">
            15 {lang === "en" ? "Sections" : "ክፍሎች"}
          </span>
        </div>

        <nav className="space-y-1">
          {sections.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => onSectionClick(sec.id)}
                className={`w-full text-left px-3.5 py-2.5 rounded-2xl text-xs font-medium transition-all duration-200 flex items-center justify-between group ${
                  isActive
                    ? "bg-gradient-to-r from-[#01016F] to-[#2014FF] text-white shadow-lg shadow-blue-600/20 font-bold scale-[1.02]"
                    : "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900"
                }`}
              >
                <div className="flex items-center gap-3 truncate">
                  <span
                    className={`w-6 h-6 rounded-xl text-[10px] font-extrabold flex items-center justify-center transition-all ${
                      isActive
                        ? "bg-white/20 text-white shadow-xs"
                        : "bg-slate-100 text-slate-500 group-hover:bg-white group-hover:text-[#01016F]"
                    }`}
                  >
                    {sec.num}
                  </span>
                  <span className="truncate">{lang === "en" ? sec.titleEn : sec.titleAm}</span>
                </div>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

interface MobileFormNavProps {
  activeSection: string;
  onSectionClick: (secId: string) => void;
  mobileNavRef: React.RefObject<HTMLDivElement>;
  lang: Lang;
}

export const MobileFormNav: React.FC<MobileFormNavProps> = ({
  activeSection,
  onSectionClick,
  mobileNavRef,
  lang,
}) => {
  return (
    <div
      ref={mobileNavRef}
      className="lg:hidden sticky top-14 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs px-4 py-2.5 overflow-x-auto scrollbar-none flex items-center gap-2"
    >
      {sections.map((sec) => (
        <button
          key={sec.id}
          type="button"
          data-sec-id={sec.id}
          onClick={() => onSectionClick(sec.id)}
          className={`whitespace-nowrap px-3 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 ${
            activeSection === sec.id
              ? "bg-[#01016F] text-white shadow-md scale-[1.03]"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          <span>{sec.num}</span>
          <span>{lang === "en" ? sec.titleEn : sec.titleAm}</span>
        </button>
      ))}
    </div>
  );
};
