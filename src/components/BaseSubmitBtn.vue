<template>
  <button
    class="button"
    type="submit"
  >
    <svg
      width="22"
      height="22"
    >
      <use :href="iconHash" />
    </svg>
    <span>
      <slot />
    </span>
  </button>
</template>
<script>
export default {
  name: 'BaseSubmitBtn',
  props: {
    iconHash: {
      type: String,
      required: true,
    },
  },
};
</script>
