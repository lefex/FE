import SyInfo from './SyInfo/index';
import SyMessage from './SyMessage/index';
import log from './log';

export default {
    install(Vue, options) {
        // 全局注册组件 SyInfo
        Vue.component(SyInfo.name, SyInfo);
        // 全局注册组件 SyMessage
        Vue.component(SyMessage.name, SyMessage);

        // 给 Vue 添加一个全局函数，该函数可在所有的组件中使用
        Vue.prototype.$log = log;
    }
}