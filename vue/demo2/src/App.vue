<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- 这里需要改 -->
  <mycomponent/>
</template>

<script>
// 这里需要改
import mycomponent from './components/mycomponent.vue'; './components/mycomponent'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // 这里需要改
    mycomponent
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
