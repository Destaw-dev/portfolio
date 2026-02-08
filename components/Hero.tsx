"use client";

import { useRef } from "react";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import { translations, getSafeLanguage } from "../lib/i18n";

const GITHUB_URL = "https://github.com/Destaw-dev";

const CV_FILE = "/Destaw_Melese_CV.pdf";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { language } = useLanguage();
  const t = translations[getSafeLanguage(language)].hero;

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20 pb-20 sm:pt-0 sm:pb-0"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 animate-gradient" />

      <div
        className="absolute top-20 left-10 rtl:right-10 rtl:left-auto w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float dark:opacity-10 pointer-events-none"
        style={{ willChange: "transform", transform: "translateZ(0)" }}
      />
      <div
        className="absolute top-40 right-10 rtl:left-10 rtl:right-auto w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float dark:opacity-10 pointer-events-none"
        style={{ animationDelay: "2s", willChange: "transform", transform: "translateZ(0)" }}
      />
      <div
        className="absolute -bottom-8 left-1/2 rtl:right-1/2 rtl:left-auto w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float dark:opacity-10 pointer-events-none"
        style={{ animationDelay: "4s", willChange: "transform", transform: "translateZ(0)" }}
      />

      <div className="relative max-w-5xl mx-auto text-center space-y-10 z-10">
        <div className="space-y-6 animate-slide-up">
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold border border-blue-200 dark:border-blue-800">
              {t.role}
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold leading-tight">
            <span className="block gradient-text">{t.name}</span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t.title}
            <span className="block mt-2 text-lg sm:text-xl text-gray-600 dark:text-gray-400">
              {t.subtitle}
            </span>
          </p>
        </div>

        <div
          className="flex flex-wrap justify-center gap-4 pt-4 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <Link
            href="#projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
          >
            <span className="relative z-10">{t.viewProjects}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          {/* ✅ Download CV */}
          <a
            href={CV_FILE}
            download
            className="px-8 py-4 glass border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl font-semibold hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            aria-label={t.downloadCV}
          >
            {t.downloadCV}
          </a>

          {/* ✅ GitHub */}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 glass border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl font-semibold hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {t.github}
          </a>

          <Link
            href="#contact"
            className="px-8 py-4 glass border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl font-semibold hover:border-pink-500 dark:hover:border-pink-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {t.contact}
          </Link>
        </div>
      </div>
    </section>
  );
}
