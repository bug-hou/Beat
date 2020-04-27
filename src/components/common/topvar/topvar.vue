<!--  -->
<template>
  <div id="top" :style="[bj,wz]">
      <div class="left"><slot name="left"></slot></div>
      <div class="main"><slot name="main"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props:{
      bColor:{
          type:String,
          default:"red"
      },
      color:{
          type:String,
          default:"black"
      }
  },
  components: {},

  computed: {
      bj(){
          return {"background":this.bColor};
      },
      wz(){
          return {"color":this.color};
      }
  },

  mounted(){
  },

  methods: {}
}

</script>
<style scoped>
#top{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    font-size: 20px;
    display: flex;
}
.left,.right{
    width: 60px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.main{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>