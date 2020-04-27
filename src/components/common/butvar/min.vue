<!--  -->
<template>
  <div id="box" @click="push" :style="color">
      <div  class="icon"><slot name="icon"></slot></div>
      <div  class="font"><slot name="font"></slot></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  
  props:{
   path:{
       type:String
   },
   fontColor:{
       type:String,
       default:"green"
   }
  },
   
  components: {
  },

  computed: {
    isact(){
          return this.$route.path.indexOf(this.path)!==-1
      },
    color(){
          return this.isact?{color:this.fontColor}:{};
      }
    },

  mounted(){},

  methods: {
      push(){
          this.$router.push(this.path);
      }
  }
}

</script>
<style scoped>
 #box{
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     font-size: 12px;
 }
</style>