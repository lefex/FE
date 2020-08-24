import Vue from 'vue';
import Home from './index.vue';
import jQuery from '../common/objUtils';

// 创建一个 Vue 实例
new Vue({
    el: '#app',
    render: h => h(Home)
});
