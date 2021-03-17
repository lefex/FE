import SyMessage from './src/component.vue';

SyMessage.install = function(Vue) {
    Vue.component(SyMessage.name, SyMessage);
}

export default SyMessage;