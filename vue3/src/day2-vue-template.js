/**
 * @file 2-vue-template.js
 * @author 素燕
 * @description vue 中的 template，来自公众号素燕
 */

const option = {
    data() {
        return {
            title: 'Vue3编程思想、源码解读',
            welcomes: [
                '学习Vue3',
                '关注公众号素燕'
            ]
        }
    },
    
}
console.log('vue', window.Vue);
// Vue.createApp(option).mount('#suyan-app');

return;

let app = document.getElementById('suyan-app');

HTMLParser(app.innerHTML, {
    start: function(tag, attrs, unary) {
        console.log('start ---- ', tag, attrs, unary);
    },
    end: function(tag) {
        console.log(tag);
        console.log('end -----');
        console.log();
        console.log();
    },
    chars: function(text) {
        console.log('chars ------', text);
    },
    comment: function(text) {
        console.log('comment ------', text);
    }
});