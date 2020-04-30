<!--  -->
<template>
  <div id="detail">
      <topvar bColor="green" color="white" style="position: relative">
      <div slot="left" class="iconfont icon-fanhui" @click="back"></div>
      <div slot="main">{{name}}</div>
      </topvar>
      <swiper :imgs="imgs" :info="info"></swiper>
      <discount :discounts="discount"></discount>
        <div v-if="0===index">
      <div class="scroll">
        <scroll class="list">
          <list :list="goods" :current="current"></list>
        </scroll>
      <scroll class="goods" ref="scroll" @Bscrolly="posi">
        <goods :goods="item.foods" v-for="(item,index) in goods" :key="index" ref="goods"></goods>
      </scroll>
      </div>
      </div>
      <div v-else-if="1===index">
        <div class="scroll">
          <scroll class="ping">
         <ping :ratings="shop.ratings"/>
          </scroll>
        </div>
      </div>
      <cart :money="money"></cart>
  </div>
</template>
<script>
import topvar from '../../components/common/topvar/topvar'
import cart from '../../components/content/cart/cart'

import swiper from './swiper/swiper'
import discount from './discount/discount'
import list from "./list/list"
import goods from "./goods/goods"
import ping from './pingLu/ping'

import scroll from "../../scroll/scroll"
export default {
  name:"detail",
  data () {
    return {
        name:"",
        shop:{},
        imgs:[],
        info:{},
        discount,
        goods:[],
        current:0,
        position:[],
        index:0,
        money:0,
        good:{}
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
          console.log(item)
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
    discount,
    list,
    goods,
    ping,
    cart
  },
  computed: {},

  mounted(){
      this.$bus.$on("tiao",index=>{
        this.current = index;
      this.$refs.scroll.scroll.scrollTo(0,-this.position[index]+20,200)
      })
      this.$refs.goods.forEach(item=>{
        this.position.push(item.$el.offsetTop);
      });
      this.$bus.$on("change",index=>{
        this.index = index;
      });
      this.$bus.$on("jia",price=>{
        this.money += price;
      });
      this.$bus.$on("jian",price=>{
        this.money -= price;
      })
  },

  methods: {
    back(){
      this.$router.back();
    },
    posi(Y){
      this.position.forEach((item,index)=>{
        if(Y<=-item+20){
          this.current = index
        }
      })
    }
  }
}

</script>
<style scoped>
@import url(//at.alicdn.com/t/font_1779557_few4uvh5g2w.css);
/* #topvar{
  position: relative;
} */
#detail{
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: white;
}
.scroll{
  display: flex;
  width: 100%;
  height: calc(100vh - 44px - 200px - 70px);
}
.list{
  width: 100px;
  top: 0;
  overflow: hidden;
}
.goods{
  flex: 1;
  overflow: hidden;
}
.ping{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>