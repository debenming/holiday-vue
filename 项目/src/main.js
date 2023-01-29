import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router';
import axios from 'axios';
import request from './network/request/request';

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import moment from 'moment'
Vue.filter('dateFormat',(value,pattern = 'YYYY-MM-DD HH:mm:ss') => {  //需要什么格式，自行修改
  return moment(value).format(pattern)
})
