// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    /**
     * Use Ghost CMS as our data source.
     */
    {
      use: '@gridsome/source-ghost',
      options: {
        baseUrl: process.env.GHOST_URL,
        contentKey: process.env.GHOST_CONTENT_KEY,
      }
    }
  ],
  templates: {
    GhostPost: '/:slug',
    GhostTag: '/tag/:slug',
  }
}
