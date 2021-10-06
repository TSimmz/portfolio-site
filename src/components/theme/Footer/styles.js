import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3rem;
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
  padding: 0 rem;
  color: ${({ theme }) =>
    theme === 'light' ? lightTheme.darkColor : darkTheme.lightColor};

  a {
    color: inherit;
  }

  .divider {
    margin: 0 0.5rem;
  }
`;
