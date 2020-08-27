<template>
  <div class="antialiased min-h-screen flex flex-col bg-gray-100">
    <NavBar></NavBar>
    <transition
      appear
      enter-active-class="transition duration-500"
      enter-class="opacity-0"
    >
      <router-view />
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default {
  components: {
    NavBar,
    Footer,
  },

  metaInfo() {
    return {
      meta: [
        {
          name: 'referrer',
          content: 'no-referrer-when-downgrade',
        },
      ],
      link: [
        {
          href: process.env.GRIDSOME_GHOST_URL,
          rel: 'preconnect',
          crossorigin: true,
        },
      ],
    };
  },
};
</script>
