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
    color:#9a7d7d;
}
.bnt-logout{
  color: red;
    background-color: transparent;
}
</style>>
