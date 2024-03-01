<template>
  <section
    class="bg-primary text-white mt-48"
    id="contact"
  >
    <div class="wrapper bg-primary">
      <div class="">
        <img
          src="/project-images/1.jpg?url"
          alt=""
          class="w-full h-96 relative top-2"
        />
      </div>
      <div class="bg-primary text-center py-14">
        <div>
          <h3 class="text-2xl highlight--underline">Get in Touch</h3>
          <p class="my-14">
            We believe in the power of communication to bring your interior
            design visions to life. Whether you have a question. need advice, or
            are ready to start your design journey, we're here to listen and
            guide you every step of the way.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-16 mx-4">
          <div class="flex flex-col items-center gap-3">
            <p>Tel</p>
            <div class="bg-white h-px w-2/3"></div>
            <p>+44 780 058 090</p>
          </div>
          <div class="flex flex-col items-center gap-3">
            <p>Email</p>
            <div class="bg-white h-px w-2/3"></div>
            <p>example@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "ContactFooter",
  props: {},
};
</script>

<style lang="scss"></style>
