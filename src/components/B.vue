<template>
  <div>
    <h1>我是B</h1>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from "vue";
const instance = getCurrentInstance()

instance?.proxy?.$Bus.on('on-xiaomei', (str) => {
    console.log(str, "=========>B")
})
// * 代表监听所有的事件触发
instance?.proxy?.$Bus.on('*', (type, str) => {
    console.log(type, str, "=========>B")
})

// 还有对应的off方法 off->取消指定的mitt事件，取消的的函数
const Bus = (str: any) => {
    console.log(str, "========>B")
}
instance?.proxy?.$Bus.off('on-xiaomei', Bus)

// 还有删除全部的方法 all.clear() 取消所有的mitt事件
instance?.proxy?.$Bus.all.clear()
</script>

<style scoped>
</style>
