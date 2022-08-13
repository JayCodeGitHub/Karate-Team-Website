const path = require('path');

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
      apiToken: '84ef94e86425e890c1ec914686e4a0',
    },
  },
  'gatsby-plugin-styled-components',
  'gatsby-plugin-image',
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: './src/assets/images/',
    },
    __key: 'images',
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
  }],
};
