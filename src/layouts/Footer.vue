<template>
  <ContactFooter></ContactFooter>

  <footer class="bg-primary w-full text-white py-10 mt-36 md:pb-4 md:pt-16">
    <div class="wrapper">
      <div class="grid grid-cols-2 gap-12 md:grid-cols-10">
        <div class="place-items-center hidden md:grid md:col-span-4">
          <img
            src="/ids-logo.svg?url"
            alt="IDS Logo"
            class="w-40 opacity-50 md:w-full"
          />
        </div>
        <div class="md:col-span-3">
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
        <ul class="main-list md:col-span-3">
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
      <div class="grid grid-cols-2 md:grid-cols-1 mt-20">
        <div class="grid place-items-center md:hidden">
          <img
            src="/ids-logo.svg?url"
            alt="IDS Logo"
            class="w-40 opacity-50"
          />
        </div>
        <div
          class="flex items-end justify-end md:items-between md:justify-between"
        >
          <p class="text-right text-sm opacity-80 md:hidden">
            © {{ currentYear }} Interior Design Solutions, All rights reserved
            <br class="md:hidden" />
            <br class="md:hidden" />
            Made with ♡ by
            <a
              href="https://www.iamjacobcarter.com"
              class="underline"
              target="_blank"
              >Jacob Carter</a
            >
          </p>
          <p class="hidden text-sm opacity-80 md:text-left md:block">
            © {{ currentYear }} Interior Design Solutions, All rights reserved
          </p>
          <p class="hidden text-sm opacity-80 md:text-right md:block">
            Made with ♡ by
            <a
              href="https://www.iamjacobcarter.com"
              class="underline"
              target="_blank"
              >Jacob Carter</a
            >
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
