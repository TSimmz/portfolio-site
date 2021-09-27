const path = require(`path`);

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: 'https://tylersimoni.me',
    title: 'Tyler Simoni | Portfolio',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-react-svg',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: './src/images/logo.png',
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `skills`,
        path: `${__dirname}/src/assets/skills/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `resume`,
        path: `${__dirname}/src/data/Resume`,
      },
    },
  ],
};
