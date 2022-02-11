import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  margin-bottom: 20px;
  padding: 20px 40px 0px;
  background-color: ${({ theme }) =>
    theme === 'light' ? lightTheme.navbarColor : darkTheme.navbarColor};
  ${({ theme }) =>
    theme === 'light' ? 'filter: drop-shadow(0px 4px 4px #dfdfdf);' : ''}

  transition: 100ms ease-in-out;

  h4 {
    margin-bottom: 0px;
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  align-self: center;
  margin-bottom: 1.5rem;
  padding: 1rem 1rem;

  @media (max-width: 440px) {
    padding: unset;
  }
`;

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80px;
  height: 80px;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) =>
    theme === 'light' ? '#afafaf' : darkTheme.background};

  transition: 500ms;
  &:hover {
    transform: scale(1.1);
  }

  img {
    object-fit: contain;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
