<!--  -->
<template>
  <div class="ding">
    <topvar bColor="green" color="white">
      <div slot="main">订单</div>
    </topvar>
    <button @click="deng" v-if="isShow">立即登录</button>
    <scroll v-else class="scroll">
        <goods @jian="jian(item)" @jia="jia(item)" v-for="(item,index) in $store.state.nowClient.goods" :key="index" :item="item.item" :count="item.count"></goods>
    </scroll>
    <cart title="结算" id="cart" :money="money"></cart>
    </div>
</template>

<script>
import topvar from '../../components/common/topvar/topvar'
import scroll from '../../scroll/scroll'
import cart from '../../components/content/cart/cart'

import goods from './goods/item'
export default {
  name:"ding",
  data () {
    return {
     isShow:true,
     money:0,
     client:[]
    };
  },

  components: {
    topvar,
    scroll,
    cart,
    goods
  },
  created() {
    if(this.$store.state.nowClient.id){
       this.isShow = false
    }
    if(!(this.client == this.$store.state.nowClient.goods)){      
      this.$store.state.nowClient.goods.forEach((item,index) => {
        this.money += item.item.price * item.count;
      });
      this.client = this.$store.state.nowClient.goods;
    }
  },
  computed: {},

  mounted(){},

  methods: {
    deng(){
      this.$router.push("/dengLu")
    },
    jian(item){
      item.count--;
      this.$store.commit("popgoods",{
        item,
        count:item.count,
        name:item.name
      });
      this.money -= item.item.price;
    },
    jia(item){
      item.count++;
      this.$store.commit("addgoods",{
        item,
        count:item.count,
        name:item.name
      });
      this.money += item.item.price
    }
  }
}

</script>
<style scoped>
.ding{
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: url(~@/assets/images/order/person.png);
  background-size: 100% 100%;
}
button{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background: rgb(31, 31, 88);
  color: white;
  outline: none;
  border: 1px solid #008c8c;
  font-size: 20px;
  border-radius: 10px;
  line-height: 1.5;
  padding: 0 5px;
}
.scroll{
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
}
#cart{
  bottom: 49px;
}
</style>