import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { HeroSection } from './styles';
import { PageSection, Button, Divider } from 'components/common';
import ArrowDown from 'assets/icons/arrow-down.svg';

export const Hero = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <PageSection id='hero' as={HeroSection} theme={theme}>
      <div className='content-container'>
        <h2 className='hero-flair'>I'm</h2>
        <h1 className='hero-title'>Tyler Simoni</h1>
        <Divider horizontal theme={theme} />
        <h2 className='tagline'>
          I'm a frontend developer and designer based in the Tampa Bay area.
        </h2>
        <Button className='hero-cta' theme={theme}>
          <AnchorLink href='#about'>Know more</AnchorLink>
          <ArrowDown />
        </Button>
      </div>
    </PageSection>
  );
};
