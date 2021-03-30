<template>
  <BaseBoardGroup
    :base="base"
    :type="type"
    :isEmpty="isGroupEmpty(type)"
    :isShowClearButton="isBasket"
    @clear-button-click="onClearButtonClick"
  >
    <template #header>{{ mapTypeToHeader[type] }}</template>
    <template #list>
      <TaskListDraggable
        :parentBase="base"
        :type="type"
        @list-update="onListUpdate"
      />
    </template>
    <template #clear-button>{{ clearButtonText }}</template>
  </BaseBoardGroup>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

import BaseBoardGroup from './BaseBoardGroup.vue';
import TaskListDraggable from './TaskListDraggable.vue';

export default {
  name: 'TaskGroup',
  components: {
    BaseBoardGroup,
    TaskListDraggable,
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
  },
  data: () => ({
    mapTypeToHeader: {
      backlog: 'Backlog',
      processing: 'Processing',
      done: 'Done',
      basket: 'Basket',
    },
    clearButtonText: 'Clear',
  }),
  computed: {
    ...mapGetters(['isGroupEmpty']),
    isBasket() {
      return this.type === 'basket';
    },
  },
  methods: {
    ...mapActions(['updateGroup', 'clearGroup']),
    onListUpdate(list) {
      this.updateGroup({ type: this.type, list });
    },
    onClearButtonClick() {
      this.clearGroup({ type: this.type });
    },
  },
};
</script>
<style></style>
