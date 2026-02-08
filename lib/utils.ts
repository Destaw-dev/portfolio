import { Language } from "./i18n";

/**
 * Get the current language from the pathname
 */
export function getLanguageFromPath(pathname: string): Language {
  const lang = pathname?.split('/')[1];
  if (lang === "he" || lang === "en") {
    return lang;
  }
  return "en";
}

/**
 * Create a localized path with language prefix
 */
export function createLocalizedPath(path: string, language: Language): string {
  // Remove leading slash and language prefix if exists
  const cleanPath = path.replace(/^\/(he|en)/, "").replace(/^\//, "");
  
  // If path is empty or just "/", return language root
  if (!cleanPath || cleanPath === "/") {
    return `/${language}`;
  }
  
  // Return path with language prefix
  return `/${language}/${cleanPath}`;
}

/**
 * Create a localized hash link (for same-page anchors)
 */
export function createLocalizedHash(hash: string, language: Language): string {
  return `/${language}${hash}`;
}
