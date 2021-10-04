//import '../../style.css';
import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { Wrapper } from './styles';
import NavbarLinks from '../NavbarLinks/NavbarLinks';
import { ThemeContext } from 'providers/ThemeProvider';
import { Fade } from '@material-ui/core';
import Logo from 'assets/logos/Logo.svg';

const Navbar = ({ timeout, activePage, setActivePage }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Fade timeout={timeout} in={true} mountOnEnter unmountOnExit>
      <Wrapper theme={theme}>
        <Link to='/' className='logo-header'>
          <Logo />
          <h3>Tyler Simoni</h3>
        </Link>
        <NavbarLinks desktop />
      </Wrapper>
    </Fade>
  );
};

export default Navbar;
