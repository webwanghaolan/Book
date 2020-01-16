<template>
  <div>
    <!-- 头部NAVBAR -->
    <mt-header fixed title="书阁"></mt-header>
    <!-- 内容区域 -->
    <div class='countent'>
      <div v-for="(item,i) of clist" :key='i' @click='jump(item.bid)'  @touchstart='touch(item.bid)'  @touchend="touchend">
        <img :src="'http://127.0.0.1:3000/'+item.pic" class='col-img'/>
        <p class='font'>{{item.title}}</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      clist:[],
      time:0
    }
  },
  created(){
    fetch('http://localhost:3000/cart').then(res=>res.json()).then(result=>{
      this.clist=result
      console.log(result)
    })
  },
  methods:{
    jump(e){
      this.$router.push({name:'detail',params:{cid:e}}) //跳转对应详情页
    },
    touch(x){
     this.time = setTimeout(()=>{
      this.$messagebox.confirm("是否删除").then(action=>{
        fetch('http://localhost:3000/delete?bid='+x).then(res=>res.json).then(result=>{
          this.$toast("删除成功");
          this.load()
        })
      }).catch(err=>{console.log(err)})
      },1000)
    },
    touchend(){
     clearTimeout(this.time)
    },
    load(){
      fetch('http://localhost:3000/cart').then(res=>res.json()).then(result=>{
        this.clist=result
    })
    }
  }
}
</script>

<style scoped>
.mint-header{
  background-color: green !important;
}
.col-img{
  width: 100px;
}
.countent{
  margin-top:45px;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
  text-align: center;
  padding:10px;
}
.font{
  font-size: 14px;
  margin-top:5px;
}
</style>
