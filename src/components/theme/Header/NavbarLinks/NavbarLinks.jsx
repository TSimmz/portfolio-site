import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import SocialIcons from '../SocialIcons/SocialIcons';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import { Wrapper, StyledLink } from './styles';
import { motion } from 'framer-motion';

const navMotionProps = {
  whileHover: { scale: 1.15 },
  whileTap: { scale: 0.85 },
};

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper theme={theme} desktop={desktop}>
      <StyledLink to='/' theme={theme}>
        <motion.div
          whileHover={navMotionProps.whileHover}
          whileTap={navMotionProps.whileTap}>
          Home
        </motion.div>
      </StyledLink>
      <StyledLink to='/#about' theme={theme}>
        <motion.div
          whileHover={navMotionProps.whileHover}
          whileTap={navMotionProps.whileTap}>
          About
        </motion.div>
      </StyledLink>
      <StyledLink to='/#contact' theme={theme}>
        <motion.div
          whileHover={navMotionProps.whileHover}
          whileTap={navMotionProps.whileTap}>
          Contact
        </motion.div>
      </StyledLink>
      <StyledLink to='/resume' theme={theme}>
        <motion.div
          whileHover={navMotionProps.whileHover}
          whileTap={navMotionProps.whileTap}>
          Resume
        </motion.div>
      </StyledLink>
      <SocialIcons desktop={desktop} navMotionProps={navMotionProps} />
      <ToggleTheme desktop={desktop} navMotionProps={navMotionProps} />
    </Wrapper>
  );
};

export default NavbarLinks;

// TODO Once Portfolio has projects, then we'll add back in
//<Link to='/portfolio'>Portfolio</Link>
