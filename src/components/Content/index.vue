<template>
 <div>
    <button @click="random">random</button>
    <!-- move-class为平移的动画 -->
    <transition-group move-class="mmm" class="wraps" tag="div">
        <div class="items" :key="item.id" v-for="item in list">
            {{ item.number }}
        </div>
    </transition-group>
 </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import _ from 'lodash' // lodash报错，需要安装ts声明文件库 npm install @types/lodash -D

// 由于ts约束，这里断言成number数组
let list = ref(Array.apply(null, {length: 81} as number[]).map((_, index) => {
    return {
        id: index,
        number: (index % 9) + 1
    }
}))

console.log(list.value); // 这里就是一个对象数组

// 随机用lodash库
const random = () => {
    list.value = _.shuffle(list.value)
}

</script>

<style lang="less" scoped>
.wraps {
    display: flex;
    flex-wrap: wrap;
    width: calc(25px * 10 + 9px);

    .items {
        width: 25px;
        height: 25px;
        border: 1px solid #ccd;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

// transition是通过transform和translate来实现的，这里可以加all，或者不加
.mmm {
    transition: all 1s;
}
</style>