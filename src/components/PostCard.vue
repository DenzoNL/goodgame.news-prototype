<template>
  <article class="mt-4 pb-4 border-b">
    <header>
      <g-link :to="post.path">
        <g-image
          class="rounded w-full hover:opacity-75"
          v-if="post.coverImage"
          :src="post.coverImage"
        ></g-image>
      </g-link>
      <g-link :to="post.path">
        <h2
          class="text-xl font-semibold hover:underline text-gray-900 mt-2"
          v-html="post.title"
        ></h2>
      </g-link>
    </header>
    <section class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
      <p v-html="post.description"></p>
    </section>
  </article>
</template>

<script>
export default {
  props: ['post'],
};
</script>
