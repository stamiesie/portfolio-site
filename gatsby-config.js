module.exports = {
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
    {
      resolve: 'gatsby-plugin-newrelic',
      options: {
        config: {
          instrumentationType: 'proAndSPA',
          accountId: '3457403',
          trustKey: '3457403',
          agentID: '1588672709',
          licenseKey: 'NRJS-8fb06d35994c354e36a',
          applicationID: '1588672709',
          beacon: 'bam.nr-data.net',
          errorBeacon: 'bam.nr-data.net',
        },
      },
    },
  ],
  siteMetadata: {
    title: 'Stephen Tamiesie',
    titleTemplate: '%s • Software Engineer',
    description:
      "Welcome to my portfolio site. I'm passionate about using technology to solve human centered problems.",
    url: 'https://www.stephen-tamiesie.com',
    image: '/stephen_tamiesie_portfolio_site.png',
    copyright: '© 2021 Stephen Tamiesie',
    contact: 'stephen.tamiesie@gmail.com',
  },
};
