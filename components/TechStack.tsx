"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations, getSafeLanguage } from "../lib/i18n";

export function TechStack() {
  const { language } = useLanguage();
  const t = translations[getSafeLanguage(language)].techStack;

  const techCategories = {
    [t.frontend]: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    [t.backend]: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"],
    [t.database]: ["MongoDB"],
    [t.devops]: ["Docker", "Vercel", "Git", "CI/CD"],
  };

  const techRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (techRef.current) {
      const cards = techRef.current.querySelectorAll('.animate-on-scroll');
      cards.forEach((card) => {
        card.classList.remove("visible");
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    const timeoutId = setTimeout(() => {
      if (techRef.current) {
        const header = techRef.current.querySelector('.text-center');
        if (header) {
          observer.observe(header);
        }
      }

      if (techRef.current) {
        const cards = techRef.current.querySelectorAll('.animate-on-scroll');
        cards.forEach((card) => {
          observer.observe(card);
        });
      }
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (techRef.current) {
        const cards = techRef.current.querySelectorAll('.animate-on-scroll');
        cards.forEach((card) => {
          observer.unobserve(card);
        });
      }
    };
  }, [language]);

  return (
    <section
      ref={techRef}
      id="tech-stack"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-purple-900/10"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6 border border-blue-200 dark:border-blue-800">
            {t.badge}
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4">
            <span className="gradient-text">{t.title}</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {Object.entries(techCategories).map(([category, technologies], index) => (
            <div
              key={category}
              className="glass rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-800/50 transform hover:-translate-y-2 animate-on-scroll"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                {category}
              </h3>
              <ul className="space-y-3">
                {technologies.map((tech) => (
                  <li
                    key={tech}
                    className="text-gray-700 dark:text-gray-300 flex items-center group rtl:flex-row-reverse"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 rtl:mr-0 rtl:ml-3 group-hover:scale-150 transition-transform duration-300"></span>
                    <span className="group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
