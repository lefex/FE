import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 更新 Vue 中的 State，唯一的途径是显式地提交 mutation

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++;
        }
    }
})

new Vue({
    el: '#app',
    store: store
});