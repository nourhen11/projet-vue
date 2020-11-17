<template>
  <button :class="classList" @click.prevent="btnFunction">
    {{ btnTitle }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    btnTitle: String,
    classList: String,
    btnFunction: Function,
  },
};
</script>

<style>
.bnt-favorite{
  background-color: transparent;
    color: red;
}
</style>>
