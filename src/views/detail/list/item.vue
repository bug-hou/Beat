<!--  -->
<template>
    <div class="name" :class="{active:index==current}" @click="tiao">{{item.name}}</div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props:{
      item:{
          default(){
              return {}
          }
      },
      current:{
        default:0
      },
      index:0
  },
  components: {},

  computed: {},

  mounted(){},

  methods: {
    tiao(){
      this.$bus.$emit("tiao",this.index)
    }
  }
}

</script>
<style scoped>
.name{
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: black;
  position: relative;
  box-sizing: border-box;
  border-bottom: 1px solid #999;
}
.active{
    color: red;
}
.active::before{
    content: "";
    position: absolute;
    border-left: 1px solid red;
    height: 20px;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
}
</style>