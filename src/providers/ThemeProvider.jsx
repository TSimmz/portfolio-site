import React, { createContext } from 'react';
import useDarkMode from 'hooks/useDarkMode';

export const lightTheme = {
  navbarColor: '#ffffff',
  background: '#ffffff',
  lightColor: '#c7c7c7',
  darkColor: '#494949',
  hover: '#494949',
  accent: '#ee0000',
};

export const darkTheme = {
  navbarColor: '#2c2c2c',
  background: '#393939',
  lightColor: '#c7c7c7',
  darkColor: '#eeeeee',
  hover: '#eeeeee',
  accent: '#ff5c5c',
};

export const ThemeContext = createContext('light');

const ThemeProvider = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
