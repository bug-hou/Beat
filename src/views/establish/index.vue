<!--  -->
<template>
  <div>
      <topbat bColor="transparent" color="pink">
          <div slot="left" @click="back">取消</div>
          <div slot="main">设置</div>
      </topbat>
    <div class="head">
      <div class="image"><img src="~@/assets/images/eat.jpg" alt=""></div>
      <div class="box">
        <div class="infomation">
          <div>{{client.name}}</div>
          <div>{{client.id}}</div>
        </div>
        <div class="iconfont icon-xiangqing icon"></div>
      </div>
    </div>
      <ul>
          <li v-for="(item,index) in data" :key="index" class="item">{{item}}</li>
      </ul>
      <div class="leave" @click="leave">退出登录</div>
      <div class="hint" v-show="no">退出成功,还有{{time}}s将跳转到登录页面</div>
  </div>
</template>

<script>
import topbat from '../../components/common/topvar/topvar'
export default {
    name:"establish",
  data () {
    return {
        data:["我的收货地址","账号与安全","支付设置","问题反馈","关于BUG外卖"],
        client:{},
        time:5,
        no:false,
    };
  },

  components: {
      topbat
  },

  computed: {},

  mounted(){
      this.client = this.$route.query.client;
  },

  methods: {
      back(){
          this.$router.back()
      },
      leave(){
        this.no = true;
        this.$store.commit("leave");
        setTimeout(() => {
          this.$router.push("/dengLu")
        }, 5000);
        let count = setInterval(() => {
          if(this.time<0){
              clearInterval(count);
          }else{
            this.time--;
          }
        }, 1000)
      }
  }
}

</script>
<style scoped>
@import url(//at.alicdn.com/t/font_1779557_w2gp3q3lszg.css);
.hint{
  position: fixed;
  width: 300px;
  height: 50px;
  top: 50%;
  left:50%;
  transform: translate(-50%,-50%);
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  background: #cabbe9;
  color: #775ada;
}
.leave{
    width: 70%;
    height: 40px;
    border-radius: 5px;
    background: #fc5185;
    color:white;
    line-height: 40px;
    text-align: center;
    margin: 10px auto;
}
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
.item{
    width: 95%;
    margin: 5px auto;
    height: 40px;
    border-bottom: 1px dashed #575151;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 25px;
}
.item::after{
    content: "";
    width: 10px;
    display: block;
    height: 10px;
    border-right: 1px solid darkgrey;
    border-bottom: 1px solid darkgrey;
    transform:rotate(-45deg);
    margin-right: 10px;
}
</style>