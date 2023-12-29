<template>
 <hr />
 <div>子集</div>
 <div>值：{{ title }}</div>
 <div>值：{{ arr }}</div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
// 1. js写法
// 接收父组件传过来的值defineProps
// const props = defineProps({
//     title: {
//         type: String,   // 注意这里的String是放的基本数据类型的值，而不是string
//         default: "默认值"
//     }
// })

// 2. ts写法
// defineProps({
//     title: String,
//     arr: Array
// })
// 2.1 ts 特有定义默认值(withDefaults)  使用泛型的写法
withDefaults(defineProps<{
    title: string,
    arr: number[]
}>(), {
    arr: () => [666]
})
</script>
<style scoped>

</style>