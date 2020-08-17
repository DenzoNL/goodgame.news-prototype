<template>
  <div class="flex flex-wrap justify-start items-center">
    <g-link
      class="inline-block bg-indigo-100 shadow-sm rounded-full px-2 py-1 text-xs font-semibold text-indigo-900 mr-1 mb-1"
      v-for="tag in tags"
      :key="tag.id"
      :to="tag.path"
    >
      <span>#</span> {{ tag.title }}
    </g-link>
  </div>
</template>
<script>
export default {
  props: ['post'],
  computed: {
    tags() {
      return this.post.tags.filter((tag) => !tag.title.startsWith('#'));
    },
  },
};
</script>
