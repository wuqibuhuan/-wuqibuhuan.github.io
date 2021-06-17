import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
   {
    path: '/',
    name: 'Login',
    meta: {
        title: '登录'
    },
    component: () =>import ('../components/Login.vue')
  },
  { 
    path: '/',
    redirect: '/Main/personage'
  },
    {
    path: '/Main',
    name: 'Main',
    component: () =>import ('../views/Main.vue'),
    children:[
         {
    path: '/Home',
    name: 'Home',
    meta: {
        moudle: '首页',
         title: '首页'
    },
    component: () =>import ('../views/Home.vue')
  },
  {
    path:'/personage',
    name: 'Personage',
      meta: {
        moudle: '个人中心',
         title: '个人中心'
    },
    component:() => import('../views/personage.vue')
  },
    {
    path:'/jurisdiction',
    name: 'Jurisdiction',
      meta: {
        moudle: '权限管理',
        title: '后台管理'
    },
    component:() => import('../views/Jurisdiction.vue')
  },

]
  },
 
 
]



const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  document.title="Cicci - " + to.meta.title;
  next()
  
})


export default router
