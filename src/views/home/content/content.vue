<!--  -->
<template>
  <div id="content">
      <first></first>
      <shop :shoplist="shop"></shop>
  </div>
</template>

<script>
import first from './head'
import shop from '../../../components/content/shoplist/shop'

export default {
  data () {
    return {
    };
  },
  props:{
    shop:{
      default(){
        return []
      }
    }
  },
  components: {
      first,
      shop
  },

  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style scoped>
#content{
    margin-top: 20px;
    width: 100%;
    height: calc(100% - 44px -200px -10px -49px);
    background: white;
    overflow: hidden;
}
</style>