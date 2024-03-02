<template>
  <div
    class="w-full wrapper flex flex-col gap-8 text-center md:justify-end md:items-centre md:gap-16"
    :class="[
      imagePosition == 'right'
        ? 'md:flex-row-reverse md:text-right'
        : 'md:flex-row md:text-left',
    ]"
  >
    <div class="md:w-1/2">
      <img
        :src="'/project-images/' + imageHref + '.jpeg?url'"
        alt="A picture of a house front porch. Walls are painted blue and white."
        class="aspect-square w-full"
      />
    </div>
    <div
      class="flex flex-col items-center justify-center gap-8 md:w-1/2"
      :class="[imagePosition == 'right' ? 'md:items-end' : 'md:items-start']"
    >
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
    imagePosition: {
      type: String,
      default: "right",
    },
  },
};
</script>

<style lang="scss"></style>
