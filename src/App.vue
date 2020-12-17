<template>
  <div>导航栏 |
     <router-link to='/'>Gao</router-link> | 
     <router-link to='/xxx'>Gao2</router-link>
     <div>
    <hr/>
  <router-view/>
</template>

<script>
export default {
  name: "App",
};
</script>
