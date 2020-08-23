// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'goodgame.news',
  siteUrl: 'https://goodgame.news',
  icon: './src/logo-512x512.png',
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
     * Automatically  generate a manifest
     */
    {
      use: 'gridsome-plugin-manifest',
      options: {
        background_color: '#f7fafc',
        icon_path: './src/logo-512x512.png',
        name: 'goodgame.news',
        short_name: 'gg.',
        theme_color: '#667eea',
        lang: 'en',
      },
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
    GhostPage: '/:slug',
    GhostPost: [
      {
        path: (node) => {
          return node.primary_tag.id === '5f0799ccc4b76000012f11e1'
            ? `/reviews/${node.slug}`
            : `/${node.slug}`;
        },
        component: './src/templates/GhostPost.vue',
      },
    ],
    GhostTag: [
      {
        path: (node) => {
          return node.slug === 'review' ? '/reviews' : `/tag/${node.slug}`;
        },
        component: './src/templates/GhostTag.vue',
      },
    ],
    GhostAuthor: '/@:slug',
  },
};
