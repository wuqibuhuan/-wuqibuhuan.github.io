import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入全局样式
import   '../src/assets/css/gobalCss.css'
// 引入ui组件库
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue'
// 引入全局组件
import '../src/globalcomponen/index'
Vue.config.productionTip = false

Vue.use(Antd)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
