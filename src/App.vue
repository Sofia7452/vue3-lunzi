<template>
  <router-view />
</template>

<script>
import { provide, ref } from "vue";
export default {
  name: "App",
  setup() {
    // provide使得后代都可以用，后代通过inject获取
    const menuVisible = ref(false);
    provide("menuVisible", menuVisible);
  },
};
</script>
