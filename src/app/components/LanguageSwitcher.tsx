'use client';

import { usePathname, useRouter } from 'next/navigation';
import { locales } from '../i18n';
import { useEffect, useState } from 'react';
import { getLocalizedPath, getLocaleFromPath } from '../utils/routeUtils';

interface LanguageSwitcherProps {
  compact?: boolean;
}

export default function LanguageSwitcher({ compact = false }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [currentLocale, setCurrentLocale] = useState('en');
  const [isOpen, setIsOpen] = useState(false);

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
    
    // Close dropdown if in compact mode
    if (compact) {
      setIsOpen(false);
    }
  };

  // For compact dropdown in the navbar
  if (compact) {
    const currentLocaleName = locales[currentLocale as keyof typeof locales]?.name || 'English';
    
    return (
      <div className="relative">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {currentLocaleName}
          <svg className="-mr-1 ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        
        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
            <div className="py-1" role="menu" aria-orientation="vertical">
              {Object.keys(locales).map((locale) => (
                <button
                  key={locale}
                  onClick={() => handleLocaleChange(locale)}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    currentLocale === locale
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  role="menuitem"
                >
                  {locales[locale as keyof typeof locales].name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Original horizontal version for page center
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