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

<static-query>
query {
  metadata {
    siteName
    siteUrl
  }
}
</static-query>

<script>
import PostCard from '../components/PostCard.vue';
import Pager from '../components/Pager.vue';

export default {
  components: {
    PostCard,
    Pager,
  },

  metaInfo() {
    return {
      title:
        this.$page.posts.pageInfo.currentPage === 1
          ? 'Latest news & honest game reviews'
          : `Older posts - Page ${this.$page.posts.pageInfo.currentPage}`,
      meta: [
        {
          name: 'description',
          content:
            'goodgame.news keeps you up to date with the latest news and honest reviews of video games for PC, PlayStation 4, Xbox One and Nintendo Switch',
        },
        {
          property: 'og:title',
          content: 'Latest news & honest game reviews',
        },
        {
          property: 'og:description',
          content:
            'goodgame.news keeps you up to date with the latest news and honest reviews of video games for PC, PlayStation 4, Xbox One and Nintendo Switch',
        },
        {
          property: 'og:image',
          content: `${this.$static.metadata.siteUrl}/assets/img/logo-512x512-512.png`,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: `${this.$static.metadata.siteUrl}`,
        },
        {
          name: 'twitter:title',
          content: 'Latest news & honest game reviews',
        },
        {
          name: 'twitter:description',
          content:
            'goodgame.news keeps you up to date with the latest news and honest reviews of video games for PC, PlayStation 4, Xbox One and Nintendo Switch',
        },
        {
          name: 'twitter:image',
          content: `${this.$static.metadata.siteUrl}/assets/img/logo-512x512-512.png`,
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
