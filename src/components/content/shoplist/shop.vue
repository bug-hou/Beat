<!--  -->
<template>
  <div>
    <list :list="item" v-for="(item,index) in shoplist" :key="index" @click.native="detail(item)"/>
  </div>
</template>

<script>
import list from './list'
export default {
  data () {
    return {
    };
  },
  props:{
      shoplist:{
        type:Array,
        default(){
          return []
        }
      }
  },
  components: {
    list
  },

  computed: {},

  mounted(){},

  methods: {
    detail(item){
      this.$router.push("/detail/"+item.name)
    }
  }
}

</script>
<style scoped>
</style>