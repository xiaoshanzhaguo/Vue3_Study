<template>
 <div>
    <h1>我是A</h1>
    <button @click="emit">emit</button>
 </div>
</template>

<script setup lang='ts'>
// 引入当前组件的实例
import { getCurrentInstance} from 'vue';

const instance = getCurrentInstance()

const emit = () => {
    instance?.proxy?.$Bus.emit('on-xiaomei', 'mitt')
    instance?.proxy?.$Bus.emit('on-xiaomei2', 'mitt2')
}
</script>

<style scoped>
</style>