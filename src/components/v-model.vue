<template>

 <div v-if="modelValue" class="model">
    {{ modelValue }}
    <div class="close"><button @click="close">关闭</button></div>
    <h3>我是v-model子组件 dialog</h3>
    <div>内容：<input @input="change" :value="textVal" type="text"></div>
 </div>

</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
// vue2 value  vue3  modelValue

const props = defineProps<{
    modelValue: boolean,
    textVal: string,
    textValModifiers?: {
        isBt: boolean
    }
}>()

const emit = defineEmits(['update:modelValue', 'update:textVal'])

const close = () => {
    // 触发事件，并将值设为false
    emit('update:modelValue', false)
}

const change = (e: Event) => {
    // 一开始推断的是event.target，无法读取value，因此这里要加类型断言
    const target = e.target as HTMLInputElement
    emit('update:textVal', props?.textValModifiers?.isBt ? target.value + '变态' : target.value)
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