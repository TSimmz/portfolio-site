import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';
import { motion } from 'framer-motion';

// Add background-images to this
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 60px;
`;

export const ResumeWrapper = styled.section`
  max-width: 1200px;
  margin: 30px auto;
  padding: 0 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 440px) {
    margin: 1rem auto;
    padding: 0 20px;
  }

  h4 {
    margin: 10px auto 30px;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 1px;
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
    transition: 500ms;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
    transition: 500ms;

    @media (max-width: 770px) {
      font-size: 1.1rem;
    }
    @media (max-width: 440px) {
      font-size: 1rem;
    }
  }

  ul {
    margin-top: 1rem;
  }

  li {
    font-size: 1.2rem;
    margin-left: 50px;
    margin-bottom: 20px;
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
    transition: 500ms;

    @media (max-width: 440px) {
      font-size: 0.9rem;
      margin-left: 10px;
    }
  }
`;

export const ResumeList = styled(motion.div)`
  margin: 0.25rem 1rem;
`;

export const ResumeBody = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1310px) {
    flex-direction: column;
  }
`;

export const DownloadButton = styled(motion.a)`
  width: 170px;
  height: 50px;
  cursor: pointer;
  border: none;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  padding: 0.5rem;

  position: fixed;
  top: 5rem;
  right: -110px;
  z-index: 3;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  background: ${({ theme }) =>
    theme === 'light' ? lightTheme.accent : darkTheme.accent};

  transition: 250ms;

  :hover,
  :active {
    right: 0;
    outline: solid 3px
      ${({ theme }) =>
        theme === 'light' ? lightTheme.accent : darkTheme.darkColor};
    outline-offset: 3px;
  }

  p {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 700;
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.background : darkTheme.darkColor};
  }

  svg {
    margin-left: 0.7rem;
    margin-right: 1rem;
    width: 30px;
    aspect-ratio: 1;
  }

  path {
    fill: #fff;
  }
`;

export const Column = styled.div`
  flex: 1;
  margin: 0px 30px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.3rem;
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
`;
