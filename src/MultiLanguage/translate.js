import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { contentVi, titleVi } from "./contentVi";
import { contentEn, titleEn } from "./contentEn";

const resources = {
    vi: {
        translation: {
            Title: titleVi(),
            Contents: contentVi(),
        },
    },
    en: {
        translation: {
            Title: titleEn(),
            Contents: contentEn(),
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "vi",

    interpolation: {
        escapeValue: false,
    },
});
