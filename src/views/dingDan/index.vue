<!--  -->
<template>
  <div class="ding">
    <topvar bColor="green" color="white">
      <div slot="main">订单</div>
    </topvar>
    <button @click="deng" v-if="isShow">立即登录</button>
    <scroll v-else class="scroll"></scroll>
    </div>
</template>

<script>
import topvar from '../../components/common/topvar/topvar'
import scroll from '../../scroll/scroll'
export default {
  data () {
    return {
     isShow:true
    };
  },

  components: {
    topvar,
    scroll
  },
  created() {
    if(this.$store.state.nowClient.id){
       this.isShow = false
    }
  },
  computed: {},

  mounted(){},

  methods: {
    deng(){
      this.$router.push("/dengLu")
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
</style>