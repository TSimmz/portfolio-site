import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

// Add background-images to this
export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: unset;
    padding-top: 90px;
  }
`;

export const AboutWrapper = styled.section`
  padding: 0 40px;
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: contain;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const AboutDivider = styled.div`
  height: clamp(600px, 40vw + 1rem, 65vh);
  margin: 0 40px;

  @media (max-width: 768px) {
    height: 0;
    width: 100%;
    margin: 20px 0;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: min(50%, 700px);

  @media (max-width: 768px) {
    align-items: center;
    width: 90%;
  }

  p {
    font-size: clamp(1rem, -0.0046rem + 3.6697vw, 1.3rem);
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
    transition: 500ms;
  }
`;

export const Image = styled.img`
  width: clamp(350px, 30vw + 1rem, 560px);
  object-fit: contain;
  border-radius: 10px;
  margin: 0;
  ${({ theme }) =>
    theme === 'light' ? 'filter: drop-shadow(0px 4px 4px #afafaf);' : ''}
  transition: 500ms;

  @media (max-width: 768px) {
    max-width: 50%;
  }
`;
