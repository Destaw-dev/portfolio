"use client";

import { useEffect, useRef } from "react";
import { ProjectCard } from "./ProjectCard";
import { useLanguage } from "../contexts/LanguageContext";
import { translations, getSafeLanguage } from "../lib/i18n";

export function Projects() {
  const projectsRef = useRef<HTMLElement>(null);
  const { language } = useLanguage();
  const t = translations[getSafeLanguage(language)].projects;

  const projects = [
    {
      title: t.listali.title,
      description: t.listali.description,
      techStack: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
      githubUrl: "https://github.com/Destaw-dev/listali",
      liveUrl: "https://app.listali.co.il",
      imageUrl: "/listali.png",
      highlights: Array.isArray(t.listali.highlights) ? [...t.listali.highlights] : undefined,
    },
    // {
    //   title: t.chat.title,
    //   description: t.chat.description,
    //   techStack: ["Next.js", "TypeScript", "Socket.io", "PostgreSQL", "Redis"],
    //   githubUrl: "https://github.com",
    //   liveUrl: "https://example.com",
    // },
    // {
    //   title: t.auth.title,
    //   description: t.auth.description,
    //   techStack: ["Next.js", "TypeScript", "JWT", "OAuth", "PostgreSQL"],
    //   githubUrl: "https://github.com",
    //   liveUrl: "https://example.com",
    // },
  ];

  useEffect(() => {
    if (projectsRef.current) {
      const cards = projectsRef.current.querySelectorAll('.animate-on-scroll');
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
      if (projectsRef.current) {
        const header = projectsRef.current.querySelector('.text-center');
        if (header) {
          observer.observe(header);
        }
      }

      if (projectsRef.current) {
        const cards = projectsRef.current.querySelectorAll('.animate-on-scroll');
        cards.forEach((card) => {
          observer.observe(card);
        });
      }
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (projectsRef.current) {
        const cards = projectsRef.current.querySelectorAll('.animate-on-scroll');
        cards.forEach((card) => {
          observer.unobserve(card);
        });
      }
    };
  }, [language]);

  return (
    <section
      ref={projectsRef}
      id="projects"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow dark:opacity-10 pointer-events-none" style={{ willChange: 'transform', transform: 'translateZ(0)' }}></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow dark:opacity-10 pointer-events-none" style={{ animationDelay: "2s", willChange: 'transform', transform: 'translateZ(0)' }}></div>
      
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-on-scroll"
              style={{ 
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
