<template>
  <Layout>
    <article class="prose">
      <header>
        <h1 v-html="$page.post.title"></h1>
      </header>
      <section v-html="$page.post.content"></section>
    </article>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: ghostPost (path: $path) {
    title
    path
    date: published_at (format: "D. MMMM YYYY")
    tags {
      id
      title: name
      path
    }
    description: excerpt
    content: html
    coverImage: feature_image
  }
}
</page-query>
