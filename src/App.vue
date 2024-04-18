<template>

<div>
  <img id="img" width="300" height="300" src="./assets/images/1.jpg">
</div>

</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import useBase64 from './hooks'

useBase64({el: '#img'}).then(res => {
  console.log(res.baseUrl)
})
</script>
<style scoped>

</style>