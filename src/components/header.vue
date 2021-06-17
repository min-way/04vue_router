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
        <a class="navbar-brand" href="./">Suit Shop</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active" v-for="(item,i) in menu" :key="i">
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
        {title:'HOME',link:'/'},
        {title:'PRODUCT',link:'/product'},
        {title:'BOARD',link:'/board'},
      ]
    }
  }

}
</script>

<style>

</style>