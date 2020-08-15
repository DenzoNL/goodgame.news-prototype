<template>
  <Layout>
    <PostCard
      v-for="edge in $page.posts.edges"
      :key="edge.node.id"
      :post="edge.node"
    >
    </PostCard>
  </Layout>
</template>

<page-query>
{
  posts: allGhostPost(
      sortBy: "published_at",
      order: DESC,
  ) {
    edges {
      node {
        title
        description: excerpt
        date: published_at (format: "D. MMMM YYYY")
        path
        slug
        id
        coverImage: feature_image
      }
    }
  }
}
</page-query>

<script>
import PostCard from '../components/PostCard.vue';

export default {
  components: {
    PostCard,
  },
};
</script>
