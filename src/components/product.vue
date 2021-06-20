<template>
  <div class="product">
    <div class="container">
      <h2>PRODUCT</h2>
      <p>남자의 자신감을 높여주는 SUIT SHOP만의 옷</p>
      <div class="row mb-5">
          <div class="cursor col-sm-6 col-md-3" v-for="(item,i) in pdata" :key="i"  @click="$emit('pOpen',pdata[i].id)">
            <img :src="pdata[i].image" alt="" class="w-100">
            <p class="mb-0">{{pdata[i].title}}</p>
            <p class="mb-0">{{pdata[i].price.toLocaleString()}}원</p>
            <p class="text-black-50">{{pdata[i].content}}</p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'product',
  props:['pdata'],
}
</script>

<style>
  .product h2 {text-align: center;}
  .product h2:after {content: ''; width: 30px; height: 1px; display: block; background: #333; margin: 10px auto;}
  .product p {text-align: center;}
</style>