import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

export const Card = styled.div`
  width: 275px;
  height: 250px;
  border-radius: 1rem;
  padding: 1.5rem;
  margin: 1rem;
  position: relative;
  background-color: ${({ theme }) =>
    theme === 'light' ? lightTheme.navbarColor : darkTheme.navbarColor};
  transition: 500ms;

  .image-border {
    width: 22%;
    top: calc(-1 * (22% / 2));
    aspect-ratio: 1;
    background-color: ${({ theme }) =>
      theme === 'light' ? '#e7e7e7' : '#454545'};
    border-radius: 50%;
    position: absolute;
    display: grid;
    place-items: center;
    transition: 500ms;
  }

  .image-background {
    width: 85%;
    aspect-ratio: 1;
    background-color: ${({ theme }) =>
      theme === 'light' ? lightTheme.navbarColor : darkTheme.navbarColor};
    border-radius: 50%;
    display: grid;
    place-items: center;
    transition: 500ms;
  }

  .card-icon {
    width: 70%;
    aspect-ratio: 1;

    path {
      fill: ${({ theme }) =>
        theme === 'light' ? lightTheme.lightColor : darkTheme.lightColor};
      transition: 500ms;
    }
  }

  .card-header {
    font-size: 1.3rem;
    color: #eeeeee;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
    transition: 500ms;
  }

  .card-text {
    font-size: 0.9rem;
    font-weight: normal;
    color: #c7c7c7;
    line-height: 1.1rem;
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.lightColor : darkTheme.lightColor};
    transition: 500ms;
  }
`;
