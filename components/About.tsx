"use client";

import { useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations, getSafeLanguage } from "../lib/i18n";

export function About() {
  const aboutRef = useRef<HTMLElement>(null);
  const { language } = useLanguage();
  const t = translations[getSafeLanguage(language)].about;

  return (
    <section
      ref={aboutRef}
      id="about"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent dark:via-blue-900/10"></div>
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6 border border-blue-200 dark:border-blue-800">
            {t.badge}
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="gradient-text">{t.title}</span>
          </h2>
        </div>
        <div className="glass rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl border border-gray-200/50 dark:border-gray-800/50">
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed text-center mb-8">
            {t.paragraph1}
          </p>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed text-center">
            {t.paragraph2}
          </p>
        </div>
      </div>
    </section>
  );
}
