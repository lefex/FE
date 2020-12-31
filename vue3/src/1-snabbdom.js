/**
 * @file 1-basic-useage.js
 * @author 素燕
 * @description snabbdom 的使用，侵权必究，由公众号素燕创建。
 */


import { init } from 'snabbdom/build/package/init'
import { classModule } from 'snabbdom/build/package/modules/class'
import { propsModule } from 'snabbdom/build/package/modules/props'
import { styleModule } from 'snabbdom/build/package/modules/style'
import { eventListenersModule } from 'snabbdom/build/package/modules/eventlisteners'
import { h } from 'snabbdom/build/package/h' // helper function for creating vnodes

const patch = init([
    classModule,
    propsModule,
    styleModule,
    eventListenersModule
]);

const app = document.getElementById('app');

const learnVNode = () => {
    let vdata = {
        // 定义 DOM 的属性
        // 直接给 Element 上添加属性
        props: {
            href: 'http://suyan/logo.png'
        },
        // 通过 DOM 对象 Element 来调用 setAttribute 和 removeAttribute 来操作属性
        attrs: {
            src: 20
        },
        // 是否使用某个 css 类名
        // nomal 和 selected 是提前定义好的类名
        // 通过 DOM 对象操作 Element 的 classList 属性来达到添加和删除 class
        class: {
            nomal: false,
            selected: true
        },
        // 设置样式
        // 直接修改 Element 的 style 的属性
        style: {
            fontSize: '20px',
            margin: '20px'
        },
        // 可通过 HTMLElement.dataset 来获取
        // 直接修改 HTMLElement 的 dataset 属性
        dataset: {
            name: 'suyan',
            age: 20
        },
        // 监听事件
        // 通过 addEventListener 给元素添加事件
        on: {
            click() {
                console.log('click');
            }
        },
        // 监听各个钩子
        hook: {
            pre() {
                console.log('pre');
            },
            // vnode已经被添加
            init(vnode) {
                console.log('pre');
            }
        },
        key: 'header'
    };
    let vnode = h('div.wrap', vdata, ['学习Vue3']);
    patch(app, vnode);
};

const learnHook = () => {
    // 创建一个虚拟节点
    const vnode = h('div#app2', {
        on: {
            click: function () {
                alert('Hello suyan');
            }
        },
        hook: {
            // 开始添加 vnode
            pre() {
                console.log('pre');
            },
            // vnode已经被添加
            init(vnode) {
                console.log('pre');
            },
            // 一个 DOM element 已经被创建
            create(emptyVnode, vnode) {
                console.log('create');
            },
            // DOM 元素插入到 DOM 中
            insert(vnode) {
                console.log('insert');
            },
            // 一个 DOM 元素将被添加
            prepatch(oldVnode, vnode) {
                console.log('prepatch');
            },
            // DOM 元素被更新
            update(oldVnode, vnode) {
                console.log('update');
            },
            // 一个 DOM 元素被添加
            postpatch(oldVnode, vnode) {
                console.log('postpatch');
            },
            // 一个 DOM 元素被移除
            destory(vnode) {
                console.log('destory');
            },
            remove(vnode, cb) {
                console.log('remove');
            },
            post() {
                console.log('post');
            }
        }
    }, [
        h('span.text', {
            style: {
                fontWeight: 'bold'
            }
        }, '学习前端 ')
    ]);
}


const contentVnode = h('div.content-wrap', vNodeData, [
    h('h1', {
        class: '.title'
    }),
    h('p', {
        style: {
            fontSize: '18px',
            color: '#eee'
        }
    }),
    h('img', {

    })
])


/**
 * patch 函数
 */
patch(app, vnode);

