<template>
  <div class="hello">
    <h1>Vue模板学习</h1>
    <span>{{ msg }}</span>
    <span>using mustaches: {{ rawhtml }}</span>
    <br>
    <span>using v-html directive: <span v-html="rawhtml"></span></span>
    <div v-bind:id="dynamicId">v-bind:</div>
    <div :id="dynamicId">v-bind:</div>
    <p>{{ condition? "1" : "2" }}</p>
    <p>num + 10 = {{ num + 10 }}</p>
    <p v-if="flag">这是v-if语句</p>
    <p v-else>这是v-else语句</p>
    <p v-show="condition2">这是v-show语句</p>
    <p v-for="item in items">{{ item.message }}</p>
    <p v-for="(item, index) in items" :key="item.id">{{ item.message }}</p>
    <button @click="counter+=1">{{ counter }}</button>
    <br>
    <button @click="clickHandle">do not touch me</button>
    <br>
    <button @click="say('hello')">say</button>
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
    <input v-model.lazy="message1" placeholder="edit me">
    <p>Message is: {{ message1 }}</p>
    <input v-model.trim="message2" placeholder="edit me">
    <p>Message is: {{ message2 }}</p>
  </div>
</template>

<script>
export default {
  name:"helloworld",
  data() {
    return {
      msg: "1",
      rawhtml: "<a href='https://www.baidu.com'>rawhtml</span>",
      dynamicId: 3,
      num : 1,
      condition : true,
      flag:false,
      condition2 : true,
      items:[{message: 'item1'}, {message: 'item2'}],
      items2 : [{id : 1, message : 'items2-item1'}, {id : 2, message : 'items2-item2'}],
      counter: 1,
      message : "",
      message1 : "",
      message2 : "",
    }
  },
  methods: {
    clickHandle(event) {
      console.log("you have clicked!");
      if(event) {
        alert(event.target.tagName);
      }
      event.target.innerHTML = "oh no";
    },
    say(msg) {
      alert(msg);
    }
  }
}
</script>

<style scoped>
</style>
