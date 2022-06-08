// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `nej6sp7m78pg`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `gps6-MKyFzNrm3yRzRyymQSLQ51POnodJpVVopB6Vi0`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`
  ]
};
