<template>
  <div class="flex flex-wrap justify-start items-center">
    <g-link
      class="inline-block bg-gray-200 shadow-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-1"
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
