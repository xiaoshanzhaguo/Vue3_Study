<template>
  <div>
    搜索：<input placeholder="请输入名称" v-model="searchKey" type="text">
    <div>
    <table style="margin-top: 10px;" width="500" cellpadding="0" border>
      <thead>
        <tr>
          <th>物品</th>
          <th>单价</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in searchData">
          <td align="center">{{ item.name }}</td>
          <td align="center">{{ item.price }}</td>
          <td align="center"><button @click="item.num > 1 ? item.num-- : null">-</button>{{ item.num }}<button @click="item.num < 99 ? item.num++ : null">+</button></td>
          <td align="center">{{ item.price * item.num }}</td>
          <td align="center"><button @click="del(index)">删除</button></td>
        </tr>
      </tbody>
      <tfoot>
        <tr colspan="5" align="right">
          <td>
            <span>总价: {{ total }}</span>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
  </div>
</template>
<script setup lang='ts'>
import { ref, reactive, computed } from 'vue';
// let $total = ref<number>(0)
let searchKey = ref<string>('')
interface Data {
  name: string,
  price: number,
  num: number
}
let data = reactive<Data[]>([
  {
    name: '小花的粉帽子',
    price: 500,
    num: 1
  },
  {
    name: '小花的橙色鞋子',
    price: 1000,
    num: 1
  },
  {
    name: '小花的白袜子',
    price: 5,
    num: 1
  },
])

const total = computed(() => {
  // 这里需要加一个return
  return data.reduce((prev: number, next: Data) => {
    return prev + next.num * next.price
  }, 0)
})

// const total = () => {
//   $total.value = data.reduce((prev: number, next: Data) =>{
//     return prev + next.num * next.price
//   }, 0)
//   // 这里记得要加初始值0
// }

const searchData = computed(() => {
  return data.filter((item) => {
    return item.name.includes(searchKey.value)
  })
})

const del = (index: number) => {
  data.splice(index, 1)
}
</script>
<style scoped>

</style>