import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './components'
import ElementUI from "element-ui";

Vue.use(ElementUI);
console.log(123);
import store from '@/store'

import './permission';

//报错  图标 .png  .jpg . gif
// import 'element-ui/lib/theme-chalk/index.css'

let vm = new Vue({
  template: '<App/>',
  components: {App},
  router,
  store
}).$mount('#app');


window.$vm = vm;