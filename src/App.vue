<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <HomeApp />
  <!-- <UserInfo /> -->

</template>

<script>

import HomeApp from './components/HomeApp.vue'
// import UserInfo from './components/UserInfo.vue'

export default {
  name: 'App',
  components: {
    HomeApp,
    // UserInfo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
