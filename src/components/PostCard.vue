<template>
  <article class="mt-4 pb-4 border-b last:border-b-0">
    <header>
      <g-link :to="post.path">
        <g-image
          class="rounded w-full hover:opacity-75 shadow-lg mb-2"
          v-if="post.coverImage"
          :src="post.coverImage"
        ></g-image>
      </g-link>
      <g-link
        :to="post.path"
        class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl"
      >
        <h2 v-html="post.title"></h2>
      </g-link>
      <PostTags :post="post" class="mt-2"></PostTags>
    </header>
    <g-link :to="post.path">
      <section class="my-4 prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
        <p v-html="post.description"></p>
      </section>
    </g-link>
    <footer>
      <PostMeta :post="post"></PostMeta>
    </footer>
  </article>
</template>

<script>
import PostTags from './PostTags';
import PostMeta from './PostMeta';

export default {
  props: ['post'],
  components: {
    PostTags,
    PostMeta,
  },
};
</script>
