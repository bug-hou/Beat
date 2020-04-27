<!--  -->
<template>
  <div class="img">
    <div>
      <img src="../../../assets/images/nav/1.jpg" alt="">
    </div>
    <div>
      <img src="../../../assets/images/nav/2.jpg" alt="">
    </div>
    <div>
      <img src="../../../assets/images/nav/3.jpg" alt="">
    </div>
    <div>
      <img src="../../../assets/images/nav/4.jpg" alt="">
    </div>
    <div>
      <img src="../../../assets/images/nav/5.jpg" alt="">
    </div>
    <div>
      <img src="../../../assets/images/nav/6.jpg" alt="">
    </div>
    <div>
      <img src="../../../assets/images/nav/7.jpg" alt="">
    </div>
    <div>
      <img src="../../../assets/images/nav/8.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props:{
  },
  components: {},

  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style>
.img{
    width: 100%;
     display: flex;
     flex-wrap: wrap;
}
.img>div{
      width: 25%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}
img{
    width: 80%;
    height: 80%;
    border-radius: 50%;
    overflow: hidden;
}
</style>