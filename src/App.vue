<template>
  <h1>父级</h1>
  <WaterFall @on-click="getName" :arr="[1, 2, 3]" :title="name"></WaterFall>
</template>

<script setup lang='ts'>
import {ref, reactive} from 'vue'
import WaterFall from './components/WaterFall.vue'
const name = ref<string>('小宝')


const getName = (name: string) => {
  console.log(name, '=====>我是父组件')
}
</script>

<style scoped>

</style>