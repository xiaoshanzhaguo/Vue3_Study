<template>
  <div>
    case1: <input v-model="message" type="text">
    <hr>
    case2: <input v-model="message2" type="text">
    <hr>
    case3: <input v-model="message3.foo.bar.name" type="text">
    <hr>
    case4: <input v-model="message3.foo.bar.age" type="text">
  </div>
</template>
<script setup lang='ts'>
import { ref, reactive, watch } from 'vue';
let message = ref<string>('小美')
let message2 = ref<string>('大美')

let message3 = ref({
  foo: {
    bar: {
      name: "小美",
      age: 18
    }
  }
})

watch([message, message2], (newVal, oldVal) => {
  console.log(newVal, oldVal);
})


watch(message3, (newVal, oldVal) => {
  console.log(newVal, oldVal);
}, {
  deep: true  // 深度监听
})

watch(() => message3.value.foo.bar.age, (newVal, oldVal) => {
  console.log(newVal, oldVal);
}, {
  // deep: true  // 深度监听
  immediate: true, // 默认为false。如果为true，代表立即执行一次
  flush: "pre" // 默认为pre 组件更新前调用，sync 同步执行，post 组件更新后调用
})
</script>
<style scoped>

</style>