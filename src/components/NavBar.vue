<template functional>
  <header class="border-b shadow-lg sticky top-0 bg-white z-40">
    <div class="container max-w-2xl mx-auto px-4">
      <nav class="flex items-center flex-wrap justify-between py-4">
        <div class="flex items-center justify-start flex-shrink-0">
          <g-link to="/">
            <g-image src="/logo.svg" alt="Goodgame.news" class="h-8"></g-image>
          </g-link>
        </div>
        <div
          class="flex flex-grow justify-end items-center tracking-wider text-sm text-gray-700 px-4 uppercase"
        >
          <g-link to="/" class="hover:text-indigo-500 mr-2">News</g-link>
          <span class="text-indigo-500 text-2xl mr-2">&rsaquo;</span>
          <g-link to="/tag/review/" class="hover:text-indigo-500 mr-2"
            >Reviews</g-link
          >
          <span class="text-indigo-500 text-2xl mr-2">&rsaquo;</span>
          <g-link to="/about/" class="hover:text-indigo-500">Contact</g-link>
        </div>
      </nav>
    </div>
  </header>
</template>
