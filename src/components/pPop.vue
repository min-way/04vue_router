<template>
  <div v-if="pView==true">
    <div class="pPop text-center">
      <img :src="pdata[pNum].image" alt="" class="w-100 mb-2">
      <p class="mb-2">{{pdata[pNum].title}}</p>
      <p class="text-black-50">{{pdata[pNum].content}}</p>
      <button class="btn btn-secondary" @click="$emit('pClose')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
    name:'pPop',
    props:['pdata','pNum','pView'],
}
</script>

<style>
    
</style>