<template>
  <div v-if="bView==true">
      <div class="bg" @click="$emit('bClose')"></div>
      <div class="bPop text-center">
        <h4 class="mb-4">NEWS AND NOTICE</h4>
        <p class="mb-4">{{bdata[bNum].content}}</p>
        <button class="btn btn-secondary" @click="$emit('bClose')">닫기</button>
      </div>
  </div>
</template>

<script>
export default {
    name:'boardPop',
    props:['bdata','bNum','bView'],
}
</script>

<style>

</style>