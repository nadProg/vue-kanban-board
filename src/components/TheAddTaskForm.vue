<template>
  <BaseAddTaskForm
    base="add-task"
    :input-value="inputValue"
    placeholder="Add task content..."
    @input="inputValue=$event"
    @submit="onFormSubmit"
  >
    <template #header>
      Add new task
    </template>
    <template #label>
      New task
    </template>
    <template #submit>
      Add
    </template>
  </BaseAddTaskForm>
</template>
<script>
import { mapActions } from 'vuex';

import BaseAddTaskForm from './BaseAddTaskForm.vue';

export default {
  name: 'TheAddTaskForm',
  components: {
    BaseAddTaskForm,
  },
  data: () => ({
    inputValue: '',
  }),
  methods: {
    ...mapActions('board', ['addNewTaskToBacklog']),
    onFormSubmit() {
      this.addNewTaskToBacklog(this.inputValue);
      this.inputValue = '';
    },
  },
};
</script>
