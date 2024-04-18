<template>

<div>{{ $env }}</div>
<div>{{ $filters.format('的飞机') }}</div>

</template>
<script setup lang='ts'>
import { ref, reactive, getCurrentInstance } from 'vue'
const app = getCurrentInstance()
console.log(app?.proxy?.$filters.format('ts'))
console.log(app?.proxy?.$env )
</script>
<style scoped>

</style>