import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import your translation files
import en from './locales/en.json';
import hi from './locales/hi.json';

i18n
  .use(LanguageDetector) // Detects the language automatically
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources: {
      en: { translation: en },
      hi: { translation: hi }
    },
    fallbackLng: 'en', // Defaults to English if language is not available
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
