<template>
  <article :class="groupClass">
    <h3 :class="headerClass">
      <slot name="header" />
    </h3>
    <slot name="list" />
    <slot name="clear-button" />
  </article>
</template>
<script>
export default {
  name: 'BaseTaskBoardGroup',
  props: {
    base: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    groupClass() {
      return `${this.base}__group`;
    },
    headerClass() {
      return [
        `${this.base}__group-heading`,
        `${this.base}__group-heading--${this.type}`,
      ];
    },
  },
  methods: {
    clearGroup() {
      this.$emit(`clear-basket`);
    },
  },
};
</script>
<style></style>
