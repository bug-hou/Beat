<!--  -->
<template>
  <div id="cart">
      <div class="iconfont icon-waimai" :class="{active:true}"></div>
      <div class="money">￥{{money}}</div>
      <div class="button">{{title}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props:{
    title:{
      default:"提交"
    },
    money:{
      default:0
    }
  },
  components: {},

  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style scoped>
@import url(//at.alicdn.com/t/font_1779557_udfexa7rkyf.css);
#cart{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 49px;
    background: #555;
    display: flex;
    justify-content: space-between;
    z-index: 15;
    color: #999;
}
.iconfont{
    margin-left: 30px;
    display: flex;
    font-size: 60px;
    align-items: flex-end;
    margin-bottom: 1px;
    transform: rotate(-30deg);
}
.money{
  margin-left: 10px;
    width: 100px;
    /* margin-top: 10%; */
    margin-top: 5px;
    background: #333;
    box-shadow: 0 -2px 2px rgba(50, 50, 50, .8),0 2px 2px rgba(200, 200, 200, .8);
    height: 80%;
    color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
}
#cart>.active{
    color: blue;
}
.button{
  width: 80px;
  margin-top: 10px;
  height: 30px;
  line-height: 30px;
  font-size: 20px;
  text-align: center;
  border-radius: 3px;
  background: #a6acec;
  margin-right: 10px;
}
</style>