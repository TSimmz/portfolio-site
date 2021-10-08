import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

export const AboutSection = styled.section`
  .section-background {
    background-color: ${({ theme }) =>
      theme === 'light' ? '#e7e7e7' : '#454545'};
    width: 100%;
    height: 70vh;
    display: grid;
    place-items: center;
    transition: 500ms;
  }

  .content-container {
    margin: 0 3rem;
    width: 80%;
    max-width: 1150px;
    display: grid;
    grid-template-areas: 'art cards';
  }

  .art-container {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 3rem;
      margin-top: 3rem;
      margin-bottom: 5rem;
      text-align: left;

      color: ${({ theme }) =>
        theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
      transition: 500ms;
    }

    svg {
      width: 100%;
    }
  }

  .card-container {
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
