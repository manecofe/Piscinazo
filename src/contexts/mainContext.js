import React, { createContext, useContext, useState } from "react";

// 1. Crear el contexto y el proveedor del tema
const mainContext = createContext();

const MainProvider = ({ children }) => {
  const [darkMode, setDarkModecontx] = useState(false);

  const theme = {
    darkMode,
    setDarkModecontx,
  };

  return <mainContext.Provider value={theme}>{children}</mainContext.Provider>;
};

const useTheme = () => {
  const context = useContext(mainContext);
  if (!context) {
    throw new Error("useTheme debe utilizarse dentro de un Provider");
  }
  return context;
};

export { MainProvider, useTheme };
