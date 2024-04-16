<template>
  <div>
    <xiaomei @on-click="getItem" name="小美props"></xiaomei>
  </div>
 </template>
 
<script setup lang='ts'>
import { ref, reactive } from 'vue'
// 注意，引入的时候不用加后缀，它会自己进行识别
import xiaomei from './App'

const getItem = (item: any) => {
  console.log('父组件收到了', item)
}
</script>
 
<style lang="less" scoped>

</style>