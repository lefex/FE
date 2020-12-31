
const VueBook = {
    template: '<h1>{{bookName}}</h1>',
    props: ['bookName']
}

const SuYan = {
    template: '<h3 ref="syh3">{{ des }}</h3>',
    components: {
        VueBook
    },
    data() {
        return {
            des: '和素燕一起学习 Vue'
        }
    }
}

const Root = {
    template: '<VueBook :bookName="name" ref="vuebook"></VueBook>' +
    '<SuYan ref="suyan"></SuYan>' + 
    '<input ref="syinput"/>' +
    '<div ref="sydiv">Vue的概念太多了</div>',
    components: {
        SuYan,
        VueBook
    },
    data() {
        return {
            name: '《读懂Vue3编程思想》'
        }
    },
    mounted() {
        console.log(this.$refs.suyan.$data.des);
        console.log(this.$refs.suyan.$el);
        console.log(this.$refs.suyan.$parent);
        console.log(this.$refs.suyan.$root);

        this.$refs.suyan.$refs.syh3.innerText = '关注素燕公众号，与素燕做朋友';

        console.log(this.$refs.vuebook.$props);
        this.$refs.syinput.value = "1358907"

        console.log(this.$refs.sydiv);
        this.$refs.sydiv.innerText = '但是也要系统学一遍';
        this.$refs.sydiv.style.color = 'red';
        this.$refs.sydiv.style.paddingTop = '20px';
    }
};

const app = Vue.createApp(Root);

app.mount('#suyan-app');
