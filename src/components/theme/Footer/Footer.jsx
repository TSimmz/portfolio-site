import React, { useContext } from 'react';
import { FooterWrapper } from './styles';
import { ThemeContext } from 'providers/ThemeProvider';

export const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <FooterWrapper theme={theme}>
      <span>Tyler Simoni © {new Date().getFullYear()}</span>
      <span className='divider'> | </span>
      <span>
        built by
        <a
          href='https://www.github.com/tsimmz'
          target='_blank'
          rel='noreferrer'>
          {' '}
          Tyler Simoni
        </a>
      </span>
      <span className='divider'> | </span>
      <span>
        built with
        <a href='https://www.gatsbyjs.com/' target='_blank' rel='noreferrer'>
          {' '}
          Gatsby JS
        </a>
      </span>
      <span className='divider'> | </span>
      <span>
        hosted by
        <a href='https://www.netlify.com/' target='_blank' rel='noreferrer'>
          {' '}
          Netlify
        </a>
      </span>
      <span className='divider'> | </span>
      <span>
        illustrations by
        <a href='https://undraw.co/' target='_blank' rel='noreferrer'>
          {' '}
          unDraw
        </a>
      </span>
      <span className='divider'> | </span>
      <span>
        contact by
        <a href='https://www.emailjs.com/' target='_blank' rel='noreferrer'>
          {' '}
          Email JS
        </a>
      </span>
    </FooterWrapper>
  );
};
