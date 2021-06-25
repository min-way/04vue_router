<template>
  
  <top-header />
  <router-view :bdata="bdata" :pdata="pdata" @pOpen="pView=true;pNum=$event" @bOpen="bView=true;bNum=$event"></router-view> 
  <bottom-footer />
  
  <transition name="show" class="show">
    <pPop :pdata="pdata" :pView="pView" :pNum="pNum" @pClose="pView=false" />
  </transition>

  <transition name="show" class="show">
    <boardPop :bdata="bdata" :bNum="bNum" :bView="bView" @bClose="bView=false" @bOpen="bView=true" />
  </transition>

</template>

<script>
import header from './components/header.vue'
import footer from './components/footer.vue'
import pPop from './components/pPop.vue'
import boardPop from './components/boardPop.vue'
import pdata from './pdata.js'
import bdata from './bdata.js'

export default {
  name:'app',
  components:{
    'top-header':header,
    'bottom-footer':footer,
    pPop,
    boardPop,
  },
  data(){
    return{
      pdata:pdata,
      bdata:bdata,
      pView:false,
      pNum:0,
      bView:false,
      bNum:0,
    }
  }

}
</script>

<style>

* {margin: 0;padding: 0;}
a:link, a:visited {text-decoration: none; color: #333;}
li{list-style: none;}
.pPop {position: fixed; z-index:10; background: #fff; width: 80%; top:50%; left: 50%; transform: translate(-50%,-50%); box-shadow: 0 0 10px rgba(0,0,0,0.5); border-radius: 10px; padding: 20px;}
.show {position: relative; z-index: 100;}
.bPop {position: fixed; z-index:10; background: #fff; width: 80%; top:50%; left: 50%; transform: translate(-50%,-50%); box-shadow: 0 0 10px rgba(0,0,0,0.5); border-radius: 10px; padding: 50px;}
.bg {position: fixed; z-index:5; background: rgba(0,0,0,0.5); width: 100%; height: 100%; left: 0; top: 0;}

.show-enter-from, .show-leave-to  {opacity: 0;}
.show-enter-active, .show-leave-active {transition: 0.3s}
.show-enter-to, .show-leave-from {opacity: 1;}

@media screen and (min-width:900px){
  .pPop {width: 600px;}
}
</style>