<template>
  <article :class="base">
    <div v-show="false">
      <slot name="sprite" />
    </div>
    <header :class="headerClass">
      <div :class="innerClass">
        <h1>
          <slot name="header" />
        </h1>
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
  name: 'BaseApp',
  props: {
    base: {
      type: String,
      required: true,
    },
  },
  computed: {
    headerClass() {
      return `${this.base}__header`;
    },
    mainClass() {
      return `${this.base}__main`;
    },
    innerClass() {
      return `${this.base}__inner`;
    },
  },
};
</script>
