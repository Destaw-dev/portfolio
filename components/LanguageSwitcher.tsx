"use client";

import { useState } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { languages } from "../lib/i18n";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find((l) => l.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl glass hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 border border-gray-700 dark:border-gray-800/50"
        aria-label="Switch language"
      >
        <Globe className="w-4 h-4 text-gray-700 dark:text-gray-300" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{currentLanguage?.name}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full mt-2 right-0 rtl:left-0 rtl:right-auto glass rounded-xl shadow-xl border border-gray-200/50 dark:border-gray-800/50 overflow-hidden z-20 min-w-[120px]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2 text-sm font-medium transition-colors ${
                  language === lang.code
                    ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                style={{ direction: lang.dir, textAlign: lang.dir === 'rtl' ? 'right' : 'left' }}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
