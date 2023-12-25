<template>
 <div>我是组件 好家伙</div>
 <!-- 注意ref里的名称应与ref的名称相同 -->
 <div ref="div">{{ str }}</div>
 <button @click="change">修改str</button>
</template>
<script setup lang='ts'>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onRenderTracked, onRenderTriggered } from 'vue'
// beforeCreate created setup语法糖模式是没有这两个生命周期的 setup去代替
// onBeforeMount读不到dom  onMounted可以读取dom
// onBeforeUpdate获取的是更新前的dom  onUpdated获取的是更新后的dom

console.log('setup')
const str = ref<string>('小满')
const div = ref<HTMLDivElement>()

// 创建的钩子
onBeforeMount(() => {
    console.log('创建之前========>', div.value)
})
onMounted(() => {
    console.log('创建完成========>', div.value)
})

// 更新的钩子
onBeforeUpdate(() => {
    console.log('更新组件之前========>', div.value?.innerText)
})
onUpdated(() => {
    console.log('更新组件完成========>', div.value?.innerText)
})


// 销毁的钩子
onBeforeUnmount(() => {
    console.log('销毁之前========>')
})
onUnmounted(() => {
    console.log('销毁完成========>')
})


// 收集依赖
onRenderTracked((e) => {
    console.log(e)
})

// 触发依赖更新
onRenderTriggered((e) => {
    console.log(e)
})

const change = () => {
    str.value = '我被改啦！'
}

</script>
<style scoped>

</style>