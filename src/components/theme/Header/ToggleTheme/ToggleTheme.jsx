import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper } from './styles';
import { ReactComponent as SunIcon } from 'assets/icons/sun.svg';
import { ReactComponent as MoonIcon } from 'assets/icons/moon.svg';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Wrapper type='button' theme={theme} onClick={toggleTheme}>
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </Wrapper>
  );
};

export default ToggleTheme;
