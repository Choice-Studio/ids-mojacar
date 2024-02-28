<template>
  <div class="w-full">
    <!-- <DesktopHeader :pageName="pageName" /> -->

    <MobileHeader :pageName="pageName" />
  </div>
</template>

<script lang="ts">
// import DesktopHeader from "../components/header/desktopHeader.vue";
import MobileHeader from "../components/MobileHeader.vue";

export default {
  name: "Header",
  components: { MobileHeader },
  props: {
    pageName: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss"></style>
