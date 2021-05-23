<template>
  <div :class="base">
    <div :class="wrapperClass">
      <textarea
        v-show="editMode"
        ref="textAreaRef"
        v-model="textAreaModel"
        :class="textAreaClass"
        :style="{ height: textAreaHeight }"
        @keydown.enter="$emit('text-area-blur')"
        @blur="$emit('text-area-blur')"
      />
      <p
        v-show="!editMode"
        :class="viewClass"
      >
        {{ content }}
      </p>
    </div>
    <button
      :class="buttonClass"
      type="button"
      @focus="$emit('button-focus', {evt: $event, ref: $refs.textAreaRef})"
    >
      <svg
        width="24"
        height="24"
      >
        <use :href="buttonIconHash" />
      </svg>
      <span class="ally-hidden">
        <slot name="button-label" />
      </span>
    </button>
  </div>
</template>
<script>
export default {
  name: 'BaseTask',
  props: {
    base: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    editMode: {
      type: Boolean,
      default: false,
    },
    textAreaValue: {
      type: String,
      required: true,
    },
    textAreaHeight: {
      type: String,
      default: 'auto',
    },
  },
  computed: {
    wrapperClass() {
      return `${this.base}__body`;
    },
    textAreaClass() {
      return `${this.base}__input`;
    },
    viewClass() {
      return `${this.base}__view`;
    },
    buttonClass() {
      return `${this.base}__edit`;
    },
    buttonId() {
      return `${this.base}__button`;
    },
    buttonIconHash() {
      return `#${this.base}-${
        this.editMode ? 'edit' : 'view'
      }-mode-button-icon`;
    },
    textAreaModel: {
      get() {
        return this.textAreaValue;
      },
      set(value) {
        this.$emit('text-area-input', {value, ref:  this.$refs.textAreaRef});
      },
    },
  },
};
</script>
<style></style>
