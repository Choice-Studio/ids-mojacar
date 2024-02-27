<template>
  <div class="w-full">
    <!-- <DesktopHeader :pageName="pageName" /> -->

    <mobileHeader :pageName="pageName" />
  </div>
</template>

<script lang="ts">
// import DesktopHeader from "../components/header/desktopHeader.vue";
import mobileHeader from "../components/mobileHeader.vue";

export default {
  name: "Header",
  components: { mobileHeader },
  props: {
    pageName: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss"></style>
