module.exports = {
  siteMetadata: {
    title: `Collectives`,
    siteUrl: `https://https://www.collectivesart.com`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-0EDH3QB4P8", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", 'gatsby-plugin-no-javascript-utils', {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
    },
    resolve: 'gatsby-plugin-no-javascript-utils',
      options: {
        noScript: true,
        noSourcemaps: true,
        removeGeneratorTag: true,
        removeReactHelmetAttrs: true,
        noInlineStyles: false,
        removeGatsbyAnnouncer: false,
    },
    resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/faviconplaceholder.png',
    },
  }]
};