<template>
  <div>
    
    <div class="user-poster">
      <div class='user'>
        <img src="../assets/timg.jpg">{{uname}}
        </div>
    </div>
    <van-cell-group>
      <van-cell icon="records" title="购买清单" is-link />
      <van-cell icon="points" title="我的积分" is-link />
      <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
      <van-cell icon="gift-o" title="我收到的书籍" is-link />
    </van-cell-group>
  </div>

</template>
<script>
  export default{
    data(){
      return{
        uname:'',
        isShow:true
      }
    },
    methods:{
      del(){
        setTimeout(()=>this.isShow=false,3000)
      }
    },
    created(){
      this.uname=sessionStorage.getItem('uname')
      this.del()
    }
  }

</script>
<style scoped>
.user{
  margin-top:40px;
  text-align: center;
  font-size: 14px;
  color:green;
  height: 100px;
  width: 100px;
  position: relative;
  top:45px;
  left:140px;
}
.user-poster{
  margin-top:40px;
  width: 100%;
  height: 53vw;
  background-image: url("../assets/bg.jpg");
  background-size:cover;
  background-position: center
}
.user>img{
  width: 100px; 
  height: 100px;
  border-radius: 50%;
}
</style>