<template>
  <section
    class="hero w-full text-center flex flex-col justify-center items-center relative"
    :style="
      `background-image: url(/project-images/` + heroImage + `.jpeg?url);`
    "
  >
    <div class="dark-overlay absolute top-0 bottom-0 right-0 left-0"></div>
    <div
      class="wrapper w-full flex flex-col justify-center items-center gap-12"
    >
      <h1 class="text-3xl md:text-6xl">{{ title }}</h1>
      <p>{{ body }}</p>
      <a :href="buttonHref">
        <button>{{ buttonText }}</button>
      </a>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "mobileHeader",
  // components: {

  // },
  props: {
    title: String,
    body: String,
    buttonText: String,
    buttonHref: String,
    buttonColor: String,
    heroImage: String,
  },
};
</script>

<style scoped lang="scss">
section {
  height: calc(100vh - 4em);
  min-height: 42rem;
}

.hero {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  color: white;
  h1 {
    color: white;
  }
}
.hero * {
  z-index: 2;
}
.dark-overlay {
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 1;
}
</style>
