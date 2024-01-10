<template>
  <!-- <Card :content="'内容'"></Card> -->
  <Tree :data="data"></Tree>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import Tree from './components/Tree.vue'

interface Tree {
  name: string,
  checked: boolean,
  children?: Tree[]
}

// 递归组件mock数据
const data = reactive<Tree[]>([
  {
    name: '1',
    checked: false,
    children: [
      {
        name: '1-1',
        checked: false,
      },
      {
        name: '1-2',
        checked: true,
      }
    ]
  },
  {
    name: '2',
    checked: false,
    children: [
      {
        name: '2-1',
        checked: false,
      }
    ]
  },
  {
    name: '3',
    checked: false,
    children: [
      {
        name: '3-1',
        checked: false,
        children: [
          {
            name: '3-1-1',
            checked: false,
          }
        ]
      }
    ]
  }
])

</script>

<style scoped lang='less'>

</style>