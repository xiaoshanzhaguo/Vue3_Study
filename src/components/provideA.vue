<template>
    <h1>provideA.vue(父亲级别)</h1>
    <div class="box">

    </div>
    <provideBVue></provideBVue>
</template>

<script setup lang="ts">
import {ref, reactive, inject} from 'vue'
import type {Ref} from 'vue'
import provideBVue from './provideB.vue'

// 它是一个联合类型或undefined
const color = inject<Ref<string>>('color')
</script>

<style lang="less" scoped>
.box {
    height: 50px;
    width: 50px;
    border: 1px solid #ccc;
    background: v-bind(color);
}
</style>