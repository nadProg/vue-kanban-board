<template>
  <BaseBoard :base="base">
    <template #header>
      Your tasks
    </template>
    <template #group>
      <WrapperBoardGroup
        v-for="group of groups"
        :key="group"
        :type="group"
        :base="base"
      />
    </template>
  </BaseBoard>
</template>
<script>
import { mapState } from 'vuex';

import BaseBoard from './BaseBoard.vue';
import WrapperBoardGroup from './WrapperBoardGroup.vue';

export default {
  name: 'TheBoard',
  components: {
    BaseBoard,
    WrapperBoardGroup,
  },
  data: () => ({
    base: 'taskboard',
  }),
  computed: {
    ...mapState('board', {
      groups: (state) => state.groups.array,
    }),
  },
};
</script>
<style></style>
