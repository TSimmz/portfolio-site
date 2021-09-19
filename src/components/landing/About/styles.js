import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

// Add background-images to this
export const Wrapper = styled.div`
  width: 100%;
  height: 85vh;
  margin: 92px 0px;
  display: flex;
  align-items: center;
`;

export const AboutWrapper = styled.section`
  max-width: 55vw;
  height: 55vh;
  margin: 0 auto;
  padding: 0 20px;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 1310px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const AboutDivider = styled.div`
  @media (max-width: 1310px) {
    height: 0;
    width: 100%;
    margin: 20px 0;
  }
`;

export const Details = styled.div`
  flex-shrink: 10;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 1310px) {
    align-items: center;
  }

  p {
    font-size: 1.2rem;
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
    transition: 500ms;
  }
`;

export const Image = styled.img`
  display: block;
  max-width: 40%;
  object-fit: contain;
  border-radius: 10px;
  align-self: center;

  ${({ theme }) =>
    theme === 'light' ? 'filter: drop-shadow(0px 4px 4px #afafaf);' : ''}
  transition: 500ms;

  @media (max-width: 1310px) {
    max-width: 50%;
  }
`;
