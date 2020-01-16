<template>
  <div>
     <!-- navbar -->
    <mt-header title="注册">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 注册 -->
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username" :state="change"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" v-model="password" :state="change" type="password"></mt-field>
    <mt-button @click="regin" class="mybutton" size="large" type='danger'>注册</mt-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
     username:'',
     password:'',
     change:''
    }
  },
  methods:{
    regin(){
      let uname=this.username;
      let upwd=this.password
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
      // ajax
      fetch('http://localhost:3000/reg',{
        method:'POST',
        headers:{
          'Content-Type':'application/x-www-form-urlencoded'
        },
        body:`uname=${uname}&upwd=${upwd}`
      }).then(res=>res.json()).then(result=>{
        if(result.code==200){
          this.$messagebox("提示",'注册成功')
           this.change="success"
           sessionStorage.setItem('username',uname)
           sessionStorage.setItem('upwd',upwd)
          this.$router.push('/user') 
        }else{
          this.$messagebox("提示",'用户名已存在')
        }
      })
    }
  }

} 
</script>

<style scoped>
.mint-button--danger {
  color: #fff;
  background-color: green;
}
.mint-header{
  background-color: green !important;
}
</style>
