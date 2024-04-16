<template>
  <div class="btns">
    <button v-has-show="'shop:create'">创建</button>
    <button v-has-show="'shop:edit'">编辑</button>
    <button v-has-show="'shop:delete'">删除</button>
  </div>
 </template>
 
<script setup lang='ts'>
import { ref, reactive} from 'vue';
import type { Directive } from 'vue';
// permission
localStorage.setItem('userId', 'xiaomei-zm')


// mock后台返回的数据
const permission = [
  'xiaomei-zm:shop:edit',
  'xiaomei-zm:shop:create',
  'xiaomei-zm:shop:delete'
]

const userId = localStorage.getItem('userId') as string
const vHasShow: Directive<HTMLElement, string> = (el, bingding) => {
  console.log(el, bingding)
  if (!permission.includes(userId + ":" + bingding.value)) {
    el.style.display = 'none'
  }
}
</script>
 
<style lang="less" scoped>
.btns {
  button {
    margin: 10px;
  }
}
</style>