<template>
  <header
    class="absolute top-0 left-0 flex lg:hidden justify-between items-center w-full mx-auto z-10 wrapper py-2"
  >
    <div class="w-12 h-12 grid place-items-center">
      <a href="/">
        <img
          src="/ids-logo--blue.svg?url"
          alt="IDS logo"
          class="header__logo"
        />
      </a>
    </div>

    <img
      src="/burger-menu--blue.svg?url"
      alt="menu icon"
      class="w-8 header__burger-menu"
      @click="toggleNav()"
    />

    <div
      class="origin-top absolute w-full bg-primary top-0 left-0 h-screen px-4 py-12 text-center flex flex-col justify-center items-center gap-16"
      :class="[isNavHidden ? 'nav--hidden' : 'nav-visible']"
    >
      <img
        src="/X.svg?url"
        alt="close menu icon"
        class="w-6 header__burger-menu absolute top-4 right-4"
        @click="toggleNav()"
      />
      <div
        :key="link.pageName"
        v-for="link in links"
        class="border-t-white border-solid border-t-1"
      >
        <a
          :href="link.pageHREF"
          class="header-text text-white text-2xl"
          :class="[link.pageName == pageName ? 'dot-highlight' : '']"
        >
          {{ link.pageName }}
        </a>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import pageData from "../data/pageData.json";

export default {
  name: "mobileHeader",
  // components: {

  // },
  props: {
    pageName: String,
  },
  data() {
    return {
      links: pageData,
      isNavHidden: {
        type: Boolean,
        default: true,
      },
    };
  },
  methods: {
    toggleNav() {
      this.isNavHidden = !this.isNavHidden;
    },
  },
  // created () {

  // }
};
</script>

<style lang="scss">
header * {
  transition: translateY 0ms linear, opacity 150ms linear;
}

.nav--hidden {
  transform: translateY(-100%);
  opacity: 0;
}
.nav--visible {
  transform: translateY(0);
  opacity: 1;
}
</style>
