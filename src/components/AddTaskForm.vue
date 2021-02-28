<template>
  <BaseForm :base="base" :placeholder="placeholder" @submit="addNewTask">
    <template #header>{{ headerText }}</template>
    <template #label>{{ labelText }}</template>
    <template #submit>{{ submitText }}</template>
  </BaseForm>
</template>
<script>
import { mapActions } from 'vuex';

import BaseForm from './BaseForm.vue';

export default {
  name: 'AddTask',
  components: {
    BaseForm,
  },
  data: () => ({
    base: `add-task`,
    placeholder: `Add task content...`,
    headerText: `Add new task`,
    labelText: `New task`,
    submitText: `Add`,
  }),
  methods: {
    ...mapActions(['addNewTaskToBacklog']),
    addNewTask(content) {
      this.addNewTaskToBacklog(content);
    },
  },
};
</script>
