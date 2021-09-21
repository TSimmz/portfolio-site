import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

export const PageTitle = styled.h1`
  font-size: clamp(3rem, 1.2857rem + 7.619vw, 9rem);
  letter-spacing: clamp(0.9rem, 0.7857rem + 0.9524vw, 1.5rem);
  margin: 0;

  color: ${({ theme }) =>
    theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
  transition: 500ms;

  &.center {
    align-self: center;
  }

  &.left {
    align-self: flex-start;
  }

  &.right {
    align-self: flex-end;
  }

  &.margin-bottom {
    margin-bottom: 2rem;
  }

  &.margin-top {
    margin-top: 2.5rem;
  }

  &.margin-left {
    margin-left: 1.5rem;
  }

  &.margin-right {
    margin-right: 1.5rem;
  }
`;
