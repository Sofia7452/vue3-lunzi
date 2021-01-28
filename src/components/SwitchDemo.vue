<template>
  <div>
    <!--如果value没有加冒号，这里就是字符串而不是变量-->
    <Switch :value="y" @input="y = $event" />
  </div>
</template>
<script lang="ts">
import Switch from "../lib/Switch.vue";
import { ref } from "vue";
export default {
  components: { Switch },
  setup() {
    const y = ref(false);
    return { y };
  },
};
</script>