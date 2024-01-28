"use client";

import { useCallback, useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { getLocalStorage } from "@/lib/utils";

export const ThemeSwitch = () => {
  const localStorage = getLocalStorage();

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage?.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches),
  );

  const setThemeClassInBodyElement = useCallback(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    setThemeClassInBodyElement();
  }, [setThemeClassInBodyElement]);

  return (
    <>
      <Switch
        checked={isDarkMode}
        onCheckedChange={() => {
          localStorage.theme = isDarkMode ? "light" : "dark";
          setIsDarkMode(!isDarkMode);
          setThemeClassInBodyElement();
        }}
      />
    </>
  );
};
