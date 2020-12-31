
const lefexTpl = `
    <h1>{{ title }}</h1>
    <p>{{ ageShow.value }}</p>`;

const Lefex = {
    template: lefexTpl,
    inject: ['title', 'ageShow']
}

const SuYan = {
    template: '<Lefex></Lefex>',
    components: {
        Lefex
    }
}

const Root = {
    template: '<SuYan></SuYan>',
    components: {
        SuYan
    },
    data() {
        return {
            age: 20
        }
    },
    provide() {
        return {
            title: '和素燕一起学习 Vue 的编程思想',
            // 可支持响应式
            ageShow: Vue.computed(() => `他今年${this.age}岁了！`)
        }
    },
    mounted() {
        setTimeout(() => {
            this.age = 26;
        }, 1000);
    }
};

const app = Vue.createApp(Root);

app.mount('#suyan-app');
