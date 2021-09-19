import { useState, useEffect } from 'react';
import useMedia from 'hooks/useMedia';

const useDarkMode = () => {
  const [themeMode, setThemeMode] = useState('light');

  const toggleTheme = () => {
    if (themeMode === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setThemeMode('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      setThemeMode('light');
    }
  };

  const prefersDarkMode = useMedia(
    ['(prefers-color-scheme: dark)'],
    [true],
    false
  );

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      window.localStorage.setItem('theme', localTheme);
      setThemeMode(localTheme);
    } else if (prefersDarkMode) {
      setThemeMode('dark');
    } else {
      setThemeMode('light');
    }
  }, [prefersDarkMode]);

  return [themeMode, toggleTheme];
};

export default useDarkMode;
