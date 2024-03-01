<template>
  <section class="wrapper grid grid-cols-1 gap-2">
    <img
      :key="image"
      v-for="image in project.projectImages"
      :src="'/project-images/' + image + '?url'"
      :alt="'A picture of ' + project.projectTitle + ' interior design.'"
      class="w-full h-auto"
    />
  </section>
</template>

<script lang="ts">
import projectData from "../data/projectData.json";

export default {
  name: "ProjectGallery",
  props: {
    projectID: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      project: projectData[this.projectID],
    };
  },
};
</script>

<style lang="scss"></style>
