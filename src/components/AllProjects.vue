<template>
  <div class="wrapper grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4">
    <ProjectThumbnail
      v-for="project in projects"
      :key="project.id"
      :projectID="project.id"
      :filter="filter"
    />
  </div>
</template>

<script lang="ts">
import projectData from "../data/projectData.json";
import ProjectThumbnail from "./ProjectThumbnail.vue";

export default {
  name: "AllProjects",
  props: {
    filter: String,
  },
  data() {
    return {
      projects: projectData,
      filter: this.filter,
    };
  },
  components: {
    ProjectThumbnail,
  },
};
</script>

<style lang="scss"></style>
