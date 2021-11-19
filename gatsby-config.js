/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Stephen Tamiesie, Software Engineer',
    titleTemplate: '%s • Software Engineer',
    description:
    'Welcome to my portfolio site. I\'m passionate about using technology to solve human centered problems.',
    url: 'https://www.stephen-tamiesie.com/',
    image: '/stephen_tamiesie_portfolio_site.png',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
  siteMetadata: {
    title: '',
    description: 'web development portfolio',
    copyright: '© 2021 Stephen Tamiesie',
    contact: 'stephen.tamiesie@gmail.com'
  }
}
