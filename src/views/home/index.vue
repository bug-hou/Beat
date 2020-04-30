<!--  -->
<template>
  <div id="home">
    <top class="top"></top>
    <scroll class="scroll"> 
    <swiper></swiper>
    <tent :shop="shop"></tent>
    </scroll>
  </div>
</template>

<script>
import top from './top/top'
import swiper from './swiper/swiper'
import tent from "./content/content"

import scroll from '../../scroll/scroll'

import {shoplist} from '../../network/home/shoplist'
import data from '../../network/data'
export default {
  data () {
    return {
      shoplist:{},
      shop:[]
    };
  },
  components: {
    top,
    swiper,
    tent,
    scroll
  },
  created() {
    this.$store.commit("dataAdd",data)
    this.shoplist = new shoplist(data);
    this.shop.push(this.shoplist);
    this.shop.push(this.shoplist);
    this.shop.push(this.shoplist);
    this.shop.push(this.shoplist);
    this.shop.push(this.shoplist);
    this.shop.push(this.shoplist);
  },
  computed: {},

  methods: {}
}

</script>
<style scoped>
#home{
  height: 100vh;
  position: relative;
}
.top{
  z-index: 10;
}
.scroll{
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>