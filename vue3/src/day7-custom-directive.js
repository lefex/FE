const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
    const lines = source.split(/\r?\n/);
    let count = 0;
    const res = [];
    for (let i = 0; i < lines.length; i++) {
        count += lines[i].length + 1;
        if (count >= start) {
            for (let j = i - range; j <= i + range || end > count; j++) {
                if (j < 0 || j >= lines.length)
                    continue;
                const line = j + 1;
                res.push(`${line}${' '.repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
                const lineLength = lines[j].length;
                if (j === i) {
                    // push underline
                    const pad = start - (count - lineLength) + 1;
                    const length = Math.max(1, end > count ? lineLength - pad : end - start);
                    res.push(`   |  ` + ' '.repeat(pad) + '^'.repeat(length));
                }
                else if (j > i) {
                    if (end > count) {
                        const length = Math.max(Math.min(end - count, lineLength), 1);
                        res.push(`   |  ` + '^'.repeat(length));
                    }
                    count += lineLength + 1;
                }
            }
            break;
        }
    }
    return res.join('\n');
}

const Root = {
    template: '<h1>{{ name }}</h1>' +
    '<input ref="syinput" v-syfocus />' +
    '<p ref="pinp" v-pin:[direction]="pinValue">和素燕一起学习 Vue</p>',
    data() {
        return {
            name: '《读懂Vue3编程思想》',
            age: 20,
            direction: 'top',
            pinValue: 200
        }
    },
    mounted() {
        setTimeout(() => {
            this.pinValue = 120;

            console.log(generateCodeFrame('<input ref="syinput" v-syfocus />'));
        }, 1000);
    },
    directives: {
        syfocus2: {
            mounted(el) {
                console.log('Root mounted: ', el);
                el.focus();
            }
        }
    }
};

const app = Vue.createApp(Root);

app.directive('syfocus', {
    mounted(el) {
        console.log('mounted: ', el);
        el.focus();
    },
    bind(el, binding, vnode) {
        console.log('bind', binding);
    }
});

app.directive('pin', {
    // 只会调用一次，指令首次被绑定到元素上
    beforeMount(el, binding, vnode, prevVnode) {
        console.log('beforeMount: ', el, binding, vnode, prevVnode);
    },
    // 元素的父元素被挂载到 DOM 时
    mounted(el, binding, vnode, prevVnode) {
        console.log('mounted: ', el, binding, vnode, prevVnode);
        el.style.position = 'fixed'
        // binding.value is the value we pass to directive - in this case, it's 200
        const s = binding.arg || 'top'
        el.style[s] = binding.value + 'px'
    },
    beforeUpdate(el, binding, vnode, prevVnode) {
        console.log('beforeUpdate: ', el, binding, vnode, prevVnode);
    },
    updated(el, binding, vnode, prevVnode) {
        console.log('updated: ', el, binding, vnode, prevVnode);
        const s = binding.arg || 'top'
        el.style[s] = binding.value + 'px'
    },
    beforeUnmount(el, binding, vnode, prevVnode) {
        console.log('beforeUnmount: ', el, binding, vnode, prevVnode);
    },
    unmounted(el, binding, vnode, prevVnode) {
        console.log('unmounted: ', el, binding, vnode, prevVnode);
    }
});


app.mount('#suyan-app');
