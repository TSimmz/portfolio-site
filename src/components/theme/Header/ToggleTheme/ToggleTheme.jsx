import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper } from './styles';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Wrapper theme={theme} onClick={toggleTheme}>
      {theme === 'light' ? 'M' : 'S'}
    </Wrapper>
  );
};

export default ToggleTheme;
