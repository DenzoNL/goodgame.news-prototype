<template>
  <Layout>
    <div class="container max-w-2xl mx-auto flex-grow">
      <div>
        <PostCard
          v-for="edge in $page.posts.edges"
          :key="edge.node.id"
          :post="edge.node"
        >
        </PostCard>
      </div>
      <Pager :pageInfo="$page.posts.pageInfo"></Pager>
    </div>
  </Layout>
</template>

<page-query>
query ($page: Int){
  posts: allGhostPost(
      perPage: 10, 
      page: $page,
      sortBy: "published_at",
      order: DESC,
  ) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
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
import Pager from '../components/Pager.vue';

export default {
  components: {
    PostCard,
    Pager,
  },
};
</script>
