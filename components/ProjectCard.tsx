"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { useId, useMemo } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations, getSafeLanguage } from "../lib/i18n";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
  highlights?: string[];
  /** optional improvements */
  imageAlt?: string;
  priority?: boolean;
}

function safeHostLabel(url: string) {
  try {
    const u = new URL(url);
    return u.hostname.replace("www.", "");
  } catch {
    return "external";
  }
}

export function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  imageUrl,
  highlights,
  imageAlt,
  priority = false,
}: ProjectCardProps) {
  const { language } = useLanguage();
  const t = translations[getSafeLanguage(language)].projects;

  const cardId = useId();
  const titleId = `${cardId}-title`;
  const descId = `${cardId}-desc`;

  const githubHost = useMemo(() => safeHostLabel(githubUrl), [githubUrl]);
  const liveHost = useMemo(() => (liveUrl ? safeHostLabel(liveUrl) : ""), [liveUrl]);

  return (
    <article
      aria-labelledby={titleId}
      aria-describedby={descId}
      className="group glass rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200/50 dark:border-gray-800/50 transform hover:-translate-y-3 focus-within:-translate-y-3 focus-within:shadow-2xl"
    >
      <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 dark:from-blue-600 dark:via-purple-600 dark:to-pink-600">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={imageAlt ?? `${title} preview`}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600">
            <div className="text-6xl font-extrabold text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              {title.charAt(0)}
            </div>
          </div>
        )}

        {/* hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      <div className="p-6 lg:p-8">
        <h3
          id={titleId}
          className="text-2xl lg:text-3xl font-bold mb-3 text-gray-900 dark:text-white group-hover:gradient-text transition-all duration-300"
        >
          {title}
        </h3>

        <p
          id={descId}
          className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm lg:text-base "
          title={description}
        >
          {description}
        </p>

        {highlights && highlights.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{t.highlightsTitle}</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <ul className="flex flex-wrap gap-2 mb-6" aria-label="Tech stack">
          {techStack.map((tech) => (
            <li key={tech}>
              <span className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-gray-700 dark:text-gray-300 rounded-full text-xs lg:text-sm font-medium border border-blue-200/50 dark:border-blue-800/50 hover:border-blue-400 dark:hover:border-blue-600 transition-colors duration-300">
                {tech}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex gap-3 rtl:flex-row-reverse">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t.github} (${githubHost})`}
            className="group/btn flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 text-white dark:text-gray-900 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 dark:hover:from-blue-600 dark:hover:to-purple-600 dark:hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900"
          >
            <Github className="w-4 h-4" />
            <span>{t.github}</span>
          </a>

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.liveDemo} (${liveHost})`}
              className="flex items-center gap-2 px-5 py-2.5 glass border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300 transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900"
            >
              <ExternalLink className="w-4 h-4" />
              <span>{t.liveDemo}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
