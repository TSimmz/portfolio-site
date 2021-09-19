import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    margin: 0 0.5rem;
    width: 24px;
    height: 24px;
    transition: filter 400ms;

    svg {
      margin: 0;
      fill: ${({ theme }) =>
        theme === 'light' ? lightTheme.lightColor : darkTheme.lightColor};
      transition: 500ms;

      &:hover {
        fill: ${({ theme }) =>
          theme === 'light' ? lightTheme.hover : darkTheme.hover};
        transform: scale(1.1);
      }
    }
  }
`;
