<template>
  <Layout>
    <div class="container max-w-2xl mx-auto flex-grow">
      <div class="border-b pb-4 mt-4 px-4">
        <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
          <h1 v-if="$page.tag.slug === 'review'">
            <span class="text-gray-700">Reviews</span>
          </h1>
          <h1 v-else>
            <span class="text-gray-700">{{ this.hashTag }}</span>
          </h1>
        </div>
      </div>
      <PostCard
        v-for="edge in $page.tag.belongsTo.edges"
        :key="edge.node.id"
        :post="edge.node"
      >
      </PostCard>
      <!-- <Pager :pageInfo="$page.posts.pageInfo"></Pager> -->
    </div>
  </Layout>
</template>

<page-query>
query Tag ($path: String!) {
  tag:ghostTag (
    path: $path
  ) {
    title: name
    slug
    path
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

<static-query>
query {
  metadata {
    siteUrl
  }
}
</static-query>

<script>
import PostCard from '../components/PostCard.vue';

export default {
  components: {
    PostCard,
  },

  computed: {
    hashTag() {
      return `#${this.$page.tag.title}`;
    },
  },

  metaInfo() {
    return {
      title: this.hashTag,
      meta: [
        {
          name: 'description',
          content: `All articles tagged ${this.hashTag}`,
        },
        {
          property: 'og:title',
          content: this.hashTag,
        },
        {
          property: 'og:description',
          content: `All articles tagged ${this.hashTag}`,
        },
        {
          property: 'og:image',
          content: this.$page.tag.belongsTo.edges[0].node.coverImage,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: `${this.$static.metadata.siteUrl}${this.$page.tag.path}`,
        },
        {
          name: 'twitter:title',
          content: this.hashTag,
        },
        {
          name: 'twitter:description',
          content: `All articles tagged ${this.hashTag}`,
        },
        {
          name: 'twitter:image',
          content: this.$page.tag.belongsTo.edges[0].node.coverImage,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    };
  },
};
</script>
