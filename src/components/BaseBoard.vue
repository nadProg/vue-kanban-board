<template>
  <section :class="base">
    <h2 class="ally-hidden">
      <slot name="header" />
    </h2>
    <slot name="group" />
  </section>
</template>
<script>
export default {
  name: 'BaseBoard',
  props: {
    base: {
      type: String,
      required: true,
    },
  },
};
</script>
<style></style>
