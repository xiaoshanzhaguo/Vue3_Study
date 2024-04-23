<template>

<Loading></Loading>

</template>
<script setup lang='ts'>
import { ref, reactive, getCurrentInstance } from 'vue'
import Loading from './components/Loading/index.vue'


const instance = getCurrentInstance()

instance?.proxy?.$loading.show()

setTimeout(() => {
    instance?.proxy?.$loading.hide()
}, 5000)
</script>
<style scoped>

</style>