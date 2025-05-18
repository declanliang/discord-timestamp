'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import { getLocaleFromPath } from '../utils/routeUtils';
import { locales } from '../i18n';

const navItems = {
  en: [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' }
  ],
  es: [
    { name: 'Inicio', path: '/es' },
    { name: 'Blog', path: '/es/blog' }
  ],
  fr: [
    { name: 'Accueil', path: '/fr' },
    { name: 'Blog', path: '/fr/blog' }
  ],
  de: [
    { name: 'Startseite', path: '/de' },
    { name: 'Blog', path: '/de/blog' }
  ]
};

const siteTitle = {
  en: 'Discord Timestamp Converter',
  es: 'Conversor de Marcas de Tiempo Discord',
  fr: 'Convertisseur d\'Horodatage Discord',
  de: 'Discord Zeitstempel-Konverter'
};

export default function Navbar() {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPath(pathname);
  const items = navItems[currentLocale as keyof typeof navItems] || navItems.en;
  const title = siteTitle[currentLocale as keyof typeof siteTitle] || siteTitle.en;

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href={currentLocale === 'en' ? '/' : `/${currentLocale}`} className="flex-shrink-0 flex items-center">
              <span className="font-bold text-lg text-blue-600">{title}</span>
            </Link>
            
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {items.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    pathname === item.path
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="ml-3 relative">
              <LanguageSwitcher compact={true} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div className="sm:hidden">
        <div className="pt-2 pb-3 space-y-1">
          {items.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                pathname === item.path
                  ? 'bg-blue-50 border-blue-500 text-blue-700'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
} 