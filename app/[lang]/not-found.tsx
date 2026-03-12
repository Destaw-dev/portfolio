import Link from 'next/link';
import { cookies } from 'next/headers';

export default function NotFound() {
  const cookieStore = cookies();
  const lang = cookieStore.get('language')?.value === 'he' ? 'he' : 'en';

  const messages = {
    en: {
      title: 'Page Not Found',
      subtitle: "The page you're looking for doesn't exist.",
      back: 'Go Home',
    },
    he: {
      title: 'הדף לא נמצא',
      subtitle: 'הדף שחיפשת אינו קיים.',
      back: 'חזרה לדף הבית',
    },
  };

  const t = messages[lang];

  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      <div className="text-center space-y-6">
        <p className="text-8xl font-extrabold gradient-text">404</p>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t.title}</h1>
        <p className="text-gray-600 dark:text-gray-400">{t.subtitle}</p>
        <Link
          href={`/${lang}`}
          className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
        >
          {t.back}
        </Link>
      </div>
    </main>
  );
}
