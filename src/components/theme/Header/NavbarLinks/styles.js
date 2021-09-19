import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

export const Wrapper = styled.div`
  width: 100%;

  ${({ desktop }) =>
    desktop
      ? `
			align-items: center;
			display: flex;
			font-family: 'Bitter', serif;
			font-size: 1.2em;

			
			> button {
				margin-right: auto;
			}

			@media (max-width: 960px) {
					display: none;
			}

			> a {
				margin: 0 2em;

				
				&:last-child {
						margin-right: unset;
				}
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			> a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`;

export const StyledLink = styled(Link)`
  padding-bottom: 0.2rem;
  color: ${({ theme }) =>
    theme === 'light' ? lightTheme.lightColor : darkTheme.lightColor};
  transition: 500ms;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.hover};
    transform: scale(1.1);
  }

  ${({ activePage, theme }) =>
    activePage &&
    theme === 'light' &&
    `
		color: ${lightTheme.darkColor};
		border-bottom: 2px solid ${lightTheme.accent};
		transform: scale(1.1);
		`}

  ${({ activePage, theme }) =>
    activePage &&
    theme !== 'light' &&
    `
		color: ${darkTheme.darkColor};
		border-bottom: 2px solid ${darkTheme.accent};
		transform: scale(1.1);
		`}
`;
