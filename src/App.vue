<template>
  <div>
    <A @on-click="getFlag"></A>
    <B :flag="Flag"></B>
  </div>
  <hr>
 </template>
 
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import A from './components/A.vue'
import B from './components/B.vue'

let Flag = ref(false)

const getFlag = (params: boolean) => {
  Flag.value = params
}

</script>
 
<style lang="less" scoped>

</style>