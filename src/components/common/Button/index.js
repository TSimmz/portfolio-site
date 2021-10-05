import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

export const Button = styled.button`
  font-size: 1.5rem;
  line-height: 2rem;
  padding: 0.8rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: none;
  border-radius: 1rem;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  background: ${({ theme }) =>
    theme === 'light' ? lightTheme.navbarColor : darkTheme.navbarColor};
  transition: 500ms;

  ${({ theme }) =>
    theme === 'light' ? 'filter: drop-shadow(0px 4px 4px #afafaf);' : ''}

  font-weight: bold;

  &:disabled {
    background: gray;
  }

  &:hover {
    color: #ffffff;
    background: ${({ theme }) =>
      theme === 'light' ? lightTheme.accent : darkTheme.accent};
    transition: 500ms;
  }

  > a {
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.lightColor};
    transition: color 500ms;
  }

  p {
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.lightColor};
    transition: color 500ms;
  }

  > svg {
    width: 24px;
    margin-left: 1rem;

    > path {
      fill: ${({ theme }) =>
        theme === 'light' ? lightTheme.darkColor : darkTheme.lightColor};
      transition: 500ms;
    }
  }

  &:hover > a {
    color: ${lightTheme.background};
  }

  &:hover > p {
    color: ${lightTheme.background};
  }

  &:hover > svg {
    path {
      fill: ${lightTheme.background};
    }
  }
`;
