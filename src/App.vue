<template>
  <BaseApp :base="base" :id="id">
    <template #sprite>
      <SVGSprite />
    </template>
    <template #header>
      {{ headerText }}
    </template>
    <template #main>
      <AddTaskForm />
      <TaskBoard />
    </template>
  </BaseApp>
</template>
<script>
import { mapActions } from 'vuex';

import store from './store/store';

import BaseApp from './components/BaseApp.vue';
import SVGSprite from './components/SVGSprite.vue';
import AddTaskForm from './components/AddTaskForm.vue';
import TaskBoard from './components/TaskBoard.vue';

import { mockData } from './store/mockData';

export default {
  name: 'App',
  store,
  components: {
    BaseApp,
    SVGSprite,
    AddTaskForm,
    TaskBoard,
  },
  data: () => ({
    id: 'app',
    base: 'board-app',
    headerText: 'Kanban Board',
  }),
  mounted() {
    this.setState(mockData);
  },
  methods: {
    ...mapActions(['setState']),
  },
};
</script>
