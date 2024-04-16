<template>
  <button @click="flag = !flag">change flag</button>
  <div>{{ flag }}</div>
 </template>
 
<script setup lang='ts'>
let flag = ref<boolean>(false)
</script>
 
<style lang="less" scoped>

</style>