"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "../contexts/LanguageContext";
import { translations, getSafeLanguage } from "../lib/i18n";
import { createLocalizedHash } from "../lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const t = translations[getSafeLanguage(language)].nav;

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 20);
      }, 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        !target.closest('.mobile-menu-button')
      ) {
        closeMobileMenu();
      }
    };

    const timeoutId = setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen, closeMobileMenu]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen, closeMobileMenu]);

  const navLinks = [
    { href: createLocalizedHash("#about", language), label: t.about },
    { href: createLocalizedHash("#projects", language), label: t.projects },
    { href: createLocalizedHash("#tech-stack", language), label: t.techStack },
    { href: createLocalizedHash("#contact", language), label: t.contact },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass shadow-xl border-b border-gray-200/50 dark:border-gray-800/50"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="px-4">
          <div className="flex items-center justify-between h-20">
            <Link
              href={`/${language}`}
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300"
              onClick={closeMobileMenu}
              aria-label="Home"
            >
              <Image src="/logo.svg" alt="Destaw Melese logo" height={400} width={400}/>
            </Link>

            <div className="flex items-center gap-4 sm:gap-8">
              <div className="hidden sm:flex items-center gap-8">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors relative group"
                  >
                    {label}
                    <span className="absolute bottom-0 left-0 rtl:right-0 rtl:left-auto w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
                  </Link>
                ))}
              </div>

              <div className="hidden items-center gap-4 sm:flex">
              <LanguageSwitcher />
              <ThemeToggle />
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="sm:hidden p-2 rounded-lg glass hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors mobile-menu-button"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-0 top-20 z-40 transition-all duration-300 ease-in-out sm:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={closeMobileMenu}
          aria-label="Close menu"
        />

        <div
          ref={mobileMenuRef}
          className={`absolute top-0 right-0 rtl:left-0 rtl:right-auto w-80 max-w-[85vw] h-full glass shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "translate-x-0 rtl:translate-x-0"
              : "translate-x-full rtl:-translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col h-full p-6">
            <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMobileMenu}
                  className="px-4 py-3 rounded-lg text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 hover:text-gray-900 dark:hover:text-white transition-all duration-300"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {language === 'he' ? 'שפה:' : 'Language:'}
                </span>
                <LanguageSwitcher />
              </div>
              <div className="flex items-center justify-between gap-4 mt-4">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {language === 'he' ? 'ערכת נושא:' : 'Theme:'}
                </span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}