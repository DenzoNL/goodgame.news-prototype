<template>
  <div class="antialiased min-h-screen flex flex-col">
    <NavBar></NavBar>
    <slot />
    <Footer></Footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default {
  components: {
    NavBar,
    Footer,
  },
  metaInfo() {
    return {
      meta: [
        {
          name: 'theme-color',
          content: '#667eea',
        },
        {
          name: 'referrer',
          content: 'no-referrer-when-downgrade',
        },
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest',
        },
        {
          href: process.env.GRIDSOME_GHOST_URL,
          rel: 'preconnect',
          crossorigin: true,
        },
      ],
    };
  },
};
</script>
