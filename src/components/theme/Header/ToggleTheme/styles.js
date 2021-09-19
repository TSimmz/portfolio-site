import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

export const Wrapper = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.3s all;
  width: 24px;
  height: 24px;

  &:focus {
    outline: none;
    transition: 0.3s all;
  }

  @media (max-width: 960px) {
    text-align: left;
  }

  svg {
    margin-bottom: unset;
    fill: none;
    stroke: ${({ theme }) =>
      theme === 'light' ? lightTheme.lightColor : darkTheme.lightColor};
    transition: 500ms;

    &:hover {
      stroke: ${({ theme }) =>
        theme === 'light' ? lightTheme.hover : darkTheme.hover};
      transform: scale(1.1);
    }
  }
`;
