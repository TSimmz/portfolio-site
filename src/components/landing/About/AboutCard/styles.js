import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

export const Card = styled.div`
  min-width: 300px;
  width: 300px;
  height: 290px;
  border-radius: 1rem;
  padding: 2rem;
  position: relative;
  margin: 1.5rem;
  background-color: ${({ theme }) =>
    theme === 'light' ? lightTheme.navbarColor : darkTheme.navbarColor};
  transition: 500ms;

  .image-border {
    width: 70px;
    height: 70px;
    background-color: ${({ theme }) =>
      theme === 'light' ? '#e7e7e7' : '#454545'};
    border-radius: 50%;
    position: absolute;
    top: calc(-1 * 70px / 2);
    display: grid;
    place-items: center;
    transition: 500ms;
  }

  .image-background {
    width: 60px;
    height: 60px;
    background-color: ${({ theme }) =>
      theme === 'light' ? lightTheme.navbarColor : darkTheme.navbarColor};
    border-radius: 50%;
    display: grid;
    place-items: center;
    transition: 500ms;
  }

  .card-icon {
    width: 42px;
    height: 42px;

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
    font-size: 1rem;
    font-weight: normal;
    color: #c7c7c7;
    line-height: 1.1rem;
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.lightColor : darkTheme.lightColor};
    transition: 500ms;
  }
`;
