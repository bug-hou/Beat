<!--  -->
<template>
  <div id="list">
   <item v-for="(item,index) in list" :key="index" :item="item" :index="index" :current="current"></item>
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
        },
        current:0
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
    width: 100px;
    display: flex;
    flex-direction: column;
}
</style>