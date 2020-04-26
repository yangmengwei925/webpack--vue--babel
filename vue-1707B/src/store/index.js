import Vuex,{Store} from 'vuex';

import modules from './modules'

import Vue from 'vue';
import rootModule from "@/store/rootModule";

Vue.use(Vuex);


const store = new Store({
  /*1:全局  设置getters*/
  //机制 缓存  computed 自带缓存
  ...rootModule,
  modules //模块 + namespaced  数据 a: aaa  b: aaa
});

//window大佬
window.store = store;

export default store;