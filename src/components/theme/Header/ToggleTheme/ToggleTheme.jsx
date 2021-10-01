import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper } from './styles';
import Sun from 'assets/icons/Sun.svg';
import Moon from 'assets/icons/Moon.svg';
import { AnimatePresence, motion } from 'framer-motion';

const ToggleTheme = ({ desktop, navMotionProps }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <AnimatePresence>
      <Wrapper
        as={motion.button}
        desktop={desktop}
        theme={theme}
        whileHover={navMotionProps.whileHover}
        whileTap={navMotionProps.whileTap}
        onClick={toggleTheme}>
        {theme === 'light' ? <Moon /> : <Sun />}
      </Wrapper>
    </AnimatePresence>
  );
};

export default ToggleTheme;
