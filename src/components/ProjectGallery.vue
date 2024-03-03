<template>
  <section class="wrapper masonry-with-columns">
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

<style lang="scss">
.masonry-with-columns {
  display: flex;
  flex-wrap: wrap;
  img {
    height: 25em;
    line-height: 25em;
    margin: 0 1rem 1rem 0;
    flex: 1 0 auto;
  }
  @for $i from 1 through 36 {
    img:nth-child(#{$i}) {
      $h: (random(400) + 120) + px;
      width: $h;
    }
  }
}
</style>
