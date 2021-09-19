import styled from 'styled-components';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

export const Error = styled.span`
  color: ${({ theme }) =>
    theme === 'light' ? lightTheme.accent : darkTheme.accent};
`;

export const InputField = styled.div`
  position: relative;
  margin-bottom: 1rem;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  color: ${({ theme }) =>
    theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
  background-color: ${({ theme }) =>
    theme === 'light' ? lightTheme.navbarColor : darkTheme.navbarColor};
  border: 2px solid
    ${({ theme }) =>
      theme === 'light' ? lightTheme.lightColor : darkTheme.lightColor};
  padding: 0.8rem 1rem;
  border-radius: 7px;
  margin-bottom: 0.5rem;
  transition: 0.3s;

  &:focus {
    border-color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
  }

  ${({ error, theme }) =>
    error &&
    theme === 'light' &&
    `
		border-color: ${lightTheme.accent};
	`}

  ${({ error, theme }) =>
    error &&
    theme !== 'light' &&
    `
		border-color: ${darkTheme.accent};
	`}

  &::placeholder {
    color: ${lightTheme.lightColor};
  }
`;

export const Submit = styled.button`
  width: 175px;
  height: 50px;
  font-size: 24px;
  margin-top: 16px;

  color: ${({ theme }) =>
    theme === 'light' ? lightTheme.darkColor : darkTheme.darkColor};
  background-color: ${({ theme }) =>
    theme === 'light' ? lightTheme.navbarColor : darkTheme.navbarColor};

  &:disabled {
    color: ${({ theme }) =>
      theme === 'light'
        ? lightTheme.darkColor + 'a1'
        : darkTheme.darkColor + 'a1'};
    background-color: ${({ theme }) =>
      theme === 'light' ? lightTheme.lightColor : darkTheme.lightColor};
  }
`;

export const EmailJS = styled.a`
  width: 250px;
  height: 50px;
  display: flex;
  align-items: center;
  margin-top: 1.5rem;

  p {
    margin: 0;
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.lightColor : darkTheme.lightColor};
  }

  img {
    margin: 0;
    width: 50px;
    height: 30px;
    object-fit: contain;
  }
`;
