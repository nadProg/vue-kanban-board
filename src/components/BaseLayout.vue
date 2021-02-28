<template>
  <article :class="blockClass">
    <header :class="headerClass">
      <div :class="innerClass">
        <slot name="header" />
      </div>
    </header>
    <div :class="mainClass">
      <div :class="innerClass">
        <slot name="main" />
      </div>
    </div>
  </article>
</template>
<script>
export default {
  name: 'BaseLayout',
  props: {
    block: {
      type: String,
      required: true,
    },
  },
  computed: {
    blockClass() {
      return `${this.block}`;
    },
    headerClass() {
      return `${this.block}__header`;
    },
    mainClass() {
      return `${this.block}__main`;
    },
    innerClass() {
      return `${this.block}__inner`;
    },
  },
};
</script>
