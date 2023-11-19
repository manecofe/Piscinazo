import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../contexts/mainContext";
const DarkModeToggle = () => {
  const { setDarkModecontx } = useTheme();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Obtener el estado actual del modo oscuro desde el almacenamiento local
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.body.classList.toggle("dark", darkMode);
    setDarkModecontx(darkMode);
  }, [darkMode, setDarkModecontx]);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="darkModeToggle"
        checked={darkMode}
        onChange={handleToggle}
        className="hidden"
      />
      <label
        htmlFor="darkModeToggle"
        className="cursor-pointer flex items-center p-2"
      >
        <span
          className={`w-7 h-7 rounded-full shadow-inner transition-colors text-xl -top-10 ${
            darkMode
              ? "bg-gray-800 text-slate-300"
              : "bg-yellow-400 text-orange-700"
          }`}
        >
          <div className="">
            {darkMode ? (
              <FontAwesomeIcon icon={faMoon} />
            ) : (
              <FontAwesomeIcon icon={faSun} />
            )}
          </div>
        </span>
        <span className="sr-only">Toggle Dark Mode</span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
