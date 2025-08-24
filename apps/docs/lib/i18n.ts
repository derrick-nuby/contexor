import type { I18nConfig } from 'fumadocs-core/i18n';

export const i18n: I18nConfig = {
  defaultLanguage: 'en',
  languages: ['en', 'fr'],
  // hideLocale: 'default-locale', // Hide /en prefix for default language
  parser: 'dir', // Use directory-based structure
};