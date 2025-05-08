import { createContext } from "react";

type ThemeContextType = {
  lightMode: boolean;
  toggleLightMode: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  lightMode: true,
  toggleLightMode: () => {},
});
