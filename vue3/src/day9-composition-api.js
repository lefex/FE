const Root = {
    template: '<h1>{{ title }}</h1>' +
    '<div>{{ des }}</div>',
};
console.log(Vue);
const { createApp, ref, watchEffect, computed, customRef, reactive} = Vue

const app = createApp(Root);



app.mount('#suyan-app');

console.log('log');

const obj = {
    name: '<script><iframe onload=alert(5)></script>'
}

JSON.stringify(obj);