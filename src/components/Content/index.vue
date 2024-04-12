<template>
 <div class="content">
    <button @click="flag = !flag">switch</button>
    <transition
        appear
        appear-from-class="from"
        appear-active-class="active"
        appear-to-class="to"
    >
        <div v-if="flag" class="box"></div>
    </transition>
 </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import gsap from 'gsap'
const flag = ref<boolean>(true)
const EnterFrom = (el: Element) => {
    // console.log('进入之前');
    gsap.set(el, {
        width: 0,
        height: 0
    })
}
const EnterActive = (el: Element, done: gsap.Callback) => {
    // console.log('过渡曲线');
    // setTimeout(() => {
    //     done();
    // }, 3000)
    gsap.to(el, {
        width: 200,
        height: 200,
        onComplete: done
    })
}
const EnterTo = (el: Element) => {
    console.log('过渡完成');
}
const EnterCancelled = (el: Element) => {
    console.log('过渡效果被打断');
}
const LeaveFrom = (el: Element) => {
    console.log('离开之前');
}
const Leave = (el: Element, done: gsap.Callback) => {
    // console.log('离开过渡曲线');
    // setTimeout(() => {
    //     done();
    // }, 3000)
    gsap.to(el, {
        width: 0,
        height: 0,
        onComplete: done
    })
}
const LeaveTo = (el: Element) => {
    console.log('离开完成');
}
const LeaveCancelled = (el: Element) => {
    console.log('离开过渡曲线被打断----------');
}
</script>
<style lang="less" scoped>
.box {
    width: 200px;
    height: 200px;
    background: red;
}
.from {
    width: 0;
    height: 0;
}
.active {
    transition: all 2s ease;
}
.to {
    width: 200px;
    height: 200px;
}
/* // 开始过渡 */
.fade-enter-from{
   background:red;
   width:0px;
   height:0px;
   transform:rotate(360deg)
}
/* // 开始过渡了 */
.fade-enter-active{
  transition: all 2.5s linear;
}
/* // 过渡完成 */
.fade-enter-to{
   background:yellow;
   width:200px;
   height:200px;
}
/* // 离开的过渡 */
.fade-leave-from{
  width:200px;
  height:200px;
  transform:rotate(360deg)
}
/* // 离开中过渡 */
.fade-leave-active{
  transition: all 1s linear;
}
/* // 离开完成 */
.fade-leave-to{
  width:0px;
  height:0px;
}
</style>