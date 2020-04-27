<!--  -->
<template>
    <div class="name">{{item.name}}</div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props:{
      item:{
          default(){
              return {}
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
.name{
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  position: relative;
}
.active{
    color: red;
}
.active::before{
    content: "";
    position: absolute;
    border-left: 1px solid red;
    height: 20px;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
}
</style>