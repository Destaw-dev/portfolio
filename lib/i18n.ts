export type Language = 'he' | 'en';

export const languages: { code: Language; name: string; dir: 'ltr' | 'rtl' }[] = [
  { code: 'en', name: 'English', dir: 'ltr' },
  { code: 'he', name: 'עברית', dir: 'rtl' },
];

export function getSafeLanguage(lang: Language | undefined): Language {
  return lang === 'he' || lang === 'en' ? lang : 'en';
}

export const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      techStack: "Skills",
      contact: "Contact",
    },

    hero: {
      role: "Frontend Developer",
      name: "Destaw Melese",
      title:
        "Frontend Developer building production web apps — fast, accessible, and scalable.",
      subtitle:
        "React • Next.js • TypeScript • Node.js • MongoDB • WebSockets • CI/CD",
      viewProjects: "View Projects",
      downloadCV: "Download CV",
      github: "GitHub",
      contact: "Get in Touch",
    },

    about: {
      badge: "About",
      title: "About Me",
      paragraph1:
        "I'm a Frontend-focused developer with production experience building dashboards and real-time products used by thousands. I turn complex workflows and data into clear, intuitive user experiences.",
      paragraph2:
        "I work closely with product and design teams to ship responsive and accessible interfaces, and I also contribute to Node.js APIs, MongoDB data modeling, and performance improvements end-to-end.",
    },

    projects: {
      badge: "Work",
      title: "Selected Projects",
      subtitle:
        "Real products with a strong focus on UX, performance, and reliability.",

      listali: {
        title: "Listali",
        description:
          "A collaborative shopping platform with shared lists, roles/permissions, and real-time updates — backed by a production dataset of 11,000+ products.",
        highlights: [
          "Real-time list updates across group members (WebSockets)",
          "Group roles & permissions with secure invite flows",
          "Product ingestion pipeline with 11,000+ items",
          "Responsive, mobile-first UI with accessibility in mind",
        ],
      },

      chat: {
        title: "Real-Time Chat System",
        description:
          "WebSocket-powered messaging with rooms, presence, typing/read states, and scalable APIs designed for low-latency communication.",
        highlights: [
          "Rooms, presence, and read/typing indicators",
          "Optimized message fetching with pagination",
          "Robust error/loading states and UX flows",
          "Designed for low-latency, real-time updates",
        ],
      },

      auth: {
        title: "Authentication & Security",
        description:
          "JWT + HTTP-only cookies with refresh flow, OAuth login, password recovery, validation, and rate limiting — built with production security practices.",
        highlights: [
          "JWT + HTTP-only cookies with refresh token rotation",
          "OAuth login + secure session handling",
          "Validation, rate limiting, and safe error responses",
          "Password recovery + protected routes",
        ],
      },

      highlightsTitle: "Highlights",
      github: "GitHub",
      liveDemo: "Live Demo",
    },

    techStack: {
      badge: "Skills",
      title: "Tech Stack",
      subtitle:
        "Tools I use to build maintainable, production-ready web applications.",
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      devops: "DevOps",
    },

    contact: {
      badge: "Contact",
      title: "Let’s Connect",
      subtitle:
        "Open to Frontend and Full-Stack roles. If you're hiring or building something meaningful — I’d love to talk.",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
    },
  },

  he: {
    nav: {
      about: "אודות",
      projects: "פרויקטים",
      techStack: "כישורים",
      contact: "יצירת קשר",
    },

    hero: {
      role: "מפתח Frontend",
      name: "דסטאו מלסה",
      title: "מפתח Frontend שבונה מוצרים לפרודקשן — מהירים, נגישים וסקיילביליים.",
      subtitle:
        "React • Next.js • TypeScript • Node.js • MongoDB • WebSockets • CI/CD",
      viewProjects: "לצפייה בפרויקטים",
      downloadCV: "הורדת קו״ח",
      github: "GitHub",
      contact: "יצירת קשר",
    },

    about: {
      badge: "אודות",
      title: "קצת עליי",
      paragraph1:
        "אני מפתח שמתמקד ב־Frontend עם ניסיון בפרודקשן בבניית דשבורדים ומוצרים בזמן אמת שמשמשים אלפי משתמשים. אני אוהב לקחת תהליכים ומידע מורכב ולהפוך אותם לחוויית משתמש ברורה ופשוטה.",
      paragraph2:
        "אני עובד צמוד עם צוותי מוצר ועיצוב כדי לשחרר פיצ׳רים רספונסיביים ונגישים, ותורם גם לצד השרת — APIs ב־Node.js, מודלים ב־MongoDB ושיפורי ביצועים מקצה לקצה.",
    },

    projects: {
      badge: "תיק עבודות",
      title: "פרויקטים נבחרים",
      subtitle: "מוצרים אמיתיים עם דגש על UX, ביצועים ואמינות.",

      listali: {
        title: "Listali",
        description:
          "פלטפורמת קניות קבוצתית עם רשימות משותפות, הרשאות ועדכונים בזמן אמת — עם דאטה פרודקשן של 11,000+ מוצרים.",
        highlights: [
          "עדכונים בזמן אמת בין חברי הקבוצה (WebSockets)",
          "הרשאות ותפקידים בקבוצות + הזמנות מאובטחות",
          "Pipeline לייבוא מוצרים עם 11,000+ פריטים",
          "UI רספונסיבי ומותאם מובייל עם דגש על נגישות",
        ],
      },

      chat: {
        title: "מערכת צ׳אט בזמן אמת",
        description:
          "מערכת הודעות מבוססת WebSockets עם חדרים, נוכחות, סטטוסי כתיבה/קריאה ו־APIs שתוכננו לתקשורת מהירה.",
        highlights: [
          "חדרים, נוכחות, וסטטוסים של כתיבה/קריאה",
          "טעינת הודעות יעילה עם Pagination",
          "מצבי שגיאה/טעינה/ריק עם UX ברור",
          "עדכונים מיידיים עם latency נמוך",
        ],
      },

      auth: {
        title: "אימות ואבטחה",
        description:
          "JWT עם Cookies (HTTP-only) ו־Refresh Flow, התחברות OAuth, שחזור סיסמה, ולידציה ו־Rate Limiting — לפי פרקטיקות אבטחה לפרודקשן.",
        highlights: [
          "JWT + Cookies (HTTP-only) עם Refresh Token rotation",
          "התחברות OAuth וניהול session מאובטח",
          "ולידציה, הגבלת קצב, ושגיאות בטוחות",
          "שחזור סיסמה + הגנה על נתיבים",
        ],
      },

      highlightsTitle: "עיקרי הדברים",
      github: "GitHub",
      liveDemo: "דמו חי",
    },

    techStack: {
      badge: "כישורים",
      title: "סטאק טכנולוגי",
      subtitle:
        "הכלים והטכנולוגיות שאני משתמש בהם כדי לבנות מוצרים יציבים ותחזוקתיים.",
      frontend: "Frontend",
      backend: "Backend",
      database: "מסד נתונים",
      devops: "DevOps",
    },

    contact: {
      badge: "יצירת קשר",
      title: "בואו נדבר",
      subtitle:
        "פתוח להזדמנויות Frontend ו־Full-Stack. אם אתם מגייסים או בונים משהו משמעותי — אשמח לדבר.",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "אימייל",
    },
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
