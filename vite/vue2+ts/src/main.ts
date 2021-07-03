import Vue from 'vue';
import App from './app.vue';

// 创建一个 Vue 实例
// new Vue({
//     el: '#app',
//     render: h => h(App),
// });

new Vue({
    render: h => h(App),
}).$mount('#app');
