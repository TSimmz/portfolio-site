import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper } from './styles';
import social from './social.json';

import Github from 'assets/icons/Github.svg';
import Linkedin from 'assets/icons/Linkedin.svg';
import Instagram from 'assets/icons/Instagram.svg';
import Twitter from 'assets/icons/Twitter.svg';

const SocialIcons = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  const renderIcon = (name) => {
    switch (name) {
      case 'Github':
        return <Github />;
      case 'LinkedIn':
        return <Linkedin />;
      case 'Instagram':
        return <Instagram />;
      case 'Twitter':
        return <Twitter />;
      default:
        return '❓';
    }
  };

  return (
    <Wrapper theme={theme} desktop={desktop}>
      {social.map(({ id, name, link, icon }) => (
        <a
          key={id}
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={`Follow me on ${name}`}>
          {renderIcon(name)}
        </a>
      ))}
    </Wrapper>
  );
};

export default SocialIcons;
