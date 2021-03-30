<template>
  <BaseBoard :base="base">
    <template #header>
      {{ headerText }}
    </template>
    <template #group>
      <TaskGroup
        :base="base"
        v-for="type of groupTypes"
        :type="type"
        :key="type"
      />
    </template>
  </BaseBoard>
</template>
<script>
import { mapState } from 'vuex';

import BaseBoard from './BaseBoard.vue';
import TaskGroup from './TaskGroup.vue';

export default {
  name: 'TaskBoard',
  components: {
    BaseBoard,
    TaskGroup,
  },
  data: () => ({
    base: 'taskboard',
    headerText: 'Your tasks',
  }),
  computed: {
    ...mapState({
      groupTypes: 'orderList',
    }),
  },
};
</script>
<style></style>
