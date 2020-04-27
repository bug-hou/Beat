<!--  -->
<template>
  <div id="detail">
      <topvar bColor="green" color="white">
      <div slot="left" class="iconfont icon-fanhui" @click="back"></div>
      <div slot="main">{{name}}</div>
      </topvar>
      <swiper :imgs="imgs" :info="info"></swiper>
      <discount :discounts="discount"></discount>
      <scroll class="list">

      </scroll>
      <scroll class="goods">
        
      </scroll>
  </div>
</template>
<script>
import topvar from '../../components/common/topvar/topvar'

import swiper from './swiper/swiper'
import discount from './discount/discount'

import scroll from "../../scroll/scroll"
export default {
  data () {
    return {
        name:"",
        shop:{},
        imgs:[],
        info:{},
        discount,
        goods:[]
    };
  },
  props:{
    data:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  created() {
      this.name = this.$route.params.name;
      this.$store.state.data.forEach(item => {
        if(item.info.name === this.name){
            this.shop = item;
        }
      });
       this.imgs = this.shop.info.bgImg;
       this.info = this.shop.info;
       this.discount = this.info.supports;
       this.goods = this.shop.goods
  },
  components: {
    topvar,
    swiper,
    scroll,
    discount
  },
  computed: {},

  mounted(){},

  methods: {
    back(){
      this.$router.back();
    }
  }
}

</script>
<style scoped>
@import url(//at.alicdn.com/t/font_1779557_few4uvh5g2w.css);
#detail{
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: white;
}
</style>