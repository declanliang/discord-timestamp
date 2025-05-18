'use client';

import { usePathname, useRouter } from 'next/navigation';
import { i18n, locales } from '../i18n';
import { useEffect, useState } from 'react';
import { getLocalizedPath, getLocaleFromPath } from '../utils/routeUtils';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [currentLocale, setCurrentLocale] = useState('en');

  useEffect(() => {
    // Extract current locale from URL using our utility function
    setCurrentLocale(getLocaleFromPath(pathname));
  }, [pathname]);

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === currentLocale) return;

    // Generate the new path using our utility function
    const newPath = getLocalizedPath(newLocale, pathname);
    
    // Log for debugging
    console.log(`Switching from ${currentLocale} to ${newLocale}`);
    console.log(`Path changing from ${pathname} to ${newPath}`);
    
    // Navigate to the new path
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