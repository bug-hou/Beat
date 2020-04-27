<template>
  <div id="app">
    <keep-alive>
  <router-view></router-view>
    </keep-alive>

    <butvar></butvar>
  </div>
</template>
<script>
import butvar from '../src/components/content/butvar/main'
export default {
  components:{
    butvar
  }
}
</script>
<style>
@import url(./assets/css/base.css);
#app{
  height: 100vh;
}
</style>
