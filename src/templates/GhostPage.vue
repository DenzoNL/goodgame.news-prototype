<template>
  <Layout>
    <div class="container max-w-2xl mx-auto flex-grow">
      <div class="mt-4 px-4">
        <article class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
          <header>
            <h1 v-html="$page.page.title"></h1>
          </header>
          <section v-html="$page.page.content"></section>
        </article>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Page($path: String!) {
  page: ghostPage (path: $path) {
    title
    content: html
  }
}
</page-query>
