<template>
  <div class="container max-w-2xl mx-auto">
    <g-image
      class="w-full"
      :alt="`Article cover image for '${$page.post.title}'`"
      v-if="$page.post.coverImage"
      :src="$page.post.coverImage"
    ></g-image>
    <div class="mt-4 px-4">
      <article>
        <header>
          <div class="text-gray-700 italic text-sm">
            <p>
              published on
              <time
                class="font-semibold text-indigo-900"
                :datetime="$page.post.date"
                >{{ publishedDate }}</time
              >
              at
              <span class="font-semibold text-indigo-900">{{
                publishedTime
              }}</span>
            </p>
          </div>
          <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mt-2">
            <h1
              class="text-4xl text-bold tracking-tight"
              v-html="$page.post.title"
            ></h1>
          </div>
          <PostTags :post="$page.post" class="mt-4"></PostTags>
        </header>
        <section
          v-html="$page.post.content"
          class="mt-4 prose prose-sm sm:prose lg:prose-lg xl:prose-xl"
        ></section>
        <footer class="mt-8">
          <ReviewScore v-if="isReview" :post="$page.post"></ReviewScore>
          <p class="border-b mt-8 pb-2">
            By
            <g-link
              class="font-semibold text-indigo-700"
              :to="$page.post.author.path"
            >
              @{{ $page.post.author.name }}</g-link
            >
          </p>
          <div id="commento" class="mt-8"></div>
        </footer>
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
query Post ($path: String!) {
  post: ghostPost (path: $path) {
    title
    path
    date: published_at
    updated_at,
    tags {
      id
      slug
      title: name
      path
    }
    author: primary_author {
      id
      name
      slug
      path
    }
    description: excerpt
    content: html
    coverImage: feature_image
  }
}
</page-query>

<script>
import { format, parseISO } from 'date-fns';
import PostTags from '../components/PostTags';
import ReviewScore from '../components/ReviewScore';

export default {
  components: {
    PostTags,
    ReviewScore,
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description,
        },
        {
          property: 'og:title',
          content: this.$page.post.title,
        },
        {
          property: 'og:description',
          content: this.$page.post.description,
        },
        {
          property: 'og:image',
          content: this.$page.post.coverImage,
        },
        {
          property: 'og:type',
          content: 'article',
        },
        {
          property: 'og:url',
          content: `${this.$static.metadata.siteUrl}${this.$page.post.path}`,
        },
        {
          name: 'twitter:title',
          content: this.$page.post.title,
        },
        {
          name: 'twitter:description',
          content: this.$page.post.description,
        },
        {
          name: 'twitter:image',
          content: this.$page.post.coverImage,
        },
        {
          name: 'twitter:site',
          content: process.env.GRIDSOME_TWITTER_SITE,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
      link: [
        {
          href: process.env.GRIDSOME_COMMENTO_URL,
          rel: 'preconnect',
        },
        {
          rel: 'preload',
          href: `${process.env.GRIDSOME_COMMENTO_URL}/css/commento.css`,
          as: 'style',
        },
      ],
      /**
       * Load & configure the Commento Javascript file.
       */
      script: [
        {
          type: 'application/ld+json',
          json: this.structuredData,
        },
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

  computed: {
    publishedDate() {
      return format(parseISO(this.$page.post.date), 'dd MMMM yyyy');
    },

    publishedTime() {
      return format(parseISO(this.$page.post.date), 'hh:mm');
    },

    isReview() {
      return this.$page.post.tags.some((tag) => {
        return tag.slug === 'review';
      });
    },

    structuredData() {
      return {
        '@context': 'http://schema.org',
        '@type': 'NewsArticle',
        headline: this.$page.post.title,
        description: this.$page.post.description,
        image: [this.$page.post.coverImage],
        author: {
          '@type': 'Person',
          name: this.$page.post.author.name,
          url: `${this.$static.metadata.siteUrl}${this.$page.post.author.path}`,
        },
        datePublished: this.$page.post.date,
        dateModified: this.$page.post.updated_at,
      };
    },
  },
};
</script>
