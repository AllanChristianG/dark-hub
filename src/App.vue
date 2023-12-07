<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <VoiceList msg="Welcome to Your Vue.js App"/>
  <UserInfo msg="AKII"/>

</template>

<script>

import VoiceList from './components/VoiceList.vue'
import UserInfo from './components/UserInfo.vue'

export default {
  name: 'App',
  components: {
    VoiceList,
    UserInfo
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
