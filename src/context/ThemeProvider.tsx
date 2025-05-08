import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

type ThemeProps = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: ThemeProps) {
  const [lightMode, setLightMode] = useState(function () {
    const savedMode = localStorage.getItem("lightmode");
    return savedMode === "true" || false;
  });

  useEffect(
    function () {
      localStorage.setItem("lightmode", lightMode.toString());
      document.body.className = lightMode ? "light-mode" : "";
    },
    [lightMode]
  );

  function toggleLightMode() {
    setLightMode((lightMode) => !lightMode);
  }

  return (
    <ThemeContext.Provider value={{ lightMode, toggleLightMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
