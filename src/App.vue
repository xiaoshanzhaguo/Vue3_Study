<template>
  <h1>父级</h1>
  <WaterFall :arr="[1, 2, 3]" :title="name"></WaterFall>
</template>

<script setup lang='ts'>
import {ref, reactive} from 'vue'
import WaterFall from './components/WaterFall.vue'
const name = ref<string>('小宝')
</script>

<style scoped>

</style>