<template>
  <div :class="base">
    <h2
      :id="headerId"
      class="ally-hidden"
    >
      <slot name="header" />
    </h2>
    <form
      :class="formClass"
      :labelledby="headerId"
      @submit.prevent="$emit('submit')"
    >
      <div :class="inputWrapperClass">
        <label :for="base">
          <slot name="label" />
        </label>
        <input
          :id="base"
          v-model="inputModel"
          type="text"
          :name="base"
          :placeholder="placeholder"
          required
        >
      </div>
      <BaseSubmitBtn
        :class="buttonClass"
        :icon-hash="buttonIconHash"
      >
        <slot name="submit" />
      </BaseSubmitBtn>
    </form>
  </div>
</template>
<script>
import BaseSubmitBtn from './BaseSubmitBtn.vue';

export default {
  name: 'BaseAddTaskForm',
  components: {
    BaseSubmitBtn,
  },
  props: {
    base: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    inputValue: {
      type: String,
      required: true,
    },
  },
  computed: {
    formClass() {
      return `${this.base}__form`;
    },
    inputWrapperClass() {
      return `${this.base}__input-wrapper`;
    },
    buttonClass() {
      return `${this.base}__button`;
    },
    headerId() {
      return `${this.base}__header`;
    },
    buttonIconHash() {
      return `#${this.base}-button-icon`;
    },
    inputModel: {
      get() {
        return this.inputValue;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>
<style></style>
