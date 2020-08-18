<template>
  <div>
    <div class="flex justify-between items-center text-xs mt-2">
      <g-link :to="'@' + author.slug" class="font-semibold text-indigo-500"
        >@{{ author.name }}</g-link
      >

      <template v-if="post.reading_time">
        <p>{{ post.reading_time }} min read</p>
      </template>
    </div>
    <div class="flex justify-between items-center text-xs">
      <time :datetime="post.date">{{ timeAgo }} ago</time>
      <a :href="commentCountPath"></a>
    </div>
  </div>
</template>
<script>
import { formatDistanceToNow, parseISO } from 'date-fns';

export default {
  props: ['post'],

  metaInfo() {
    return {
      link: [
        {
          href: process.env.GRIDSOME_COMMENTO_URL,
          rel: 'preconnect',
        },
        {
          rel: 'preload',
          href: `${process.env.GRIDSOME_COMMENTO_URL}/js/count.js`,
          as: 'script',
        },
      ],
      /**
       * Load in the Commento count script
       * so PostCard.vue can fetch the comment count.
       */
      script: [
        {
          src: `${process.env.GRIDSOME_COMMENTO_URL}/js/count.js`,
        },
      ],
    };
  },

  computed: {
    author() {
      return this.post.authors[0];
    },
    timeAgo() {
      return formatDistanceToNow(parseISO(this.post.date));
    },
    commentCountPath() {
      return `${this.post.path}#commento`;
    },
  },
};
</script>
