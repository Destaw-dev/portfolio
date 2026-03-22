import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "../../components/ThemeProvider";
import { LanguageProvider } from "../../contexts/LanguageContext";
import { languages, translations } from "../../lib/i18n";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = "https://destaw.co.il";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const { lang } = params;
  const currentLang = languages.find((l) => l.code === lang) || languages[0];
  const t = translations[currentLang.code];
  const title = `${t.hero.name} — ${t.hero.role}`;
  const description = t.hero.title;

  if (currentLang.code === 'he') {
    return {
      metadataBase: new URL(BASE_URL),
      title,
      description,
      keywords: ["מפתח Frontend", "מפתח Full-Stack", "React", "Next.js", "TypeScript", "Node.js", "פורטפוליו"],
      authors: [{ name: "דסטאו מלסה" }],
      openGraph: {
        title,
        description,
        type: "website",
        url: `${BASE_URL}/he`,
        siteName: "דסטאו מלסה — פורטפוליו",
        locale: "he_IL",
        images: [{ url: "/logo.svg", width: 400, height: 400, alt: "דסטאו מלסה" }],
      },
      twitter: {
        card: "summary",
        title,
        description,
      },
      icons: { icon: "/favicon.svg" },
    };
  }
  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    keywords: ["Frontend Developer", "Full-Stack Developer", "React", "Next.js", "TypeScript", "Node.js", "MongoDB", "Portfolio"],
    authors: [{ name: "Destaw Melese" }],
    openGraph: {
      title,
      description,
      type: "website",
      url: `${BASE_URL}/en`,
      siteName: "Destaw Melese — Portfolio",
      locale: "en_US",
      images: [{ url: "/logo.svg", width: 400, height: 400, alt: "Destaw Melese" }],
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    icons: { icon: "/favicon.svg" },
  };
}

export function generateStaticParams() {
  return languages.map((lang) => ({
    lang: lang.code,
  }));
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const { lang } = params;
  const currentLang = languages.find((l) => l.code === lang) || languages[0];
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Destaw Melese",
    url: BASE_URL,
    sameAs: [
      "https://github.com/Destaw-dev",
      "https://www.linkedin.com/in/destawmelese/",
    ],
    jobTitle: "Frontend Developer",
    knowsAbout: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "WebSockets"],
  };

  return (
    <html lang={currentLang.code} dir={lang === 'he' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider initialLanguage={lang as "en" | "he"}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
