<!--  -->
<template>
  <div id="main">
       <div class="logo">
           BUG外卖
       </div>
       <div class="id" title="请输入数字" :class="{error:iderr}">
           <input type="text" placeholder="账号" v-model="iid">
       </div>
       <div class="pwd" title="请输入字母或数字" :class="{error:pwderr}">
           <input :type="type" placeholder="密码" v-model="ppwd">
           <div @click="change" class="iconfont icon-chakanmima1"></div>
       </div>
       <div class="login">
           <div @click="dian">登录</div>
       </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        iid:"",
        ppwd:"",
        client:{},
        iderr:false,
        pwderr:false,
        type:"password",
        index:0
    };
  },

  components: {},

  computed: {
      pwdS(){
          return ``
      }
  },

  mounted(){},

  methods: {
      dian(){
          const reg1 = /^\d{6,11}$/
          const reg2 = /^[A-Za-z0-9_]{5,15}$/;
          if(reg1.test(this.iid)){
              this.iderr = false;
              if(reg2.test(this.ppwd)){
                  this.$store.commit("leave")
                  this.pwderr = false
                  this.client.id = this.iid;
                  this.client.pwd = this.ppwd;
                  this.client.name = "小侯";
                  this.client.price = 0;
                  this.client.address = "";
                  this.client.goods = [];
                  this.$store.commit("add",this.client);
                  this.$router.push({
                      path:"/profile"
                  })
              }else{
                  this.pwderr = true;
                  }
          }else{
              this.iderr = true;
          }
      },
      change(){
          if(this.index++===0){
              this.type = "text"
          }else{
              this.index = 0
              this.type = "password"
          }
      }
  }
}

</script>
<style scoped>
@import url(//at.alicdn.com/t/font_1779557_fivy8vfnt6f.css);
.iconfont{
    position: absolute;
    top: 0;
    right: 10%;
    width: 15%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
}
.error::after{
    content: "输入格式错误";
    position: absolute;
    top: 80%;
    width: 80%;
    left: 50%;
    height: 20%;
    font-size: 12px;
    background: yellowgreen;
    color: white;
    transform: translateX(-50%);
}
#main{
    width: 60%;
    height: 40%;
    background: #008c8c;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: .8;
    border-radius: 10px;
}
.logo{
    width: 100%;
    height: 30%;
    font-size: 30px;
    color: aquamarine;
    display: flex;
    justify-content: center;
    align-items: center;
}
.id,.pwd{
    position: relative;
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.id>input,.pwd>input{
    position: relative;
    outline: none;
    border: none;
    width: 80%;
    height: 50%;
    border-bottom:2px solid #a78fa3 ;
    background: #008c8c;
    font-size: 15px;
    padding-left: 4px;
    color: #fdfdfd;
}
input::-webkit-input-placeholder { /* WebKit browsers 适配谷歌 */
    color: #BDCADA;
}
input:-moz-placeholder { /* Mozilla Firefox 4 to 18 适配火狐 */
    color: #BDCADA;
}
input::-moz-placeholder { /* Mozilla Firefox 19+ 适配火狐 */
    color: #BDCADA;
}
input:-ms-input-placeholder { /* Internet Explorer 10+  适配ie*/
    color: #BDCADA;
}
.login{
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login>div{
    width: 60%;
    height: 60%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #cabbe9;
    box-shadow: 0 1px 2px black,0 -1px 2px white;
}
.login>div:hover{
    box-shadow: 0 2px 2px white,0 -2px 2px black;
}
</style>