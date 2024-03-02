<template>
  <header
    class="absolute top-1 left-0 flex justify-center z-10 py-2 md:top-2 lg:top-4 w-full"
  >
    <div class="flex justify-between items-center top-header">
      <div class="grid place-items-center">
        <a href="/">
          <img
            src="/ids-logo--blue.svg?url"
            alt="IDS logo"
            class="header__logo w-12"
          />
        </a>
      </div>
      <div class="hidden md:flex justify-end items-center gap-10">
        <div
          :key="link.pageName"
          v-for="link in links"
          class=""
        >
          <a
            :href="link.pageHREF"
            class="header text-white text-sm"
            :class="[link.pageName == pageName ? 'highlight--dot' : '']"
            @click="toggleNav()"
          >
            {{ link.pageName }}
          </a>
        </div>
      </div>
      <img
        src="/burger-menu--blue.svg?url"
        alt="menu icon"
        class="w-8 header__burger-menu md:hidden"
        @click="toggleNav()"
      />
    </div>

    <div
      class="origin-top w-full bg-primary top-0 left-0 h-screen px-4 py-12 text-center flex flex-col justify-center items-center gap-16 fixed md:hidden"
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
          :class="[link.pageName == pageName ? 'highlight--dot' : '']"
          @click="toggleNav()"
        >
          {{ link.pageName }}
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import pageData from "../data/pageData.json";

export default {
  name: "Header",
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

.top-header {
  width: 100%;
  padding: 0 0.5em;
}

.nav--hidden {
  transform: translateY(-100%);
  opacity: 0;
}
.nav--visible {
  transform: translateY(0);
  opacity: 1;
}

@media screen and (min-width: 768px) {
  .top-header {
    padding: 0 1em;
  }
}

@media screen and (min-width: 1024px) {
  .top-header {
    max-width: 1250px;
    margin: 0 auto;
    padding: 0.5em 1em;
  }
}
</style>
