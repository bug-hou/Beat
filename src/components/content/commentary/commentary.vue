<!--  -->
<template>
  <div>
      <item v-for="(item,index) in ratings" :key="index" :item="item">
      </item>
  </div>
</template>

<script>
import item from './item'
export default {
  data () {
    return {
    };
  },

  components: {
      item
  },
  props:{
      ratings:{
          type:Array,
          default(){
              return []
          }
      }
  },
  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style scoped>
</style>