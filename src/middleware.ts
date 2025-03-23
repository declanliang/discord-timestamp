import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from './app/i18n'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Check if the pathname has a supported locale in it
  const pathnameHasLocale = i18n.locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  
  if (pathnameHasLocale) return

  // Redirect if there is no locale
  // Get the preferred locale from the Accept-Language header, or use the default locale
  const acceptLanguage = request.headers.get('accept-language')
  let locale = i18n.defaultLocale
  
  if (acceptLanguage) {
    const acceptedLanguages = acceptLanguage
      .split(',')
      .map(l => l.split(';')[0].trim())
    
    // Find the first supported locale
    const foundLocale = acceptedLanguages.find(
      l => i18n.locales.includes(l)
    )
    
    if (foundLocale && foundLocale !== i18n.defaultLocale) {
      locale = foundLocale
    }
  }
  
  // For default locale, don't add locale prefix
  if (locale === i18n.defaultLocale) {
    return
  }
  
  // Redirect to the preferred locale
  return NextResponse.redirect(
    new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url)
  )
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc.)
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 