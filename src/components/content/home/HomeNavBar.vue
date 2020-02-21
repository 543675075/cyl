<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">个人简历</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup">
        <span class="navbar-toggler-icon"></span>
      </button>
      <slot></slot>
    </nav>
</template>

<script>
export default {
  name: "HomeNavBar"
}
</script>

<style scoped>
 
</style>