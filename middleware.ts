import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const languages = ['en', 'he'];
const defaultLanguage = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  const pathnameHasLanguage = languages.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  );

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname.startsWith('/favicon')
  ) {
    return NextResponse.next();
  }

  if (!pathnameHasLanguage) {
    const cookieLanguage = request.cookies.get('language')?.value;
    const acceptLanguage = request.headers.get('accept-language');
    
    let language = defaultLanguage;
    
    if (cookieLanguage && languages.includes(cookieLanguage)) {
      language = cookieLanguage;
    } else if (acceptLanguage) {
      const preferredLang = acceptLanguage.split(',')[0].split('-')[0].toLowerCase();
      if (languages.includes(preferredLang)) {
        language = preferredLang;
      }
    }

    const newUrl = request.nextUrl.clone();
    newUrl.pathname = `/${language}${pathname === '/' ? '' : pathname}`;
    const response = NextResponse.redirect(newUrl);
    
    response.cookies.set('language', language, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
    });
    
    return response;
  }

  const pathnameLanguage = pathname.split('/')[1];
  const language = languages.includes(pathnameLanguage) 
    ? pathnameLanguage 
    : defaultLanguage;

  const response = NextResponse.next();
  response.cookies.set('language', language, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
  });

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
