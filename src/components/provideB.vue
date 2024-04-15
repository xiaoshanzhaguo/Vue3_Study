<template>
    <h1>provideB.vue(孙子级别)</h1>
    <div>
        <button @click="change">修改provide的值 yellow</button>
    </div>
    <div class="box">
    </div>
</template>

<script setup lang="ts">
import {ref, reactive, inject} from 'vue'
// 它是一个联合类型或undefined
import type {Ref} from 'vue'
const color = inject<Ref<string>>('color')

// 使用可选链操作符color?.value时，没办法做赋值操作，因为返回的类型可能是ref或undefined，是一个联合类型。
// 解决方法：1. 使用非空断言。 2. 定义时接收一个默认值，写在初始化的第二个参数
const change = () => {
    color!.value = 'yellow'
}
</script>

<style lang="less" scoped>
.box {
    height: 50px;
    width: 50px;
    border: 1px solid #ccc;
    background: v-bind(color);
}
</style>