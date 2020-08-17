<template>
  <div>
    <div class="flex justify-between items-center text-xs mt-2">
      <g-link
        :to="'@' + post.authors[0].slug"
        class="font-semibold text-indigo-500"
        >@{{ author.name }}</g-link
      >

      <template v-if="post.reading_time">
        <p>{{ post.reading_time }} min read</p>
      </template>
    </div>
    <div class="flex justify-between items-center text-xs">
      <time :datetime="post.date">{{ timeAgo }} ago</time>
      <g-link :to="post.path + '#commento'"></g-link>
    </div>
  </div>
</template>
<script>
import { formatDistanceToNow, parseISO } from 'date-fns';

export default {
  props: ['post'],
  computed: {
    author() {
      return this.post.authors[0];
    },
    timeAgo() {
      return formatDistanceToNow(parseISO(this.post.date));
    },
  },
};
</script>
