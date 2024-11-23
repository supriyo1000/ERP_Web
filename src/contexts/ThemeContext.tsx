// context/NavbarHeightContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { themeValues } from '../types';

type ThemeContextType = {
  /** Provides the current theme value, either `''` (light mode) or `'dark'` (dark mode). */
  theme: themeValues,
  /** Function to toggle between themes. */
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * A custom hook for managing theme (light or dark mode) in a React application.
 *
 * This hook allows the user to toggle between two themes: 'light' and 'dark'.
 * It persists the theme choice in `localStorage` so the selected theme is retained 
 * even after a page reload.
 * @returns {ThemeContextType} An object containing:
 * - `theme`: The current theme of the app, either `''` (which stands for `'light'`) or `'dark'`.
 * - `toggleTheme`: A function that toggles the theme between `'light'` and `'dark'`.
 * @example
 * // Usage in a component
 * function MyThemeComponent {
 *  const { theme, toggleTheme } = useTheme();
 * 
 *  return (
 *   <div className={`app ${theme}`}>
 *     <h1>Welcome to the {theme} theme!</h1>
 *     <button onClick={toggleTheme}>
 *       Switch to {theme === '' ? 'Dark' : 'Light'} Mode
 *     </button>
 *   </div>
 * )}
 */
export const useTheme = (): ThemeContextType => {
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