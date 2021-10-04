import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

export const Wrapper = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;

  &:focus {
    outline: none;
  }

  @media (max-width: 960px) {
    text-align: left;
  }

  svg {
    margin-bottom: unset;
    fill: none;
    stroke: ${({ theme }) =>
      theme === 'light' ? lightTheme.lightColor : darkTheme.lightColor};

    &:hover {
      stroke: ${({ theme }) =>
        theme === 'light' ? lightTheme.hover : darkTheme.hover};
    }
  }

  ${({ desktop }) =>
    !desktop &&
    `
    align-self: center;
    margin-top: 3rem;
    margin-right: 1rem;
    `}
`;
