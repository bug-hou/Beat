<!--  -->
<template>
  <div>
    <ping :ratings="ratings"></ping>
  </div>
</template>

<script>
import ping from '../../../components/content/commentary/commentary'
export default {
  data () {
    return {
    };
  },
  props:{
      ratings:{
          type:Array,
          default(){
              return []
          }
      }
  },
  components: {
      ping
  },

  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style scoped>
</style>