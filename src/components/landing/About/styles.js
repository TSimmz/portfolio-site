import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

export const AboutSection = styled.section`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) =>
    theme === 'light' ? '#e7e7e7' : '#454545'};
  transition: 500ms;

  .content-container {
    margin: 3rem;
    padding: 2.25rem 0;
    width: 80%;
    max-width: 1150px;
    display: flex;
    flex-direction: column;
    align-items: center;

    > svg {
      width: 85%;
      margin: 0;
    }

    h1 {
      font-size: 3rem;
      margin-bottom: 2rem;
      color: ${({ theme }) =>
        theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
      transition: 500ms;
    }
  }

  .art-container {
    display: flex;
    flex-direction: column;
  }

  .card-container {
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  #shirt {
    fill: ${({ theme }) =>
      theme === 'light' ? lightTheme.accent : darkTheme.accent};
    transition: 500ms;
  }

  #plant,
  #ground {
    fill: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
    transition: 500ms;
  }
`;
