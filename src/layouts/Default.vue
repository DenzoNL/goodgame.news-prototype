<template>
  <div class="antialiased">
    <NavBar></NavBar>
    <div class="container max-w-2xl mx-auto mt-4 px-4">
      <slot />
    </div>
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
