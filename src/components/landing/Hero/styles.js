import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

export const HeroSection = styled.section`
  padding-top: 60px;
  height: 100vh;
  display: grid;
  place-items: center;

  .content-container {
    margin: 0 2rem;
    max-width: 1150px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero-title {
    font-size: 3rem; //clamp(2.5rem, 6.5vw, 9rem);
    letter-spacing: 0.4rem;
    white-space: nowrap;
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
    transition: 500ms;
  }

  .hero-flair {
    align-self: flex-start;
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
    transition: 500ms;
  }

  .tagline {
    margin: 0px 1rem;
    font-weight: normal;
    font-size: 1.15rem;
    letter-spacing: 1px;
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
    transition: 500ms;
    text-align: center;
  }

  .hero-cta {
    margin-top: 150px;
  }
`;
