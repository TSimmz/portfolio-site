import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

export const Button = styled.button`
  cursor: pointer;
  border-radius: 10px;
  border: none;
  padding: 0;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #ffffff;
  background: ${({ theme }) =>
    theme === 'light' ? lightTheme.navbarColor : darkTheme.navbarColor};
  transition: 500ms;

  ${({ theme }) =>
    theme === 'light' ? 'filter: drop-shadow(0px 4px 4px #afafaf);' : ''}

  font-weight: bold;

  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }

  &:hover {
    color: #ffffff;
    background: ${({ theme }) =>
      theme === 'light' ? lightTheme.accent : darkTheme.accent};
  }

  ${({ secondary }) =>
    secondary &&
    `
  background: #001F3F;
    `}
`;
