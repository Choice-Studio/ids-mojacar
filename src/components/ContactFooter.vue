<template>
  <section
    class="contact-footer bg-primary text-white mt-48 md:h-180 md:w-full md:relative md:flex md:items-end md:justify-end"
    id="contact"
  >
    <div
      class="dark-overlay absolute top-0 bottom-0 right-0 left-0 hidden md:block"
    ></div>
    <div class="contact-box md:w-100 bg-primary">
      <div class="md:hidden">
        <img
          src="/project-images/1.jpg?url"
          alt=""
          class="w-full h-96 relative top-2"
        />
      </div>
      <div class="bg-primary text-center py-14 md:py-12 md:px-7">
        <div>
          <h3 class="text-2xl highlight--underline">Get in Touch</h3>
          <p class="my-14 md:my-16">
            We believe in the power of communication to bring your interior
            design visions to life. Whether you have a question. need advice, or
            are ready to start your design journey, we're here to listen and
            guide you every step of the way.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-16 mx-4 md:gap-10">
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

<style lang="scss">
.contact-box {
  margin: 0 auto;
  padding: 0 0.5em;
}

.contact-footer {
  background-image: url("/project-images/84.jpeg?url");
  background-position: center;
  background-size: cover;
}

.contact-footer * {
  z-index: 2;
}

.dark-overlay {
  background-color: rgba(0, 0, 0, 0);
  z-index: 1;
}

@media screen and (min-width: 768px) {
  .contact-box {
    margin: 1em;
  }
}
</style>
