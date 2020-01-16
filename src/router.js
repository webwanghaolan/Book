import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:()=>import('./components/book')},
    {path: '/Book',component: ()=>import('./components/book')},
    {path:'/list', component:() => import('./components/list')},
    {path:'/cart',name:'cart',component:()=>import('./components/cart')},
    {path:'/user',component:()=>import('./components/user')},
    {path:'/reg',component:()=>import('./components/reg')},
    {path:'/detail',name:'detail',component:()=>import('./components/detail'),props:true},
    {path:'/init',component:()=>import('./components/init')},
  ]
})
