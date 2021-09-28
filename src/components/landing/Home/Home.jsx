import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper, HeroWrapper, CTA } from './styles';
import { Button, PageTitle, Divider } from 'components/common';
import { Link } from 'gatsby';
import { Fade } from '@material-ui/core/';
import { motion } from 'framer-motion';

export const Home = ({ timeout }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Fade
      timeout={{ enter: timeout, exit: timeout }}
      in={true}
      mountOnEnter
      unmountOnExit>
      <Wrapper theme={theme}>
        <HeroWrapper id='home' theme={theme}>
          <PageTitle
            as={motion.h1}
            theme={theme}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: 'easeIn',
            }}>
            Tyler Simoni
          </PageTitle>
          <Divider horizontal theme={theme} />
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: 'easeIn',
            }}>
            {
              "> I'm a frontend developer and designer based in the Tampa Bay area."
            }
          </motion.h2>
          <motion.div>
            <Button
              as={CTA}
              theme={theme}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: 'easeIn',
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}>
              <Link to='/about'>Know more</Link>
            </Button>
          </motion.div>
        </HeroWrapper>
      </Wrapper>
    </Fade>
  );
};
