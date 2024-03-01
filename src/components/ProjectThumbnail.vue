<template>
  <div
    class="flex flex-col items-start justify-end h-96 w-full relative text-white text-left p-4 project-thumbnail"
    :style="
      `background-image: url(/project-images/` +
      projects[projectID].imageFile +
      `?url);`
    "
    v-if="filter == 'all' || projects[projectID].projectType == filter"
  >
    <div class="dark-overlay absolute top-0 bottom-0 right-0 left-0"></div>
    <h3 class="text-2xl md:w-96">
      {{ projects[projectID].projectTitle }}
    </h3>
    <p
      v-html="[
        projects[projectID].projectType == 'kitchen'
          ? 'Kitchen Renovation'
          : projects[projectID].projectType == 'bathroom'
          ? 'Bathroom Renovation'
          : projects[projectID].projectType == 'home-space'
          ? 'Home Space Renovation'
          : '',
      ]"
      class="text-lg my-3 md:my-2"
    ></p>
    <div class="flex items-center justify-center flex-col gap-1">
      <a
        :href="'/projects/' + projects[projectID].projectHref"
        class="uppercase text-sm"
      >
        View Project
      </a>
      <div class="h-px w-28 bg-white"></div>
    </div>
  </div>
</template>

<script lang="ts">
import projectData from "../data/projectData.json";

export default {
  name: "ProjectThumbnail",
  props: {
    projectID: Number,
    filter: {
      type: String,
      default: "all",
    },
    isVisible: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      projects: projectData,
    };
  },
};
</script>

<style lang="scss">
.dark-overlay {
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.project-thumbnail * {
  z-index: 2;
}

a {
  font-family: "Montserrat", sans-serif;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
}

div {
  background-size: cover;
  background-position: center;
}
</style>
