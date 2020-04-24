<!--  -->
<template>
  <div id="but">
      <div v-for="(item,index) in data" :key="index"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props:{
    data:{
        type:Array,
        default(){
            return []
        }
    }
  },
  components: {},

  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style scoped>
</style>