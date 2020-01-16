<template>
  <div>
    <!-- navbar -->
    <mt-header title="作品详情">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 小说背景图片 -->
    <div class='bg' :style="{backgroundImage:`url(http://localhost:3000/${plist[0].dpic})`}"></div>
    <!-- 遮罩层 -->
    <div class='detail-mask'></div>
    <!-- VIP -->
    <div class='vip'><img src="../assets/VIP.png"><span>开通VIP,免费阅读此书</span></div>
    <!-- 评分  人气  -->
    <div class='rate'>
      <van-rate v-model="rate" allow-half void-icon="star" void-color="#eee"/>
      <span><b>1489</b> 粉丝</span>
    </div>
    <!-- 主要内容 -->
    <div class='info'>
      <!-- 小说名称 -->
      <div class='detail'>
        <p>{{plist[0].dtitle}}</p>
        <p>{{plist[0].booktype}} | {{plist[0].author}} 著</p>
      </div>
      <img :src="'http://localhost:3000/'+plist[0].dpic" class='img'>
    </div>
    <!-- 小说简介 -->
    <div class='title'>
    <!-- 推荐 -->
      <div class='push'>
        <img src="../assets/shuqian.png">
        <span>只有用心看，才能看清楚。<br/>重要的东西是眼睛看不见的。</span>
      </div>
      <p>{{plist[0].subtitle}}</p>
    </div>
    <!-- 按钮组 -->
    <div class='button'>
      <mt-button size="large" @click='add'>加入书架</mt-button>
      <mt-button size="large" type='danger'>免费试读</mt-button>
      <mt-button size="large">限时优惠</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    title:{default:""},
    cid:{default:''}
  } ,
  data(){
    return{
      plist:[{dtitle:'',subtitle:'',dpic:''}],
      rate:4.8
    }
  },
  created(){
    fetch('http://localhost:3000/detail?cid='+this.cid).then(res=>res.json()).then(data=>{
      this.plist=data
      console.log(this.plist)
    })
    fetch('http://localhost:3000/detail?title='+this.title).then(res=>res.json()).then(data=>{
      this.plist=data
      console.log(this.plist)
    })
  },
  methods:{
    add(){
      fetch('http://localhost:3000/addCart?cid='+this.cid).then(res=>res.json()).then(data=>{
         this.$toast('添加成功');
      })
    }
  },
  mounted(){
    
  }
}
</script>

<style scoped>
.push{
  border:1px solid #e8967f85;
  display: flex;
  justify-content: space-evenly;
  padding:30px;
}
.mint-header {
  background-color: transparent !important;
}
.rate{
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
.bg{
  height: 198px;
  width: 100%;
 ;
  filter:blur(5px);
  opacity: .9;
}
.detail-mask{
  position: absolute;
  width: 100%;
  height: 238px;
  background:#333;
  top: 0;
  left: 0;
  z-index: -1;
}
.info{
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-around;
  top: 60px;
  color:#fff;
  font-size: 12px;
}
.img{
  height: 150px;
  left:135px;
}
.info>h2{
  text-align: center;
}
.detail p:first-child{
  font-size: 32px;
}
.title{
  padding: 20px;
  color:#9c9292;
  font-size: 14px;
}
.button{
  display: flex;
  position: fixed;
  bottom:0;
  width: 100%;
}
.vip{
  font-size: 12px;
  color:#fff;
  background-color: #888;
  height: 30px;
  line-height: 30px;
}
.vip>img{
  margin:0 10px;
  vertical-align:sub;
}
</style>
