<!--  -->
<template>
  <div id="list">
      <div class="img"><img :src="list.img" alt=""></div>
      <div class="box"> 
          <div class="title">{{list.name}}</div>
          <div class="sell">
              <div class="star iconfont icon-xingzhuang60kaobei2">{{list.foodScore}}</div>
              <div>月售{{list.sellCount}}</div>
          </div>
          <div class="content">
              <div>起送￥{{list.minprice}}</div>
              <div>免配送费</div>
              <div>{{list.time}}分钟</div>
              <div>{{list.distance}}</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props:{
      list:{
          type:Object,
          default(){
              return {}
          }
      }
  },
  components: {},

  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style scoped>
@import url(//at.alicdn.com/t/font_1779557_rn5wig93dm.css);
#list{
    width: 100%;
    height: 80px;
    color: black;
    display: flex;
}
.img{
    height: 100%;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.img>img{
    width: 113%;
    height: 116%;
    overflow: hidden;
}
.box{
    flex: 1;
    display: flex;
    flex-direction: column;
}
.title{
    width: 100%;
    height: 30px;
    line-height: 40px;
    font-size: 20px;
    margin-top: 10px;
}
.sell,.content{
    width: 100%;
    height: 20px;
    font-size: 12px;
}
.sell>*{
    height: 20px;
    line-height: 20px;
    float: left;
    font-size: 12px;
}
.star{
    color: red;
    margin-right: 5px;
}
.content>div:nth-child(1),.content>div:nth-child(2){
    float: left;
    height: 20px;
    margin-right: 5px;
    line-height: 20px;
}
.content>div:nth-child(3),.content>div:nth-child(4){
    float: right;
    height: 20px;
    line-height: 20px;
    margin-right: 10px;
}
</style>