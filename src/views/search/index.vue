<!--  -->
<template>
  <div>
    <input type="text" v-model="data">
  </div>
</template>

<script>
import {jsonp,get} from '../../network/search/search'
export default {
  data () {
    return {
      data:"侯"
    };
  },
  
  components: {},

  computed: {},

  mounted(){
     jsonp(this.data).then(res=>{
       console.log(res)
     })
    //  get(this.data).then(res=>{
    //    console.log(res)
    //  })
    //  console.log(jsonp)
  },

  methods: {}
}

</script>
<style scoped>
</style>