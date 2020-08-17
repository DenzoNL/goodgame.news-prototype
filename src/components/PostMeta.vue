<template>
  <div class="flex justify-between items-center text-xs mt-2">
    <g-link
      :to="'@' + post.authors[0].slug"
      class="font-semibold text-indigo-500"
      >@{{ author.name }}</g-link
    >
    <p>
      Posted on
      <time :datetime="post.date" class="font-semibold">{{ post.date }}</time>
    </p>
    <template v-if="post.reading_time">
      <p class="font-semibold">{{ post.reading_time }} min read</p>
    </template>
    <g-link :to="post.path + '#commento'"></g-link>
  </div>
</template>
<script>
export default {
  props: ['post'],
  computed: {
    author() {
      return this.post.authors[0];
    },
  },
};
</script>
