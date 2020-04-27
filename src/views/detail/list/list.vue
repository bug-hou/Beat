<!--  -->
<template>
  <div id="list">
   <item v-for="(item,index) in list" :key="index" :item="item"></item>
  </div>
</template>

<script>
import item from "./item"
export default {
  data () {
    return {
    };
  },
    props:{
        list:{
            default(){
                return []
            }
        }
    },
  components: {
      item
  },

  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style scoped>
#list{
    display: inline-block;
    width: 100px;
}
</style>