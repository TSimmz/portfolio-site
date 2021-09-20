import styled from 'styled-components';
import { Link } from 'gatsby';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

export const Wrapper = styled.div`
  width: 100%;

  ${({ desktop }) =>
    desktop
      ? `
			align-items: center;
			display: flex;
			font-family: 'Bitter', serif;
			font-size: 1.4rem;
			
			> button {
				margin-right: auto;
			}

			@media (max-width: 960px) {
					display: none;
			}

			> a {
				margin-right: 2.5rem;

				
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
  color: ${({ theme }) =>
    theme === 'light' ? lightTheme.lightColor : darkTheme.lightColor};
  transition: 500ms;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) =>
      theme === 'light' ? lightTheme.darkColor : darkTheme.hover};
    transform: scale(1.1);
  }
`;
