//import '../../style.css';
import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { Wrapper } from './styles';
import NavbarLinks from '../NavbarLinks/NavbarLinks';
import { ThemeContext } from 'providers/ThemeProvider';
import Logo from 'assets/logos/Logo.svg';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper theme={theme}>
      <Link to='/' className='logo-header'>
        <Logo />
        <h3>Tyler Simoni</h3>
      </Link>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
