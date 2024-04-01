<template>
  <div style="display: flex;">
    <div @click="switchCom(item, index)" class="tabs" :class="[active == index ? 'active': '']" v-for="(item, index) in data">
      <div>{{ item.name }}</div>
    </div>
  </div>
  <component :is="comId"></component>
</template>

<script lang="ts">
import AVue from './components/example/A.vue'
import BVue from './components/example/B.vue'
import CVue from './components/example/C.vue'

export default {
  components: {
    AVue,
    BVue,
    CVue
  }
}
</script>

<script setup lang='ts'>
import { ref, reactive, markRaw, shallowRef } from 'vue'
// import AVue from './components/example/A.vue'
// import BVue from './components/example/B.vue'
// import CVue from './components/example/C.vue'

const comId = shallowRef('AVue')

const active = ref(0)

// 这里不用定义类型，因为它会推导出来
const data = reactive([
  {
    name: 'A组件',
    com: 'AVue'
  },
  {
    name: 'B组件',
    com: 'BVue'
  },
  {
    name: 'C组件',
    com: 'CVue'
  }
])

const switchCom = (item: any, index: any) => {
  // 切换组件，切换id
  comId.value = item.com
  console.log(comId.value)
  active.value = index
}

</script>

<style scoped lang='less'>
.tabs {
  border: 1px solid #ccc;
  padding: 5px 10px;
  margin: 5px;
}
.active {
  background-color: skyblue;
  cursor: pointer;
}
</style>