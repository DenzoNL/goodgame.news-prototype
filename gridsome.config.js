// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'GoodGame.news',
  plugins: [
    /**
     * Add the Tailwind CSS plugin.
     */
    {
      use: 'gridsome-plugin-tailwindcss',
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
  ],
  /**
   * Define templates to use with the Ghost data
   */
  templates: {
    GhostPost: '/:slug',
    GhostTag: '/tag/:slug',
  },
};
