<template>
  <footer class="text-gray-500 bg-gray-900 px-4 mt-4">
    <div class="container max-w-2xl mx-auto flex flex-col">
      <div class="flex items-center justify-center mt-4 tracking-wider text-sm">
        <g-link
          to="/privacy-policy/"
          class="mr-2 hover:text-indigo-500 transition duration-500 ease-in-out"
          >Privacy Policy</g-link
        >
        <span class="mr-2 text-indigo-500 text-2xl">&bull;</span>
        <g-link
          to="/contact/"
          class="mr-2 hover:text-indigo-500 transition duration-500 ease-in-out"
          >Contact</g-link
        >
        <span class="mr-2 text-indigo-500 text-2xl">&bull;</span>

        <div>
          <a
            href="https://github.com/denzonl/goodgame.news"
            rel="noopener noreferrer"
            target="_blank"
            title="Check out goodgame.news on GitHub!"
            class="hover:text-indigo-500 transition duration-500 ease-in-out"
          >
            GitHub
          </a>
        </div>
      </div>
      <div class="flex items-center justify-center mt-4 mb-4">
        <p>
          &copy; {{ new Date().getFullYear() }} {{ $static.metadata.siteName }}
        </p>
      </div>
    </div>
  </footer>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
