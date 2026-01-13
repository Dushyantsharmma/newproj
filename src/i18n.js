import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "brand_name": "Raj Ann Raj",
      "subtitle": "Driving Training School",
      // Add more English keys here
    },
  },
  hi: {
    translation: {
      "brand_name": "राज एन राज",
      "subtitle": "ड्राइविंग प्रशिक्षण स्कूल",
      // Add more Hindi keys here
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;