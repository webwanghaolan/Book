<template>
<div>
  <!-- 头部NAVBAR -->
  <mt-header fixed :title="title"></mt-header>
  <div class="login_container"  v-show='this.$store.state.login==0'>
    <mt-field label="用户名" :placeholder="unameHolder" v-model="uname" class="myinput" :state="change"></mt-field>
    <mt-field label="密码" :placeholder="upwdHolder" type="password" v-model="upwd" class="myinput" :state="change"></mt-field>
    <mt-button @click="login" class="mybutton" size="large"  type='danger'>登录</mt-button>
  </div>
  <div class='buttons' v-show='this.$store.state.login==0'>
    <mt-button><img src="../assets/qq.png" height="20" width="20" slot="icon"></mt-button>
    <mt-button><img src="../assets/tubiaozhizuo-.png" height="20" width="20" slot="icon"></mt-button>
    <mt-button><img src="../assets/weixin.png" height="20" width="20" slot="icon"></mt-button>
    <mt-button @click="reg"><img src="../assets/手机.png" height="20" width="20" slot="icon"></mt-button>
  </div>
  <init v-show='this.$store.state.login==1'></init>
</div>

</template>

<script>
import Init from './init'
export default {
  data(){
    return{
      unameHolder:"请输入用户名",
      upwdHolder:"请输入密码",
      uname:"",
      upwd:"",
      change:'',
      title:'登录'
    }
  },
  created(){
    this.uname=sessionStorage.getItem('username')
    this.upwd=sessionStorage.getItem('upwd')
  },
  methods:{
    login(){
      //完成登录
      //1.获取用户名和密码
      let uname=this.uname;
      let upwd=this.upwd
      //2创建一个正则表达式   字母数字下划线 3~12 ^\s*\w{3,12}\s*$
      //3.验证用户名 出错提示
      let reg=/^\w{3,12}$/i;
      if(!reg.test(uname)){
        this.$toast("用户名格式不正确");
        this.change="error";
        return;
      }
      //4.验证密码 出错提示
      if(!reg.test(upwd)){
        this.$toast("密码格式不正确");
        this.change="error";
        return;
      }
      //5.发送ajax请求
      fetch('http://localhost:3000/login',{
        method:'POST',
        headers:{
          'Content-Type':'application/x-www-form-urlencoded'
        },
        body:`uname=${uname}&upwd=${upwd}`
      }).then(res=>res.json()).then(result=>{
        if(result.code===200){
          this.$messagebox("提示",'登录成功')
          this.change="success"
          this.title='个人中心'
          // 放入sessionStorage
          sessionStorage.setItem('uname',result.data[0].uname)
          //将用户名放入Vuex  commit? dispatch
          this.$store.dispatch('setUser',result.data[0].uname)
          this.$store.commit('loginin')  
        }else{
          this.$messagebox("提示",'用户名或者密码错误')
        }
      })
    },
    reg(){
      this.$router.push('/reg')
    } 
  },
  components:{
    'init':Init
  }
}
</script>

<style scoped>
.mint-button--danger {
  color: #fff;
  background-color: green;
}
.login_container{
  padding:40px 20px;
}
.mint-header{
  background-color: green !important;
}
.buttons{
  display: flex;
  justify-content: space-evenly;
  margin-top:40px
}
.mybutton{
  margin-top:20px;
}
.mint-button::after {
    background-color: #0ba211;
}
</style>
