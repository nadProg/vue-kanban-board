<template>
  <article :class="groupClass">
    <h3 :class="headerClass">
      <slot name="header" />
    </h3>
    <slot name="list" />
    <BaseClearButton v-if="isShowClearButton" :disabled="isEmpty" @click="onClearButtonClick">
      {{ clearButtonText }}
    </BaseClearButton>
  </article>
</template>
<script>
import BaseClearButton from './BaseClearButton.vue';

export default {
  name: 'BaseBoardGroup',
  components: {
    BaseClearButton,
  },
  props: {
    base: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    isEmpty: {
      type: Boolean,
    },
    isShowClearButton: {
      type: Boolean,
      default: true,
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
    clearButtonText() {
      return this.$slots['clear-button'][0].text;
    },
  },
  methods: {
    onClearButtonClick() {
      this.$emit('clear-button-click');
    },
  },
};
</script>
<style></style>
