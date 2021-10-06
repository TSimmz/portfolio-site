import React, { useContext } from 'react';
import { FooterWrapper } from './styles';
import { ThemeContext } from 'providers/ThemeProvider';

export const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <FooterWrapper theme={theme}>
      <span>Tyler Simoni © {new Date().getFullYear()}</span>
      <span class='divider'> | </span>
      <span>
        built by
        <a href='https://www.github.com/tsimmz'> Tyler Simoni</a>
      </span>
      <span class='divider'> | </span>
      <span>
        built with
        <a href='https://www.gatsbyjs.com/'> Gatsby JS</a>
      </span>
      <span class='divider'> | </span>
      <span>
        hosted by
        <a href='https://www.netlify.com/'> Netlify</a>
      </span>
      <span class='divider'> | </span>
      <span>
        hosted by
        <a href='https://undraw.co/'> unDraw</a>
      </span>
      <span class='divider'> | </span>
      <span>
        contact by
        <a href='https://www.emailjs.com/'> Email JS</a>
      </span>
    </FooterWrapper>
  );
};
