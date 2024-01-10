<template>
 <!-- 加stop是为了阻止事件冒泡。同时使用$event即可接收event -->
 <div @click.stop="clickTap(item, $event)" class="tree" v-for="item in data">
    <input v-model="item.checked" type="checkbox"> <span>{{ item.name }}</span>
    <!-- 在vue3中，可以使用文件名作递归组件的名称。 -->
    <!-- <Tree v-if="item?.children?.length" :data="item?.children"></Tree> -->
    <xiaomei v-if="item?.children?.length" :data="item?.children"></xiaomei>
 </div>
</template>

<!-- 有了新插件(vite-plugin-vue-setup-extend)后，可以直接在script中加name="xiaomei"，即可实现对递归组件的重命名 -->
<script setup lang='ts'>
import { ref, reactive } from 'vue'
interface Tree {
  name: string,
  checked: boolean,
  children?: Tree[]
}

// 配置完插件后的使用方法
defineOptions({
    name: "xiaomei"
})

defineProps<{
    // 数据就是一个tree类型的数组
    data?: Tree[]
}>()

const clickTap = (item: Tree, e: any) => {
    // console.log(item);
    console.log(e.target);  // 即为当前点击的元素
}

</script>

<!-- 若文件名不想叫做Tree，还可以另开一个script，然后进行改名。弊端是还要再写一个scirpt。因此可以使用第三种方式，安装插件。 -->
<!-- <script lang="ts">
export default {
    name: "xiaomei"
}
</script> -->

<style scoped lang="less">
.tree {
    margin-left: 10px;
}
</style>