<template>
  <router-view />
</template>

<script>
import { provide, ref } from "vue";
import { router } from "./router";
export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    // provide使得后代都可以用，后代通过inject获取
    // PC端和移动端区别处理
    const menuVisible = ref(width <= 500 ? false : true);
    provide("menuVisible", menuVisible);
    router.afterEach(() => {
      if (width <= 500) {
        menuVisible.value = false;
      }
    });
  },
};
</script>
