import Vue from 'vue';

import emptyBoard from '@/static/emptyBoard';

const { groups } = emptyBoard;

export default ({
  namespaced: true,
  state: {
    ...groups,
  },
  getters: {
    groupByType: (state) => (type) => {
      return state.map[type];
    },
    isEmpty: (_, getters) => (type) =>
      getters.groupByType(type).tasks.length === 0,
  },
  mutations: {
    pushTaskId(state, { type, id }) {
      state.map[type].tasks.push(id);
    },
    updateTasks(state, { type, tasks }) {
      Vue.set(state.map[type], 'tasks', tasks);
    },
    clearTasks(state, type) {
      Vue.set(state.map[type], 'tasks', []);
    },
  },
});
