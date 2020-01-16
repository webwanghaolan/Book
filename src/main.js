import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
Vue.use(Vuex)

//1:引入min-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

//2.引入axios
import axios from 'axios'
//3:发送请求时保存session信息
axios.defaults.withCredentials=true
//4:将axios注册vue实例
Vue.prototype.axios=axios

//5.引入 vant 
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
