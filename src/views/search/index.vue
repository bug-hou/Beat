<!--  -->
<template>
  <div>
    <input type="text" v-model="data">
  </div>
</template>

<script>
import {jsonp} from '../../network/search/search'
export default {
  data () {
    return {
      data:"侯"
    };
  },
  
  components: {},

  computed: {},

  mounted(){
     jsonp(this.data,res=>{
       console.log("1111")
           console.log(res)
     })
    //  console.log(jsonp)
  },

  methods: {}
}

</script>
<style scoped>
</style>