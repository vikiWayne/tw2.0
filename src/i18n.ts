import i18n from "i18next";
import { i18nConfig } from "config/app";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const { CACHE, LANGUAGES } = i18nConfig;

const fallbackLng = [LANGUAGES.EN];
const supportedLngs = Object.values(LANGUAGES);

const detectionOptions = {
  order: ["localStorage"],

  // keys to lookup language from
  lookupLocalStorage: CACHE.LOCAL_STORAGE,

  //cache user language on
  caches: ["localStorage"],
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: detectionOptions,
    debug: process.env.NODE_ENV === "development",
    fallbackLng,
    supportedLngs,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });

export default i18n;
