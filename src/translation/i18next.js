import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import globalEn from './en/global.json'
import globalEs from './es/global.json'

const resources = {
    en: {
      translation: globalEn
    },
    es: {
      translation: globalEs
    }
  };
  
  i18next
    .use(initReactI18next)
    .init({
      resources,
      lng: 'en', // Idioma por defecto
      fallbackLng: 'en',
  
      interpolation: {
        escapeValue: false
      }
    });
  
  export default i18next;