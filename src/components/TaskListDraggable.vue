<template>
  <draggable :class="listClass" v-model="tasksModel" v-bind="dragOptions">
    <TaskItem
      :class="itemClass"
      :base="itemBase"
      v-for="task of taskList"
      :task="task"
      :type="type"
      :key="task.id"
    />
  </draggable>
</template>
<script>
import { mapGetters } from 'vuex'
import draggable from 'vuedraggable'
import TaskItem from './TaskItem.vue'

export default {
  name: 'TaskListDraggable',
  props: {
    parentBase: {
      type: String,
      required: true,
    },
    type: {
      type: String,
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
    itemBase: `task`,
  }),
  components: {
    draggable,
    TaskItem,
  },
  computed: {
    ...mapGetters([`taskListByType`, `taskOrderListByType`]),
    taskList() {
      return this.taskListByType(this.type)
    },
    taskIdList() {
      return this.taskOrderListByType(this.type)
    },
    listClass() {
      return [
        `${this.parentBase}__list`,
        `${this.parentBase}__list--${this.type}`,
      ]
    },
    itemClass() {
      return `${this.parentBase}__item`
    },
    dragOptions() {
      return {
        animation: 200,
        group: `${this.parentBase}`,
        draggable: `.${this.itemBase}`,
        dragClass: `${this.itemBase}--dragged`,
        ghostClass: `${this.itemBase}--ghost`,
      }
    },
    tasksModel: {
      get() {
        return this.taskIdList
      },
      set(list) {
        this.$emit(`list-update`, list)
      },
    },
  },
}
</script>
