import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translation/translation-en";
import fr from "./translation/translation-fr";

const resources = {
  english: {
    translation: en
  },
  french: {
    translation: fr
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "french",

    // keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;