import Home from './index.vue';


import SyElement from '../SyElement/index';
Vue.use(SyElement);
console.log(SyElement);

// 创建一个 Vue 实例
new Vue({
    el: '#app',
    render: h => h(Home)
});
