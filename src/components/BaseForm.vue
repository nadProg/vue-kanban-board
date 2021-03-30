<template>
  <div :class="blockClass">
    <h2 class="ally-hidden" :id="headerId">
      <slot name="header" />
    </h2>
    <form
      :class="formClass"
      :labelledby="headerId"
      @submit.prevent="onFormSubmit"
    >
      <div :class="inputWrapperClass">
        <label :for="base">
          <slot name="label" />
        </label>
        <input
          type="text"
          :name="base"
          :id="base"
          v-model="inputModel"
          :placeholder="placeholder"
          required
        />
      </div>
      <button :class="buttonClass" type="submit">
        <svg width="22" height="22">
          <use :href="buttonIconHash" />
        </svg>
        <span>
          <slot name="submit" />
        </span>
      </button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'BaseForm',
  props: {
    base: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    inputModel: '',
    buttonBase: 'button',
  }),
  computed: {
    blockClass() {
      return `${this.base}`;
    },
    formClass() {
      return `${this.base}__form`;
    },
    inputWrapperClass() {
      return `${this.base}__input-wrapper`;
    },
    buttonClass() {
      return [`${this.base}__${this.buttonBase}`, `${this.buttonBase}`];
    },
    headerId() {
      return `${this.base}__header`;
    },
    buttonIconHash() {
      return `#${this.base}-button-icon`;
    },
  },
  methods: {
    onFormSubmit() {
      this.$emit('submit', this.inputModel);
      this.inputModel = '';
    },
  },
};
</script>
<style></style>
