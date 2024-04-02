<template>
    <div>
        <header class="header">
            <slot name="header"></slot>
        </header>
        <main class="main">
            <div v-for="item in data">
                <slot :data="item"></slot>
            </div>
        </main>
        <footer class="footer">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

type names = {
    name: string,
    age: number
}

const data = reactive<names[]>([{
    name: "111",
    age: 201
},
{
    name: "222",
    age: 202
},{
    name: "333",
    age: 203
},{
    name: "444",
    age: 204
}])

</script>

<style scoped lang="less">
.header {
    height: 200px;
    background: red;
    color: #fff;
}
</style>