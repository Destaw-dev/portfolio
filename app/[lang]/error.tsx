"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const params = useParams();
  const lang = params?.lang === 'he' ? 'he' : 'en';

  const messages = {
    en: {
      title: 'Something went wrong',
      subtitle: 'An unexpected error occurred.',
      retry: 'Try again',
      home: 'Go Home',
    },
    he: {
      title: 'משהו השתבש',
      subtitle: 'אירעה שגיאה בלתי צפויה.',
      retry: 'נסה שוב',
      home: 'דף הבית',
    },
  };

  const t = messages[lang];

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      <div className="text-center space-y-6">
        <p className="text-8xl font-extrabold gradient-text">500</p>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t.title}</h2>
        <p className="text-gray-600 dark:text-gray-400">{t.subtitle}</p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
          >
            {t.retry}
          </button>
          <Link
            href={`/${lang}`}
            className="px-8 py-3 glass border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl font-semibold hover:scale-105 active:scale-95 transition-all duration-300"
          >
            {t.home}
          </Link>
        </div>
      </div>
    </main>
  );
}
