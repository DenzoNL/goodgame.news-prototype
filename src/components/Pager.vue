<template>
  <div class="flex items-center justify-between my-2">
    <g-link :to="previousUrl">
      <button v-if="!isFirstPage" class="pager-button">
        ‹ Previous
      </button>
    </g-link>
    <g-link :to="nextUrl">
      <button v-if="!isLastPage" class="pager-button">
        Next ›
      </button>
    </g-link>
  </div>
</template>
<script>
export default {
  props: ['pageInfo'],
  computed: {
    previousUrl() {
      return (
        '/' +
        (this.pageInfo.currentPage > 2 ? this.pageInfo.currentPage - 1 : '')
      );
    },
    nextUrl() {
      return '/' + (this.pageInfo.currentPage + 1);
    },
    isFirstPage() {
      return this.pageInfo.currentPage === 1;
    },
    isLastPage() {
      return this.pageInfo.currentPage === this.pageInfo.totalPages;
    },
  },
};
</script>

<style scoped>
.pager-button {
  @apply bg-indigo-200;
  @apply text-indigo-500;
  @apply font-bold;
  @apply py-2;
  @apply px-4;
  @apply rounded;
}

.pager-button:hover {
  @apply bg-indigo-300;
}
</style>
