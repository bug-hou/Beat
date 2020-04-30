<!--  -->
<template>
  <div id="change">
      <topbat bColor="transparent" color="black">
          <div slot="left" style="color:#5d5d5a" @click="back">取消</div>
          <div slot="main">编辑资料</div>
          <div slot="right" style="color:red" @click="success">完成</div>
      </topbat>
      <div class="Cmain">
          <div class="image"><img src="~@/assets/images/eat.jpg" alt=""></div>
          <ul class="change">
              <li>
                  <div>名字</div>
                  <input type="text" v-model="name">
              </li>
              <li>
                  <div>性别</div>
                  <div class="sex">
                  <div class="radio"><input type="radio" name="sex" v-model="sex" value="男"><span></span>男</div>
                  <div class="radio"><input type="radio" name="sex" v-model="sex" value="女"><span></span>女</div>
                  </div>
              </li>
              <li>
                  <div>电话</div>
                    <input type="text" v-model="phone">
              </li>
              <li>
                  <div>地址</div>
                    <input type="text" v-model="address">
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import topbat from '../../components/common/topvar/topvar'
export default {
    name:"change",
  data () {
    return {
        name:"",
        sex:"男",
        phone:"",
        address:"",
        client:{}
    };
  },
  created() {
      this.client = this.$route.query.client;
      this.name = this.client.name;
      console.log(this.$route.query.client)
      this.sex = this.client.sex?this.client.sex:"男";
      this.phone = this.client.phone?this.client.phone:"";
      this.address = this.client.address?this.client.address:"";
  },
  components: {
      topbat,
  },

  computed: {},

  mounted(){},

  methods: {
      back(){
          this.$router.back();
      },
      success(){
          this.$store.state.nowClient.name = this.name;
          this.$store.state.nowClient.sex = this.sex;
          this.$store.state.nowClient.phone = this.phone;
          this.$store.state.nowClient.address = this.address;
          this.$router.push("/profile");
      }
  }
}

</script>
<style scoped>
.sex{
    width: 300px;
    height: 100%;
    margin-left: 22px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.radio{
        display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
}
.radio::before{
    content: "";
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ea7dc7;
    margin-right: 5px;
}
.radio>input:checked~span{
   content: "";
   width: 10px;
   height: 10px;
   position: absolute;
   left: 4px;
   top: 50%;
   display: block;
   transform: translateY(-50%);
   background-color: red;
   border-radius: 50%;
}
[type=radio]{
  opacity: 0;
  position: absolute;
  width: 18px;
  height: 18px;
  left: 1;
  top: 3;
}
#change{
    width: 100%;
    height: 100vh;
    background-color: #f5f5f5;
}
.Cmain{
    width: 100%;
    margin-top: 44px;
    height: 200px;
}
.image{
    width: 100%;
    height: 200px;
    text-align: center;
}
.image>img{
    width: 200px;
    height: 200px;
}
.change{
    width: 100%;
    background-color: white;
}
.change>*{
    width: 100%;
    height: 40px;
    margin-top: 10px;
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 20px;
    border-bottom: 1px dashed #575151;
    padding-left: 10px;
}
input{
    border: 0;
    outline: 0;
    padding-left: 20px;
    background: white;
}
</style>