<template>
  <Layout>
    <div class="container max-w-2xl mx-auto">
      <g-image
        class="w-full"
        v-if="$page.post.coverImage"
        :src="$page.post.coverImage"
      ></g-image>
      <div class="mt-4 px-4">
        <article>
          <header>
            <div class="text-gray-700 italic text-sm">
              <p>
                published at
                <time class="font-semibold">{{ $page.post.date }}</time>
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
                class="font-semibold text-indigo-500"
                :to="'@' + author.slug"
              >
                @{{ author.name }}</g-link
              >
            </p>
            <div id="commento" class="mt-8"></div>
          </footer>
        </article>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: ghostPost (path: $path) {
    title
    path
    date: published_at (format: "MMMM DD, HH:MM")
    tags {
      id
      slug
      title: name
      path
    }
    authors {
      id
      name
      slug
    }
    description: excerpt
    content: html
    coverImage: feature_image
  }
}
</page-query>

<script>
import PostTags from '../components/PostTags';
import ReviewScore from '../components/ReviewScore';

export default {
  components: {
    PostTags,
    ReviewScore,
  },
  metaInfo() {
    return {
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
    author() {
      return this.$page.post.authors[0];
    },

    isReview() {
      return this.$page.post.tags.some((tag) => {
        return tag.slug === 'review';
      });
    },
  },
};
</script>
