<!--  -->
<template>
  <div id="deng">
     <topvar color="white" bColor="pink">
         <div slot="left" @click="back">{{fan}}</div>
         <div slot="main">登录/注册</div>
     </topvar>
     <d-main class="log"></d-main>
  </div>
</template>

<script>
import topvar from '../../components/common/topvar/topvar'

import dMain from './main'
export default {
  data () {
    return {
        fan:"<"
    };
  },

  components: {
      topvar,
      dMain
  },

  computed: {},

  mounted(){},

  methods: {
      back(){
          this.$router.back();
      }
  }
}

</script>
<style scoped>
#deng{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #071e3d;
    z-index: 100;
}
</style>