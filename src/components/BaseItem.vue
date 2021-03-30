<template>
  <div :class="blockClass">
    <div :class="wrapperClass">
      <textarea
        v-show="editMode"
        ref="textAreaRef"
        :class="textAreaClass"
        v-model="textAreaModel"
        @keydown.enter="onTextareaBlur"
        @blur="onTextAreaBlur"
        @input="onTextAreaInput"
        :style="{ height: textAreaHeight }"
      ></textarea>
      <p v-show="!editMode" :class="viewClass">{{ content }}</p>
    </div>
    <label class="ally-hidden" :for="buttonId">
      <slot name="button-label" />
    </label>
    <button
      :class="buttonClass"
      type="button"
      :id="buttonId"
      @focus="onButtonFocus"
    >
      <svg width="24" height="24">
        <use :href="buttonIconHash" />
      </svg>
    </button>
  </div>
</template>
<script>
export default {
  name: 'BaseItem',
  data: () => ({
    editMode: false,
    textAreaModel: '',
    textAreaHeight: '',
  }),
  props: {
    base: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  watch: {
    content: {
      handler(val) {
        this.textAreaModel = val;
        this.$nextTick(() => {
          this.onTextAreaInput();
        });
      },
      immediate: true,
    },
  },
  computed: {
    blockClass() {
      return [`${this.base}`, `${this.base}--${this.type}`];
    },
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
  },
  methods: {
    onTextAreaInput() {
      this.textAreaHeight = `${this.$refs.textAreaRef.scrollHeight}px`;
    },
    onTextAreaBlur() {
      this.editMode = false;
      this.$emit('change', this.textAreaModel);
    },
    onButtonFocus(evt) {
      if (evt.relatedTarget === this.$refs.textAreaRef)
        return evt.currentTarget.blur();

      if (!this.editMode) {
        this.editMode = true;
        this.$nextTick(() => {
          this.textAreaHeight = `${this.$refs.textAreaRef.scrollHeight}px`;
          this.$refs.textAreaRef.focus();
        });
      }
    },
  },
};
</script>
<style></style>
