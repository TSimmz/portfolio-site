import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

export const PageTitle = styled.h1`
  font-size: clamp(4rem, 6vw + 1rem, 9rem);
  letter-spacing: 1.4rem;
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
    margin-bottom: 2.5rem;
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
