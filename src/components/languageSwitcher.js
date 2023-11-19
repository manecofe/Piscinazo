import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex items-center space-x-4">
      <ul className="flex space-x-2">
        <li>
          <button
            className="text-white p-2 rounded-full dark:text-slate-300 hover:bg-slate-700/50 dark:hover:bg-slate-200/50 focus:outline-none"
            onClick={() => changeLanguage("en")}
          >
            En
          </button>
        </li>
        <li>
          <button
            className="text-white p-2 rounded-full dark:text-slate-300 hover:bg-slate-700/50 dark:hover:bg-slate-200/50 focus:outline-none"
            onClick={() => changeLanguage("es")}
          >
            Es
          </button>
        </li>
        {/* Agrega más botones para otros idiomas según sea necesario */}
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
