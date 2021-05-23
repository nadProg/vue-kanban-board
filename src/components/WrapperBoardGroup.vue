<template>
  <BaseBoardGroup
    :base="base"
    :type="type"
    button-base="button"
    :is-empty="isEmpty(type)"
    :is-show-clear-button="isBasket"
    @clear-button-click="clearTasks(type)"
  >
    <template #header>
      {{ group.header }}
    </template>
    <template #list-placeholder>
      {{ group.emptyPlaceholder }}
    </template>
    <template #list>
      <WrapperDraggableList
        :base="base"
        :type="type"
        :list="group.tasks"
        :data-empty-placeholder="group.emptyPlaceholder"
        @list-update="updateTasks({type, tasks: $event})"
      />
    </template>
    <template #clear-button>
      Clear
    </template>
  </BaseBoardGroup>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';

import BaseBoardGroup from './BaseBoardGroup.vue';
import WrapperDraggableList from './WrapperDraggableList.vue';

export default {
  name: 'WrapperBoardGroup',
  components: {
    BaseBoardGroup,
    WrapperDraggableList,
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
  computed: {
    ...mapGetters('board/groups', ['groupByType', 'isEmpty']),
    group() {
      return this.groupByType(this.type);
    },
    isBasket() {
      return this.type === 'basket';
    },
  },
  methods: {
    ...mapActions('board', ['clearTasks']),
    ...mapMutations('board/groups', ['updateTasks']),
  },
};
</script>
<style></style>
