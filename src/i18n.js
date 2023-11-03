import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ruTranslation from "./locales/ru.json"
import uaTranslation from "./locales/ua.json"

i18next
.use(initReactI18next)
.use(LanguageDetector)
.init({
    fallbackLng: "ru",
    resources: {
        ru:{
             translation: ruTranslation
        },
        ua:{
           translation: uaTranslation
        },
    
    }
})