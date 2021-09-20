import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import SocialIcons from '../SocialIcons/SocialIcons';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import { Wrapper, StyledLink } from './styles';

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper theme={theme} desktop={desktop}>
      <ToggleTheme desktop={desktop} />
      <StyledLink to='/' theme={theme}>
        Home
      </StyledLink>
      <StyledLink to='/about' theme={theme}>
        About
      </StyledLink>
      <StyledLink to='/resume' theme={theme}>
        Resume
      </StyledLink>
      <StyledLink to='/contact' theme={theme}>
        Contact
      </StyledLink>
      <SocialIcons desktop={desktop} />
    </Wrapper>
  );
};

export default NavbarLinks;

// TODO Once Portfolio has projects, then we'll add back in
//<Link to='/portfolio'>Portfolio</Link>
