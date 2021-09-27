import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper, AboutWrapper, Details, AboutDivider } from './styles';
import { Divider, PageTitle } from 'components/common';
import about from 'data/About/about.json';
import { StaticImage } from 'gatsby-plugin-image';
import { Fade } from '@material-ui/core';

export const About = ({ timeout }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Fade
      timeout={{ enter: timeout, exit: timeout }}
      in={true}
      mountOnEnter
      unmountOnExit>
      <Wrapper theme={theme}>
        <AboutWrapper id='about' theme={theme}>
          <div className='aboutImg'>
            <StaticImage
              src='../../../assets/images/nyc.jpg'
              alt='Tyler in Times Square'
              placeholder='blurred'
              layout='constrained'
            />
          </div>
          <Divider as={AboutDivider} theme={theme} />
          <Details theme={theme}>
            <PageTitle theme={theme} className='margin-bottom'>
              About
            </PageTitle>
            {about.details.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </Details>
        </AboutWrapper>
      </Wrapper>
    </Fade>
  );
};
