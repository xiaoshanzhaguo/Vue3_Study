<template>

 <div v-if="modelValue" class="model">
    {{ modelValue }}
    <div class="close"><button @click="close">关闭</button></div>
    <h3>我是v-model子组件 dialog</h3>
    <div>内容：<input type="text"></div>
 </div>

</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
// vue2 value  vue3  modelValue

defineProps<{
    modelValue: boolean
}>()

const emit = defineEmits(['update:modelValue'])

const close = () => {
    // 触发事件，并将值设为false
    emit('update:modelValue', false)
}
</script>
<style scoped>
.model {
    width: 500px;
    border: 5px solid #ccc;
    padding: 10px;
}
.close {
    float: right;
}
</style>