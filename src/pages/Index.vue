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
        date: published_at
        path
        reading_time
        tags {
          id
          title: name
          path
        }
        authors {
          id
          name
          slug
        }
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

  metaInfo() {
    return {
      link: [
        {
          href: process.env.GRIDSOME_COMMENTO_URL,
          rel: 'preconnect',
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
};
</script>
