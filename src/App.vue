<template>

  <div>
    <h1>我是App.vue 父组件</h1>
  </div>
  <div>isShow: {{ isShow }}</div>
  <div>text: {{ text }}</div>
  <div><button @click="isShow = !isShow">开关</button></div>
  <vModelVue v-model:textVal.isBt="text" v-model="isShow"></vModelVue>

 </template>
 
<script setup lang='ts'>
import {ref, reactive} from 'vue';
import vModelVue from './components/v-model.vue'
const isShow = ref<boolean>(true)
const text = ref<string>('小美')
</script>
 
<style lang="less" scoped>

</style>