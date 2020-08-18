// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'GoodGame.news',
  siteUrl: 'https://goodgame.news',
  plugins: [
    /**
     * Add the Tailwind CSS plugin.
     */
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: true,
        shouldTimeTravel: true,
      },
    },
    /**
     * Use Ghost CMS as our data source.
     */
    {
      use: '@gridsome/source-ghost',
      options: {
        baseUrl: process.env.GRIDSOME_GHOST_URL,
        contentKey: process.env.GHOST_CONTENT_KEY,
      },
    },
    /**
     * Automatically generate a sitemap
     */
    {
      use: '@gridsome/plugin-sitemap',
    },
    /**
     * Use Ackee analytics.
     */
    {
      use: 'gridsome-plugin-ackee',
      options: {
        domain: process.env.ACKEE_URL,
        domainId: process.env.ACKEE_ID,
      },
    },
  ],
  /**
   * Define templates to use with the Ghost data
   */
  templates: {
    GhostPost: '/:slug',
    GhostTag: '/tag/:slug',
    GhostAuthor: '/@:slug',
  },
};
