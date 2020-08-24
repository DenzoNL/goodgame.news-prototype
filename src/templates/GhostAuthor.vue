<template>
  <Layout>
    <div class="container max-w-2xl mx-auto flex-grow">
      <div class="p-4 border-b">
        <div class="flex justify-start items-center">
          <g-image
            :src="$page.author.profile_image"
            :alt="`${$page.author.name}'s
        profile picture`"
            class="w-16 h-16 rounded-full mr-4 shadow-xl"
          ></g-image>
          <div>
            <h1>
              <span class="text-3xl font-black text-indigo-500">{{
                $page.author.name
              }}</span>
            </h1>
          </div>
        </div>
        <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mt-4">
          <p>
            <span class="italic">{{ $page.author.bio }}</span>
          </p>
        </div>
      </div>
      <div class="pb-4 mt-4 px-4">
        <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
          <h2><span class="text-3xl font-bold">Latest posts</span></h2>
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

<static-query>
query {
  metadata {
    siteUrl
  }
}
</static-query>

<page-query>
query Author ($path: String!) {
  author:ghostAuthor (path: $path) {
    name
    path
    profile_image
    bio
    belongsTo (filter: { typeName: { eq: GhostPost } }) {
      edges {
        node {
          ...on GhostPost {
            title
            description: excerpt
            date: published_at
            updated_at
            path
            reading_time
            tags {
              id
              slug
              title: name
              path
            }
            author: primary_author {
              id
              name
              slug
              path
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

  metaInfo() {
    return {
      title: this.$page.author.name,
      meta: [
        {
          name: 'description',
          content: this.$page.author.bio,
        },
        {
          property: 'og:title',
          content: this.$page.author.name,
        },
        {
          property: 'og:description',
          content: this.$page.author.bio,
        },
        {
          property: 'og:image',
          content: this.$page.author.profile_image,
        },
        {
          property: 'og:type',
          content: 'profile',
        },
        {
          property: 'og:url',
          content: `${this.$static.metadata.siteUrl}${this.$page.author.path}`,
        },
        {
          name: 'twitter:title',
          content: this.$page.author.name,
        },
        {
          name: 'twitter:description',
          content: this.$page.author.bio,
        },
        {
          name: 'twitter:image',
          content: this.$page.author.profile_image,
        },
        {
          name: 'twitter:site',
          content: process.env.GRIDSOME_TWITTER_SITE,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
      ],
    };
  },
};
</script>
