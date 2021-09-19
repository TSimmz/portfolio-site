import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper, PortfolioWrapper, Divider } from './styles';
import { Fade } from '@material-ui/core';

export const Portfolio = ({ timeout }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Fade
      timeout={{ enter: timeout, exit: timeout }}
      in={true}
      mountOnEnter
      unmountOnExit>
      <Wrapper theme={theme}>
        <PortfolioWrapper id='portfolio' theme={theme}>
          <h1>Portfolio</h1>
          <Divider theme={theme} />
          <h4 className='inProgress'>{'[ Design in progress ]'}</h4>
        </PortfolioWrapper>
      </Wrapper>
    </Fade>
  );
};
