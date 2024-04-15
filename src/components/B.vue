<template>
    <div class="B">
        <h1>B组件</h1>
        {{ flag }}
    </div>
</template>

<script setup lang='ts'>
// 使用泛型字面量的格式
type Props = {
    flag: boolean
}
defineProps<Props>()
</script>

<style lang="less" scoped>
.B {
    width: 200px;
    height: 200px;
    color: #fff;
    background: red;
}
</style>