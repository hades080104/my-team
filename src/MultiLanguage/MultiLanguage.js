import "./translate";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function MultiLanguage() {
    const { t, i18n } = useTranslation();

    const [language, setLanguage] = useState("vi");

    const handleTranslate = () => {
        const newLanguage = language === "vi" ? "en" : "vi";
        setLanguage(newLanguage);
        i18n.changeLanguage(language);
    };

    return (
        <div style={{ padding: "50px" }}>
            <button
                onClick={handleTranslate}
                style={{
                    width: "50px",
                    borderRadius: "10px",
                    marginBottom: "20px",
                }}>
                {language}
            </button>
            <h1>{t("Title")}</h1>
            <br />
            <p
                style={{
                    textAlign: "justify",
                    fontSize: "16px",
                    lineHeight: "1.4",
                }}>
                {t("Contents")}
            </p>
        </div>
    );
}

export default MultiLanguage;
