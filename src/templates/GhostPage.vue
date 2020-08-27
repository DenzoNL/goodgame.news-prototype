<template>
  <div class="container max-w-2xl mx-auto flex-grow">
    <div class="mt-4 px-4">
      <article class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
        <header>
          <h1 v-html="$page.page.title"></h1>
        </header>
        <section v-html="$page.page.content"></section>
      </article>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteUrl
  }
}
</static-query>

<page-query>
query Page($path: String!) {
  page: ghostPage (path: $path) {
    title
    content: html
    description: excerpt
    path
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.page.title,
      meta: [
        {
          name: 'description',
          content: this.$page.page.description,
        },
        {
          property: 'og:title',
          content: this.$page.page.title,
        },
        {
          property: 'og:description',
          content: this.$page.page.description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: `${this.$static.metadata.siteUrl}${this.$page.page.path}`,
        },
        {
          name: 'twitter:title',
          content: this.$page.page.title,
        },
        {
          name: 'twitter:description',
          content: this.$page.page.description,
        },
        {
          name: 'twitter:site',
          content: process.env.GRIDSOME_TWITTER_SITE,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
      ],
    };
  },
};
</script>
