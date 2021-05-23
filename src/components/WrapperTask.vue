<template>
  <BaseTask
    :base="base"
    :edit-mode="editMode"
    :content="content"
    :text-area-value="textAreaValue"
    :text-area-height="textAreaHeight"
    @button-focus="onButtonFocus"
    @text-area-blur="onTextAreaBlur"
    @text-area-input="onTextAreaInput"
  >
    <template
      #button-label
    >
      Edit task
    </template>
  </BaseTask>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';

import BaseTask from './BaseTask.vue';


export default {
  name: 'WrapperTask',
  components: {
    BaseTask,
  },
  props: {
    base: {
      type: String,
      required: true,
    },
    taskId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      editMode: false,
      textAreaHeight: '',
      textAreaValue: '',
    };
  },
  computed: {
    ...mapGetters('board/tasks', ['taskById']),
    task() {
      return this.taskById(this.taskId);
    },
    content() {
      return this.task.content;
    },
  },
  watch: {
    content: {
      handler(value) {
        this.textAreaValue = value;
      },
      immediate: true,
    },
  },
  methods: {
    ...mapMutations('board/tasks', ['updateContent']),
    onTextAreaInput({value, ref}) {
      this.textAreaValue = value;
      this.correctHeight(ref);
    },
    onTextAreaBlur() {
      this.editMode = false;
      this.updateContent({id: this.task.id, content: this.textAreaValue});
    },
    onButtonFocus({evt, ref}) {
      if (evt.relatedTarget === ref)
        return evt.currentTarget.blur();

      if (!this.editMode) {
        this.editMode = true;
        this.$nextTick(() => {
          this.correctHeight(ref);
          ref.focus();
        });
      }
    },
    correctHeight(ref) {
      this.textAreaHeight = '0';
      this.$nextTick(() => this.textAreaHeight = `${ref.scrollHeight}px`);
    },
  },
};
</script>
<style></style>
