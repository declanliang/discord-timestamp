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

    // Get the current path segments
    const pathSegments = pathname.split('/').filter(segment => segment);
    
    // Handle special case for default locale (English)
    if (currentLocale === i18n.defaultLocale) {
      // We're switching FROM English TO another language
      if (newLocale !== i18n.defaultLocale) {
        // Simply add the new locale before the current path
        return router.push(`/${newLocale}${pathname}`);
      }
    } else {
      // We're switching FROM a non-English language
      // First, remove the language code from the path
      const contentPath = pathname.replace(`/${currentLocale}`, '');
      
      if (newLocale === i18n.defaultLocale) {
        // Switching to English
        return router.push(contentPath || '/');
      } else {
        // Switching to another non-English language
        return router.push(`/${newLocale}${contentPath}`);
      }
    }
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