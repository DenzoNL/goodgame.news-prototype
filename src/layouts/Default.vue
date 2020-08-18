<template>
  <div class="antialiased">
    <NavBar></NavBar>
    <slot />
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

export default {
  components: {
    NavBar,
  },
  metaInfo() {
    return {
      meta: [
        {
          name: 'referrer',
          content: 'no-referrer-when-downgrade',
        },
      ],
      link: [
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
