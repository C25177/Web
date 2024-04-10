<template>
 <h1>组件传递参数</h1>
 <h2>{{ title }}</h2>
 <h2>{{ age }}</h2>

 <ul>
  <li v-for="(item, index) in arr" key="index">{{ item }}</li>
 </ul>

 <button @click="sendHandle">sendData</button>
</template>

<script>
export default {
  name: "props_test",
  props: {
    title: {
      type:String,
      default:""
    },
    age: {
      type: Number,
      default:0
    },
    arr: {
      type:Array,
      default: function() {
        return [];
      }
    }
  },
  methods: {
    sendHandle() {
      this.$emit("onEvent", "data");
    }
  }
}
</script>

<style>
</style>

