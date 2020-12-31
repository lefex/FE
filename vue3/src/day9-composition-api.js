const Root = {
    template: '<h1>{{ title }}</h1>' +
    '<div>{{ des }}</div>',
};

const app = Vue.createApp(Root);

app.mount('#suyan-app');
