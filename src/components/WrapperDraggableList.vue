<template>
  <draggable
    v-model="tasksModel"
    :class="listClass"
    v-bind="dragOptions"
  >
    <WrapperTask
      v-for="item of list"
      :key="item"
      :class="itemClass"
      :base="taskBase"
      :task-id="item"
    />
  </draggable>
</template>
<script>
import draggable from 'vuedraggable';
import WrapperTask from './WrapperTask.vue';

export default {
  name: 'WrapperDraggableList',
  components: {
    draggable,
    WrapperTask,
  },
  props: {
    base: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    list: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    taskBase: 'task',
  }),
  computed: {
    listClass() {
      return [
        `${this.base}__list`,
        `${this.base}__list--${this.type}`,
      ];
    },
    itemClass() {
      return `${this.base}__item`;
    },
    dragOptions() {
      return {
        animation: 200,
        group: `${this.base}`,
        draggable: `.${this.taskBase}`,
        dragClass: `${this.taskBase}--dragged`,
        ghostClass: `${this.taskBase}--ghost`,
      };
    },
    tasksModel: {
      get() {
        return this.list;
      },
      set(list) {
        this.$emit('list-update', list);
      },
    },
  },
};
</script>
