import { i18n } from '../i18n';

/**
 * Generates a localized path based on the current locale and path content
 * @param {string} locale - The target locale (e.g., 'en', 'es', 'fr', 'de')
 * @param {string} path - The current path
 * @returns {string} - The correctly localized path
 */
export function getLocalizedPath(locale, path) {
  // If path is empty or just '/', return locale root or home
  if (!path || path === '/') {
    return locale === i18n.defaultLocale ? '/' : `/${locale}`;
  }

  const pathParts = path.split('/').filter(Boolean);
  
  // Check if the first part is a locale
  const firstPart = pathParts[0];
  const isFirstPartLocale = i18n.locales.includes(firstPart);
  
  // Remove locale part if it exists
  const contentPath = isFirstPartLocale 
    ? `/${pathParts.slice(1).join('/')}` 
    : path;
  
  // For default locale (English), don't add locale prefix
  if (locale === i18n.defaultLocale) {
    return contentPath;
  }
  
  // For other locales, add the locale prefix
  return `/${locale}${contentPath}`;
}

/**
 * Extracts the locale from a path
 * @param {string} path - The path to extract locale from
 * @returns {string} - The detected locale or the default locale
 */
export function getLocaleFromPath(path) {
  if (!path) return i18n.defaultLocale;
  
  const pathParts = path.split('/').filter(Boolean);
  const firstPart = pathParts[0];
  
  return i18n.locales.includes(firstPart) ? firstPart : i18n.defaultLocale;
}

/**
 * Removes the locale prefix from a path
 * @param {string} path - The path to process
 * @returns {string} - The path without locale prefix
 */
export function removeLocaleFromPath(path) {
  if (!path) return '/';
  
  const locale = getLocaleFromPath(path);
  
  // If the default locale or no locale in path, return as is
  if (locale === i18n.defaultLocale) {
    return path;
  }
  
  // Remove the locale prefix
  return path.replace(new RegExp(`^/${locale}`), '') || '/';
} 