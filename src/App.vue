<template>
  <div id="app">
    <van-tabbar route v-show='this.$route.path=="/detail" ? false : true'>
      <van-tabbar-item replace to="/" icon="home-o">
        精选
      </van-tabbar-item>
      <van-tabbar-item replace to="/list" icon="bar-chart-o">
        榜单
      </van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="shop-o">
        书阁
      </van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="user-o">
        我的
      </van-tabbar-item>
    </van-tabbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isShow:true
    }
  }  
} 
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-bottom: 50px;
}
.van-tabbar-item--active{
  color:green !important;
}
</style>
