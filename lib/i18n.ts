export type Language = "he" | "en";

export const languages: { code: Language; name: string; dir: "ltr" | "rtl" }[] =
  [
    { code: "en", name: "English", dir: "ltr" },
    { code: "he", name: "עברית", dir: "rtl" },
  ];

export function getSafeLanguage(lang: Language | undefined): Language {
  return lang === "he" || lang === "en" ? lang : "en";
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
      roles: [
        "Frontend Developer",
        "React Engineer",
        "Full-Stack Developer",
        "UI/UX Builder",
      ],
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
        title: "ListaLi",
        description:
          "A real-time collaborative shopping platform for groups, combining secure authentication, role-based team permissions, and smart workflows for planning, shopping, and tracking progress together.",
        highlights: [
          "Secure auth stack: email/password + Google OAuth, email verification, CSRF protection, and rotating refresh sessions",
          "Group collaboration features: owner/admin/member roles, invitation flows, approval-based joins, role updates, and ownership transfer",
          "Smart shopping operations: manual and product-based items, barcode product lookup, partial and batch purchases, and live shopping sessions with activity updates",
          "Live chat, WebSocket syncing, localized push notifications, guest-to-user migration, and a product database with 11,000+ existing items",
        ],
      },

      dashio: {
        title: "Dashio",
        description:
          "A full-stack customer analytics and operations platform with secure JWT cookie auth, granular role/permission control, and actionable insights across the customer lifecycle.",
        highlights: [
          "Granular RBAC with admin user management and detailed audit logs (before/after snapshots, IP/User-Agent, CSV export)",
          "Customer ops suite with search/filters, saved views, notes, segment builder, and bulk actions",
          "Analytics coverage for KPIs, activity trends, churn signals, and cohort retention",
          "Automated monitoring workflows via alert rules/events and scheduled report definitions",
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
        "Open to Frontend and Full-Stack roles. If you’re hiring or building something meaningful — I’d love to talk.",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
      formTitle: "Send a Message",
      nameLabel: "Your Name",
      namePlaceholder: "John Doe",
      emailLabel: "Your Email",
      emailPlaceholder: "john@example.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project or opportunity...",
      sendButton: "Send Message",
      sending: "Sending...",
      successTitle: "Message sent!",
      successMessage: "Thanks for reaching out. I’ll get back to you soon.",
      errorMessage: "Something went wrong. Please try emailing me directly.",
      nameRequired: "Name is required",
      emailRequired: "Email is required",
      emailInvalid: "Please enter a valid email",
      messageRequired: "Message is required",
      messageMinLength: "Message must be at least 10 characters",
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
      roles: [
        "מפתח Frontend",
        "מהנדס React",
        "מפתח Full-Stack",
        "בונה ממשקי משתמש",
      ],
      name: "דסטאו מלסה",
      title:
        "מפתח Frontend שבונה מוצרים לפרודקשן — מהירים, נגישים וסקיילביליים.",
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
        title: "ListaLi",
        description:
          "פלטפורמה שיתופית לניהול קניות קבוצתיות בזמן אמת, שמשלבת אבטחה חזקה, הרשאות לפי תפקיד, ותהליכי עבודה חכמים לתכנון, ביצוע ומעקב קניות יחד.",
        highlights: [
          "שכבת אבטחה מלאה: אימייל/סיסמה + Google OAuth, אימות מייל, הגנת CSRF וניהול סשנים עם רענון טוקנים",
          "ניהול קבוצות מתקדם: owner/admin/member, הזמנות לחברים, בקשות הצטרפות עם אישור, עדכון תפקידים והעברת בעלות",
          "יכולות קנייה חכמות: פריטים ידניים ומבוססי מוצר, סריקת ברקוד, רכישה חלקית/מרובה (batch), וסשני קנייה חיים עם עדכונים בזמן אמת",
          "צ'אט מובנה, סנכרון WebSocket, התראות Push מתורגמות, מעבר חלק ממצב אורח למשתמש, ובסיס נתונים עם 11,000+ מוצרים קיימים",
        ],
      },

      dashio: {
        title: "Dashio",
        description:
          "פלטפורמת פול-סטאק לאנליטיקה ותפעול לקוחות, עם אימות מאובטח מבוסס JWT בעוגיות, ניהול הרשאות ותפקידים ברמת פירוט גבוהה, ותובנות ישימות לאורך מחזור חיי הלקוח.",
        highlights: [
          "RBAC מפורט עם ניהול משתמשי אדמין ולוגי ביקורת מתקדמים (מצב לפני/אחרי, כתובת IP ו-User-Agent, כולל ייצוא ל-CSV)",
          "מערכת תפעול לקוחות עם חיפוש/סינון, תצוגות שמורות, הערות, בניית סגמנטים ופעולות גורפות",
          "אנליטיקות מקיפות: KPI, מגמות פעילות, זיהוי נטישה וניתוח שימור קוהורטים",
          "זרימות ניטור אוטומטיות באמצעות חוקי התראות/אירועים והגדרות דוחות מתוזמנים",
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
      formTitle: "שלחו הודעה",
      nameLabel: "שם מלא",
      namePlaceholder: "ישראל ישראלי",
      emailLabel: "כתובת אימייל",
      emailPlaceholder: "israel@example.com",
      messageLabel: "הודעה",
      messagePlaceholder: "ספרו לי על הפרויקט או ההזדמנות...",
      sendButton: "שלחו הודעה",
      sending: "שולח...",
      successTitle: "ההודעה נשלחה!",
      successMessage: "תודה שפנית. אחזור אליך בהקדם.",
      errorMessage: "משהו השתבש. נסה לשלוח אימייל ישירות.",
      nameRequired: "שם הוא שדה חובה",
      emailRequired: "אימייל הוא שדה חובה",
      emailInvalid: "אנא הזן כתובת אימייל תקינה",
      messageRequired: "הודעה היא שדה חובה",
      messageMinLength: "ההודעה חייבת להכיל לפחות 10 תווים",
    },
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
