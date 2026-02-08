"use client";

import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Language, languages } from "../lib/i18n";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ 
  children,
  initialLanguage = 'en'
}: { 
  children: React.ReactNode;
  initialLanguage?: Language;
}) {
  const pathname = usePathname();
  const [language, setLanguageState] = useState<Language>(initialLanguage);
  const router = useRouter();

  // Sync language with URL pathname
  useEffect(() => {
    const pathLang = pathname?.split('/')[1];
    if (pathLang && (pathLang === "he" || pathLang === "en") && pathLang !== language) {
      setLanguageState(pathLang);
    }
  }, [pathname, language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    

    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
    
    // Update URL without full page reload
    const currentPath = pathname || "/";
    const pathWithoutLang = currentPath.replace(/^\/(he|en)/, "") || "/";
    const newPath = `/${lang}${pathWithoutLang === "/" ? "" : pathWithoutLang}`;
    
    router.push(newPath);
    
    // Update HTML attributes
    const currentLang = languages.find((l) => l.code === lang);
    if (currentLang && typeof document !== "undefined") {
      document.documentElement.dir = currentLang.dir;
      document.documentElement.lang = lang;
    }
  };

  // Update HTML attributes when language changes (runs on mount and when language changes)
  useEffect(() => {
    if (typeof document === "undefined") return;
    
    const currentLang = languages.find((l) => l.code === language);
    if (!currentLang) return;
    
    // Update dir and lang attributes
    document.documentElement.setAttribute("dir", currentLang.dir);
    document.documentElement.setAttribute("lang", language);
  }, [language]);

  const dir = useMemo(() => {
    return languages.find((l) => l.code === language)?.dir || "ltr";
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
