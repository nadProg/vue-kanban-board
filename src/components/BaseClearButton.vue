<template>
  <button
    :class="buttonClass"
    :type="base"
    :disabled="disabled"
    @click="onClick"
  >
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="15.5374"
        y="5.16638"
        width="1.83333"
        height="14.6667"
        transform="rotate(45 15.5374 5.16638)"
        fill="white"
      />
      <rect
        x="16.8337"
        y="15.5372"
        width="1.83333"
        height="14.6667"
        transform="rotate(135 16.8337 15.5372)"
        fill="white"
      />
    </svg>
    <span>
      <slot />
    </span>
  </button>
</template>
<script>
export default {
  name: 'BaseClearButton',
  props: {
    parentBase: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    base: 'button',
  }),
  computed: {
    buttonClass() {
      return [
        `${this.parentBase}__${this.base}`,
        `${this.base}`,
        `${this.base}--clear`,
      ];
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>
