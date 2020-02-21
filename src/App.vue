<template>
  <div id="app">
   <home></home>
   <router-view></router-view>
  </div>
</template>
<script>
  import Home from "components/content/Home.vue"
 
export default {
  name: "App",
  components: {
    Home,
    
  }
}
</script>
<style lang="less">

</style>
