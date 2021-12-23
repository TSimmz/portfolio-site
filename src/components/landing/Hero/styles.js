import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

export const HeroSection = styled.section`
  padding-top: 60px;
  height: 100vh;

  .content-container {
    width: 60%;
    max-width: 1150px;
  }

  .hero-title {
    font-size: clamp(2.5rem, 6.5vw, 9rem);
    letter-spacing: 1rem;
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
    transition: 500ms;
  }

  .hero-flair {
    letter-spacing: 1px;
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
    transition: 500ms;
  }

  .tagline {
    font-weight: normal;
    letter-spacing: 1px;
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
    transition: 500ms;
  }

  .hero-cta {
    margin-top: 150px;
  }
`;
