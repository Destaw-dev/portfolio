import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "../../components/ThemeProvider";
import { LanguageProvider } from "../../contexts/LanguageContext";
import { languages, translations } from "../../lib/i18n";

const inter = Inter({ subsets: ["latin"] });

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const { lang } = params;
  const currentLang = languages.find((l) => l.code === lang) || languages[0];

  if (currentLang.code === 'he') {
    return {
      title: `${translations[currentLang.code].hero.name} ${translations[currentLang.code].hero.role}`,
      description: `${translations[currentLang.code].hero.title}`,
      keywords: ["מפתח פרודקשן", "אפליקציות ווב", "פרודקשן", "Frontend Developer", "פרוטפוליו"],
      authors: [{ name: "דסטאו מלסה" }],
      openGraph: {
        title: `${translations[currentLang.code].hero.name} ${translations[currentLang.code].hero.role}`,
        description: `${translations[currentLang.code].hero.subtitle}`,
        type: "website",
      },
    };
  }
  return {
    title: `${translations[currentLang.code].hero.name} ${translations[currentLang.code].hero.role}`,
    description: `${translations[currentLang.code].hero.subtitle}`,
    keywords: ["Frontend Developer", "Web Developer", "Portfolio", "React", "Next.js", "TypeScript", "JavaScript", "Node.js", "MongoDB", "Real-time systems"],
    authors: [{ name: "Destaw Melese" }],
    openGraph: {
      title: `${translations[currentLang.code].hero.name} ${translations[currentLang.code].hero.role}`,
      description: `${translations[currentLang.code].hero.subtitle}`,
      type: "website",
    },
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
  
  return (
    <html lang={currentLang.code} dir={lang === 'he' ? 'rtl' : 'ltr'} suppressHydrationWarning>
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
      </body>
    </html>
  );
}
