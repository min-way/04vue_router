<template>
  <top-header></top-header>
  <router-view :pdata="pdata"></router-view> 
  <bottom-footer></bottom-footer>
  
</template>

<script>
import header from './components/header.vue'
import footer from './components/footer.vue'
import pdata from './pdata.js'

export default {
  name:'app',
  components:{
    'top-header':header,
    'bottom-footer':footer,
  },
  data(){
    return{
      pdata:pdata,

    }
  }

}
</script>

<style>

</style>