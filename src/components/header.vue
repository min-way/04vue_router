<template>
  <div>
      <!-- <nav>
        <ul class="gnb clearfix">
            <li v-for="(item,i) in menu" :key="i">
                  <router-link :to="menu[i].link">{{menu[i].title}}</router-link>
            </li>
        </ul>
      </nav> -->
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="./">꿈이야기</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav gnb ml-auto">
            <li class="nav-item active" v-for="(item,i) in menu" :key="i" @click="close">
              <router-link :to="menu[i].link" class="nav-link px-5">{{menu[i].title}}</router-link>
            </li>
          </ul>
        </div>
      </nav>
  </div>
</template>

<script>
export default {
  name:'header',
  data(){
    return{
      menu:[
        {title:'처음으로',link:'/'},
        {title:'카카오채널 추가',link:'/product'},
        {title:'BOARD',link:'/board'},
      ]
    }
  },
  methods:{
    // close:()=>{
    close:function(){
      document.getElementById("navbarNav").classList.remove("show");
    }
  }

}
</script>

<style>

</style>