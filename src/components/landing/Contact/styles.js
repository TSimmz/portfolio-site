import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

export const ContactSection = styled.section`
  .section-background {
    background-color: ${({ theme }) =>
      theme === 'light' ? '#e7e7e7' : '#454545'};
    width: 100%;
    height: 790px;
    display: grid;
    place-items: center;
    transition: 500ms;
  }

  .content-container {
    margin: 0 3rem;
    width: 60%;
    max-width: 1150px;
    display: flex;
    justify-content: space-between;
  }

  .form-container {
    width: 41%;

    h1 {
      font-size: 3rem;
      margin-bottom: 3rem;
      text-align: left;

      color: ${({ theme }) =>
        theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
      transition: 500ms;
    }
  }

  .art-container {
    width: 50%;
    display: grid;
    place-items: center;
    padding: 1rem;
  }

  #email,
  #shirt,
  #phone-app {
    fill: ${({ theme }) =>
      theme === 'light' ? lightTheme.accent : darkTheme.accent};
    transition: 500ms;
  }

  #phone-background {
    fill: ${({ theme }) =>
      theme === 'light' ? lightTheme.background : darkTheme.background};
    transition: 500ms;
  }

  #phone-text,
  #leaf,
  #ground {
    fill: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
    transition: 500ms;
  }
`;
