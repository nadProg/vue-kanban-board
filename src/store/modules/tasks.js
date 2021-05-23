import Vue from 'vue';

export default ({
  namespaced: true,
  state: {
    map: {},
  },
  getters: {
    taskById: (state) => (id) => {
      return state.map[id];
    },
  },
  actions: {
  },
  mutations: {
    set(state, task) {
      Vue.set(state.map, task.id, task);
    },
    updateContent(state, {id, content}) {
      Vue.set(state.map[id], 'content', content);
    },
    delete(state, id) {
      Vue.delete(state.map, id);
    },
  },
});
