<template>
  <h3>元素生命周期</h3>
  <p>{{ message }}</p>
</template>

<script>
export default{
  data() {
    return {

    }
  },
  beforeCreate() {
    console.log("创建之前")
  },
  beforeMount() {
    console.log("渲染之前")
  },
  beforeUpdate() {
    console.log("更新之前")
  },
  beforeUnmount() {
    // 在卸载之前，把消耗性能的操作都杀死
    console.log("卸载之前")
  },
  created() {
    console.log("创建完成")
  },
  mounted() {
    console.log("渲染完成");
    // 一般在此作网络请求
  },
  updated() {
    console.log("更新完成")
  },
  unmounted() {
    console.log("卸载完成")
  }
}
</script>

<style>
</style>
