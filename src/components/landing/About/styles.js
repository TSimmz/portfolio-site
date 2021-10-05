import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

export const AboutSection = styled.section`
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
  }

  .art-container {
    display: flex;
    flex-direction: column;

    flex-grow: 1;

    h1 {
      font-size: 3rem;
      margin-top: 3rem;
      margin-bottom: 5rem;
      text-align: left;

      color: ${({ theme }) =>
        theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
      transition: 500ms;
    }
  }

  .card-container {
    flex-grow: 2;
    display: flex;
    align-items: center;
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
