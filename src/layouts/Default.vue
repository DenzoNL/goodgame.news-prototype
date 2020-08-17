<template>
  <div class="antialiased">
    <header>
      <h1
        class="text-4xl font-bold text-indigo-500"
        v-html="$static.metadata.siteName"
      ></h1>
    </header>
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
export default {
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
