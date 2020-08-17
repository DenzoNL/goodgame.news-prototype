<template functional>
  <header class="border-b shadow-lg sticky top-0 bg-white z-40">
    <div class="container max-w-2xl mx-auto px-4">
      <nav class="flex items-center flex-wrap justify-between py-4">
        <div class="flex items-center justify-start flex-shrink-0">
          <g-link to="/">
            <g-image src="/logo.svg" class="h-8 mr-8"></g-image>
          </g-link>
        </div>
        <div
          class="flex flex-grow justify-between font-semibold text-gray-900 px-4 uppercase"
        >
          <g-link to="/" class="hover:text-indigo-500">News</g-link>
          <g-link to="/reviews" class="hover:text-indigo-500">Reviews</g-link>
          <g-link to="/about" class="hover:text-indigo-500">About</g-link>
        </div>
      </nav>
    </div>
  </header>
</template>
