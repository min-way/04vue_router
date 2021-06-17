<template>
 
  <swiper :pagination="true" class="mySwiper mb-5">
    <swiper-slide><img src="image/banner01.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="image/banner02.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="image/banner03.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="image/banner04.jpg" alt=""></swiper-slide>
  </swiper>
  
  <div class="best">
    <div class="container">
      <h2>BEST</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      <div class="row mb-5">
        <div class="col-sm-6 col-md-3" v-for="(item,i) in 4" :key="i">
          <img :src="pdata[i].image" alt="" class="w-100">
          <p class="mb-0">{{pdata[i].title}}</p>
          <p class="mb-0">{{pdata[i].price.toLocaleString()}}원</p>
          <p class="text-black-50">{{pdata[i].content}}</p>
        </div>
      </div>
      <div class="btn btn-primary d-block mx-auto mb-5" style="width:100px">
          <router-link to="/product">more</router-link>
      </div>
    </div>
  </div>

</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, {
  Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);

export default {
  props:['pdata'],
  components: {
    Swiper,
    SwiperSlide,
  },
}
</script>

<style>
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.best h2 {text-align: center;}
.best h2:after {content: ''; width: 30px; height: 1px; display: block; background: #333; margin: 10px auto;}
.best p {text-align: center;}

</style>