import { useLayoutEffect, useState } from "react";

const STORAGE_KEY = "vibe-theme";
type ThemeMode = "light" | "dark";

function getStoredTheme(): ThemeMode {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "dark" || stored === "light" ? stored : "light";
}

export const useAppTheme = () => {
  const [theme, setTheme] = useState<ThemeMode>(() => getStoredTheme());

  useLayoutEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((value) => (value === "dark" ? "light" : "dark"));
  return { theme, toggleTheme };
};
