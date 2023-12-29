<template>
 <hr />
 <div>子集</div>
 <button @click="send">子组件向父组件传值</button>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
// 给父组件传值 defineEmits js写法
// const emit = defineEmits(['on-click'])
// ts写法
const emit = defineEmits<{
    (e: "on-click", name: string): void
}>()

const send = () => {
    emit('on-click', '小美')
}

// 子组件向父组件 暴露元素/方法
defineExpose({
  name: "小花",
  open: () => console.log(1)
})
</script>
<style scoped>

</style>