import Vue from 'vue';
import Home from './index.vue';

import 'element-ui/lib/theme-chalk/index.css';

import SyElement from '../SyElement/index';
Vue.use(SyElement);

console.log(ElementUI);

console.log(SyElement);

import ElementUI from 'element-ui';
Vue.use(ElementUI);

console.log(Vue);

// 

// Vue.use(SyInfo);
// Vue.use(SyMessage);

// 创建一个 Vue 实例
new Vue({
    el: '#app',
    render: h => h(Home)
});
