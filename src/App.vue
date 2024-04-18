<template>

 <div>
  <div>
    <img v-lazy="item" width="360" height="500" v-for="item in arr" alt="">
  </div>
 </div>

</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import type { Directive } from 'vue';
// glob 是懒加载的模式
// let modules = {
//   'xxxxx': () => import('xxxxx') // 遇到import会进行代码分包
// }
// globEager 静态加载
// import xxx from 'xxx'

let imageList: Record<string, {default: string}> = import.meta.glob('./assets/images/*.*', {eager: true})
let arr = Object.values(imageList).map(v => v.default)

let vLazy:Directive<HTMLImageElement, string> = async (el, bingding) => {
  const def = await import('./assets/vue.svg')
  el.src = def.default
  const observer = new IntersectionObserver((enr) => {
    console.log(enr[0], bingding.value);
    if (enr[0].intersectionRatio > 0) {
      el.src = bingding.value
      observer.unobserve(el)
    }
  })
  observer.observe(el);
}
</script>
<style scoped>

</style>