import i18n from "i18next"
import {initReactI18next} from "react-i18next";

import translationEn from './translation.en.json'
import translationKo from './translation.ko.json'
import translationVn from './translation.vn.json'

const resource =  {
    en: {
        translation: translationEn
    },
    ko: {
        translation: translationKo
    },
    vn: {
        translation: translationVn
    },

};

i18n
    .use(initReactI18next)  // passes i18n down to react-i18next
    .init({
        resources: resource,
        // resources: {
        //     en,
        //     ko
        // },
        lng: "ko",
        fallbackLng: 'ko',
        // ns: ['translation'],
        // defaultNS: "translation",
        debug: true,
        // keySeparator: false, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false // react already safes from xss
        },
        react: {
            wait: true,
        }
    });

export default i18n;