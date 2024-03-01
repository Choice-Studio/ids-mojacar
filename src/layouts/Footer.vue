<template>
  <ContactFooter></ContactFooter>

  <footer class="bg-primary w-full text-white py-10 mt-36">
    <div class="wrapper">
      <div class="grid grid-cols-2 gap-12">
        <div class="">
          <div>
            <p>Tel</p>
            <div class="h-px w-20 bg-white my-3"></div>
            <p>+44 780 058 090</p>
          </div>
          <div class="my-8">
            <p>Email</p>
            <div class="h-px w-20 bg-white my-3"></div>
            <p>example@gmail.com</p>
          </div>
        </div>
        <ul class="main-list">
          <li
            v-for="link in links"
            :key="link.pageName"
          >
            <a :href="link.pageHREF">{{ link.pageName }}</a>
            <ul
              v-if="link.subLinks"
              class=""
            >
              <li
                v-for="sublink in link.subLinks"
                :key="sublink.name"
              >
                <a :href="sublink.href">{{ sublink.name }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="grid grid-cols-2 mt-20">
        <div class="grid place-items-center col-span-1">
          <img
            src="/ids-logo.svg?url"
            alt="IDS Logo"
            class="w-40 opacity-50"
          />
        </div>
        <div class="flex items-end justify-end col-span-1">
          <p class="text-right">
            © {{ currentYear }} Interior Design Solutions, All rights reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import pageData from "../data/pageData.json";
import ContactFooter from "../components/ContactFooter.vue";

export default {
  name: "Footer",
  props: {},
  data() {
    return {
      links: pageData,
      currentYear: new Date().getFullYear(),
    };
  },
  components: {
    ContactFooter,
  },
};
</script>
e

<style lang="scss">
li {
  margin: 1.5em 0;
}
.main-list {
  margin-top: -1.5em;
}
</style>
