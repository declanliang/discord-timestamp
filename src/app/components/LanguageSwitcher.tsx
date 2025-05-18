'use client';

import { usePathname, useRouter } from 'next/navigation';
import { i18n, locales } from '../i18n';
import { useEffect, useState } from 'react';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [currentLocale, setCurrentLocale] = useState('en');

  useEffect(() => {
    // Extract current locale from URL
    const pathSegments = pathname.split('/').filter(segment => segment);
    const localeSegment = pathSegments.find(segment => 
      i18n.locales.includes(segment)
    );
    
    setCurrentLocale(localeSegment || i18n.defaultLocale);
  }, [pathname]);

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === currentLocale) return;

    // Determine new path while preserving content path
    let newPath = '';
    const pathSegments = pathname.split('/').filter(segment => segment);
    
    // Check if the current path is already using a locale path
    const currentLocaleIndex = pathSegments.findIndex(segment => 
      i18n.locales.includes(segment)
    );
    
    // Extract content path segments (excluding locale)
    let contentPathSegments;
    if (currentLocaleIndex !== -1) {
      // Current path has a locale, remove it to get content segments
      contentPathSegments = [...pathSegments];
      contentPathSegments.splice(currentLocaleIndex, 1);
    } else {
      // Default locale (English) path doesn't have a locale prefix
      contentPathSegments = pathSegments;
    }
    
    if (newLocale === i18n.defaultLocale) {
      // For English (default locale), use path without locale prefix
      newPath = contentPathSegments.length > 0
        ? `/${contentPathSegments.join('/')}`
        : '/';
    } else {
      // For other locales, add the locale prefix
      newPath = `/${newLocale}${contentPathSegments.length > 0 ? '/' + contentPathSegments.join('/') : ''}`;
    }
    
    router.push(newPath);
  };

  return (
    <div className="flex justify-center space-x-4 my-4">
      {Object.keys(locales).map((locale) => (
        <button
          key={locale}
          onClick={() => handleLocaleChange(locale)}
          className={`px-3 py-1 rounded ${
            currentLocale === locale
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {locales[locale as keyof typeof locales].name}
        </button>
      ))}
    </div>
  );
} 