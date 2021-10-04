import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

export const Wrapper = styled.div`
  height: 60px;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo-header {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .logo-header svg {
    width: 30px;

    rect {
      fill: ${({ theme }) =>
        theme === 'light' ? lightTheme.accent : darkTheme.accent};
    }
  }

  .logo-header h3 {
    font-family: 'Open Sans Pro', Arial, Helvetica, sans-serif;
    font-size: 1.5rem;
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
    margin: 0;
    margin-left: 1rem;
    width: 175px;
    letter-spacing: 0.1rem;
  }
`;
