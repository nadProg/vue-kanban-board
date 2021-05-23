<template>
  <article :class="groupClass">
    <h3 :class="headerClass">
      <slot name="header" />
    </h3>
    <p
      v-if="isEmpty"
      class="ally-hidden"
    >
      <slot name="list-placeholder" />
    </p>
    <slot name="list" />
    <BaseClearButton
      v-if="isShowClearButton"
      :base="buttonBase"
      :class="`${base}__${buttonBase}`"
      :disabled="isEmpty"
      @click="$emit('clear-button-click')"
    >
      <slot name="clear-button" />
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
    buttonBase: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    isEmpty: {
      type: Boolean,
      default: true,
    },
    isShowClearButton: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    groupClass() {
      return [`${this.base}__group`, `${this.base}__group--${this.type}`];
    },
    headerClass() {
      return `${this.base}__group-heading`;
    },
  },
};
</script>
<style></style>
