import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import SocialIcons from '../SocialIcons/SocialIcons';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import { Wrapper, StyledLink } from './styles';

const NavbarLinks = ({ desktop, activePage, setActivePage }) => {
  const { theme } = useContext(ThemeContext);

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <Wrapper theme={theme} desktop={desktop}>
      <ToggleTheme />
      <StyledLink
        to='/'
        theme={theme}
        activePage={activePage === 'home'}
        onClick={() => handlePageChange('home')}>
        Home
      </StyledLink>
      <StyledLink
        to='/about'
        theme={theme}
        activePage={activePage === 'about'}
        onClick={() => handlePageChange('about')}>
        About
      </StyledLink>
      <StyledLink
        to='/resume'
        theme={theme}
        activePage={activePage === 'resume'}
        onClick={() => handlePageChange('resume')}>
        Resume
      </StyledLink>
      <StyledLink
        to='/contact'
        theme={theme}
        activePage={activePage === 'contact'}
        onClick={() => handlePageChange('contact')}>
        Contact
      </StyledLink>
      {/* <SocialIcons /> */}
    </Wrapper>
  );
};

export default NavbarLinks;

// TODO Once Portfolio has projects, then we'll add back in
//<Link to='/portfolio'>Portfolio</Link>
