const Root = {
    template: `<div id="suyan-root" :class="[isDark ? 'dark' : 'light']">
    <h1 class="title" :class="{'dark-text': isDark, 'light-text': !isDark}">{{title}}</h1>
    <p class="des" :class="textMode">帮助10W人入门并进阶前端</p>
    <div :class="[contentObj, {stress: isStress}]">本文来自公众号素燕</div>
    <button @click="changeMode">更换主题</button>
</div>`,
    data() {
        return {
            isDark: false,
            colorMode: {
                dark: true
            },
            textMode: {
                'dark-text': false,
                'light-text': true
            },
            title: '前端小课',
            isStress: true,
            contentObj: {
                content: true
            }
        }
    },
    methods: {
        changeMode() {
            const isDark = this.colorMode.dark;
            this.colorMode.dark = !isDark;
            this.isDark = !this.isDark;
            this.textMode['dark-text'] = isDark;
            this.textMode['light-text'] = !isDark;
        }
    }
};

const app = Vue.createApp(Root);

app.mount('#suyan-app');
