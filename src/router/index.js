import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [
   {
    path: '/',
    name: 'Login',
    component: () =>import ('../components/Login.vue')
  },
    {
    path: '/Main',
    name: 'Main',
    component: () =>import ('../views/Main.vue'),
    children:[
         {
    path: '/Home',
    name: 'Home',
    component: () =>import ('../views/Home.vue')
  },
  {
    path:'/personage',
    name: 'Personage',
    component:() => import('../views/personage.vue')
  },
    {
    path:'/jurisdiction',
    name: 'Jurisdiction',
    component:() => import('../views/Jurisdiction.vue')
  }
]
  },
 
 
]

const router = new VueRouter({
  routes
})

export default router