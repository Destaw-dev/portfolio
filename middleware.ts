import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const languages = ['en', 'he'];
const defaultLanguage = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if pathname already has a language prefix
  const pathnameHasLanguage = languages.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  );

  // Skip middleware for static files, API routes, and Next.js internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname.startsWith('/favicon')
  ) {
    return NextResponse.next();
  }

  // If no language in pathname, redirect to default language
  if (!pathnameHasLanguage) {
    // Get language from cookie, Accept-Language header, or default
    const cookieLanguage = request.cookies.get('language')?.value;
    const acceptLanguage = request.headers.get('accept-language');
    
    let language = defaultLanguage;
    
    if (cookieLanguage && languages.includes(cookieLanguage)) {
      language = cookieLanguage;
    } else if (acceptLanguage) {
      // Try to detect language from Accept-Language header
      const preferredLang = acceptLanguage.split(',')[0].split('-')[0].toLowerCase();
      if (languages.includes(preferredLang)) {
        language = preferredLang;
      }
    }

    // Redirect to language-prefixed URL
    const newUrl = request.nextUrl.clone();
    newUrl.pathname = `/${language}${pathname === '/' ? '' : pathname}`;
    const response = NextResponse.redirect(newUrl);
    
    // Set language cookie
    response.cookies.set('language', language, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
    });
    
    return response;
  }

  // Extract language from pathname
  const pathnameLanguage = pathname.split('/')[1];
  const language = languages.includes(pathnameLanguage) 
    ? pathnameLanguage 
    : defaultLanguage;

  // Set language cookie
  const response = NextResponse.next();
  response.cookies.set('language', language, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year
  });

  // Add language header for server components
  response.headers.set('x-language', language);

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
