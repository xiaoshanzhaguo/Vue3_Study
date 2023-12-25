<template>
  <h1>生命周期</h1>
  <A v-if="flag"></A>
  <button @click="flag = !flag">创建-销毁</button>
</template>

<script setup lang='ts'>
import {ref, reactive} from 'vue'
import A from './components/A.vue'
const flag = ref<Boolean>(true)
</script>

<style scoped>

</style>