import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  margin-bottom: 20px;
  padding: 0px 40px;
  background-color: ${({ theme }) =>
    theme === 'light' ? lightTheme.navbarColor : darkTheme.navbarColor};
  ${({ theme }) =>
    theme === 'light' ? 'filter: drop-shadow(0px 4px 4px #dfdfdf);' : ''}
  border: 0px solid
      ${({ theme }) =>
    theme === 'light' ? lightTheme.accent : darkTheme.accent};
  transition: 100ms ease-in-out;

  &:hover {
    border: 2px solid
      ${({ theme }) =>
        theme === 'light' ? lightTheme.accent : darkTheme.accent};
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;
