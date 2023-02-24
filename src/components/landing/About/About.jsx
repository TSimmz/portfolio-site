import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper, AboutWrapper, Details, AboutDivider } from './styles';
import { Divider, PageTitle } from 'components/common';
import about from 'data/About/about.json';
import { StaticImage } from 'gatsby-plugin-image';
import { Fade } from '@material-ui/core';
import { motion } from 'framer-motion';

export const About = ({ timeout }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Fade
      timeout={{ enter: timeout, exit: timeout }}
      in={true}
      mountOnEnter
      unmountOnExit
    >
      <Wrapper theme={theme}>
        <AboutWrapper id="about" theme={theme}>
          <motion.div
            className="aboutImg"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: 'easeIn',
            }}
          >
            <StaticImage
              src="../../../assets/images/tyler-wedding-day.jpg"
              alt="Tyler and Rachel in Times Square"
              placeholder="blurred"
              layout="constrained"
            />
          </motion.div>
          <Divider as={AboutDivider} theme={theme} />
          <Details
            as={motion.div}
            theme={theme}
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: 'easeIn',
            }}
          >
            <PageTitle theme={theme} className="margin-bottom">
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
