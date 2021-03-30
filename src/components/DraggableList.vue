<template>
  <draggable :class="listClass" v-model="tasksModel" v-bind="dragOptions">
    <TaskItem
      :class="itemClass"
      class="draggable"
      v-for="task of tasks"
      :task="task"
      :type="type"
      :key="task.id"
    />
  </draggable>
</template>
<script>
import draggable from 'vuedraggable';
import TaskItem from './TaskItem.vue';

export default {
  name: 'DraggableList',
  props: {
    base: {
      type: String,
      required: true,
    },
    itemBase: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    tasks: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    mapTypeToHeader: {
      backlog: 'Backlog',
      processing: 'Processing',
      done: 'Done',
      basket: 'Basket',
    },
  }),
  components: {
    draggable,
    TaskItem,
  },
  computed: {
    listClass() {
      return [`${this.base}__list`, `${this.base}__list--${this.type}`];
    },
    itemClass() {
      return `${this.base}__item`;
    },
    dragOptions() {
      return {
        animation: 200,
        group: `${this.base}`,
        draggable: `.${this.itemBase}`,
        dragClass: `${this.itemBase}--dragged`,
        ghostClass: `${this.itemBase}--ghost`,
      };
    },
    tasksModel: {
      get() {
        return this.tasks;
      },
      set(list) {
        this.$emit('list-update', list);
      },
    },
  },
};
</script>
