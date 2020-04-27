<!--  -->
<template>
  <div id="swiper">
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide"><second class="box"></second></div>
        <div class="swiper-slide"><second class="box"></second></div>
     
     
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
</div>
  </div>
</template>

<script>
import second from "../second/second"

import swiper from 'swiper'
import  "swiper/css/swiper.min.css"
export default {
  data () {
    return {
    };
  },

  components: {
      second
  },

  computed: {},

  mounted(){
    new swiper('.swiper-container',{
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    })
  },

  methods: {}
}

</script>
<style scoped>
</style>