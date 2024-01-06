'use client';

import { getCookie, setCookie } from 'cookies-next';
import { createContext, useLayoutEffect, useState } from 'react';
enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
  SYSTEM = 'system',
}
export const ThemeContext = createContext({
  theme: Theme.SYSTEM,
  setDark: () => {},
  setLight: () => {},
  toggleLightDark: () => {},
  setSystemPreference: () => {},
});

export default function ThemeProvider({ children }: { children: any }) {
  const [theme, setTheme] = useState<Theme>(Theme.SYSTEM);

  useLayoutEffect(() => {
    if (getCookie('theme') === Theme.DARK) {
      setTheme(Theme.DARK);
    } else if (getCookie('theme') === Theme.LIGHT) {
      setTheme(Theme.LIGHT);
    } else {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme(Theme.DARK);
      } else {
        setTheme(Theme.SYSTEM);
      }
    }
  }, []);

  useLayoutEffect(() => {
    if (theme === Theme.DARK) {
      document.documentElement.classList.remove(Theme.LIGHT);
      document.documentElement.classList.add(Theme.DARK);
    } else if (theme === Theme.LIGHT) {
      document.documentElement.classList.remove(Theme.DARK);
      document.documentElement.classList.add(Theme.LIGHT);
    } else {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.remove(Theme.LIGHT);
        document.documentElement.classList.add(Theme.DARK);
      } else {
        document.documentElement.classList.remove(Theme.DARK);
        document.documentElement.classList.add(Theme.LIGHT);
      }
    }
    setCookie('theme', theme);
  }, [theme]);

  const setDark = () => {
    setTheme(Theme.DARK);
  };
  const setLight = () => {
    setTheme(Theme.LIGHT);
  };
  const toggleLightDark = () => {
    if (theme === Theme.DARK) {
      setTheme(Theme.LIGHT);
    } else {
      setTheme(Theme.DARK);
    }
  };
  const setSystemPreference = () => {
    setTheme(Theme.SYSTEM);
  };
  const values = {
    theme,
    setDark,
    setLight,
    toggleLightDark,
    setSystemPreference,
  };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
}
