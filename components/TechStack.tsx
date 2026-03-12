"use client";

import { Monitor, Server, Database, GitBranch } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations, getSafeLanguage } from "../lib/i18n";

export function TechStack() {
  const { language } = useLanguage();
  const t = translations[getSafeLanguage(language)].techStack;

  const techCategories = [
    {
      key: t.frontend,
      icon: <Monitor className="w-5 h-5" />,
      techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
      key: t.backend,
      icon: <Server className="w-5 h-5" />,
      techs: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"],
    },
    {
      key: t.database,
      icon: <Database className="w-5 h-5" />,
      techs: ["MongoDB"],
    },
    {
      key: t.devops,
      icon: <GitBranch className="w-5 h-5" />,
      techs: ["Docker", "Vercel", "Git", "CI/CD"],
    },
  ];


  return (
    <section
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
          {techCategories.map(({ key: category, icon, techs }) => (
            <div
              key={category}
              className="glass rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 border border-gray-200/50 dark:border-gray-800/50 transform hover:-translate-y-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400">
                  {icon}
                </div>
                <h3 className="text-xl font-bold gradient-text">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200/50 dark:border-blue-800/50 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-full hover:border-purple-400 dark:hover:border-purple-500 hover:scale-105 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
