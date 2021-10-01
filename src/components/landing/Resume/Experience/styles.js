import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  margin-bottom: 1.4rem;
  padding: 0 2.5rem 1rem;
  background-color: ${({ theme }) =>
    theme === 'light' ? lightTheme.navbarColor : darkTheme.navbarColor};
  ${({ theme }) =>
    theme === 'light' ? 'filter: drop-shadow(0px 4px 4px #dfdfdf);' : ''}

  transition: 100ms ease-in-out;

  @media (max-width: 440px) {
    padding: 0 1.3rem 1rem;
  }
`;

export const Job = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;

  @media (max-width: 440px) {
    margin-top: 1rem;
  }
`;
