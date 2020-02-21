<template>
  <div>
    <jumbotron></jumbotron>
    <home-nav-bar>
      <nav-bar-item :list="navItem"></nav-bar-item>
    </home-nav-bar>
  </div>
</template>

<script>
  import Jumbotron from "./home/Jumbotron"
  import HomeNavBar from "./home/HomeNavBar"
  import NavBarItem from "./home/NavBarItem"
  export default {
    name: "Home",
    components: {
      Jumbotron,
      HomeNavBar,
      NavBarItem
    },
    data() {
      return {
        navItem: [
          {
            title: "个人信息",
            path: "/info"
          },
          {
            title: "工作经历",
            path: "/work"
          },
          {
            title: "技能掌握",
            path: "/skill"
          },
          {
            title: "作品展示",
            path: "/show"
          },
        ]
      }
    },
  }
</script>

<style scoped>

</style>