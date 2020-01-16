<template>
  <div class='my-index'>
    <!-- 搜索 -->
    <van-search v-model="value" placeholder="搜索书名" show-action shape="round" >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
        <!--轮播  -->
    <van-swipe :autoplay="4000">
      <van-swipe-item v-for="(image, index) of carouse" :key="index" @click="goto(index)">
        <img :src="'http://127.0.0.1:3000/'+image.img" width="375px"/>
      </van-swipe-item>
    </van-swipe>
    <!-- 内容 -->
    <h3 class='comd'>推荐列表</h3>
    <div class='countent'>
      <div v-for="(item,i) of list" :key='i' @click='jump(i)'>
        <img :src="'http://127.0.0.1:3000/'+item.pic" class='col-img'/>
        <p class='font'>{{item.title}}</p>
      </div>
    </div>
    <van-button icon="arrow-up" type="primary" size='large' @click="gotop">回到顶部</van-button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      list:[], 
      carouse:[],
      value:'',

    }
  },
  created(){
    fetch('http://localhost:3000/index').then(res=>res.json()).then(data=>{
      this.list=data.slice(0,21);
      this.carouse=data.slice(23)
    })
  },
  methods:{
    goto(e){
      this.$router.push({name:'detail',params:{cid:e+21}})  //跳转到对应详情页
    },
    onSearch(){
      this.$router.push({name:'detail',params:{title:this.value}})
    },
    jump(e){
      // console.log(e)
      this.$router.push({name:'detail',params:{cid:e+1}}) //跳转对应详情页
    },
    gotop(){
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
  }
}
</script>

<style scoped>
.col-img{
  width: 100px;
}
.countent{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
}
.countent p{
  margin: 0;
}
.countent div{
  margin-bottom:10px;
}
.comd{
  margin: 16px 6px 8px;
}
.font{
  font-size: 14px;
}
</style>
