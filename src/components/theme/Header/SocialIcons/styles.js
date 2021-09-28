import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ desktop }) =>
    desktop
      ? `
      flex-direction: row;
    `
      : `
      flex-direction: column;
    `}

  a {
    width: 24px;
    height: 24px;
    transition: filter 400ms;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin: 0;
      fill: ${({ theme }) =>
        theme === 'light' ? lightTheme.lightColor : darkTheme.lightColor};
      transition: 500ms;

      &:hover {
        fill: ${({ theme }) =>
          theme === 'light' ? lightTheme.hover : darkTheme.hover};
      }
    }

    ${({ desktop }) =>
      desktop
        ? `
      margin-right: 0.75rem;
      &:last-child {
      margin-right: unset;
    }
    `
        : `
      margin-bottom: 0.75rem;
      &:last-child {
        margin-bottom: unset;
    `}
  }
`;
