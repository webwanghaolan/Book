import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:false,
    login:0,
    username:''
  },
  // 修改状态中的值
  mutations: {
    userStatus:(state,uname)=>{
      if(uname){
        state.username =uname
      }else if(uname==''){
        sessionStorage.setItem('uname',null)
        state.username=''
      }
    },
    loginin(state){
      state.login=1
    },
    out(state){
      state.login=0
    }
  },
  actions: {
    setUser:({commit},uname)=>{commit('userStatus',uname)}
  },
  // 读状态中的值
  getters: {

  }
})
