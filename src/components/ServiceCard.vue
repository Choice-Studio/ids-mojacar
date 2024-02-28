<template>
  <div class="wrapper grid grid-cols-1 gap-8 text-center">
    <div class="">
      <img
        :src="'/project-images/' + imageHref + '.jpeg?url'"
        alt="A picture of a house front porch. Walls are painted blue and white."
        class="aspect-square w-full"
      />
    </div>
    <div class="grid grid-cols-1 gap-8 place-items-center">
      <h3 class="text-4xl">
        {{ title }}
      </h3>
      <p v-html="body"></p>
      <a :href="buttonHref"
        ><button>{{ buttonText }}</button></a
      >
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ServiceCard",
  props: {
    imageHref: String,
    imageAlt: String,
    title: String,
    body: String,
    buttonText: String,
    buttonHref: String,
  },
};
</script>

<style lang="scss"></style>
