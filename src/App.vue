<template>
  <Suspense>
    <template #default>
      <SyncVue></SyncVue>
    </template>
    <template #fallback>
      <skeletonVue></skeletonVue>
    </template>
  </Suspense>
</template>

<script setup lang='ts'>
import { ref, reactive, defineAsyncComponent} from 'vue'
const SyncVue = defineAsyncComponent(() => import('@/components/sync.vue'))
// const SyncVue = defineAsyncComponent({
// 	loadingComponent: () => import('@/components/sync.vue')
// 	errorComponent: 加载失败时的组件,
//     timeout: 超时时间
// })
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