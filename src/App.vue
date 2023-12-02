<template>
  <input id="ipt" v-model="message" type="text">
  <input v-model="message2" type="text">
  <button @click="stopWatch">停止监听</button>
</template>
<script setup lang='ts'>
import { ref, reactive, watch, watchEffect } from 'vue';
let message = ref<string>('小美')
let message2 = ref<string>('大美')


const stop = watchEffect((onInvalidate) => {
  let ipt: HTMLInputElement = document.querySelector('#ipt') as HTMLInputElement
  console.log(ipt, 'e111111111');

  console.log('message====>', message.value);
  // 需要监听多个的话，要再添加一个log
  console.log('message====>', message2.value);
  // watchEffect在监测到依赖时,会先执行他的形参onInvalidate函数,再执行作用域的函数
  onInvalidate(() =>  {
    console.log('before111');
  })
}, {
  flush: "post",
  onTrigger(e) {
    debugger
  }
})

const stopWatch = () => stop()
</script>
<style scoped>

</style>