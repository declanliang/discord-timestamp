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

  // This function correctly handles language switching in all cases
  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === currentLocale) return;
    
    // Case 1: Switching from English to another language
    if (currentLocale === i18n.defaultLocale) {
      // For English paths like /guides/xxx -> /es/guides/xxx
      return router.push(`/${newLocale}${pathname}`);
    } 
    
    // Case 2: Switching from a non-English language to English
    if (newLocale === i18n.defaultLocale) {
      // For paths like /es/guides/xxx -> /guides/xxx
      const englishPath = pathname.replace(`/${currentLocale}`, '');
      return router.push(englishPath || '/');
    }
    
    // Case 3: Switching between non-English languages (e.g., es -> fr)
    // For paths like /es/guides/xxx -> /fr/guides/xxx
    const contentPath = pathname.replace(`/${currentLocale}`, '');
    return router.push(`/${newLocale}${contentPath}`);
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