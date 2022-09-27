const path = require('path');
require('dotenv').config();

const gatsbyRequiredRules = path.join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules',
);

module.exports = {
  siteMetadata: {
    title: 'Karate-Team-Oborniki',
    siteUrl: 'https://www.yourdomain.tld',
  },
  plugins: [{
    resolve: 'gatsby-source-datocms',
    options: {
      apiToken: process.env.API_DATO_CMS,
    },
  },
  'gatsby-plugin-styled-components',
  'gatsby-plugin-image',
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: '/assets/icons', // See below to configure properly
      },
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: './src/assets/images/',
    },
    __key: 'images',
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'Karate Team Oborniki',
      short_name: 'Karate Team',
      start_url: '/',
      display: 'standalone',
      icon: 'src/assets/images/logo.jpeg',
    },
  },
  {
    resolve: 'gatsby-plugin-root-import',
    options: {
      assets: path.join(__dirname, 'src', 'assets'),
      components: path.join(__dirname, 'src', 'components'),
    },
  },
  {
    resolve: 'gatsby-plugin-eslint',
    options: {
      rulePaths: [gatsbyRequiredRules],
      stages: ['develop'],
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      exclude: ['node_modules', 'bower_components', '.cache', 'public'],
      // ...
    },
  },
  {
    resolve: 'gatsby-plugin-google-fonts',
    options: {
      fonts: [
        'montserrat\:300,500,700',
      ],
      display: 'swap',
    },
  },
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /assets\/icons/,
      },
    },
  }],
};
