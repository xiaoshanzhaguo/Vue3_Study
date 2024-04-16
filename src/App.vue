<template>

  <div>
    <button @click="flag = !flag">切换</button>
    <!-- aaa为自定义参数, xiaomei为自定义修饰符 -->
    <A v-if="flag" v-move:aaa.xiaomei="{background: 'green', flag: flag}"></A>
  </div>

 </template>
 
<script setup lang='ts'>
import { ref, Directive, DirectiveBinding} from 'vue';
import A from './components/A.vue'

let flag = ref<boolean>(true)

type Dir = {
  background: string
}

const vMove: Directive = {
  created () {
    console.log('=====>creaed');
  },
  beforeMount () {
    console.log('=====>beforeMount');
  },
  mounted (el: HTMLElement, dir: DirectiveBinding) {
    // console.log(args);
    console.log('=====>mounted');
    // console.log(dir.value.background);
    el.style.background = dir.value.background;
  },
  beforeUpdate () {
    console.log('=====>beforeUpdate');
  },
  updated () {
    console.log('=====>updated');
  },
  beforeUnmount () {
    console.log('=====>beforeMount');
  },
  unmounted () {
    console.log('=====>unmounted');
  },
}

</script>
 
<style lang="less" scoped>

</style>