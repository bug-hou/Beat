<!--  -->
<template>
  <div ref="good" id="goods">
    <item v-for="(item,index) in goods" :key="index" :item="item.item" :count="item.count"></item>
  </div>
</template>

<script>
import item from './item'
export default {
  data () {
    return {
    };
  },
  props:{
    goods:{
      default:{}
    }
  },
  components: {
    item
  },

  computed: {},
  mounted() {
  },
  methods: {
  }
}

</script>
<style scoped>
</style>