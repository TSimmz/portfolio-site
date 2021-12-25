import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

export const ContactSection = styled.section`
  display: flex;
  justify-content: center;

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
    margin: 0 2.6rem;
    padding: 2.25rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    > svg {
      width: 100%;
      height: 240px;
    }

    h1 {
      font-size: 3rem;
      margin-bottom: 3rem;

      color: ${({ theme }) =>
        theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
      transition: 500ms;
    }

    > form {
      width: 100%;
    }
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
