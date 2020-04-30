<!--  -->
<template>
  <div id="swiper" :style="{backgroundImage: `url(${imgs})`}">
    <div class="box">
    <div class="shop">
      <img :src="info.avatar" alt="">
      <div class="name">{{info.name}}</div>
      <div class="iconfont icon-guanzhu" @click="huan" :class="{color:isShow}"></div>
    </div>
    <div class="info">
      <div :class="{active:0===index}" @click="change(0)">点餐</div>
      <div :class="{active:1===index}" @click="change(1)">评论{{info.foodScore}}</div>
      <div :class="{active:2===index}" @click="change(2)">商家</div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      index:0,
      isShow:false
    };
  },
  props:{
    imgs:{
      type:String,
      default:""
    },
    info:{}
  },
  components: {
  },

  computed: {},

  mounted(){
  },

  methods: {
    change(index){
      this.index = index;
      this.$bus.$emit("change",index);
    },
    huan(){
      this.isShow = !this.isShow
    }
  }
}

</script>
<style scoped>
@import url(//at.alicdn.com/t/font_1779557_vomrs77i7z8.css);
#swiper{
  width: 100%;
  height: 180px;
  background: black;
  background-size: 100% 100%;
}
.box{
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .3);
  display: flex;
  flex-direction: column;
}
.box>*{
  flex: 1;
}
.shop{
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
}
.box>.shop>img{
  width: 17%;
  height: 70%;
  border-radius: 50%;
  margin-left: 10px;
}
.box>.shop>.name{
  color: white;
  font-size: 20px;
}
.iconfont{
  position: absolute;
  right: 20px;
  width: 10%;
  height: 100%;
  font-size: 20px;
  color: white;
  top: 0;
  line-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.info{
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: white;
  font-size: 15px;
}
.info>div{
  margin: 0 10px 20px;
}
.info>.active{
  border-bottom: 2px solid white;
  margin-bottom: 18px;
}
.color{
  color: red;
}
</style>