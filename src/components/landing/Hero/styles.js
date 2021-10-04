import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';
import { motion } from 'framer-motion';

// Add background-images to this
export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroWrapper = styled.section`
  padding: 0 40px;

  display: flex;
  flex-direction: column;

  h2 {
    font-weight: normal;
    letter-spacing: 1px;
    margin: 0;
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
    transition: 500ms;
  }
`;

export const CTA = styled(motion.button)`
  margin-top: 150px;
  width: 12rem;
  height: 3.5rem;
  font-size: 1.5rem;

  > a {
    display: block;
    height: 100%;
    width: 100%;
    padding-top: 0.75rem;

    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.lightColor};
    transition: color 500ms;
    &:hover {
      color: #fff;
    }
  }
`;
