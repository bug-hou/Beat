<!--  -->
<template>
  <div>
      <butvar>
          <min path="/home">
              <div slot="icon" class="icon-HUNhunhuiyuanxitongwaimaitubiao iconfont"></div>
              <div slot="font" >首页</div>
          </min>
        <min path="/search">
              <div slot="icon" class="iconfont icon-xingtaiduICON_sousuo--"></div>
              <div slot="font">搜索</div>
          </min>
        <min path="/dingDan">
              <div slot="icon" class="iconfont icon-icon-"></div>
              <div slot="font">订单</div>
          </min>
        <min path="/profile">
              <div slot="icon" class="iconfont icon-wode"></div>
              <div slot="font">我的</div>
          </min>
      </butvar>
  </div>
</template>

<script>
import butvar from '../../common/butvar/butvar';
import min from '../../common/butvar/min';
export default {
  data () {
    return {
    };
  },

  components: {
      butvar,
      min
  },

  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style scoped>
@import url(//at.alicdn.com/t/font_1779557_a27qfod45ik.css);
</style>