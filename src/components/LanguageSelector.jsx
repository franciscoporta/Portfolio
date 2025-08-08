import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switch" data-lang={i18n.language}>
      <div
        className="switch-container"
        onClick={() => changeLanguage(i18n.language === "es" ? "en" : "es")}
      >
        <div className="switch-track">
          <span className="switch-text">
            {i18n.language === "es" ? "ES" : "EN"}
          </span>
        </div>
        <div className="switch-thumb"></div>
      </div>
    </div>
  );
};

export default LanguageSelector;
