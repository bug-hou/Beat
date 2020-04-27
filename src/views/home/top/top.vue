<!--  -->
<template>
  <top class="top" b-color="green" color="white">
      <div slot="left" class="iconfont icon-xingtaiduICON_sousuo--"></div>
      <div class="main" slot="main">BUG外卖-vue项目</div>
      <i slot="right" @click="log">login</i>
  </top>
</template>

<script>
import top from '../../../components/common/topvar/topvar'
export default {
  data () {
    return {
    };
  },

  components: {
      top
  },

  computed: {},

  mounted(){},

  methods: {
    log(){
      this.$router.push("/dengLu");
    }
  }
}

</script>
<style scoped>
.main{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.top{
    box-shadow: 0px 4px 2px rgba(100, 100, 100, .4);
}
</style>