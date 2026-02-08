"use client";

import { useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations, getSafeLanguage } from "../lib/i18n";

export function Contact() {
  const contactRef = useRef<HTMLElement>(null);
  const { language } = useLanguage();
  const t = translations[getSafeLanguage(language)].contact;

  return (
    <section
      ref={contactRef}
      id="contact"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow dark:opacity-10 pointer-events-none" style={{ willChange: 'transform', transform: 'translateZ(0)' }}></div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6 border border-blue-200 dark:border-blue-800">
            {t.badge}
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="gradient-text">{t.title}</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://github.com/Destaw-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 text-white dark:text-gray-900 rounded-xl font-semibold overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            <Github className="w-5 h-5 relative z-10" />
            <span className="relative z-10">{t.github}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href="https://www.linkedin.com/in/destawmelese/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            <Linkedin className="w-5 h-5 relative z-10" />
            <span className="relative z-10">{t.linkedin}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href="mailto:your.email@example.com"
            className="group flex items-center gap-3 px-8 py-4 glass border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl font-semibold hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Mail className="w-5 h-5" />
            {t.email}
          </a>
        </div>
      </div>
    </section>
  );
}
