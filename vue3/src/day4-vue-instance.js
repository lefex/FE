/**
 * @file day4-vue-instance.js
 * @author 素燕
 * @description vue 创建app，来自公众号素燕
 */

window.SuYanVue = (function(exports) {
    exports.createApp = function() {
        console.log('create a suyan app');
    }
    return exports;
}({}));

const homeTemplate = `
    <h1>{{ title }}</h1>
    <span>{{ welcomeText }}</span>
    <p>{{ ageShow }} </p>
    <SuYan></SuYan>
    <suyan-card></suyan-card>`;

// 这个组件就是这么简单
const SuYan = {
    template: '<div>我是素燕</div>'
};

const HomeCard = Vue.defineComponent({
    name: 'home-card',
    /**
     * 组件对应的 HTML 模板，可以使一个静态字符串
     */
    template: homeTemplate,
    /**
     * 使用渲染函数，不使用模板，可通过 JS 来动态创建页面
    */
    render() {
        const h = Vue.h;
        return h('div', [
            h('h1', this.author.from),
            h('h3', this.name),
            h('span', this.welcomeText),
            h('p', this.ageShow),
            // 直接渲染一个自定义组件
            h(SuYan)
        ]);
    },
    /**
     * 自定义组件需要声明
    */
    components: {
        SuYan
    },
    /**
     * data 为数据源，用来定义与模板绑定的属性
    */
    data() {
        return {
            des: '帮助 10W 人入门并进阶前端',
            name: '素燕',
            address: {
                city: 'BeiJing',
                des: '昌平区'
            }
        }
    },
    /**
     * 定义属性，父组件传递过来的
    */
    props: {
        title: String,
        blog: String,
        age: {
            // 定义类型
            type: Number,
            // 默认值
            default: 0,
            // 是否必须
            required: true,
            // 校验数据是否合法
            validator: value => {
                return value > 0;
            }
        }
    },
    /**
     * { [key: string]: Function | { get: Function, set: Function } }
     * 计算属性，可使用 data 和 props 定义的属性，会缓存，避免使用箭头函数
    */
    computed: {
        welcomeText() {
            return `关注公众号${this.name}, ${this.des}`;
        },
        ageShow() {
            return `他今年 ${this.age} 岁`;
        }
    },
    /**
     * { [key: string]: string | Function | Object | Array }
     * 监听某个属性的变
     */
    watch: {
        age(val, oldVal) {

        },
        // 可以直接写一个方法名
        // age: 'ageChange',
        address(val, oldVal) {

        }
    },
    /**
     * { [key: string]: Function }
     * 定义方法，这些方法会被绑定到组件实例中，避免使用箭头函数
     */
    methods: {
        gotoHisSite() {
            location.href = this.blog;
        },
        ageChange() {

        }
    },
    /**
     * 它的作用是啥？出现的目的是啥？
     */
    emits: {

    },
    directives: {

    },
    /**
     * lifecycle 组件的生命周期
     */
    beforeCreate() {
        // 实例被创建时，这时数据响应还没有准备好
        console.log('beforeCreate');
    },
    crated() {
        // 实例被创建，数据响应建立、计算属性、方法、监听都已准备好，但是没有绑定到 DOM 上
        console.log('created');
    },
    beforeMount() {
        // mount 开始时，也就是即将添加到 DOM 上
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
        this.$nextTick(function () {
            // 能够保证所有的子组件已经 mounted
            setTimeout(() => {
                this.name = '公众号：素燕，前端小课作者'
            }, 1000);
        })
    },
    beforeUpdate() {
        console.log('beforeUpdate');
        // 数据更新时，此时新的 DOM 变化还没更新
    },
    updated() {
        console.log('updated');
        // 数据更新后，DOM 进行了重新渲染和 patched
        this.$nextTick(function () {
            // 能够保证所有的子组件已经 updated
        });
    },
    activated() {
        console.log('activated');
        // keep-live 组件处于激活状态
    },
    deactivated() {
        console.log('deactivated');
         // keep-live 组件处于非激活状态
    },
    beforeUnmount() {
        console.log('beforeUnmount');
        // 组件 unmount 之前
    },
    unmounted() {
        console.log('unmounted');
        // 组件 unmounted
    }
});

const app = Vue.createApp(HomeCard, {
    title: '和素燕一起学习 Vue',
    age: 1
});

app.component('suyan-card', {
    template: '<h1>{{ title }}</h1>',
    data() {
        return {
            title: '《前端小课》作者：素燕'
        };
    }
});

app.config.errorHandle = (err, vm, info) => {
    // 可以在这里监控 app 发生的异常
    // 常用来添加监控，错误上报
}

// author 在所有的组件中可以当自己的属性使用
app.config.globalProperties.author = {
    name: '素燕',
    from: '《读懂Vue3编程思想》'
}

// 开启性能监测
app.config.performance = true;

app.provide('bookName', '《读懂Vue3编程思想》');

// 所有的组件将会添加 created 生命周期函数
app.mixin({
    created() {
        console.log('log in app mixin');
    }
});

// 添加插件
// app.use(VueRouter);

const proxy = app.mount('#suyan-app');

console.log(app);

console.log(proxy);