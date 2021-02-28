<template>
  <div :class="blockClass">
    <div :class="wrapperClass">
      <textarea
        v-show="editMode"
        ref="textAreaRef"
        :class="textareaClass"
        v-model="textareaModel"
        @keydown.enter="onTextareaBlur"
        @blur="onTextareaBlur"
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
      <svg
        v-if="editMode"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="4" fill="#D6E7FF" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.5325 7.22254C18.825 7.51504 18.825 7.98754 18.5325 8.28004L17.16 9.65254L14.3475 6.84004L15.72 5.46754C16.0125 5.17504 16.485 5.17504 16.7775 5.46754L18.5325 7.22254ZM5.25 18.75V15.9375L13.545 7.64254L16.3575 10.455L8.0625 18.75H5.25Z"
          fill="#82B6FF"
        />
      </svg>
      <svg
        v-else
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.5325 7.22254C18.825 7.51504 18.825 7.98754 18.5325 8.28004L17.16 9.65254L14.3475 6.84004L15.72 5.46754C16.0125 5.17504 16.485 5.17504 16.7775 5.46754L18.5325 7.22254ZM5.25 18.75V15.9375L13.545 7.64254L16.3575 10.455L8.0625 18.75H5.25Z"
          fill="#D0D0D0"
        />
      </svg>
    </button>
  </div>
</template>
<script>
export default {
  name: 'BaseTaskItem',
  data: () => ({
    editMode: false,
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
    // content: {
    //   handler() {
    //     console.log(this.$refs);
    //     this.textAreaHeight = `${this.$refs.textAreaRef.scrollHeight}px`;
    //   },
    //   immediate: true,
    // },
  },
  computed: {
    blockClass() {
      return [`${this.base}`, `${this.base}--${this.type}`];
    },
    wrapperClass() {
      return `${this.base}__body`;
    },
    textareaClass() {
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
    textareaModel: {
      get() {
        return this.content;
      },
      set(val) {
        return val;
      },
    },
  },
  methods: {
    onTextareaBlur(evt) {
      this.editMode = false;
      this.$listeners.change(evt.currentTarget.value);
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
