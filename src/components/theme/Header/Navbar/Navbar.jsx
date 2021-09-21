//import '../../style.css';
import React, { useContext } from 'react';
import { Wrapper } from './styles';
import NavbarLinks from '../NavbarLinks/NavbarLinks';
import { ThemeContext } from 'providers/ThemeProvider';
import { Fade } from '@material-ui/core';

const Navbar = ({ timeout, activePage, setActivePage }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Fade timeout={timeout} in={true} mountOnEnter unmountOnExit>
      <Wrapper theme={theme}>
        <NavbarLinks desktop />
      </Wrapper>
    </Fade>
  );
};

export default Navbar;
