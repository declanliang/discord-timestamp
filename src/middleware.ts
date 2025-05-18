import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from './app/i18n'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Skip middleware for static assets and API routes
  if (
    pathname.startsWith('/_next') || 
    pathname.includes('/api/') || 
    pathname.includes('.') ||
    pathname === '/favicon.ico'
  ) {
    return;
  }

  // Check if the pathname has a supported locale in it
  const pathnameHasLocale = i18n.locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  
  // If we already have a locale in the path, no need to redirect
  if (pathnameHasLocale) {
    return;
  }

  // At this point, pathname doesn't have a locale prefix
  // We only redirect non-English locales, so get user's preferred locale
  const acceptLanguage = request.headers.get('accept-language') || '';
  let detectedLocale = i18n.defaultLocale;
  
  // Try to match user's preferred language with supported locales
  const acceptedLanguages = acceptLanguage
    .split(',')
    .map(l => l.split(';')[0].trim());
  
  // Find the first supported locale
  const foundLocale = acceptedLanguages.find(
    l => i18n.locales.includes(l)
  );
  
  if (foundLocale && foundLocale !== i18n.defaultLocale) {
    detectedLocale = foundLocale;
  }
  
  // For English (default locale), don't add a prefix
  if (detectedLocale === i18n.defaultLocale) {
    return;
  }
  
  // For non-English locales, redirect to the localized version
  const newUrl = new URL(
    `/${detectedLocale}${pathname === '/' ? '' : pathname}`,
    request.url
  );
  
  console.log(`Redirecting from ${pathname} to ${newUrl.pathname}`);
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    // Match all paths except for specific paths we want to exclude
    '/((?!_next/|api/|images/|favicon.ico).*)',
  ],
} 