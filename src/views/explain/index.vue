<!--  -->
<template>
  <div id="explain">
      <topbat bColor="transparent" color="blue">
        <div slot="left" class="iconfont icon-fanhui" @click="back"></div>
        <div id="shop" slot="main">商品详情</div>
      </topbat>
      <div class="image"><img :src="information.image" alt=""></div>
      <div class="title">
          <div class="name">{{information.name}}</div>
          <div class="count">月售:{{information.sellCount}}</div>
          <div class="price">￥{{information.price}}</div>
      </div>
      <div class="ping">评论</div>
      <scroll class="scroll">
      <commentary :ratings="information.ratings"></commentary>
      </scroll>
  </div>
</template>

<script>
import topbat from '../../components/common/topvar/topvar'
import commentary from '../../components/content/commentary/commentary'
import scroll from '../../scroll/scroll'
export default {
    name:"explain",
  data () {
    return {
        information:{}
    };
  },
  created() {
      this.information = this.$route.query.item
  },
  components: {
      topbat,
      commentary,
      scroll
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
@import url(//at.alicdn.com/t/font_1779557_uyfa3bh1re.css);
#explain{
    width: 100%;
    height: 100vh;
}
#shop{
    color: black;
}
.image{
    width: 100%;
}
.image>img{
    border-radius: 0;
    width: 100%;
}
.scroll{
    width: 100%;
    /* height: calc(100% - 414px - 49px); */
    height:180px ;
    overflow: hidden;
}
.title{
    width: 100%;
    padding: 0 10px;
    background: white;
    box-shadow: 0 4px 2px rgba(100, 100, 100, .5);
}
.name{
    font-size: 20px;
    color: black;
    margin: 10px 0;
}
.count{
    margin: 5px 0;
    font-size: 12px;
}
.price{
    color: red;
    font-size: 20px;
    font-weight: bold;
    margin: 5px 0;
}
.ping{
    margin-top: 10px;
    width: 100%;
    height: 30px;
    font-size: 20px;
    padding: 0 5%;
    color: black;
}
</style>