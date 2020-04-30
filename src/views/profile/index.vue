<!--  -->
<template>
  <div>
    <topbar bColor="green" color="white">
      <div slot="main">我的</div>
      <div @click="establish" slot="right" class="iconfont icon-shezhi" style="font-size:25px"></div>
    </topbar>
    <div class="head">
      <div class="image"><img src="~@/assets/images/eat.jpg" alt=""></div>
      <div class="box">
        <div class="infomation">
          <div>{{name}}</div>
          <div>
            <div v-if="isShow" class="iconfont icon-shouji">暂未绑定手机号</div>
            <div v-else>电话:{{client.phone}}</div>
          </div>
        </div>
        <div class="iconfont icon-xiangqing icon" @click="change"></div>
      </div>
    </div>
    <div class="Pmain">
      <div class="price">
        <div>{{getprice}}<span>元</span></div>
        <div>我的余额</div>
      </div>
      <div class="discount">
        <div>0<span>个</span></div>
        <div>我的优惠</div>
      </div>
      <div class="integral">
        <div>0<span>分</span></div>
        <div>我的积分</div>
      </div>
    </div>
    <div class="foot">
       <ul class="all">
         <li class="iconfont icon-icon-1">我的订单</li>
         <li class="iconfont icon-jifen">积分商城</li>
         <li class="iconfont icon-huiyuan">BUG会员卡</li>
         <li class="iconfont icon-fuwu">服务中心</li>
       </ul>
    </div>
  </div>
</template>

<script>
import topbar from '../../components/common/topvar/topvar'
export default {
  name:"profile",
  data () {
    return {
      client:{},
      isShow:true,
      price:0,
      name:""
    };
  },
 mounted() {
    if(!this.$store.state.nowClient.id){
       this.$router.push("/dengLu")
    }else{
      this.client = this.$store.state.nowClient;
      this.price = this.client.price;
      this.name = this.client.name;
    }
    if(this.client.phone){
       this.isShow = false
    }
  },
  components: {
    topbar
  },

  computed: {
    getprice(){
      return this.price.toFixed(2);
    }
  },

  methods: {
    establish(){
      this.$router.push({path:"/establish",
      query:{
         client:this.client
      }
      })
    },
    change(){
      console.log(this.client)
      this.$router.push({
        path:"/change",
        query:{
          client:this.client
        }
      })
    }
  }
}

</script>
<style scoped>
@import url(//at.alicdn.com/t/font_1779557_w2gp3q3lszg.css);
.head{
  margin-top: 45px;
  background: green;
  color: white;
  display: flex;
  height: 100px;
}
.image{
  width: 27%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image>img{
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.box{
  flex: 1;
  padding: 15px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.icon{
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 30px;
  text-align: center;
}
.infomation{
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: start;
  align-content: center;
}
.infomation>*{
  flex: 1;
}
.infomation>div:nth-child(1){
  font-size: 20px;
  line-height: 40px;
}
.infomation>div:nth-child(2){
  font-size: 14px;
line-height: 40px;
}
.Pmain{
  width: 100%;
  height: 70px;
  display: flex;
  margin-top: 5px;
  box-shadow: 0px 15px 3px #f0f0f0;
}
.Pmain>*{
  flex: 1;
  display: flex;
  flex-direction: column;
  background: white;
  color: #575151;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  position: relative;
}
.price>div:nth-child(1){
    font-size: 25px;
    color: #e0c45c;
}
.integral>div:nth-child(1){
    font-size: 25px;
    color: #22eaaa;
}
.discount>div:nth-child(1){
    font-size: 25px;
    color: #f3558e;
}
.discount::after,.price::after{
  height: 40px;
  content: "";
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  border-left: 1px solid #dee1ec;
}
.foot{
  margin-top: 15px;
  width: 100%;
}
.foot>.all>*::after{
  content: "";
  width: 10px;
  height: 10px;
  position: absolute;
  right: 20px;
  top: 50%;
  border-right: 1px solid darkgrey;
  border-bottom: 1px solid darkgrey;
  transform: translateY(-50%) rotate(-45deg);
}
.foot>.all>*{
  margin-left: 8px;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #dee1ec;
  color: #575151;
  position: relative;
}
.foot>.all>*:nth-child(1)::before{
  color: #2cb978;
  font-size: 20px;
  margin-right: 3px;
}
.foot>.all>*:nth-child(2)::before{
  color: #f5587b;
  font-size: 20px;
  margin-right: 3px;

}
.foot>.all>*:nth-child(3)::before{
  color: #eac100;
  font-size: 20px;
  margin-right: 3px;
}
.foot>.all>*:nth-child(4)::before{
  color: #0b8457;
  font-size: 20px;
  margin-right: 3px;
}
</style>