<template>
 <div class="content">
    <button @click="add">ADD</button> <button @click="pop">POP</button>
    <div class="wraps">
        <transition-group 
            leave-active-class="animate__animated animate__bounceOut" 
            enter-active-class="animate__animated animate__bounceIn">
            <div class="item" :key="item" v-for="item in list">{{ item }}</div>
        </transition-group>
    </div>
 </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import 'animate.css'

const list = reactive<number[]>([1,2,3,4,5,6])

const add = () => {
    list.push(list.length + 1);
}

const pop = () => {
    list.pop();
}

</script>
<style lang="less" scoped>
.wraps {
    display: flex;
    flex-wrap: wrap;
    word-break: break-all;
    border: 1px solid #ccc;

    .item {
        margin: 10px;
        font-size: 20px;
    }
}
</style>