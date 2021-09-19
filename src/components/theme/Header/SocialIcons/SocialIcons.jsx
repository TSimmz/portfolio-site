import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper } from './styles';
import social from './social.json';

import { ReactComponent as GithubIcon } from 'assets/icons/Github.svg';
import { ReactComponent as LinkedinIcon } from 'assets/icons/Linkedin.svg';
import { ReactComponent as InstagramIcon } from 'assets/icons/Instagram.svg';
import { ReactComponent as TwitterIcon } from 'assets/icons/Twitter.svg';

const SocialIcons = () => {
  const { theme } = useContext(ThemeContext);

  const renderIcon = (name) => {
    switch (name) {
      case 'Github':
        return <GithubIcon />;
      case 'LinkedIn':
        return <LinkedinIcon />;
      case 'Instagram':
        return <InstagramIcon />;
      case 'Twitter':
        return <TwitterIcon />;
      default:
        return '❓';
    }
  };

  return (
    <Wrapper theme={theme}>
      {social.map(({ id, name, link, icon }) => (
        <a
          key={id}
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={`follow me on ${name}`}>
          {renderIcon(name)}
        </a>
      ))}
    </Wrapper>
  );
};

export default SocialIcons;
