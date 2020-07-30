module.exports = {
  siteMetadata: {
    title: `Dhiraj Basukala: Frontend developer from Nepal`,
    siteUrl: `https://www.dhirajbasukala.com.np`,
    description: `A passionate frontend developer from Nepal with a decade of experience in web industory.`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `basukala`,
        short_name: `dhirajbasukala`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#e80858`,
        display: `standalone`,
      },
    },
  ],
}
