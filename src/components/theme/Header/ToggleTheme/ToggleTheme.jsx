import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper } from './styles';
import Sun from 'assets/icons/Sun.svg';
import Moon from 'assets/icons/Moon.svg';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Wrapper theme={theme} onClick={toggleTheme}>
      {theme === 'light' ? <Moon /> : <Sun />}
    </Wrapper>
  );
};

export default ToggleTheme;
