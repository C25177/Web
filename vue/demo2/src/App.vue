<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- 这里需要改 -->
  <!-- <mycomponent/> -->
  <props_test :title="title" :age="age" :arr="arr" @onEvent="getDataHandle"/>
  <h1>{{ msg }}</h1>
</template>

<script>
// 这里需要改
// import mycomponent from './components/mycomponent.vue'; './components/mycomponent'
// import HelloWorld from './components/HelloWorld.vue'
import props_test from './components/props_test.vue'

export default {
  name: 'App',
  components: {
    // 这里需要改
    // mycomponent
    props_test,
  },
  data() {
    return {
      title: "一个标题",
      age : 10,
      arr: [1, 2, 3, 4, 5],
      msg: ""
    }
  },
  methods: {
    getDataHandle(data) {
      console.log(data);
      this.msg = data;
    }
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
