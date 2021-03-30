import Vue from 'vue';
import Vuex from 'vuex';

import { emptyState } from './initialState';
import Task from '@/model/Task';

Vue.use(Vuex);

export default new Vuex.Store({
  state: emptyState,
  getters: {
    groupMap: (state) => state.map,
    groupList: (state) => {
      return state.orderList.map((type) => state.map[type]);
    },
    isGroupEmpty: (_, getters) => (type) =>
      getters.groupMap[type].orderList.length === 0,
    taskOrderListByType: (state) => (type) => {
      return state.map[type].orderList;
    },
    taskListByType: (_, getters) => (type) => {
      return getters.groupMap[type].orderList.map((id) => getters.taskMap[id]);
    },
    taskMap: (state) => state.subMap,
  },
  actions: {
    setState({ dispatch }, initialState) {
      initialState.forEach(({ type, task }) => {
        dispatch('addNewTaskToGroup', { type, content: task.content });
      });
    },
    updateGroup({ commit, getters }, { type, list }) {
      commit('updateGroup', { group: getters.groupMap[type], list });
    },
    clearGroup({ commit, getters }, { type }) {
      commit('clearGroup', {
        group: getters.groupMap[type],
        taskToDelete: getters.taskOrderListByType(type),
        taskMap: getters.taskMap,
      });
    },
    updateTaskContent({ commit, getters }, { id, content }) {
      commit('updateTaskContent', { content, task: getters.taskMap[id] });
    },
    addNewTaskToGroup({ commit, getters }, { type, content }) {
      commit('addNewTaskToGroup', {
        group: getters.groupMap[type],
        task: new Task(content),
        taskMap: getters.taskMap,
      });
    },
    addNewTaskToBacklog({ dispatch }, content) {
      dispatch('addNewTaskToGroup', { type: 'backlog', content });
    },
  },
  mutations: {
    updateTaskContent(_, { task, content }) {
      Vue.set(task, 'content', content);
    },
    addNewTaskToGroup(_, { group, task, taskMap }) {
      Vue.set(group, 'content', task);
      Vue.set(taskMap, task.id, task);
      group.orderList.push(task.id);
    },
    updateGroup(_, { group, list }) {
      Vue.set(group, 'orderList', list);
    },
    clearGroup(_, { group, taskToDelete, taskMap }) {
      Vue.set(group, 'orderList', []);
      taskToDelete.forEach((id) => delete taskMap[id]);
    },
  },
});
