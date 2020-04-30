<!--  -->
<template>
  <div id="box">
      <div class="title">
          <div class="image"><img :src="item.avatar" alt=""></div>
          <div class="name">
              <div>{{item.username}}</div>
              <div>{{date}}</div>
          </div>
      </div>
      <div class="content">{{content}}</div>
      <div class="goodsname" v-show="item.recommend">
          <div v-for="(it,ind) in item.recommend" :key="ind">{{it}}</div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        date:null,
    };
  },
  props:{
      item:{
          type:Object,
          default(){
              return {}
          }
      }
  },
  created() {
      this.date = new Date(this.item.rateTime).toLocaleString();
  },
  components: {},

  computed: {
      content(){
          return this.item.text?this.item.text:"该用户没有书写任何内容"
      }
  },

  mounted(){},

  methods: {}
}

</script>
<style scoped>
#box{
    width: 90%;
    margin: 5px auto;
    height: 60px;
}
.image{
    width: 10%;
    height: 30px;
}
.image>img{
    width: 100%;
    height: 30px;
    border-radius: 0;
}
.title{
    display: flex;
    width: 100%;
    height: 17px;
    font-size: 16px;
    color: black;
}
.name{
    display: flex;
    justify-content: space-between;
    flex: 1;
}
.content{
    margin-left: 50px;
    font-size: 14px;
    color: black;
    height: 30px;
}
.goodsname{
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: brown;
}
</style>