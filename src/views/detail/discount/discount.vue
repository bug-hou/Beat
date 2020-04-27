<!--  -->
<template>
  <div id="discount">
      <div class="ellipsis">
          <div>{{discounts[0].name}}</div>
          <div>{{discounts[0].content}}</div>
          <div class="iconfont icon-quanbu quan" @click="show"></div>
      </div>
      <div class="all" v-show="isShow">
          <div v-for="(item,index) in discounts" :key="index" class="list">
              <div class="iconfont icon-5">{{item.name}}</div>
              <div>{{item.content}}</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        isShow:false,
    };
  },
  props:{
      discounts:{
          default(){
              return []
          }
      }
  },
  components: {},

  computed: {},

  mounted(){},

  methods: {
      show(){
          this.isShow = !this.isShow;
      }
  }
}

</script>
<style scoped>
@import url(//at.alicdn.com/t/font_1779557_etqgndk49m5.css);
#discount{
    width: 95%;
    margin: 5px auto;
    border-radius: 5px;
    height: 30px;
    display: flex;
    background: linear-gradient(to bottom, rgb(41, 128, 185), rgb(109, 213, 250), rgb(255, 255, 255));
    color: black;
    font-size: 14px;
}
.ellipsis{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}
.ellipsis>div:nth-child(1){
    display: flex;
    align-items: center;
    color: red;
}
.ellipsis>div:nth-child(2){
    margin-right: 70px;
    display: flex;
    align-items: center;
}
.quan{
    position: absolute;
    top: 8px;
    font-size: 12px;
    right: 10px;
}
.all{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 400px;
    z-index: 12;
    background: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
}
.list{
    width: 90%;
    height: 25px;
    margin: 10px auto;
    font-size: 16px;
    display: flex;
    justify-content: start;
}
.list>div:nth-child(1){
    display: flex;
    align-items: center;
    color: red;
}
.list>div:nth-child(2){
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-left: 5px;
    display: flex;
    align-items: center;
}
</style>