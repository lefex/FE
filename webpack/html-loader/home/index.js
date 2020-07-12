import Vue from 'vue';
import Home from './index.vue';
import Html from './index.html';

// 创建一个 Vue 实例
new Vue({
    el: '#app',
    render: h => h(Home)
});
