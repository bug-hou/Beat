<!--  -->
<template>
  <div>nihoa</div>
</template>

<script>
export default {
  data () {
    return {
      client:{}
    };
  },
  created() {
    if(!this.$store.state.nowClient.id){
       this.$router.push("/dengLu")
    }else{
      this.client = this.$store.state.nowClient;
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