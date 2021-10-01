import styled from 'styled-components';
import { Link } from 'gatsby';
import { lightTheme, darkTheme } from 'providers/ThemeProvider';

export const Wrapper = styled.div`
  width: 100%;
  font-family: 'Bitter', serif;

  ${({ desktop }) =>
    desktop
      ? `
			display: flex;
			align-items: center;
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
			padding: 1.5rem 1.5rem 1.5rem 1.2rem;
			display: flex;
			flex-direction: column;
			align-items: center;

			> button{ 
					margin-bottom: 2rem;
				}

			> a {
				margin-bottom: 2rem;
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
  }
`;
