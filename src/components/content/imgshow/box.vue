<!--  -->
<template>
  <div id="imgbox">
      <img-item></img-item>
  </div>
</template>

<script>
import imgItem from './item'

export default {
  data () {
    return {
    };
  },
  
  props:{
  },
  components: {
    imgItem
  },

  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style>
 #imgbox{
     /* padding-top:44px ; */
     width: 100%;
     display: flex;
     flex-wrap: wrap;
     box-shadow: 0 5px 3px rgba(100, 100, 100, .5);
 }
</style>