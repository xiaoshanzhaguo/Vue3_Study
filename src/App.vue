<template>
  <h1>父级</h1>
  <WaterFall ref="waterFall" @on-click="getName" :arr="[1, 2, 3]" :title="name"></WaterFall>
</template>

<script setup lang='ts'>
import {ref, reactive} from 'vue'
import WaterFall from './components/WaterFall.vue'
const name = ref<string>('小宝')
//注意这儿的typeof里面放的是组件名字(MenuCom)不是ref的名字 ref的名字对应开头的变量名(refMenu)
// const refMenu = ref<InstanceType<typeof MenuCom>>()
// 使用场景：Element-UI中，有El-Form中的xxxtableref，用于validate验证
const waterFall = ref<InstanceType<typeof WaterFall>>()


const getName = (name: string) => {
  console.log(name, '=====>我是父组件')
}

// 获取元素
// waterFall.value.
</script>

<style scoped>

</style>