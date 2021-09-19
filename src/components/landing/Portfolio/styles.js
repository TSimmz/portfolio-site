import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

// Add background-images to this
export const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
`;

export const PortfolioWrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 144px;
    letter-spacing: 1.5rem;
    margin-bottom: 2rem;

    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
    transition: 500ms;
  }

  h4 {
    font-size: 2rem;
    font-weight: normal;
    letter-spacing: 1px;
    margin-top: 28px;
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
  }

  .inProgress {
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.accent : darkTheme.accent};
  }
`;

export const Divider = styled.div`
  width: 100%;
  border: 3px solid
    ${({ theme }) => (theme === 'light' ? lightTheme.accent : darkTheme.accent)};
  border-radius: 5px;
`;
