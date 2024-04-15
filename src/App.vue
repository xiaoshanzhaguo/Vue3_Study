<template>
  <h1>App.vue (爷爷级别)</h1>
  <label>
     <input v-model="colorVal" value="red" name="color" type="radio">
     红色
  </label>
 
  <label>
     <input v-model="colorVal" value="pink" name="color" type="radio">
     粉色
  </label>
  
  <label>
     <input v-model="colorVal" value="blue" name="color" type="radio">
     蓝色
  </label>
  <div class="box">

  </div>
  <hr>
  <provideAVue></provideAVue>
 </template>
 
 <script setup lang='ts'>
 import { ref, reactive, watch, provide, readonly } from 'vue'
 import provideAVue from './components/provideA.vue'

 let colorVal = ref<string>('red');
 provide('color', colorVal)
// 如果不想colorVal被修改，使用readonly
// provide('color', readonly(colorVal))
 </script>
 
<style lang="less" scoped>
.box {
    height: 50px;
    width: 50px;
    border: 1px solid #ccc;
    background: v-bind(colorVal);
}
</style>