import { LANGUAGES } from "@shared/consts/languages";

import i18n from "i18next";
import BrowserLanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(HttpBackend)
  .use(BrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    debug: false,
    defaultNS: "t",
    fallbackLng: LANGUAGES.EN,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
