<template>
  <div class="collapse navbar-collapse row" id="navbarNavAltMarkup">
    <div class="navbar-nav col-sm text-center">
      <span class="nav-item col-sm" v-for="(item,index) in list" :class="{active:isTrue ===index}" :key="index"
        @click="itemClick(item.path,index)">{{item.title}} </span>
      <img src="~assets/img/icon.jpg" alt="头像" class="icon col">
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBarItem",
    data() {
      return {
        isTrue: 0
      }
    },
    props: {
      list: {
        type: Array,
        default: []
      }
    },
    methods: {
      itemClick(item, index) {
        this.isTrue = index
        if (this.$route.path !== item) {
          this.$router.replace(item)
        }
      }
    },
  }
</script>

<style scoped>
  .icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 150px;
    height: auto;
    border-radius: 50%;
  }

  .active {
    color: pink;
  }
</style>