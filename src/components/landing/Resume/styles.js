import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

// Add background-images to this
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 60px;
`;

export const ResumeWrapper = styled.section`
  max-width: 1200px;
  margin: 30px auto;
  padding: 0 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 440px) {
    margin: 1rem auto;
    padding: 0 20px;
  }

  h4 {
    margin: 10px auto 30px;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 1px;
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
    transition: 500ms;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
    transition: 500ms;

    @media (max-width: 770px) {
      font-size: 1.1rem;
    }
    @media (max-width: 440px) {
      font-size: 1rem;
    }
  }

  ul {
    margin-top: 1rem;
  }

  li {
    font-size: 1.2rem;
    margin-left: 50px;
    margin-bottom: 20px;
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
    transition: 500ms;

    @media (max-width: 440px) {
      font-size: 0.9rem;
      margin-left: 10px;
    }
  }
`;

export const ResumeBody = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1310px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  flex: 1;
  margin: 0px 30px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.3rem;
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
`;
