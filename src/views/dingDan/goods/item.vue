<!--  -->
<template>
  <div class="box" @click="dian">
      <div class="img"><img :src="item.image" alt=""></div>
      <div class="content">
          <div class="title">
              <div>{{item.name}}</div>
              <div>主要成分:{{item.info}}</div>
          </div>
          <div class="price">
              <div>￥{{item.price}}</div>
              <div class="icon">
                  <div class="iconfont icon-jian" ref="jian"></div>
                  <div>{{count}}</div>
                  <div class="iconfont icon-jia"  ref="jia"></div>
              </div>
          </div>
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
        item:{default(){
            return {}
        }},
        count : 0,
    },
  components: {},

  computed: {},

  mounted(){},

  methods: {
      dian(e){
            if(e.target===this.$refs.jian){
                if(this.count>0){
                    this.$emit("jian")
                    // this.$store.commit("popgoods",{
                    //     item:this.item,
                    //     count:this.count--,
                    //     name : this.item.name
                    // });
                }
            }else if(e.target===this.$refs.jia){
                    this.$emit("jia")
                    // this.$store.commit("addgoods",{
                    //     item:this.item,
                    //     count:this.count++,
                    //     name:this.item.name
                    // });
            }else{
                this.$router.push({
                    path:"/explain",
                    query:{
                        item:this.item
                    }
            })
            }
        // }
      }
  }
}

</script>
<style scoped>
@import url(//at.alicdn.com/t/font_1779557_2d09zwz1dpe.css);
.box{
    width: 90%;
    height: 80px;
    margin: 0 auto;
    display: flex;
    background: white;
}
.img{
    width: 80px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.box>.img>img{
  /* height: 80px; */
  width: 80px;
  border-radius: 0;
}
.content{
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.title{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    color: black;
}
.title>div:nth-child(1){
    font-size: 16px;
    color: red;
}
.title>div:nth-child(2){
    font-size: 12px;
}
.price{
    color: red;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
}
.price>.icon{
    color: blueviolet;
    font-size: 15px;
    margin-right: 20px;
    display: flex;
}
</style>