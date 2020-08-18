<template>
  <Layout>
    <div class="container max-w-2xl mx-auto flex-grow">
      <div class="border-b pb-4 mt-4 px-4">
        <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
          <h1>
            <span class="text-gray-700">All posts by</span> @{{
              $page.author.name
            }}
          </h1>
        </div>
      </div>
      <PostCard
        v-for="edge in $page.author.belongsTo.edges"
        :key="edge.node.id"
        :post="edge.node"
      >
      </PostCard>
      <!-- <Pager :pageInfo="$page.posts.pageInfo"></Pager> -->
    </div>
  </Layout>
</template>

<page-query>
query Author ($path: String!) {
  author:ghostAuthor (path: $path) {
    name
    path
    profile_image
    belongsTo {
      edges {
        node {
          ...on GhostPost {
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
