<template>
  <BaseItem :base="base" :type="type" :content="content" @change="onTaskChange">
    <template #button-label>{{ labelText }}</template>
  </BaseItem>
</template>
<script>
import BaseItem from './BaseItem.vue';

export default {
  name: 'TaskItem',
  components: {
    BaseItem,
  },
  props: {
    base: {
      type: String,
      required: true,
    },
    task: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      labelText: 'Edit task',
      propsTask: this.task,
    };
  },
  computed: {
    content() {
      return this.propsTask.content;
    },
  },
  methods: {
    onTaskChange(content) {
      this.$store.dispatch('updateTaskContent', {
        id: this.task.id,
        content,
      });
    },
  },
};
</script>
<style></style>
