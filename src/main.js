import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入全局样式
import   '../src/assets/css/gobalCss.css'
// import  '../src/assets/css/font.css'
// 引入ui组件库
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue'
// 引入全局组件
import '../src/globalcomponen/index'

import axios from 'axios'

var serverbaseUrl = window.global_url.Base_url;//生成一个可以修改服务器地址的配置文件
console.log(serverbaseUrl,'serverbaseUrl')
 
axios.defaults.baseURL = serverbaseUrl; //修改为配置的地址
Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(Antd)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
