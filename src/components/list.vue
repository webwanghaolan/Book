<template>
  <div>
    <van-tabs v-model="active" title-active-color='green' color='green'>
      <van-tab title="周榜">
        <div class='count' v-for="(e,i) of list" :key='i' @click="detail(i)">
          <div><img :src="'http://127.0.0.1:3000/'+e.dpic"/></div>
          <div>
            <h3>{{e.dtitle}}</h3>
            <span>{{e.author}} 著| {{e.author}}</span>
            <p>{{e.subtitle.slice(0,27)}}...</p>
          </div>
        </div>
      </van-tab>
      <van-tab title="月榜">
        <div class='count' v-for="(e,i) of list1" :key='i' @click="detail(i+5)">
          <div><img :src="'http://127.0.0.1:3000/'+e.dpic"/></div>
          <div>
            <h3>{{e.dtitle}}</h3>
            <span>{{e.author}} 著| {{e.author}}</span>
            <p>{{e.subtitle.slice(0,27)}}...</p>
          </div>
        </div>
      </van-tab>
      <van-tab title="总榜">
        <div class='count' v-for="(e,i) of list2" :key='i' @click="detail(i+10)">
          <div><img :src="'http://127.0.0.1:3000/'+e.dpic"/></div>
          <div>
            <h3>{{e.dtitle}}</h3>
            <span>{{e.author}} 著| {{e.author}}</span>
            <p>{{e.subtitle.slice(0,27)}}...</p>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data(){
    return{
      list1:[],
      list2:[],
      list:[],
      active:0
    }
  },
  created(){
    fetch('http://localhost:3000/list').then(res=>res.json()).then(result=>{
      this.list=result.slice(0,21) //周榜
      this.list1= result.slice(5,10) //月榜
      this.list2= result.slice(10,21) //总榜 
      })
  },
  methods:{
    detail(e){
       this.$router.push({name:'detail',params:{cid:e+1}}) //跳转对应详情页
    }
  }
}
</script>

<style scoped>
  .count{
   display: flex;
   padding: 10px;
   height: 150px;
   font-size: 14px;
  }
  .count div:last-child{
    margin-left:15px;
    overflow: hidden;
    line-clamp: 2;
    text-overflow: ellipsis;
  }
  .count img{
    width: 110px;
  }
</style>
