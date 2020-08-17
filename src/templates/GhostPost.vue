<template>
  <Layout>
    <article class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
      <header>
        <h1 v-html="$page.post.title"></h1>
        <g-image
          class="rounded w-full"
          v-if="$page.post.coverImage"
          :src="$page.post.coverImage"
        ></g-image>
      </header>
      <section>
        <blockquote
          v-html="$page.post.description"
          class="shadow py-4 pr-2"
        ></blockquote>
      </section>
      <section v-html="$page.post.content"></section>
      <section id="commento"></section>
    </article>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: ghostPost (path: $path) {
    title
    path
    date: published_at (format: "D. MMMM YYYY")
    tags {
      id
      title: name
      path
    }
    description: excerpt
    content: html
    coverImage: feature_image
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      link: [
        {
          href: process.env.GRIDSOME_COMMENTO_URL,
          rel: 'preconnect',
        },
      ],
      /**
       * Load & configure the Commento Javascript file.
       */
      script: [
        {
          src: `${process.env.GRIDSOME_COMMENTO_URL}/js/commento.js`,
          defer: true,
          'data-no-fonts': true,
        },
      ],
    };
  },

  mounted() {
    this.fixYoutubeEmbeds();
  },

  methods: {
    fixYoutubeEmbeds() {
      document.querySelectorAll('iframe').forEach((el) => {
        if (el.src && el.src.includes('https://www.youtube.com')) {
          el.src = el.src.replace(
            'https://www.youtube.com',
            'https://www.youtube-nocookie.com',
          );
          el.classList.add('embed-responsive-item');
          el.parentElement.classList.add('embed-responsive');
          el.parentElement.classList.add('aspect-ratio-16/9');
        }
      });
    },
  },
};
</script>
