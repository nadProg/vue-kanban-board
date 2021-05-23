import tasks from './modules/tasks';
import groups from './modules/groups';
import Task from '@/common/model/Task';

export default ({
  namespaced: true,
  modules: {
    tasks,
    groups,
  },
  actions: {
    setState({ dispatch }, initialState) {
      initialState.forEach(({ type, task }) => {
        dispatch('addNewTask', { type, content: task.content });
      });
    },
    addNewTask({ commit }, { type, content }) {
      const task = new Task(content);
      commit('groups/pushTaskId', {type, id: task.id});
      commit('tasks/set', task);
    },
    addNewTaskToBacklog({ dispatch }, content) {
      dispatch('addNewTask', { type: 'backlog', content });
    },
    clearTasks({ commit, state }, type ) {
      state.groups.map[type].tasks.forEach((id) => commit('tasks/delete', id));
      commit('groups/clearTasks', type);
    },
  },
});
