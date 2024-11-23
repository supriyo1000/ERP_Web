// context/NavbarHeightContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { themeValues } from '../types';

type ThemeContextType = {
  theme: themeValues,
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context !== undefined)
    return context
  else throw new Error('Context is undefined')
};

type providerType = {
  children: React.ReactNode
}

export default function ThemeProvider({ children }: providerType) {
  const [theme, setTheme] = useState<themeValues>(localStorage.getItem('theme') as themeValues)

  useEffect(() => {
    switch (theme) {
      case 'dark':
        if (theme !== null) document.body.classList.add(theme)
        break
      case '':
        break
      default:
        if (window.matchMedia("prefers-color-scheme: dark")) {
          document.body.classList.add('dark')
          localStorage.setItem('theme', 'dark')
          setTheme('dark')
        }
        else {
          localStorage.setItem('theme', '')
          setTheme('')
        }
    }
  }, [])
  const toggleTheme = () => {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark')
      localStorage.setItem('theme', '')
      setTheme('')
    }
    else {
      document.body.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    }
  }

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}