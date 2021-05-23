<template>
  <BaseApp
    base="board-app"
  >
    <template #sprite>
      <TheSprite />
    </template>
    <template #header>
      Kanban Board
    </template>
    <template #main>
      <TheAddTaskForm />
      <TheBoard />
    </template>
  </BaseApp>
</template>
<script>
import { mapActions } from 'vuex';

import store from './store/store';

import BaseApp from './components/BaseApp.vue';
import TheBoard from './components/TheBoard.vue';
import TheSprite from './components/TheSprite.vue';
import TheAddTaskForm from './components/TheAddTaskForm.vue';

import { mockData } from '@/static/mockData';

export default {
  name: 'TheApp',
  store,
  components: {
    BaseApp,
    TheBoard,
    TheSprite,
    TheAddTaskForm,
  },
  mounted() {
    this.setState(mockData);
  },
  methods: {
    ...mapActions('board', ['setState']),
  },
};
</script>
