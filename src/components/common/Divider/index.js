import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

export const Divider = styled.div`
  border: 3px solid
    ${({ theme }) => (theme === 'light' ? lightTheme.accent : darkTheme.accent)};
  border-radius: 5px;
  transition: border 500ms;

  ${({ vertical }) =>
    vertical &&
    `
      height: inherit;
      margin: 0 40px;
    `}

  ${({ horizontal }) =>
    horizontal &&
    `
      width: 100%;
      margin: 20px 0;
    `}
`;
