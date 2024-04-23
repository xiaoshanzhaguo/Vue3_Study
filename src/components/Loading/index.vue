<template>

 <div v-if="isShow" class="loading">
    Loading
 </div>

</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
const isShow = ref<boolean>(false)

const show = () => isShow.value = true

const hide = () => isShow.value = false

// 对外暴露 当前组件的方法
defineExpose({
    show, hide
})
</script>
<style lang="less" scoped>
.loading {
    background: black;
    opacity: 0.8;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}
</style>