<template>
  <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
    <h3>Verdict</h3>
    <div class="flex justify-start items-center">
      <div class="flex mr-8">
        <span
          v-for="i in 5"
          :key="i"
          class="focus:outline-none"
          :class="{ 'mr-1': i < 5 }"
          @click="$emit('input', i)"
        >
          <svg
            class="block h-8 w-8"
            :class="[score >= i ? 'text-indigo-500' : 'text-gray-400']"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
            />
          </svg>
        </span>
      </div>
      <span class="text-gray-700 text-2xl font-bold">
        <span class="text-indigo-500">{{ score }}</span> / 5 stars
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: ['post'],
  computed: {
    /**
     * Return the extracted score
     * from the internal score tag.
     */
    score() {
      const tag = this.post.tags.find((tag) => tag.title.startsWith('#score'));
      if (!tag) {
        return 0.0;
      }
      return parseFloat(tag.title.replace('#score:', ''));
    },
  },
};
</script>
